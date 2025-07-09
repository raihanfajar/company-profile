import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { lato } from "@/lib/fonts";
import AppLayoutWrapper from "@/components/AppLayoutWrapper";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreenStride",
  description:
    "GreenStride is a dedicated non-profit organization committed to global environmental preservation, biodiversity protection, and championing sustainable solutions for a healthier planet. Join us in making a lasting impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <ReactQueryProvider>
          <AppLayoutWrapper>
            <main className="min-h-screen">{children}</main>
            <Footer />
          </AppLayoutWrapper>
        </ReactQueryProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
