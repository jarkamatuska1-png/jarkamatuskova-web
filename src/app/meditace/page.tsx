import type { Metadata } from "next";
import MeditaceClient from "./MeditaceClient";

const PAGE_URL = "https://jarkamatuskova.cz/meditace";

export const metadata: Metadata = {
  title: "Tělo, které už nemusí bojovat | Jarka Matušková",
  description:
    "Krátká aktivační meditace zdarma pro ženy, které chtějí přestat na tělo tlačit a začít ho znovu vnímat jako partnera.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Tělo, které už nemusí bojovat | Jarka Matušková",
    description:
      "Zdarma ke stažení — aktivační meditace pro ženy, které chtějí přestat na tělo tlačit.",
    url: PAGE_URL,
    siteName: "Jarka Matušková",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Tělo, které už nemusí bojovat | Jarka Matušková",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tělo, které už nemusí bojovat | Jarka Matušková",
    description: "Aktivační meditace zdarma — jemné zastavení pro nový vztah k sobě.",
    images: ["/opengraph-image.png"],
  },
};

export default function MeditacePage() {
  return <MeditaceClient />;
}
