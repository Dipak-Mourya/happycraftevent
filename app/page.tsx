import type { Metadata } from "next"
import { HomeContent } from "@/components/pages/home-content"

export const metadata: Metadata = {
  title: "Home | Happy Craft Event",
  description: "Begin an extraordinary journey with Happy Craft Event. Design, delight, and inspire with India's premier corporate event management company, where every moment is crafted to perfection.",
  openGraph: {
    title: "Happy Craft Event - Top Event Management Company in India",
    description: "Begin an extraordinary journey with Happy Craft Event. Design, delight, and inspire with India's premier corporate event management company.",
    images: ["/professional-corporate-event-conference.jpg"],
  },
}

export default function HomePage() {
  return <HomeContent />
}
