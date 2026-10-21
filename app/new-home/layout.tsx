import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-nh-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-nh-sans",
  subsets: ["latin"],
  display: "swap",
});

export default function NewHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${playfair.variable} ${inter.variable}`}>
      {children}
    </div>
  );
}
