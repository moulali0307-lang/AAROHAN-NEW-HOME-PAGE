import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AAROHAAN | AI Fellowship Program",
  description:
    "AAROHAAN AI Fellowship Program - Empowering Talent. Elevating Futures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}