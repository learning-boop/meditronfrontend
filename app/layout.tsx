import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";

const nunito = Nunito({
  variable: "--font-nunito",
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
    <html lang="en-IN" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream font-sans">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
