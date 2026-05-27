import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jarka Matušková | Průvodkyně vědomým životem";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF8F5",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Gold corner accents */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            width: 60,
            height: 60,
            borderTop: "2px solid #C9A96E",
            borderLeft: "2px solid #C9A96E",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            width: 60,
            height: 60,
            borderBottom: "2px solid #C9A96E",
            borderRight: "2px solid #C9A96E",
          }}
        />

        {/* Label */}
        <p
          style={{
            fontSize: 18,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#C9A96E",
            marginBottom: 24,
            fontWeight: 400,
          }}
        >
          Průvodkyně vědomým životem
        </p>

        {/* Name */}
        <h1
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#2C2C2C",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          Jarka Matušková
        </h1>

        {/* Gold divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
            width: 300,
          }}
        >
          <div style={{ flex: 1, height: 1, background: "#E8D5B0" }} />
          <div
            style={{
              width: 8,
              height: 8,
              background: "#C9A96E",
              transform: "rotate(45deg)",
            }}
          />
          <div style={{ flex: 1, height: 1, background: "#E8D5B0" }} />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 28,
            color: "#7A7A7A",
            textAlign: "center",
            fontWeight: 300,
            maxWidth: 700,
          }}
        >
          Metoda JIH® · Osobní rozvoj · Energie každý den
        </p>

        {/* URL */}
        <p
          style={{
            position: "absolute",
            bottom: 48,
            fontSize: 16,
            letterSpacing: "0.15em",
            color: "#C9A96E",
            textTransform: "uppercase",
          }}
        >
          jarkamatuskova.cz
        </p>
      </div>
    ),
    { ...size }
  );
}
