"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "./scroll-reveal";

const faqs = [
  {
    question: "What types of events do you manage?",
    answer:
      "We specialize in corporate events, weddings, brand launches, exhibitions, product activations, conferences, and social gatherings. Our team has experience across all event types and scales.",
  },
  {
    question: "How far in advance should I book your services?",
    answer:
      "We recommend booking at least 2-3 months in advance for large events, though we can accommodate shorter timelines depending on availability and event complexity.",
  },
  {
    question: "Do you provide services outside of Kolkata?",
    answer:
      "Yes! We deliver exceptional events across 12+ cities in India including Mumbai, Bengaluru, New Delhi, Chennai, Hyderabad, and more. We have local partnerships to ensure seamless execution anywhere in India.",
  },
  {
    question: "What is included in your event management services?",
    answer:
      "Our comprehensive services include venue selection, vendor coordination, logistics management, design and decoration, catering coordination, entertainment booking, and on-site event management.",
  },
  {
    question: "How do you ensure events stay within budget?",
    answer:
      "We provide transparent pricing from the start and work closely with you to prioritize elements that matter most. Our cost-effective approach ensures exceptional value without compromising quality.",
  },
  {
    question: "Can you handle last-minute changes or emergencies?",
    answer:
      "Our experienced team is equipped to handle unexpected changes and emergencies. We always have contingency plans in place to ensure your event runs smoothly.",
  },
];

export function FAQAccordion() {
  return (
    <ScrollReveal direction="up" delay={400}>
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our event management
              services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
