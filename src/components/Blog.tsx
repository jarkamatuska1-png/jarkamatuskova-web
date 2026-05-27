import Image from "next/image";

const posts = [
  {
    date: "15. 5. 2025",
    category: "Osobní rozvoj",
    title: "Proč vědomost nestačí — a co s tím dělat",
    excerpt:
      "Mnoho lidí ví, co by měli dělat. Přesto to nedělají. Kde je problém? A jak ho překonat metodou JIH®.",
    image: "/images/foto-1.png",
    href: "#",
  },
  {
    date: "2. 4. 2025",
    category: "Zdraví",
    title: "Energie ráno: 5 návyků, které změní váš den",
    excerpt:
      "Jak začít den tak, aby vám vydržela energie až do večera — bez kávy a bez vůle silou.",
    image: "/images/foto-2.png",
    href: "#",
  },
  {
    date: "18. 3. 2025",
    category: "Metoda JIH®",
    title: "Co je to vědomé tvoření reality?",
    excerpt:
      "Není to magie. Je to práce s vlastní energií, přesvědčeními a postoji. Zjistěte, jak to funguje.",
    image: "/images/jarka-foto.png",
    href: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-28 bg-[var(--cream)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-20">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">
              Blog
            </p>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-[var(--foreground)]">
              Inspirace &{" "}
              <span className="text-[var(--gold)]">články</span>
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-block text-xs tracking-[0.2em] uppercase text-[var(--gold)] border-b border-[var(--gold)] pb-0.5 hover:text-[var(--gold-dark)] hover:border-[var(--gold-dark)] transition-colors"
          >
            Všechny články →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <a key={i} href={post.href} className="group block">
              <div className="aspect-[3/2] overflow-hidden mb-6 relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] mb-2">
                {post.category} · {post.date}
              </p>
              <h3 className="font-heading text-xl font-semibold text-[var(--foreground)] mb-3 group-hover:text-[var(--gold)] transition-colors duration-200">
                {post.title}
              </h3>
              <p className="text-[var(--muted)] leading-relaxed text-sm font-light">
                {post.excerpt}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
