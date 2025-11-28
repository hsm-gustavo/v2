import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      className="container mx-auto content-center space-y-4 px-4"
      id="about"
    >
      <h2 className="text-center text-3xl font-bold text-shadow-2xs text-shadow-black/55 lg:text-4xl">
        About Me
      </h2>
      <div className="group flex flex-col items-center gap-8 md:flex-row">
        <div className="space-y-3 text-base md:text-lg">
          <p>
            Hi, I&apos;m Gustavo, a full-stack web developer focused on building
            clean, scalable, and accessible web experiences. I work primarily
            with modern React/Next.js front ends and TypeScript-driven back
            ends.
          </p>
          <p>
            I turn high-fidelity designs into production-ready interfaces using
            Next.js, TypeScript, TailwindCSS, and shadcn/ui, and support full
            delivery with back-end experience in NestJS, Prisma, FastAPI, and
            PostgreSQL.
          </p>
          <p>
            I&apos;m currently a Full-Stack Developer at{" "}
            <Link
              href="https://www.rapidoinfoshop.com"
              className="text-foreground-secondary underline"
            >
              Rápido Infoshop
            </Link>
            , building mobile-first UIs, integrating APIs, and collaborating
            closely with product and engineering teams.
          </p>
          <p>
            I enjoy turning ideas into real, usable products and continuously
            improving through new tools, technologies, and patterns.
          </p>
        </div>

        <Image
          src={"/gustavo.jpg"}
          alt="An image of Gustavo Malaquias"
          width={300}
          height={300}
          className="image-shadow rounded-sm"
          preload
        />
      </div>
    </section>
  );
}
