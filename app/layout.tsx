import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Harbourline Shipping",
  description: "Harbourline Shipping Services",
  icons : [{
    rel: "icon",
    url: "/images/favicon2.png",
    sizes: "64x64",
  }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      
        {children}
      </body>
    </html>
  );
}
