import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://nexsports.in"),
  title: {
    default: "NexSports - Book Your Game, Anytime",
    template: "%s | NexSports",
  },
  description:
    "The ultimate sports booking platform for turf, pickleball, and more. Reserve your favorite venues instantly. Built by Team NexPictora.",
  keywords: [
    "sports booking",
    "turf booking",
    "pickleball court navigation",
    "badminton court booking",
    "cricket turf",
    "football turf",
    "online sports venue booking",
  ],
  authors: [{ name: "NexPictora", url: "https://nexpictora.com" }],
  creator: "NexPictora",
  publisher: "NexPictora",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexsports.in",
    title: "NexSports - Book Your Game, Anytime",
    description:
      "The ultimate sports booking platform for turf, pickleball, and more. Reserve your favorite venues instantly.",
    siteName: "NexSports",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NexSports - Book Your Game, Anytime",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexSports - Book Your Game, Anytime",
    description:
      "The ultimate sports booking platform for turf, pickleball, and more. Reserve your favorite venues instantly.",
    images: ["/og.png"],
    creator: "@nexpictora", // Assuming handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "NexSports",
              url: "https://nexsports.in",
              description: "The ultimate sports booking platform for turf, pickleball, and more.",
              author: {
                "@type": "Organization",
                name: "NexPictora",
                url: "https://nexpictora.com",
              },
            }),
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
