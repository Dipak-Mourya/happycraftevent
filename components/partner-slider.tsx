"use client";

import { useEffect, useState } from "react";
import { ScrollReveal } from "./scroll-reveal";

const partners = [
  { name: "Microsoft", logo: "🏢" },
  { name: "Google", logo: "🔍" },
  { name: "Amazon", logo: "📦" },
  { name: "Apple", logo: "🍎" },
  { name: "Meta", logo: "📘" },
  { name: "Netflix", logo: "🎬" },
  { name: "Tesla", logo: "⚡" },
  { name: "Adobe", logo: "🎨" },
  { name: "Salesforce", logo: "☁️" },
  { name: "Oracle", logo: "🔶" },
  { name: "IBM", logo: "💼" },
  { name: "Intel", logo: "💻" },
  { name: "Samsung", logo: "📱" },
  { name: "Sony", logo: "🎵" },
  { name: "LG", logo: "📺" },
  { name: "Tata", logo: "🏭" },
];

export function PartnerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(3); // Mobile: 3 partners
      } else if (window.innerWidth < 1024) {
        setVisibleCount(4); // Tablet: 4 partners
      } else {
        setVisibleCount(6); // Desktop: 6 partners
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);

    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (partners.length - visibleCount + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [visibleCount]);

  return (
    <ScrollReveal direction="up" delay={200}>
      <div className="w-full overflow-hidden bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-2xl font-bold mb-8 text-muted-foreground">
            Trusted by Leading Brands
          </h3>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` 
              }}
            >
              {partners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-1/3 md:w-1/4 lg:w-1/6 px-2 md:px-3 lg:px-4"
                >
                  <div className="flex flex-col items-center justify-center p-4 md:p-5 lg:p-6 rounded-lg bg-card hover:bg-card/80 transition-all duration-300 hover-lift group">
                    <div className="text-2xl md:text-3xl lg:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {partner.logo}
                    </div>
                    <div className="text-xs md:text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors text-center">
                      {partner.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

         
        </div>
      </div>
    </ScrollReveal>
  );
}
