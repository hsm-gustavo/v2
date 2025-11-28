"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Lightbulb, LightbulbOff } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <Button size={"icon"} className="rounded-full" onClick={toggleTheme}>
      <Lightbulb className="h-6 w-6 scale-100 transition-transform dark:scale-0" />
      <LightbulbOff className="absolute h-6 w-6 scale-0 transition-transform dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
