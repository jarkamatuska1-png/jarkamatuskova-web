"use client";

const BASE_URL = "https://www.jarkamatuskova.cz";

export default function ShareButtons({ slug, title }: { slug: string; title: string }) {
  const url = `${BASE_URL}/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-6">
      <span className="text-xs tracking-[0.2em] uppercase text-[var(--muted)]">Sdílet</span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
      >
        Facebook
      </a>
      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
      >
        WhatsApp
      </a>
    </div>
  );
}
