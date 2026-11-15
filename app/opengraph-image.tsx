import { ImageResponse } from "next/og";
export const alt = "Onyinye Philips | Solutions Architect & Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#080A0B", color: "#F5F5F5", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, fontSize: 110, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>
        <div>ONYINYE</div><div style={{ color: "#3DE078" }}>PHILIPS</div>
        <div style={{ fontSize: 30, fontWeight: 400, letterSpacing: 0, color: "#A1A1AA", marginTop: 40 }}>Solutions Architect &amp; Web Developer</div>
      </div>
    ),
    size
  );
}
