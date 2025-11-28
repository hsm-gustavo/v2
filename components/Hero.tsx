import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="container mx-auto min-h-screen content-center space-y-4 px-4">
      <p className="text-xl">Hi, my name is</p>
      <h1 className="pretty-shadow text-8xl font-bold">Gustavo Malaquias</h1>
      <h2 className="text-5xl font-semibold text-shadow-2xs text-shadow-black/55">
        a Full-stack Developer
      </h2>
      <p className="text-xl">
        I&apos;m a full-stack web developer focused on modern React/Next.js
        front-end development and TypeScript-powered back ends. I build
        responsive, production-ready interfaces using Next.js, TailwindCSS, and
        TypeScript, and support them with solid foundations in NestJS, Prisma,
        PostgreSQL, and Docker. I&apos;m known for strong self-directed learning
        and writing clean, maintainable, and scalable code.
      </p>
      <Button
        variant={"outline"}
        className="rounded-sm transition-all hover:scale-105"
        size={"lg"}
        asChild
      >
        <Link href="#contact">Get in touch</Link>
      </Button>
    </section>
  );
}
