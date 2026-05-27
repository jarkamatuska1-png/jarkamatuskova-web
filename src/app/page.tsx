import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Method from "@/components/Method";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Method />
        <Services />
        <Testimonials />
        <Blog />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
