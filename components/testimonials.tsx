"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./scroll-reveal";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    title: "CEO",
    company: "Tech Innovations Ltd",
    content:
      "Happy Craft Event transformed our annual conference into an unforgettable experience. Their attention to detail and professional execution exceeded our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "Marketing Director",
    company: "Global Solutions Inc",
    content:
      "The team at Happy Craft Event delivered a flawless product launch event. Every aspect was perfectly coordinated, from venue setup to guest management.",
    rating: 3,
  },
  {
    id: 3,
    name: "Amit Patel",
    title: "Founder",
    company: "StartUp Hub",
    content:
      "Outstanding service and creativity! They brought our vision to life and created an event that our guests are still talking about months later.",
    rating: 4,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <ScrollReveal direction="up" delay={400}>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from the brands and individuals who have experienced the
              Happy Craft Event difference.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="relative">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-secondary"
                    />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-muted-foreground mb-8 italic">
                  "{currentTestimonial.content}"
                </blockquote>

                <div>
                  <div className="font-semibold text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-muted-foreground">
                    {currentTestimonial.title}, {currentTestimonial.company}
                  </div>
                </div>
              </CardContent>

              {/* Navigation */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent cursor-pointer hover:bg-primary/90 rounded-full"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent cursor-pointer hover:bg-primary/90 rounded-full"
                onClick={goToNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Card>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-secondary"
                      : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
