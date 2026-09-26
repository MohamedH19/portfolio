import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070d1e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mohamed Hesham | Cross-Platform Mobile Application Developer (Flutter & Dart)",
  description: "Official portfolio of Mohamed Hesham Ismael Ibrahim — Cross-Platform Mobile Application Developer specializing in Flutter 3.x, Dart, Riverpod, Firebase, and REST APIs. Bachelor of Computer Science from Ain Shams University and ITI Certified.",
  keywords: [
    "Mohamed Hesham",
    "Mohamed Hesham Ismael Ibrahim",
    "Flutter Developer",
    "Cross-Platform Mobile Developer",
    "Dart Developer",
    "Riverpod State Management",
    "Ain Shams University Computer Science",
    "ITI Flutter Certified",
    "Mobile App Engineer Cairo Egypt",
    "iOS and Android Developer",
    "WiseWallet",
    "Weather App Flutter"
  ],
  authors: [{ name: "Mohamed Hesham Ismael Ibrahim", url: "https://github.com/MohamedH19" }],
  creator: "Mohamed Hesham Ismael Ibrahim",
  metadataBase: new URL("https://mohamedhesham.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohamedhesham.dev",
    title: "Mohamed Hesham | Cross-Platform Mobile Application Developer",
    description: "Specializing in high-performance iOS and Android mobile apps with Flutter, Riverpod, and Clean Architecture.",
    siteName: "Mohamed Hesham Portfolio",
    images: [
      {
        url: "/assets/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Hesham - Flutter Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Hesham | Cross-Platform Mobile Developer",
    description: "Specializing in high-performance iOS and Android mobile apps with Flutter, Riverpod, and Clean Architecture.",
    images: ["/assets/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#070d1e] text-slate-100 flex flex-col antialiased selection:bg-yellow-400 selection:text-slate-950">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
