"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import AuthProvider from "../context/AuthContext";
import ToasterContext from "../context/ToastContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S8ENCC7L4D"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S8ENCC7L4D');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <NextTopLoader
          color="#006BFF"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
          zIndex={9999999}
        />
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <AuthProvider>
            <ToasterContext />
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
