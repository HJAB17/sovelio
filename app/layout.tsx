import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} min-h-screen transition-colors duration-500`}>
        {/* Mesh Gradient animé — voiles cobalt / violet / émeraude */}
        <div className="mesh-gradient" aria-hidden="true">
          {/* Voile cobalt principal (haut gauche) */}
          <div
            className="mesh-blob w-[620px] h-[620px] -top-40 -left-40"
            style={{
              background:
                "radial-gradient(circle, rgba(37,99,235,0.28) 0%, transparent 70%)",
              animationDelay: "0s",
            }}
          />
          {/* Voile violet tech (droite) */}
          <div
            className="mesh-blob w-[520px] h-[520px] top-1/4 -right-32"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)",
              animationDelay: "-8s",
            }}
          />
          {/* Voile émeraude souveraineté (bas centre) */}
          <div
            className="mesh-blob w-[480px] h-[480px] bottom-[-120px] left-1/3"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)",
              animationDelay: "-16s",
            }}
          />
          {/* Halo lumineux discret (centre haut) */}
          <div
            className="mesh-blob w-[380px] h-[380px] top-10 left-1/2"
            style={{
              background:
                "radial-gradient(circle, rgba(96,165,250,0.14) 0%, transparent 70%)",
              animationDelay: "-12s",
            }}
          />
        </div>

        <div className="relative z-10">
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}