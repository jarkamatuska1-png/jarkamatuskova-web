import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import WhatsAppButton from "@/components/WhatsAppButton";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
});

const outfit = Outfit({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jarka Matušková | Průvodkyně vědomým životem",
  description:
    "Vědomá práce na sobě a fyzická pohoda. Propojím tě s metodou JIH® a ukážu ti, jak mít energii v těle a klid v mysli — každý den.",
  keywords: ["metoda JIH", "osobní rozvoj", "vědomý život", "koučování", "Jarka Matušková"],
  metadataBase: new URL("https://jarkamatuskova.cz"),
  other: {
    "facebook-domain-verification": "lh02ci5zn1uqauv45qzkv01jfhurhs",
  },
  openGraph: {
    title: "Jarka Matušková | Průvodkyně vědomým životem",
    description: "Tvůj život. Naplno. Teď.",
    url: "https://jarkamatuskova.cz",
    siteName: "Jarka Matušková",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Jarka Matušková | Průvodkyně vědomým životem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jarka Matušková | Průvodkyně vědomým životem",
    description: "Tvůj život. Naplno. Teď.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${dmSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <WhatsAppButton />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
