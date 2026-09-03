import { TEMATA, temaPodleSlugu, clankyTematu, formatDate } from "@/lib/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const ZAKLAD = "https://www.jarkamatuskova.cz";

export async function generateStaticParams() {
  return TEMATA.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tema = temaPodleSlugu(slug);
  if (!tema) return {};
  const url = `${ZAKLAD}/blog/tema/${slug}`;
  const titulek = `${tema.nazev} | Jarka Matušková`;
  return {
    title: titulek,
    description: tema.popis,
    alternates: { canonical: url },
    openGraph: {
      title: titulek,
      description: tema.popis,
      url,
      siteName: "Jarka Matušková",
      locale: "cs_CZ",
      type: "website",
      images: [
        {
          url: tema.ogImage ?? "/opengraph-image",
          width: 1200,
          height: tema.ogImage ? 628 : 630,
          alt: titulek,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titulek,
      description: tema.popis,
      images: [tema.ogImage ?? "/opengraph-image"],
    },
  };
}

export default async function StrankaTematu({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tema = temaPodleSlugu(slug);
  if (!tema) notFound();

  const clanky = clankyTematu(slug);

  // Drobečková navigace pro Google — ať je vidět, že téma patří pod blog.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: tema.nazev,
    description: tema.popis,
    url: `${ZAKLAD}/blog/tema/${slug}`,
    inLanguage: "cs",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Domů", item: ZAKLAD },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${ZAKLAD}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: tema.nazev,
          item: `${ZAKLAD}/blog/tema/${slug}`,
        },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: clanky.length,
      itemListElement: clanky.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${ZAKLAD}/blog/${p.slug}`,
        name: p.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main className="pt-32 pb-28 min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-block text-xs tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors mb-12"
          >
            ← Zpět na blog
          </Link>

          <div className="mb-16 max-w-2xl">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">Téma</p>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--foreground)] mb-6 leading-tight">
              {tema.nazev}
            </h1>
            <p className="text-[var(--muted)] font-light leading-relaxed text-[17px]">
              {tema.popis}
            </p>
            <p className="text-[var(--muted)] text-sm font-light mt-6">
              {clanky.length === 1 ? "1 článek" : clanky.length < 5 ? `${clanky.length} články` : `${clanky.length} článků`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {clanky.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <p className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] mb-3">
                  {formatDate(post.date)}
                </p>
                <h2 className="font-heading text-xl font-semibold text-[var(--foreground)] mb-3 group-hover:text-[var(--gold)] transition-colors duration-200 leading-snug">
                  {post.title}
                </h2>
                <p className="text-[var(--muted)] text-sm leading-relaxed font-light line-clamp-3">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>

          {/* Ostatní témata — ať se dá přejít dál, ne jen zpátky */}
          <div className="mt-24 pt-12 border-t border-[var(--cream-dark)]">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-8">Další témata</p>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {TEMATA.filter((t) => t.slug !== slug).map((t) => (
                <Link
                  key={t.slug}
                  href={`/blog/tema/${t.slug}`}
                  className="text-[var(--foreground)] font-light hover:text-[var(--gold)] transition-colors border-b border-[var(--cream-dark)] hover:border-[var(--gold)] pb-0.5"
                >
                  {t.nazev}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
