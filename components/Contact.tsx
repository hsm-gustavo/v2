import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const contact = [
  {
    type: "email",
    url: "mailto:gustavo.hs.malaquias@gmail.com",
    iconUrl: "https://twenty-icons.com/mail.google.com/32",
    alt: "Gmail",
  },
  {
    type: "github",
    url: "https://www.github.com/hsm-gustavo",
    iconUrl: "https://twenty-icons.com/github.com/32",
    alt: "GitHub",
  },
  {
    type: "linkedin",
    url: "https://www.linkedin.com/in/gustavo-hs-malaquias",
    iconUrl: "https://twenty-icons.com/linkedin.com/32",
    alt: "LinkedIn",
  },
];

function ContactIcon({
  url,
  iconUrl,
  alt,
}: {
  url: string;
  iconUrl: string;
  alt: string;
}) {
  return (
    <Button variant={"ghost"} size={"icon"} className="rounded-full p-2">
      <Link
        href={url}
        title={`Go to ${alt}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={iconUrl} width={32} height={32} alt={alt} />
      </Link>
    </Button>
  );
}

export default function Contact() {
  return (
    <section
      className="container mx-auto content-center space-y-4 px-4 text-center"
      id="contact"
    >
      <h2 className="text-4xl font-bold text-shadow-2xs text-shadow-black/55">
        Get In Touch
      </h2>
      <div className="flex flex-col items-center">
        <p className="max-w-2xl text-center">
          I&apos;m always open to new projects, collaborations, or just a
          friendly chat. Feel free to reach out to me via email or connect with
          me on LinkedIn.
        </p>
        <p>
          {contact.map(({ url, iconUrl, alt }) => (
            <ContactIcon key={url} url={url} iconUrl={iconUrl} alt={alt} />
          ))}
        </p>
      </div>
    </section>
  );
}
