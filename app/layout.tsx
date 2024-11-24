import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import { FloatingDockDemo } from "@/components/floating-dock";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ignatius Emeka",
  description: "Software Engineer with highly proven skills and expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        <NextTopLoader
        color="#0d9488"
        height={4}
        showSpinner={false}
        showAtBottom={true}
        />
        <FloatingDockDemo/>
       
        {children}
       
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
