import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface Post {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  tema?: string;
  excerpt: string;
  lead?: string;
  seoTitle?: string;
  metaDescription?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  ogImage?: string;
  content: string;
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        updated: data.updated,
        tema: data.tema,
        excerpt: data.excerpt ?? "",
        lead: data.lead,
        seoTitle: data.seoTitle,
        metaDescription: data.metaDescription,
        image: data.image,
        imageWidth: data.imageWidth,
        imageHeight: data.imageHeight,
        imageAlt: data.imageAlt,
        ogImage: data.ogImage,
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    updated: data.updated,
    tema: data.tema,
    excerpt: data.excerpt ?? "",
    lead: data.lead,
    seoTitle: data.seoTitle,
    metaDescription: data.metaDescription,
    image: data.image,
    imageWidth: data.imageWidth,
    imageHeight: data.imageHeight,
    imageAlt: data.imageAlt,
    ogImage: data.ogImage,
    content,
  };
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Témata blogu. Pořadí určuje, jak se vypisují — nejnosnější první. */
export const TEMATA: {
  slug: string;
  nazev: string;
  popis: string;
  /** Náhled při sdílení, 1200×628. Když chybí, použije se sdílený náhled webu. */
  ogImage?: string;
}[] = [
  {
    slug: "prestat-se-obetovat",
    ogImage: "/images/tema-prestat-se-obetovat-og.jpg",
    nazev: "Přestat se obětovat",
    popis:
      "O ženách, které všechno zvládnou — a o ceně, kterou za to platí. Proč se z laskavosti stane povinnost a jak z toho jde vystoupit.",
  },
  {
    slug: "vztahy",
    ogImage: "/images/tema-vztahy-og.jpg",
    nazev: "Vztahy a rodina",
    popis:
      "Manžel, děti, rodiče. O dlouhých vztazích, o tom, co v nich vydrží, a o tom, co se v nich dá změnit i po letech.",
  },
  {
    slug: "mysleni-a-energie",
    ogImage: "/images/tema-mysleni-a-energie-og.jpg",
    nazev: "Myšlení, energie a přítomnost",
    popis:
      "Myšlenky, emoce, zákon přitažlivosti a přítomný okamžik. O tom, co si člověk tvoří sám, i když o tom neví.",
  },
  {
    slug: "metoda-jih",
    ogImage: "/images/tema-metoda-jih-og.jpg",
    nazev: "Metoda JIH®",
    popis:
      "Odkud se metoda JIH® vzala, jak se s ní pracuje a co s ní jde odhalit. Napsané autorkou, ne z brožury.",
  },
  {
    slug: "byznys-a-duchovni-cesta",
    ogImage: "/images/tema-byznys-a-duchovni-cesta-og.jpg",
    nazev: "Byznys a duchovní cesta",
    popis:
      "Jde dohromady pracovní úspěch a duchovní cesta? O podnikání, o vlastní cestě a o díře, kterou nezaplní ani úspěch.",
  },
  {
    slug: "padesatka-a-svoboda",
    ogImage: "/images/tema-padesatka-a-svoboda-og.jpg",
    nazev: "Padesátka a svoboda",
    popis:
      "Padesát a dál. O svobodě, která přichází, když děti dospějí — a o tom, proč je stáří tak nechtěné.",
  },
  {
    slug: "ze-zivota",
    nazev: "Ze života",
    popis: "Drobnosti, cesty a chvíle, které stály za zapsání. Bali, Altaj, kadeřnice i motorka.",
  },
];

export function temaPodleSlugu(slug: string) {
  return TEMATA.find((t) => t.slug === slug);
}

export function clankyTematu(slug: string): Post[] {
  return getAllPosts().filter((p) => p.tema === slug);
}

/**
 * Příbuzné články. Do 3. 9. 2026 se pod článkem ukazovaly tři NEJNOVĚJŠÍ,
 * bez ohledu na téma. Teď se berou ze stejného tématu a doplňují nejnovějšími
 * jen tehdy, když jich ve tématu není dost.
 */
export function pribuzneClanky(slug: string, kolik = 3): Post[] {
  const vsechny = getAllPosts();
  const ja = vsechny.find((p) => p.slug === slug);
  const ze_tematu = ja?.tema
    ? vsechny.filter((p) => p.slug !== slug && p.tema === ja.tema)
    : [];
  if (ze_tematu.length >= kolik) return ze_tematu.slice(0, kolik);
  const doplnek = vsechny.filter(
    (p) => p.slug !== slug && !ze_tematu.some((z) => z.slug === p.slug),
  );
  return [...ze_tematu, ...doplnek].slice(0, kolik);
}

/** Náhled tématu pro sdílení. Vrátí undefined, když téma svůj obrázek nemá. */
export function ogImageTematu(temaSlug?: string): string | undefined {
  if (!temaSlug) return undefined;
  return TEMATA.find((t) => t.slug === temaSlug)?.ogImage;
}
