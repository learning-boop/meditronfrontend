import type { Metadata } from "next";
import Link from "next/link";

/*
 * /landing was the review address of the new home page. It now lives at "/",
 * so old /landing links (shared with the client, saved by parents) forward there.
 * The site is a static export, so this is a page-level redirect, not a server one.
 */
export const metadata: Metadata = {
  title: "Meditron CDC",
  alternates: { canonical: "https://meditroncdc.com" },
  robots: { index: false, follow: true },
};

export default function LandingRedirect() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24 text-center">
      <meta httpEquiv="refresh" content="0; url=/" />
      <p className="text-muted-navy">
        This page has moved.{" "}
        <Link href="/" className="font-semibold text-primary underline underline-offset-4">
          Go to the Meditron home page
        </Link>
      </p>
    </main>
  );
}
