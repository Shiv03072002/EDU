import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import { ThemeProvider } from "@/context/ThemeContext";
import EmailPopup from "@/components/common/EmailPopup";
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ExamWaliSite",
  description: "Study resources for exams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <EmailPopup />
        </ThemeProvider>


      </body>
    </html>
  );
}