import { useLinkProps } from "@/lib/link-props";
import { Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectDefaultComponentProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl?: string;
  codeUrl?: string;
  linkProps?: ReturnType<typeof useLinkProps>;
}

export default function ProjectDefaultComponent({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  codeUrl,
  linkProps,
}: ProjectDefaultComponentProps) {
  const derivedLinkProps = useLinkProps(projectUrl, codeUrl);

  return (
    <Link
      className="bg-primary/20 focus:ring-primary relative block h-full w-full max-w-3xl overflow-hidden rounded-sm p-8"
      role="group"
      {...(linkProps || derivedLinkProps)}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover opacity-10"
      />

      <div className="relative">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="my-4 text-base md:text-lg">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-fira-code bg-background/50 px-3 py-1 text-xs md:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-0 right-0 m-2 flex gap-2">
        {projectUrl && (
          <div>
            <ExternalLink className="h-5 w-5 text-white/70 hover:text-white" />
          </div>
        )}
        {codeUrl && (
          <div>
            <Code className="h-5 w-5 text-white/70 hover:text-white" />
          </div>
        )}
      </div>
    </Link>
  );
}
