import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Runinhas - Nunca Mais Perca uma Runa no Dota 2",
  description: "O assistente inteligente que te avisa de todos eventos importantes do Dota 2. 100% Grátis, Zero FPS Impact, Open Source.",
  authors: [{ name: "Runinhas Team" }],
  keywords: "dota 2, runas, rune timer, dota assistant, gaming, esports, stack timing, dota 2 helper",
  openGraph: {
    title: "Runinhas - Nunça Mais Perca uma Runa no Dota 2",
    description: "O assistente inteligente que te avisa de todos eventos importantes do Dota 2",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Runinhas - Nunça Mais Perca uma Runa no Dota 2",
    description: "O assistente inteligente que te avisa de todos eventos importantes do Dota 2",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
