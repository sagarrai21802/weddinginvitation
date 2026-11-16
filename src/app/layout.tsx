import type { Metadata } from "next";
import {
  Playfair_Display,
  Great_Vibes,
  Cormorant_Garamond,
  Amiri,
  Cinzel_Decorative,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-monogram",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Walima Ceremony — Dr. Aman & Dr. Yushra",
  description:
    "You are cordially invited to the Walima Ceremony of Dr. Aman and Dr. Yushra on 26th December 2026 at A1 Resort, Khajrana, Indore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${greatVibes.variable} ${cormorant.variable} ${amiri.variable} ${cinzel.variable} scroll-smooth`}
    >
      <body className="bg-ivory text-charcoal font-body antialiased selection:bg-gold/20 selection:text-sage-deep">
        {children}
      </body>
    </html>
  );
}
