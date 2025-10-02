import type { Metadata } from "next"
import { AboutContent } from "@/components/pages/about-content"

export const metadata: Metadata = {
  title: "About Us",
  description: "HappyCraft Events has been at the forefront of event management in India, transforming visions into unforgettable experiences with creativity, precision, and passion.",
  openGraph: {
    title: "About Us - HappyCraft Events",
    description: "HappyCraft Events has been at the forefront of event management in India, transforming visions into unforgettable experiences with creativity, precision, and passion.",
    images: ["/founder-rajesh-sharma-professional-portrait.jpg"],
  },
}

export default function AboutPage() {
  return <AboutContent />
}
