import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/navbar/Nav";
import Footer from "@/components/landing/Footer";

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
  title: "Space Oddities",
  description: "The Sun is highly variable and cycles through periods when its magnetic activity is very high, and times when there is very low or almost no magnetic activity. This year the Sun was very active! In May 2024 multiple large solar flares created space weather that affected Earth in a variety of ways. Your challenge is to use NASA data to create a visual representation (e.g., a movie, video of a dance, etc.) that helps the public better understand the May 2024 solar storms and their impacts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" type="image/x-icon" sizes="100" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
