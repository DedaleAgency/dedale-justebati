import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

export const boska = localFont({
  src: [
    {
      path: "../public/fonts/Boska-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Boska-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-boska",
  display: "swap",
  preload: true,
});

export const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
