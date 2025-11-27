import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Hero />
      <About />
    </main>
  );
}
