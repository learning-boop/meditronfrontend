import type { Metadata } from "next";
import {
  Manrope,
  Nunito_Sans,
  Source_Serif_4,
  Mandali,
  Ramabhadra,
} from "next/font/google";
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
      <body className="min-h-full flex flex-col bg-cream font-sans">
        <ConditionalLayout>{children}</ConditionalLayout>
        <LucidFocusTracker />
      </body>
    </html>
  );
}
