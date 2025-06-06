import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LuckyBecky - 문제를 만들고 해결하는 과정",
  description: "문제를 만들고 해결하는 과정을 기록하는 블로그",
  keywords: [
    "tech blog",
    "programming",
    "development",
    "tutorials",
    "frontend",
    "backend",
  ],
  authors: [{ name: "Becky" }],
  creator: "Becky",
  publisher: "Becky",
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
      <head>
        <link
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          rel="stylesheet preload"
        />
      </head>
      <body className="font-pretendard">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
