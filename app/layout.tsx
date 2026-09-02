import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const display = localFont({
  src: "./fonts/Fraunces-Variable.woff2",
  variable: "--font-display",
  weight: "100 900",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const sans = localFont({
  src: "./fonts/InstrumentSans-Variable.woff2",
  variable: "--font-sans",
  weight: "400 700",
  display: "swap",
  fallback: [
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "sans-serif",
  ],
});

const SITE_URL = "https://www.barberstucco.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Barber Stucco | Stucco, EIFS & ArcusStone · Camdenton, MO",
    template: "%s | Barber Stucco",
  },
  description:
    "Stucco and EIFS contractor serving the Lake of the Ozarks. Dryvit certified. Only certified Arcus Stone applicator in the lake area.",
  applicationName: "Barber Stucco",
  keywords: [
    "stucco contractor",
    "EIFS",
    "Dryvit",
    "ArcusStone",
    "synthetic stone",
    "Camdenton MO",
    "Lake of the Ozarks",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Barber Stucco",
    locale: "en_US",
    url: SITE_URL,
    title: "Barber Stucco | Stucco, EIFS & ArcusStone · Camdenton, MO",
    description:
      "Stucco and EIFS contractor serving the Lake of the Ozarks. Dryvit certified. Only certified Arcus Stone applicator in the lake area.",
    images: [
      {
        url: "/images/gallery/img_1406_op_665x498.jpg",
        width: 1200,
        height: 900,
        alt: "Mediterranean-style residence with a tile roof and arched loggia, Lake of the Ozarks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barber Stucco | Stucco, EIFS & ArcusStone · Camdenton, MO",
    description:
      "Stucco and EIFS contractor serving the Lake of the Ozarks. Dryvit certified.",
    images: ["/images/gallery/img_1406_op_665x498.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#06191B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
