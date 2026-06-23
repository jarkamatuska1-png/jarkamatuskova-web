import Link from "next/link";

const products = [
  {
    time: "Ráno",
    name: "Ranní vitamínový drink",
    tagline: "Nastartuj svůj den",
    description:
      "Ranní rituál pro energii, vitalitu a jasnou mysl. Dá ti vše, co tvé tělo potřebuje pro skvělý start dne.",
  },
  {
    time: "Večer",
    name: "Večerní drink plný minerálů",
    tagline: "Regeneruj přes noc",
    description:
      "Večerní podpora pro hluboký spánek a regeneraci. Pomáhá tělu zotavit se a připravit na nový den.",
  },
];

export default function Products() {
  return (
    <section id="palna-sily" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-20">
          <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-5">
            Produkty
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-semibold text-[var(--foreground)]">
            Plná <span className="italic text-[var(--gold)]">síly</span>
          </h2>
          <p className="text-[var(--muted)] max-w-md mt-6 leading-relaxed font-light text-[15px]">
            Fyzická podpora pro každý den. Ráno nastartuj, večer regeneruj.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[var(--cream-dark)]">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white p-12 group"
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
                {product.time}
              </p>
              <h3 className="font-heading text-3xl font-semibold text-[var(--foreground)] mb-1 leading-tight">
                {product.name}
              </h3>
              <p className="font-heading text-base italic text-[var(--gold)] mb-6">
                {product.tagline}
              </p>
              <p className="text-[var(--muted)] leading-relaxed font-light text-[15px] mb-8">
                {product.description}
              </p>
              <Link
                href="/sluzby/plna-sily"
                className="inline-block text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] border-b border-[var(--gold)] pb-0.5 hover:text-[var(--gold-dark)] hover:border-[var(--gold-dark)] transition-colors duration-200"
              >
                Mám zájem →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
