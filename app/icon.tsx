import { ImageResponse } from "next/og";

export const size = {
  width: 56,
  height: 56,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 26,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "12px",
        fontWeight: 700,
        fontFamily: "sans-serif",
      }}
    >
      GM
    </div>,
    {
      ...size,
    },
  );
}
