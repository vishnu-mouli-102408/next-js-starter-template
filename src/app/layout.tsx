import type { Metadata } from "next";
import localFont from "next/font/local";

import { MoonIcon, SunIcon } from "@/assets/svgs";
import { ThemeProvider } from "@/components/themes/theme-provider";
import ThemeSwitcher from "@/components/themes/theme-switcher";

import "./globals.css";

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
  title: "Next JS Starter Kit",
  description:
    "Next JS Starter Kit with TypeScript, ESLint, Prettier, Tailwind CSS, and Github Workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeSwitcher rightIcon={<MoonIcon />} leftIcon={<SunIcon />} />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
