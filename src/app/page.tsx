import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Method from "@/components/Method";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jarka Matušková",
  url: "https://jarkamatuskova.cz",
  image: "https://jarkamatuskova.cz/images/jarka-foto.png",
  description: "Průvodkyně vědomým životem, autorka metody JIH®. Pomáhám lidem napřímit všechny oblasti jejich života — vztahy, zdraví, byznys, hojnost.",
  jobTitle: "Průvodkyně vědomým životem",
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
        <Services />
        <About />
        <Testimonials />
        <Blog />
        <Method />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
