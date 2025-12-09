import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PromptBoard - Perfect prompts for every AI model",
  description: "Generate stunning AI images instantly with curated prompts for OpenAI, Google, Meta, DeepSeek, and Copilot. Download the PromptBoard app now!",
  keywords: ["AI prompts", "image generation", "OpenAI", "Stable Diffusion", "Midjourney", "DALL-E", "prompt gallery"],
  authors: [{ name: "Krishna Bantola", url: "https://www.krishnabantola.site" }],
  openGraph: {
    title: "PromptBoard - Perfect prompts for every AI model",
    description: "Generate stunning AI images instantly with curated prompts.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PromptBoard",
    description: "Perfect prompts for every AI model — Generate stunning images instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
