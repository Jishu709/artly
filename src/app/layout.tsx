import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v22.0"
        ></script>
      </head>
      <body className="grid gap-1 bg-slate-100">
        <Navigation />
        <div className="mx-auto w-full max-w-4xl px-2">{children}</div>
      </body>
    </html>
  );
}
