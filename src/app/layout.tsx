import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MainStreet RevOps - AI-Powered Sales Growth for SMBs",
  description: "Transform your small to mid-sized business with AI-powered sales processes, lead management automation, and technology consulting. Book your discovery call today.",
  keywords: "AI sales, lead management, SMB consulting, revenue operations, sales automation",
  openGraph: {
    title: "MainStreet RevOps - AI-Powered Sales Growth for SMBs",
    description: "Transform your small to mid-sized business with AI-powered sales processes, lead management automation, and technology consulting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
