import { getAllPosts, formatDate, TEMATA } from "@/lib/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Jarka Matušková",
  description: "Inspirace, články a myšlenky o vědomém životě, metodě JIH® a osobním rozvoji. Čti pravidelně — pro energii, klid a návrat k sobě.",
  keywords: ["blog", "vědomý život", "metoda JIH", "osobní rozvoj", "Jarka Matušková", "inspirace", "emoce", "energie"],
  alternates: { canonical: "https://www.jarkamatuskova.cz/blog" },
  openGraph: {
    title: "Blog | Jarka Matušková",
    description: "Inspirace, články a myšlenky o vědomém životě, metodě JIH® a osobním rozvoji.",
    url: "https://www.jarkamatuskova.cz/blog",
    siteName: "Jarka Matušková",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Blog | Jarka Matušková" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Jarka Matušková",
    description: "Inspirace, články a myšlenky o vědomém životě a metodě JIH®.",
    images: ["/opengraph-image"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="pt-32 pb-28 min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">Blog</p>
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-[var(--foreground)]">
              Inspirace a <span className="text-[var(--gold)] italic">články</span>
            </h1>
          </div>

          {/* Témata — do 3. 9. 2026 se tu sypalo všech 102 článků do jednoho
              seznamu bez rozdělení. Pro čtenářku hromada, pro Google taky. */}
          <div className="mb-20 pb-14 border-b border-[var(--cream-dark)]">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-8">
              Podle tématu
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {TEMATA.map((t) => (
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {posts.map((post) => (
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
                <span className="inline-block mt-4 text-xs tracking-[0.2em] uppercase text-[var(--gold)] border-b border-[var(--gold)] pb-0.5 group-hover:text-[var(--gold-dark)] group-hover:border-[var(--gold-dark)] transition-colors">
                  Číst dál →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
