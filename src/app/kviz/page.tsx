import type { Metadata } from "next";
import KvizClient from "./KvizClient";

const PAGE_URL = "https://jarkamatuskova.cz/kviz";

export const metadata: Metadata = {
  title: "Žiješ ze sebe, nebo z tlaku na sebe? | Jarka Matušková",
  description:
    "Krátký kvíz-zrcadlo pro ženy 45+. Šest otázek o tom, kolik ze sebe zatím zvládáš pod tlakem — a kolik už žiješ ze sebe.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Žiješ ze sebe, nebo z tlaku na sebe?",
    description:
      "Šest otázek, žádné hodnocení. Jen zrcadlo — kolik ze sebe držíš silou a kolik už žiješ ze sebe.",
    url: PAGE_URL,
    siteName: "Jarka Matušková",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Žiješ ze sebe, nebo z tlaku na sebe? | Jarka Matušková",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Žiješ ze sebe, nebo z tlaku na sebe?",
    description: "Krátký kvíz-zrcadlo pro ženy 45+.",
    images: ["/opengraph-image.png"],
  },
};

export default function KvizPage() {
  return <KvizClient />;
}
