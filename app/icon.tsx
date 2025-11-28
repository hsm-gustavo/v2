import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 56,
  height: 56,
};

export const contentType = "image/png";

export default async function Icon() {
  const carlitoBold = await readFile(
    join(process.cwd(), "public/fonts/Carlito-Bold.ttf"),
  );

  return new ImageResponse(
    <div
      style={{
        fontSize: 32,
        background: "#43aa8b", // Your new theme color
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "12px",
        textShadow: "2px 2px 0px #00000055",
      }}
    >
      GM
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
