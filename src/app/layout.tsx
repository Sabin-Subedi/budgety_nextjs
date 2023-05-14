import "@fontsource/dm-sans";
import "@fontsource/pt-sans";

import { Inter } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/config/site";
import { AuthContextProvider } from "@/context/AuthContext";
import QueryProvider from "@/lib/rquery/query-provider";
import ThemeProvider from "@/lib/theme/ThemeProvider";
import { Suspense } from "react";

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
          <QueryProvider>
            <ThemeProvider>
              <AuthContextProvider>{children}</AuthContextProvider>
            </ThemeProvider>
          </QueryProvider>
        </Suspense>
      </body>
    </html>
  );
}
