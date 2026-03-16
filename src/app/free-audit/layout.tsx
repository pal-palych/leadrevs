"use client";

import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* GA */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S8ENCC7L4D"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S8ENCC7L4D');
            `,
          }}
        />
        {/* Meta Pixel placeholder — add your pixel ID here */}
        {/*
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}} />
        <noscript><img height="1" width="1" style={{display:'none'}}
          src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" /></noscript>
        */}
      </head>
      <body className={inter.className}>
        {/* No navbar, no footer — clean landing page */}
        {children}
      </body>
    </html>
  );
}
