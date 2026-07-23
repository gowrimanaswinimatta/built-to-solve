import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.brand} ${site.tagline}`, template: `%s | ${site.brand}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { title: `${site.brand} ${site.tagline}`, description: site.description, url: site.url, siteName: site.brand, type: "website" },
  twitter: { card: "summary_large_image", title: `${site.brand} ${site.tagline}`, description: site.description },
};

export const viewport: Viewport = { themeColor: "#05070b", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [{ "@context": "https://schema.org", "@type": "Person", name: site.name, url: site.url }, { "@context": "https://schema.org", "@type": "WebSite", name: site.brand, url: site.url, description: site.description }];
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>;
}
