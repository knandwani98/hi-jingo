import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/providers/StoreProvider";
import { cn } from "@/lib/utils";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hi-Jingo!",
  description: "A Japanese Game!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={cn(bricolage.className, "relative")}>{children}</body>
      </StoreProvider>
    </html>
  );
}
