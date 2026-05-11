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
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-[#003399] via-[#0047AB] to-[#4A90D9] dark:from-[#1A2744] dark:via-[#0D1B33] dark:to-[#1E293B] transition-colors duration-500`}>
        {/* Effet de lumière spot */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-white/10 dark:bg-[#FFD54F]/5 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#FFCC00]/10 dark:bg-[#5B9BD5]/5 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-[#FFCC00]/10 dark:bg-[#FFD54F]/5 rounded-full blur-[60px]"></div>
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