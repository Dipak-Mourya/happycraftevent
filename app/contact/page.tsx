import type { Metadata } from "next"
import { ContactContent } from "@/components/pages/contact-content"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Have an Event Vision? Let's Bring It to Life with Unforgettable Experiences! Get in touch with Happy Craft Event for professional event management services.",
  openGraph: {
    title: "Contact Us - Happy Craft Event",
    description: "Have an Event Vision? Let's Bring It to Life with Unforgettable Experiences! Get in touch with Happy Craft Event for professional event management services.",
    images: ["/professional-corporate-event-conference.jpg"],
  },
}

export default function ContactPage() {
  return <ContactContent />
}
