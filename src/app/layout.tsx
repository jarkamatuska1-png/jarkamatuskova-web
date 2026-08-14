import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import WhatsAppButton from "@/components/WhatsAppButton";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
});

const playfair = Playfair_Display({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Jarka Matušková | Autorka metody JIH®",
  description:
    "Autorka metody JIH®. Provázím ženy na půlroční cestě osobního vedení — kus cesty vedle tebe, k tomu, kolik života v tobě ještě čeká.",
  keywords: ["metoda JIH", "osobní vedení", "Jarka Matušková"],
  metadataBase: new URL("https://jarkamatuskova.cz"),
  other: {
    "facebook-domain-verification": "lh02ci5zn1uqauv45qzkv01jfhurhs",
  },
  openGraph: {
    title: "Jarka Matušková | Autorka metody JIH®",
    description: "Kus cesty vedle tebe. Doopravdy.",
    url: "https://jarkamatuskova.cz",
    siteName: "Jarka Matušková",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Jarka Matušková | Autorka metody JIH®",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jarka Matušková | Autorka metody JIH®",
    description: "Kus cesty vedle tebe. Doopravdy.",
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
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
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
