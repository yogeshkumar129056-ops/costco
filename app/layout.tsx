import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Costco – $750 Gift Card",
  description: "Claim your exclusive $750 Costco Gift Card. Available to verified Costco members — limited quantities left this month.",
  keywords: ["Costco", "Gift Card", "$750", "Member Offer", "Exclusive", "Reward"],
  openGraph: {
    title: "Costco – $750 Gift Card",
    description: "Claim your exclusive $750 Costco Gift Card. Available to verified Costco members — limited quantities left this month.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <body>{children}</body>
    </html>
  );
}
