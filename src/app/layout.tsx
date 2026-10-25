import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import WhatsAppButton from "@/components/WhatsAppButton";
// Měření od Vercelu — bez cookies, takže měří VŠECHNY návštěvnice.
// Google Analytics vedle toho měří jen ty, které přijmou cookies.
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

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

const TITULEK = "Z popelky na královnu | Jarka Matušková, metoda JIH®";
const POPIS =
  "Cesta z popelky na královnu s Jarkou Matuškovou, autorkou terapeutické metody JIH®. Pět kroků od probuzení k vedení vlastního života. Začni knížkou Věty, které nás řídí.";

export const metadata: Metadata = {
  title: TITULEK,
  description: POPIS,
  metadataBase: new URL("https://www.jarkamatuskova.cz"),
  other: {
    "facebook-domain-verification": "lh02ci5zn1uqauv45qzkv01jfhurhs",
  },
  // Obrázek pro sdílení = src/app/opengraph-image.jpg (Next ho přidá sám).
  openGraph: {
    title: TITULEK,
    description: "Ne proto, abys byla vidět. Ale proto, abys viděla.",
    url: "https://www.jarkamatuskova.cz",
    siteName: "Jarka Matušková",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITULEK,
    description: "Ne proto, abys byla vidět. Ale proto, abys viděla.",
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
        <VercelAnalytics />
      </body>
    </html>
  );
}
