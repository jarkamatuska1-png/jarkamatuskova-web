import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Method from "@/components/Method";
import HelenaBridge from "@/components/HelenaBridge";
import OsobniVedeni from "@/components/OsobniVedeni";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Closing from "@/components/Closing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jarka Matušková",
  url: "https://www.jarkamatuskova.cz",
  image: "https://www.jarkamatuskova.cz/images/jarka-foto.png",
  description:
    "Autorka metody JIH®. Provázím ženy na půlroční cestě osobního vedení — kus cesty vedle nich, k tomu, kolik života v nich ještě čeká.",
  jobTitle: "Autorka metody JIH®",
  telephone: "+420774420251",
  email: "matuskova@freli.cz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jimlín 230",
    addressLocality: "Jimlín",
    postalCode: "440 01",
    addressCountry: "CZ",
  },
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
        <Hero />
        <About />
        <Method />
        <HelenaBridge />
        <OsobniVedeni />
        <Testimonials />
        <Blog />
        <Closing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
