import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saturday-studio.vercel.app"),
  title: {
    default:
      "Saturday Studio | Cinematic photography in Kitchener-Waterloo & Toronto",
    template: "%s | Saturday Studio",
  },
  description:
    "Cinematic photography for products, brands, and people in the Kitchener-Waterloo and Toronto area. Editorial product photography, portraits, couple sessions, and brand content.",
  keywords: [
    "Kitchener photographer",
    "Waterloo photographer",
    "Kitchener product photographer",
    "Waterloo product photographer",
    "Kitchener couple photographer",
    "Toronto product photography",
    "Saturday Studio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Saturday Studio",
    description:
      "Cinematic photography for products, brands, and people in Kitchener-Waterloo and Toronto.",
    url: "https://saturday-studio.vercel.app",
    siteName: "Saturday Studio",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saturday Studio",
    description:
      "Cinematic photography for products, brands, and people in Kitchener-Waterloo and Toronto.",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
