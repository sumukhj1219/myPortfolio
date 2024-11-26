import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"], // Regular and Bold weights
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"], // Regular and Bold weights
});

export const metadata = {
  title: "Sumukh's Digital Portfolio",
  description: "Showcasing my projects, skills, and open-source contributions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${spaceMono.variable} antialiased bg-black text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
