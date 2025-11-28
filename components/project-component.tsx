import { Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectComponentProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl?: string;
  codeUrl?: string;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function ProjectComponent({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  codeUrl,
  onMouseEnter,
}: ProjectComponentProps) {
  return (
    <div
      className="bg-primary/20 relative w-full max-w-3xl overflow-hidden rounded-sm p-8"
      onMouseEnter={onMouseEnter}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover opacity-10"
      />

      <Link
        href={projectUrl ?? codeUrl ?? "#projects"}
        className="relative"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="my-4 text-lg">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-fira-code bg-background/50 px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
      <div className="absolute top-0 right-0 m-2 flex gap-2">
        {projectUrl && (
          <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-5 w-5 text-white/70 hover:text-white" />
          </Link>
        )}
        {codeUrl && (
          <Link href={codeUrl} target="_blank" rel="noopener noreferrer">
            <Code className="h-5 w-5 text-white/70 hover:text-white" />
          </Link>
        )}
      </div>
    </div>
  );
}
