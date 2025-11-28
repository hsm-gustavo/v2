import Link from "next/link";
import { Button } from "./ui/button";
import * as motion from "motion/react-client";

export default function Hero() {
  return (
    <section className="container mx-auto min-h-screen content-center space-y-4 px-4">
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          delayChildren: 0.15,
        }}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-base md:text-lg lg:text-xl"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pretty-shadow text-4xl font-bold md:text-6xl lg:text-8xl"
        >
          Gustavo Malaquias
        </motion.h1>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-2xl font-semibold text-shadow-2xs text-shadow-black/55 md:text-3xl lg:text-5xl"
        >
          a Full-stack Developer
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-base md:text-lg lg:text-xl"
        >
          I&apos;m a full-stack web developer focused on modern React/Next.js
          front-end development and TypeScript-powered back ends. I build
          responsive, production-ready interfaces using Next.js, TailwindCSS,
          and TypeScript, and support them with solid foundations in NestJS,
          Prisma, PostgreSQL, and Docker. I&apos;m known for strong
          self-directed learning and writing clean, maintainable, and scalable
          code.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="pt-4"
        >
          <Button
            variant={"outline"}
            className="rounded-sm transition-all hover:scale-105"
            size={"lg"}
            asChild
          >
            <Link href="#contact">Get in touch</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
