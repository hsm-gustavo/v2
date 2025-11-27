import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="container mx-auto space-y-4" id="about">
      <h2 className="text-4xl font-bold text-shadow-2xs text-shadow-black/55">
        About Me
      </h2>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <p>
            Hello, my name is Gustavo and I&apos;m a full-stack web developer
            focused on building clean, scalable, and accessible web experiences.
            My work centers on modern React/Next.js front-end development and
            TypeScript-driven back ends, where I combine strong UI detail with
            maintainable architecture.
          </p>
          <p>
            I specialize in translating high-fidelity designs into
            production-ready interfaces using Next.js, TypeScript, TailwindCSS,
            and shadcn/ui, and I bring back-end experience with NestJS, Prisma,
            FastAPI, and PostgreSQL to support complete end-to-end delivery.
          </p>
          <p>
            Currently, I work as a Full-Stack Developer at{" "}
            <Link href={"https://www.rapidoinfoshop.com"}>Rápido Infoshop</Link>
            , where I build mobile-first user interfaces, integrate APIs, and
            collaborate closely across product and engineering teams. I&apos;m
            recognized for strong self-directed learning, attention to detail,
            and writing clean, modular code.
          </p>
          <p>
            I enjoy transforming ideas into real, usable products, and
            continuously leveling up my craft through new technologies,
            patterns, and tooling.
          </p>
        </div>
        <figure>
          <Image
            src={"/gustavo.jpg"}
            alt="An image of Gustavo Malaquias"
            width={300}
            height={300}
            className="rounded-sm"
          />
        </figure>
      </div>
    </section>
  );
}
