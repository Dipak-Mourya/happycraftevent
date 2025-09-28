import type { Metadata } from "next"
import { ServicesContent } from "@/components/pages/services-content"

export const metadata: Metadata = {
  title: "Services",
  description: "From corporate conferences to dream weddings, we deliver exceptional experiences across all event types with unmatched creativity and precision.",
  openGraph: {
    title: "Services - Happy Craft Event",
    description: "From corporate conferences to dream weddings, we deliver exceptional experiences across all event types with unmatched creativity and precision.",
    images: ["/corporate-event-planning-service.jpg"],
  },
}

export default function ServicesPage() {
  return <ServicesContent />
}
