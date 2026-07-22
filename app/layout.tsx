import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BUILT TO SOLVE.",
  description:
    "Building products that transform complex ideas into measurable impact."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
