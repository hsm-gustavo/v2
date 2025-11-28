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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        fontSize: 32,
        backgroundColor: "transparent",
        color: "white",
      }}
    >
      <span
        style={{
          color: "black",
        }}
      >
        &lt;
      </span>
      g
      <span
        style={{
          color: "black",
        }}
      >
        /
      </span>
      <span
        style={{
          color: "black",
        }}
      >
        &gt;
      </span>
    </div>,
    { ...size },
  );
}
