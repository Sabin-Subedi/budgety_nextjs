import "@fontsource/pt-sans";
import "@fontsource/dm-sans";

import "./globals.css";
import { Inter } from "next/font/google";

import { siteConfig } from "@/config/site";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import ThemeProvider from "@/lib/theme/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "finance",
    "budget",
    "budgeting",
    "personal finance",
    "personal budget",
    "personal budgeting",
    "nextjs",
  ],
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "background.light",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "background.dark",
    },
  ],
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider>{children}</ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
