import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const questrial = localFont({
  src: "./fonts/Questrial-Regular.ttf",
  variable: "--font-questrial",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Amani FPV",
  description: "Get your FPV drone services today!",
};

const raleway = localFont({
  src: "./fonts/Raleway.ttf",
  variable: "--font-raleway",
  weight: "400",
});
const syne = localFont({
  src: "./fonts/Syne.ttf",
  variable: "--font-syne",
  weight: "800",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${questrial.variable} ${raleway.variable} ${syne.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="mt-24"> {children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
