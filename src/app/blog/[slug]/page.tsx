import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ShareButtons from "@/components/ShareButtons";
import ClanekOdber from "@/components/ClanekOdber";
import type { ReactNode } from "react";

function renderInlineMarkdown(text: string): ReactNode[] {
  const tokenPattern = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\((?:https?:\/\/|\/)[^)]+\))/g;

  return text.split(tokenPattern).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    const internalMatch = part.match(/^\[([^\]]+)\]\((\/[^)]+)\)$/);
    if (internalMatch) {
      // Odkaz uvnitř webu — stejné okno, ať čtenářku nevyhodí z rozečteného článku.
      return (
        <Link
          key={index}
          href={internalMatch[2]}
          className="text-[var(--gold)] underline underline-offset-4 hover:text-[var(--gold-dark)]"
        >
          {internalMatch[1]}
        </Link>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--gold)] underline underline-offset-4 hover:text-[var(--gold-dark)]"
        >
          {linkMatch[1]}
        </a>
      );
    }

    return part;
  });
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `https://www.jarkamatuskova.cz/blog/${slug}`;
  const metadataTitle = post.seoTitle ?? post.title;
  const metadataDescription = post.metaDescription ?? post.excerpt;
  const metadataImage = post.ogImage ?? "/opengraph-image";
  return {
    title: `${metadataTitle} | Jarka Matušková`,
    description: metadataDescription,
    keywords: ["vědomý život", "metoda JIH", "osobní rozvoj", "Jarka Matušková", post.title],
    alternates: { canonical: url },
    openGraph: {
      title: `${metadataTitle} | Jarka Matušková`,
      description: metadataDescription,
      url,
      siteName: "Jarka Matušková",
      locale: "cs_CZ",
      type: "article",
      publishedTime: post.date,
      authors: ["Jarka Matušková"],
      images: [{
        url: metadataImage,
        width: 1200,
        height: post.ogImage ? 628 : 630,
        alt: post.imageAlt ?? post.title,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${metadataTitle} | Jarka Matušková`,
      description: metadataDescription,
      images: [metadataImage],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const postUrl = `https://www.jarkamatuskova.cz/blog/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription ?? post.excerpt,
    url: postUrl,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: "cs",
    ...(post.image ? { image: `https://www.jarkamatuskova.cz${post.image}` } : {}),
    author: {
      "@type": "Person",
      name: "Jarka Matušková",
      url: "https://www.jarkamatuskova.cz",
    },
    publisher: {
      "@type": "Person",
      name: "Jarka Matušková",
      url: "https://www.jarkamatuskova.cz",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Domů", item: "https://www.jarkamatuskova.cz" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.jarkamatuskova.cz/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
      ],
    },
  };

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const paragraphs = post.content
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main className="pt-32 pb-28 min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-block text-xs tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors mb-12"
          >
            ← Zpět na blog
          </Link>

          {/* Header */}
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-5">
            {formatDate(post.date)}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--foreground)] leading-tight mb-10">
            {post.title}
          </h1>

          {post.lead && (
            <p className="font-heading text-xl md:text-2xl italic text-[var(--muted)] leading-relaxed mb-10">
              {post.lead}
            </p>
          )}

          {post.image && (
            <Image
              src={post.image}
              alt={post.imageAlt ?? post.title}
              width={post.imageWidth ?? 1536}
              height={post.imageHeight ?? 1024}
              priority
              className="w-full h-auto mb-12"
            />
          )}

          {/* Gold divider */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-[var(--gold-light)]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[var(--gold)]" />
            <div className="flex-1 h-px bg-[var(--gold-light)]" />
          </div>

          {/* Content */}
          <article className="space-y-5 text-[var(--muted)] leading-relaxed font-light text-[1.05rem]">
            {paragraphs.map((para, i) => {
              if (para.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-heading text-2xl font-semibold text-[var(--foreground)] pt-4">
                    {renderInlineMarkdown(para.replace("## ", ""))}
                  </h2>
                );
              }
              if (para.startsWith("# ")) {
                return (
                  <h2 key={i} className="font-heading text-3xl font-semibold text-[var(--foreground)] pt-4">
                    {renderInlineMarkdown(para.replace("# ", ""))}
                  </h2>
                );
              }
              const youtubeMatch = para.match(/^\[youtube:([a-zA-Z0-9_-]+)\]$/);
              if (youtubeMatch) {
                const videoId = youtubeMatch[1];
                return (
                  <div key={i} className="relative w-full my-8" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-sm"
                    />
                  </div>
                );
              }
              return <p key={i}>{renderInlineMarkdown(para)}</p>;
            })}
          </article>

          {/* Share */}
          <div className="mt-16 pt-10 border-t border-[var(--cream-dark)]">
            <ShareButtons slug={slug} title={post.title} />
          </div>

          {/* Sběr e-mailu — do 3. 9. 2026 tu nebyl. Článek končil podpisem
              a žena, kterou text zasáhl, neměla kde nechat adresu. */}
          <ClanekOdber slug={slug} />

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-8">Další články</p>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block border border-[var(--cream-dark)] p-5 hover:border-[var(--gold)] transition-colors duration-300"
                  >
                    <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-3">
                      {formatDate(related.date)}
                    </p>
                    <h3 className="font-heading text-base font-semibold text-[var(--foreground)] leading-snug group-hover:text-[var(--gold)] transition-colors line-clamp-3">
                      {related.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-[var(--cream-dark)]">
            <Link
              href="/blog"
              className="inline-block text-xs tracking-[0.2em] uppercase text-[var(--gold)] border-b border-[var(--gold)] pb-0.5 hover:text-[var(--gold-dark)] hover:border-[var(--gold-dark)] transition-colors"
            >
              ← Zpět na všechny články
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
