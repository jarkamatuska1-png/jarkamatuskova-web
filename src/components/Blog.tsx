import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export default function Blog() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-20">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">Blog</p>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-[var(--foreground)]">
              Inspirace a <span className="text-[var(--gold)] italic">články</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-block text-xs tracking-[0.2em] uppercase text-[var(--gold)] border-b border-[var(--gold)] pb-0.5 hover:text-[var(--gold-dark)] hover:border-[var(--gold-dark)] transition-colors"
          >
            Všechny články →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <p className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] mb-2">
                {formatDate(post.date)}
              </p>
              <h3 className="font-heading text-xl font-semibold text-[var(--foreground)] mb-3 group-hover:text-[var(--gold)] transition-colors duration-200 leading-snug">
                {post.title}
              </h3>
              <p className="text-[var(--muted)] leading-relaxed text-sm font-light line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
