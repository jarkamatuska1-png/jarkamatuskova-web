import type { NextConfig } from "next";

// Content-Security-Policy – určuje, ze kterých domén se smí načítat skripty,
// styly, obrázky a rámy. Blokuje vše ostatní (např. podvržený cizí skript).
// Povolené služby: Google Analytics, Meta (Facebook) Pixel, Calendly.
// Pozn.: 'unsafe-inline' u skriptů je nutný, protože GA i Meta Pixel vkládají
// inline kód; web je staticky generovaný, takže bezpečnější nonce by znamenal
// zrušit statické generování. I tak CSP blokuje neschválené cizí domény.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net https://assets.calendly.com",
  "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net https://connect.facebook.net https://www.facebook.com",
  "frame-src https://calendly.com https://www.facebook.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

// Bezpečnostní HTTP hlavičky. Přidávají se ke každé odpovědi a chrání web
// proti běžným útokům (vkládání do cizích stránek, odposlouchávání, únik
// odkazů). Tyto hlavičky nic nerozbíjejí – jsou to bezpečné výchozí hodnoty.
const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  // Web se nesmí vkládat do cizích iframů (ochrana proti clickjackingu).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Prohlížeč nesmí "hádat" typ souboru (ochrana proti podvrženému obsahu).
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Kolik informací o odkazu se posílá na cizí weby (co nejméně).
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Vynutí HTTPS na rok dopředu (ochrana proti odposlechu).
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  // Web nepotřebuje kameru, mikrofon ani polohu – vypneme je.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Retirované formáty — trvale přesměrováno na domů (metoda JIH® 2026.1).
      { source: "/sluzby", destination: "/", permanent: true },
      { source: "/sluzby/:path*", destination: "/", permanent: true },
      { source: "/meditace", destination: "/", permanent: true },
      // Kvíz je dočasně neveřejný — kód zůstává v repu, jen není přístupný.
      // Až bude dávat smysl, stačí tento řádek odebrat.
      { source: "/kviz", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
