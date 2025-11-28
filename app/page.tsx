import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Separator } from "@/components/separators";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen space-y-12">
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Projects />
      <Separator />
      <Contact />
      <Footer />
    </main>
  );
}
