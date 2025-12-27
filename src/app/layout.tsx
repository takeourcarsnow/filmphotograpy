import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider, FavoritesProvider } from "@/context";
import { Header, BottomNav, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Film Photography Guide | Learn Analog Photography",
  description: "Your comprehensive guide to film photography. Learn about films, cameras, lenses, and techniques for analog photography.",
  keywords: ["film photography", "analog photography", "35mm", "medium format", "camera guide", "film stocks"],
  authors: [{ name: "Film Photography Guide" }],
  openGraph: {
    title: "Film Photography Guide",
    description: "Your comprehensive guide to analog photography",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <FavoritesProvider>
            <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
              <Header />
              <div className="pb-20 md:pb-0">
                {children}
              </div>
              <Footer />
              <BottomNav />
            </div>
          </FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
