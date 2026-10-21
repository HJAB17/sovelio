import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "SOVelio - L'indépendance numérique européenne",
  description: "Zéro dépendance US. 100% Protection RGPD. Découvrez les solutions souveraines européennes et françaises qui garantissent votre indépendance numérique face au CLOUD Act.",
  keywords: ["souveraineté numérique", "RGPD", "CLOUD Act", "hébergement européen", "solutions françaises", "migration cloud", "IA souveraine"],
  authors: [{ name: "SOVelio" }],
  openGraph: {
    title: "SOVelio - L'indépendance numérique européenne",
    description: "Zéro dépendance US. 100% Protection RGPD.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logos/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logos/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/logos/apple-touch-icon.png" />
        <link rel="manifest" href="/logos/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} ${inter.className} min-h-screen transition-colors duration-300`}>
        {/* Grain physique Papier Canson 224g (filtre SVG fractalNoise sans coût réseau) */}
        <svg className="canson-texture-overlay w-full h-full" aria-hidden="true">
          <filter id="canson-paper-fiber">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.16
                      0 0 0 0 0.10
                      0 0 0 0 0.26
                      0 0 0 0.14 0"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#canson-paper-fiber)" />
        </svg>

        <div className="relative z-10">
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}