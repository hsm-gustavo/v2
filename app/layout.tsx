import type { Metadata } from "next";
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
