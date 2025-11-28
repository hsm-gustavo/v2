import type { Metadata, Viewport } from "next";
import { Carlito, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

const carlito = Carlito({
  variable: "--font-carlito",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Gustavo Malaquias",
  description:
    "Gustavo Malaquias' personal website showcasing projects and skills in web development.",
  authors: [{ name: "Gustavo Malaquias", url: "https://www.hsm-gustavo.dev" }],
  keywords: [
    "Gustavo Malaquias",
    "Full-stack Developer",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "NestJS",
    "TailwindCSS",
    "Portfolio",
    "Projects",
    "Contact",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#43aa8b",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#254441",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${carlito.variable} ${firaCode.variable} ${carlito.className} antialiased`}
      >
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
