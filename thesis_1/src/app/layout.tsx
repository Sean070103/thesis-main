import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { RainbowKitProvider } from "../components/rainbow-kit-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FundChain - Decentralized Crowdfunding",
  description: "A transparent, secure, and decentralized crowdfunding platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
