"use client";

import { CheckCircle, Users, Award, Shield } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden">
            <ScrollReveal direction="left">
              <Image
                src="home/other/about.jpeg"
                alt="Happy Craft Event team at work"
                className="rounded-lg shadow-lg hover-scale w-full h-auto"
                width={500}
                height={200}
                draggable={false}
                loading="lazy"
              />
            </ScrollReveal>
          </div>
          <ScrollReveal direction="right" delay={200}>
            <Badge variant="secondary" className="mb-4">
              About Our Company
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Trusted Partner
            </h2>

            <div className="space-y-6">
              <ScrollReveal direction="up" delay={300}>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Experience and Expertise
                    </h3>
                    <p className="text-muted-foreground">
                      Happy Craft Event combines experience with unmatched
                      expertise to deliver extraordinary, impactful events.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={400}>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-2 flex-shrink-0">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cost Effectiveness</h3>
                    <p className="text-muted-foreground">
                      We deliver exceptional events without compromising your
                      budget.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={500}>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-2 flex-shrink-0">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Proven Track Record
                    </h3>
                    <p className="text-muted-foreground">
                      Our portfolio reflects our dedication to excellence and
                      flawless execution.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={600}>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-2 flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Transparency</h3>
                    <p className="text-muted-foreground">
                      Honest, transparent communication from start to finish.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}