import { getAllPosts, formatDate } from "@/lib/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Blog | Jarka Matušková",
  description: "Inspirace, články a myšlenky o vědomém životě, metodě JIH® a osobním rozvoji.",
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
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--foreground)]">
              Inspirace & <span className="text-[var(--gold)]">články</span>
            </h1>
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
