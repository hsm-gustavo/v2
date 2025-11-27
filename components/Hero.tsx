import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="container mx-auto min-h-screen content-center space-y-4">
      <p className="text-xl">Hi, my name is</p>
      <h1 className="pretty-shadow text-8xl font-bold">Gustavo Malaquias</h1>
      <h2 className="text-5xl font-semibold text-shadow-2xs text-shadow-black/55">
        a Full-stack Developer
      </h2>
      <p className="text-xl">
        I&apos;m a Full-stack web developer, specializing in modern
        React/Next.js front-end development and emerging TypeScript + NestJS
        backend technologies. Skilled in translating responsive UI mockups into
        production-ready interfaces utilizing Next.js, TailwindCSS, TypeScript,
        Prisma + PostgreSQL, and Docker. Recognized for strong self-directed
        learning and clean, maintainable code.
      </p>
      <Button
        variant={"outline"}
        className="rounded-sm transition-transform hover:scale-105"
        size={"lg"}
      >
        Get in touch
      </Button>
    </section>
  );
}
