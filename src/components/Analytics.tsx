"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function Analytics() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    setConsent(stored);

    // Posloucháme i změnu souhlasu (klik na tlačítko v cookie liště)
    const handler = () => setConsent(localStorage.getItem("cookie-consent"));
    window.addEventListener("cookie-consent-updated", handler);
    return () => window.removeEventListener("cookie-consent-updated", handler);
  }, []);

  if (consent !== "accepted") return null;

  return (
    <>
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

    </>
  );
}
