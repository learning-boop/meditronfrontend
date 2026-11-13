import { Source_Serif_4 } from "next/font/google";
import "./landing.css";

const serif = Source_Serif_4({
  variable: "--font-lp-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600"],
  display: "swap",
});

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${serif.variable} lp flex-1`}>{children}</div>;
}
