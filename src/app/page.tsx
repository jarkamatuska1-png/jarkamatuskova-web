import Nav from "@/components/Nav";
import ZPopelkyUvod from "@/components/ZPopelkyUvod";
import ZPopelkyCesta from "@/components/ZPopelkyCesta";
import ZPopelkyZaver from "@/components/ZPopelkyZaver";
import About from "@/components/About";
import Method from "@/components/Method";
import HelenaBridge from "@/components/HelenaBridge";
import OsobniVedeni from "@/components/OsobniVedeni";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

// Kanonická adresa jen pro úvod (v layoutu by se zdědila na všechny podstránky).
export const metadata: Metadata = { alternates: { canonical: "/" } };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jarka Matušková",
  url: "https://www.jarkamatuskova.cz",
  image: "https://www.jarkamatuskova.cz/images/jarka-foto.png",
  description:
    "Autorka terapeutické metody JIH®. Provází ženy cestou z popelky na královnu: od probuzení k vedení vlastního života.",
  jobTitle: "Autorka terapeutické metody JIH®",
  telephone: "+420774420251",
  email: "matuskova@freli.cz",
  sameAs: [
    "https://www.facebook.com/jarka.matuskova",
    "https://www.instagram.com/j_matuskova/",
    "https://www.youtube.com/channel/UCMi-vMNkT_TkU1LBcmLRqzw",
    "https://www.linkedin.com/in/jarka-matuskova/",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <ZPopelkyUvod />
        <ZPopelkyCesta />
        <About />
        <Method />
        <HelenaBridge />
        <OsobniVedeni />
        <Testimonials />
        <Blog />
        <ZPopelkyZaver />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
