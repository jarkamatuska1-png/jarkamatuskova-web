import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jarka Matušková | Průvodkyně vědomým životem",
  description:
    "Vědomá práce na sobě a fyzická pohoda. Propojím tě s metodou JIH® a ukážu ti, jak mít energii v těle a klid v mysli — každý den.",
  keywords: ["metoda JIH", "osobní rozvoj", "vědomý život", "koučování", "Jarka Matušková"],
  openGraph: {
    title: "Jarka Matušková | Průvodkyně vědomým životem",
    description: "Tvůj život. Naplno. Teď.",
    url: "https://jarkamatuskova.cz",
    siteName: "Jarka Matušková",
    locale: "cs_CZ",
    type: "website",
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
      className={`${dmSans.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
