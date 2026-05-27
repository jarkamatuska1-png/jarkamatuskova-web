import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShareButtons from "@/components/ShareButtons";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Jarka Matušková`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const paragraphs = post.content
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
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
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight mb-10">
            {post.title}
          </h1>

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
                    {para.replace("## ", "")}
                  </h2>
                );
              }
              if (para.startsWith("# ")) {
                return (
                  <h2 key={i} className="font-heading text-3xl font-semibold text-[var(--foreground)] pt-4">
                    {para.replace("# ", "")}
                  </h2>
                );
              }
              return <p key={i}>{para}</p>;
            })}
          </article>

          {/* Share */}
          <div className="mt-16 pt-10 border-t border-[var(--cream-dark)]">
            <ShareButtons slug={slug} title={post.title} />
          </div>

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
