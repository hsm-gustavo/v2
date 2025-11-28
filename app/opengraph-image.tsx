import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Gustavo Malaquias - Full-stack Web Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const carlitoBold = await readFile(
    join(process.cwd(), "public/fonts/Carlito-Bold.ttf"),
  );

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#43aa8b",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 600,
            letterSpacing: "-0.05em",
            color: "white",
            textShadow:
              "-1px -1px 0px #43aa8b, 3px 3px 0px #43aa8b, 6px 6px 0px #00000055",
          }}
        >
          Gustavo Malaquias
        </div>

        <div
          style={{
            fontSize: 42,
            color: "white",
            fontWeight: 400,
            marginBottom: 40,
            textShadow: "0px 1px 0px rgba(0, 0, 0, 0.55)",
          }}
        >
          Full-stack Web Developer
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginTop: "20px",
          }}
        >
          {[
            "Next.js",
            "TypeScript",
            "NestJS",
            "TailwindCSS",
            "Golang",
            "Docker",
          ].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "12px 24px",
                fontSize: 24,
                backgroundColor: "#254441",
                borderRadius: "99px",
                color: "#e4e4e7",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Carlito",
          data: carlitoBold,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
