const products = [
  {
    time: "Ráno",
    name: "Ranní vitamínový drink",
    tagline: "Nastartuj svůj den",
    description:
      "Ranní rituál pro energii, vitalitu a jasnou mysl. Dá ti vše, co tvé tělo potřebuje pro skvělý start dne.",
    dark: false,
  },
  {
    time: "Večer",
    name: "Večerní drink plný minerálů",
    tagline: "Regeneruj přes noc",
    description:
      "Večerní podpora pro hluboký spánek a regeneraci. Pomáhá tělu zotavit se a připravit na nový den.",
    dark: true,
  },
];

export default function Products() {
  return (
    <section id="palna-sily" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-5">
            Produkty
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-[var(--foreground)]">
            Plná <span className="text-[var(--gold)]">síly</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-xl mx-auto mt-6 leading-relaxed font-light">
            Fyzická podpora pro každý den. Ráno nastartuj, večer regeneruj.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className={`p-12 relative overflow-hidden group ${
                product.dark ? "bg-[var(--foreground)]" : "bg-[var(--cream)]"
              }`}
            >
              <div
                className={`absolute -right-12 -bottom-12 w-48 h-48 rounded-full border ${
                  product.dark ? "border-white/10" : "border-[var(--gold-light)]"
                } opacity-50 pointer-events-none`}
              />

              <p className={`text-xs tracking-[0.3em] uppercase mb-2 ${
                product.dark ? "text-[var(--gold-light)]" : "text-[var(--gold)]"
              }`}>
                {product.time}
              </p>
              <h3 className={`font-heading text-4xl font-bold mb-1 ${
                product.dark ? "text-white" : "text-[var(--foreground)]"
              }`}>
                {product.name}
              </h3>
              <p className={`font-heading text-lg font-medium mb-6 tracking-wide ${
                product.dark ? "text-[var(--gold-light)]" : "text-[var(--gold)]"
              }`}>
                {product.tagline}
              </p>
              <p className={`leading-relaxed mb-8 font-light ${
                product.dark ? "text-white/60" : "text-[var(--muted)]"
              }`}>
                {product.description}
              </p>
              <a
                href="#kontakt"
                className={`inline-block text-xs tracking-[0.2em] uppercase border-b pb-0.5 transition-colors duration-200 ${
                  product.dark
                    ? "text-[var(--gold-light)] border-[var(--gold-light)] hover:text-white hover:border-white"
                    : "text-[var(--gold)] border-[var(--gold)] hover:text-[var(--gold-dark)] hover:border-[var(--gold-dark)]"
                }`}
              >
                Mám zájem →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
