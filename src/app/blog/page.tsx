import { getAllPosts, formatDate, TEMATA } from "@/lib/blog";
import BlogHledani from "@/components/BlogHledani";
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

          {/* Hledání + témata + výpis. Klientská část — do 3. 9. 2026 se tu
              sypalo všech 102 článků do jednoho seznamu bez možnosti hledat. */}
          <BlogHledani
            clanky={posts.map((p) => ({
              slug: p.slug,
              title: p.title,
              date: p.date,
              datum: formatDate(p.date),
              excerpt: p.excerpt,
              tema: p.tema,
            }))}
            temata={TEMATA.map((t) => ({ slug: t.slug, nazev: t.nazev }))}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
