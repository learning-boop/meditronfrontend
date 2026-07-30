import type { Metadata } from "next";
import { Manrope, Nunito_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";

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

export const metadata: Metadata = {
  title: {
    default: "Meditron Child Development Centre | Vijayawada",
    template: "%s | Meditron Vijayawada",
  },
  description:
    "Meditron is a leading child development centre in Vijayawada, Andhra Pradesh, providing expert therapy for Autism, ADHD, Cerebral Palsy, and Down Syndrome.",
  metadataBase: new URL("https://meditronvijayawada.com"),
  openGraph: {
    siteName: "Meditron Child Development Centre",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${nunitoSans.variable} ${sourceSerif4.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream font-sans">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
