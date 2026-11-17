import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Balachandra S — CS Student & Full-Stack Developer",
  description: "Personal portfolio of Balachandra S, Computer Science student at Bangalore Institute of Technology (BIT) and full-stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="min-h-screen bg-[#F5F5F7] dark:bg-[#08080A] text-[#1D1D1F] dark:text-[#F5F5F7] antialiased selection:bg-blue-500 selection:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
