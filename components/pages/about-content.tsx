import { PartnerSlider } from "@/components/partner-slider";
import { CountUp } from "@/components/count-up";
import { QuoteModal } from "@/components/quote-modal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Calendar, Trophy } from "lucide-react";
import { aboutData } from "@/data/about-data";
import Image from "next/image";
import { ScrollReveal } from "../scroll-reveal";

export function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <ScrollReveal direction="up" delay={200}>
        <section className="relative mt-10 lg:mt-12 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6 text-sm font-medium">
                About Us
              </Badge>

              <h1 className="text-2xl lg:text-4xl font-bold text-balance mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Crafting Extraordinary Experiences Since 2015
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-4">
                Happy Craft Event has been at the forefront of event management
                in India, transforming visions into unforgettable experiences
                with creativity, precision, and passion.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Founder Section */}
      <ScrollReveal direction="up" delay={200}>
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Badge variant="outline" className="mb-4 bg-primary text-white">
                  Our Founder
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Meet Our Visionary Leader
                </h2>
                {aboutData.founder.description.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-6">
                    {paragraph}
                  </p>
                ))}
                <div className="space-y-2">
                  <p className="font-semibold">{aboutData.founder.name}</p>
                  <p className="text-muted-foreground">
                    {aboutData.founder.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {aboutData.founder.qualification}
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Image
                  src={aboutData.founder.image}
                  alt={`${aboutData.founder.name}, Founder of Happy Craft Event`}
                  className="rounded-lg shadow-lg w-full h-auto"
                  draggable={false}
                  width={450}
                  height={350}
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Company Story */}
      <ScrollReveal direction="up" delay={200}>
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <Image
                  src="/tech-conference-modern-stage.jpg"
                  alt="Our Story"
                  className="rounded-lg shadow-lg w-full h-auto"
                  draggable={false}
                  width={450}
                  height={350}
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Story
                </h2>
                <ul className="space-y-4 text-muted-foreground list-disc pl-5">
                  {aboutData.story.map((point, index) => (
                    <li key={index} className="text-lg">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Stats Section */}
      <ScrollReveal direction="up" delay={200}>
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Achievements
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and the trust
                our clients place in us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aboutData.stats.map((stat, index) => {
                const IconComponent =
                  stat.icon === "Calendar"
                    ? Calendar
                    : stat.icon === "Users"
                    ? Users
                    : stat.icon === "Trophy"
                    ? Trophy
                    : Award;

                return (
                  <Card key={index} className="text-center p-8">
                    <CardContent className="p-0">
                      <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                      <CountUp end={stat.value} suffix={stat.suffix} />
                      <p className="text-muted-foreground mt-2">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Trusted Partners */}
      <PartnerSlider />

      {/* CTA Section */}
      <ScrollReveal direction="up" delay={200}>
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Envisioning a Successful Event? Let's Make It Happen.
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Ready to create an extraordinary experience? Get in touch with
                our team for a personalized quote and let's bring your vision to
                life.
              </p>
              <QuoteModal>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white hover:bg-secondary text-secondary-foreground cursor-pointer"
                >
                  Get a Free Quote
                </Button>
              </QuoteModal>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
