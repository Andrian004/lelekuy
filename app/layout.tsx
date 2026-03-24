import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LeleKuy Farm | Lele Premium & Maggot Feed",
  description: "Budidaya lele premium dan maggot feed berkelanjutan dengan standar kualitas modern."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
