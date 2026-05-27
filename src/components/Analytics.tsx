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
    </>
  );
}
