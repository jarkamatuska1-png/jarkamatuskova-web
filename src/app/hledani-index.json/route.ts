import { getAllPosts } from "@/lib/blog";

/**
 * Rejstřík pro vyhledávání na blogu — celé texty všech článků.
 *
 * Proč zvlášť, a ne rovnou na stránce blogu: všechny texty mají dohromady
 * 363 kB. Posílat je každé návštěvnici, i té, která hledat nebude, je zbytečné.
 * Stránka blogu proto nese jen titulky a perexy (19 kB) a tenhle soubor si
 * stáhne teprve ve chvíli, kdy někdo začne psát do vyhledávání.
 *
 * Generuje se při sestavení webu, takže je to obyčejný statický soubor.
 */
export const dynamic = "force-static";

export function GET() {
  const rejstrik = getAllPosts().map((p) => ({
    slug: p.slug,
    // Značky Markdownu pryč — hledá se v holém textu.
    text: p.content
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/[#*_>`~|[\]()]/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  }));

  return Response.json(rejstrik, {
    headers: { "Cache-Control": "public, max-age=0, must-revalidate" },
  });
}
