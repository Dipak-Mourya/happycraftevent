"use client"

import { useState } from "react"
import { ImageLightbox } from "@/components/image-lightbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { galleryImages, galleryCategories } from "@/data/gallery-data"

export function GalleryContent() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((image) => image.category === selectedCategory)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-10 lg:py-12 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              Our Gallery
            </Badge>
             <h1 className="text-2xl lg:text-4xl font-bold text-balance mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              A Glimpse of Our Unforgettable Creations
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-2">
              Explore our portfolio of extraordinary events and celebrations. Each image tells a story of creativity,
              precision, and unforgettable experiences crafted with passion.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {galleryCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category ? "bg-primary cursor-pointer" : "bg-white hover:bg-primary cursor-pointer"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square relative">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white p-4">
                      <Badge variant="secondary" className="mb-2">
                        {image.category}
                      </Badge>
                      <h3 className="font-semibold text-lg mb-1">{image.event}</h3>
                      <p className="text-sm opacity-90">
                        {image.location} • {image.year}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        images={filteredImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </>
  )
}