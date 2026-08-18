import type { Metadata } from "next";
import {
  Manrope,
  Nunito_Sans,
  Source_Serif_4,
  Mandali,
  Ramabhadra,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";
import LucidFocusTracker from "@/components/LucidFocusTracker";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

/* ── Telugu type — used by the mobile (Muggu) sections only ── */
const mandali = Mandali({
  variable: "--font-mandali",
  subsets: ["telugu"],
  weight: "400",
  display: "swap",
});

const ramabhadra = Ramabhadra({
  variable: "--font-ramabhadra",
  subsets: ["telugu"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Meditron Child Development Centre | Vijayawada",
    template: "%s | Meditron CDC Vijayawada",
  },
  description:
    "Meditron is Vijayawada's leading child development centre — expert speech therapy, physiotherapy, occupational therapy and sensory integration for Autism, ADHD, Cerebral Palsy, and Down Syndrome.",
  metadataBase: new URL("https://meditroncdc.com"),
  keywords: [
    "child development centre Vijayawada",
    "speech therapy Vijayawada",
    "physiotherapy for children Vijayawada",
    "occupational therapy Vijayawada",
    "autism treatment Vijayawada",
    "ADHD treatment Vijayawada",
    "cerebral palsy therapy Vijayawada",
    "down syndrome therapy Vijayawada",
    "sensory integration Vijayawada",
    "paediatric therapy Vijayawada",
    "Meditron CDC",
  ],
  alternates: {
    canonical: "https://meditroncdc.com",
  },
  openGraph: {
    siteName: "Meditron Child Development Centre",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-meditron.jpg",
        width: 1200,
        height: 630,
        alt: "Meditron Child Development Centre — Vijayawada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meditron Child Development Centre | Vijayawada",
    description:
      "Expert speech therapy, physiotherapy and sensory integration for children in Vijayawada. Autism · ADHD · Cerebral Palsy · Down Syndrome.",
    images: ["/images/og-meditron.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${nunitoSans.variable} ${sourceSerif4.variable} ${mandali.variable} ${ramabhadra.variable} h-full antialiased`}>
      
      {/* Google Ads */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18396742379"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-18396742379');
      `}</Script>

      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1093634546952615');
        fbq('track', 'PageView');
      `}</Script>

      <body className="min-h-full flex flex-col bg-cream font-sans">
        {/* Meta Pixel noscript fallback */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1093634546952615&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <ConditionalLayout>{children}</ConditionalLayout>
        <LucidFocusTracker />
      </body>
    </html>
  );
}
