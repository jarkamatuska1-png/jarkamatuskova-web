import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

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
  metadataBase: new URL("https://jarkamatuskova.cz"),
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
      className={`${dmSans.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <CookieConsent />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BSD185LBM9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BSD185LBM9');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1399848766983298');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
