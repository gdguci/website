import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNavbar } from "./components/SiteNavbar";

const brandSans = Roboto({
  variable: "--font-brand-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const brandMono = Roboto_Mono({
  variable: "--font-brand-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Google Developer Group on Campus @ UCI",
  description:
    "GDG on Campus at UC Irvine is a community for developers and tech enthusiasts. We host events, workshops, and meetups to learn, connect, and grow together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${brandSans.variable} ${brandMono.variable} antialiased`}
      >
        <div className="min-h-dvh bg-background text-foreground">
          <SiteNavbar />
          <div className="min-h-[calc(100dvh-64px)]">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
