import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "First Next App",
  description: "Customized as my first next creation",
  author: "Nico Diaz"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <nav className="w-full bg-emerald-800 text-white flex justify-center items-center gap-4 py-4">
            <Link href="/">Home</Link>
            <h1 className="text-2xl font-bold mx-4">Next Walkthrough</h1>
            <Link href="/test">Test</Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
