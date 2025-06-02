import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechBlog - Developer Hub",
  description:
    "Discover the latest insights, tutorials, and best practices in software development.",
  keywords: [
    "tech blog",
    "programming",
    "development",
    "tutorials",
    "frontend",
    "backend",
  ],
  authors: [{ name: "TechBlog Team" }],
  creator: "TechBlog",
  publisher: "TechBlog",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
