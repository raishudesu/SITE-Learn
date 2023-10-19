import "../styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "./Providers";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "./search/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SITE-Learn",
  description: "Ask, Collaborate, and Learn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <meta property="og:image" content="https://i.imgur.com/HElfXYz.png" />
      <link rel="icon" type="image/svg+xml" href="../assets/Logo.svg" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <main className="min-h-screen overflow-hidden">
              <Header />
              <div className="w-full mt-3 flex flex-col items-center">
                <SearchBar />
                {children}
              </div>
              <Footer />
            </main>
          </AuthProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
