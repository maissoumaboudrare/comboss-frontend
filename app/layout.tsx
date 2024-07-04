import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "./molecules/_components/Header";

import { AuthProvider } from "@/context/AuthContext";
import { Footer } from "./molecules/_components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "🔥 Combosss by maïssoum",
  description: "Join the best app of sharing combo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          poppins.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
