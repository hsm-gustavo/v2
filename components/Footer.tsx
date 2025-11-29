import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto content-center space-y-4 p-8 text-center">
      <p>Built by Gustavo Malaquias</p>
      <p>
        Inspired by{" "}
        <Link
          href="https://v4.brittanychiang.com/"
          title="Go to Britanny Chiang's Website"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground-secondary underline"
        >
          Britanny Chiang&apos;s website
        </Link>
      </p>
    </footer>
  );
}
