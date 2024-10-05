import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";

import { ThemeProvider } from "@/components/themes/theme-provider";
import ThemeSwitcher from "@/components/themes/theme-switcher";
import { cn } from "@/lib/utils";

import { MoonIcon, SunIcon } from "../../public/svgs";
import "./globals.css";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  display: "swap",
  preload: true,
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
      <body className={cn(roboto.className, "antialiased")}>
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
