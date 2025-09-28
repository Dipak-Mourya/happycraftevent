import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: {
    default: "Happy Craft Event - Top Event Management Company in India",
    template: "%s | Happy Craft Event"
  },
  description:
    "Begin an extraordinary journey with Happy Craft Event. Design, delight, and inspire with India's premier corporate event management company, where every moment is crafted to perfection.",
  keywords: [
    "event management",
    "corporate events", 
    "weddings",
    "brand launches",
    "exhibitions",
    "India",
    "Kolkata",
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Chennai",
    "Hyderabad"
  ],
  authors: [{ name: "Happy Craft Event", url: "https://happycraftevent.com" }],
  creator: "Happy Craft Event",
  publisher: "Happy Craft Event",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://happycraftevent.com",
    siteName: "Happy Craft Event",
    title: "Happy Craft Event - Top Event Management Company in India",
    description:
      "Begin an extraordinary journey with Happy Craft Event. Design, delight, and inspire with India's premier corporate event management company.",
    images: [
      {
        url: "/professional-corporate-event-conference.jpg",
        width: 1200,
        height: 630,
        alt: "Happy Craft Event - Professional Event Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Craft Event - Top Event Management Company in India",
    description:
      "Begin an extraordinary journey with Happy Craft Event. Design, delight, and inspire with India's premier corporate event management company.",
    images: ["/professional-corporate-event-conference.jpg"],
    creator: "@happycraftevent",
  },
  alternates: {
    canonical: "https://happycraftevent.com",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-16">
            <Suspense fallback={null}>{children}</Suspense>
          </main>
          <Footer />
        </div>
        <Toaster />
        <Analytics />
        <WhatsAppButton />
      </body>
    </html>
  )
}
