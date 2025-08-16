"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const heroSlides = [
  {
    id: 1,
    title: "Timeless African Elegance",
    subtitle: "Discover our exclusive collection where tradition meets contemporary fashion",
    description: "Elevate your wardrobe with handcrafted pieces that celebrate African heritage",
    image: "/timeless-elegance-hero.png",
    cta: "Shop Collection",
    ctaLink: "/shop",
    badge: "New Arrivals",
  },
  {
    id: 2,
    title: "Luxury African Prints",
    subtitle: "Premium fabrics, exceptional craftsmanship, timeless style",
    description: "Each piece tells a story of cultural richness and modern sophistication",
    image: "/luxury-african-prints.png",
    cta: "Explore Prints",
    ctaLink: "/shop?category=african-designs",
    badge: "Limited Edition",
  },
  {
    id: 3,
    title: "Contemporary Fashion",
    subtitle: "Modern silhouettes inspired by African artistry",
    description: "Where innovation meets tradition in every stitch",
    image: "/contemporary-fashion-hero.png",
    cta: "View Collection",
    ctaLink: "/shop?category=contemporary",
    badge: "Trending Now",
  },
]

export function ModernHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(190,18,60,0.1)_0%,transparent_50%)] bg-[length:60px_60px]"></div>
      </div>

      {/* Slides Container */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                {/* Content */}
                <div className="space-y-8 animate-fade-in">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-bounce-in">
                    <Sparkles className="h-4 w-4" />
                    {slide.badge}
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight animate-slide-up">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <h2 className="text-xl md:text-2xl text-muted-foreground font-light animate-slide-up animate-delay-200">
                    {slide.subtitle}
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-slide-up animate-delay-300">
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-500">
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <Link href={slide.ctaLink}>{slide.cta}</Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                    >
                      <Link href="/about">Our Story</Link>
                    </Button>
                  </div>

                  {/* Social Proof */}
                  <div className="flex items-center gap-6 pt-4 animate-slide-up animate-delay-700">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">4.9/5</span> from 2,500+ customers
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative animate-scale-in animate-delay-300">
                  <div className="relative aspect-[4/5] max-w-lg mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3 animate-float"></div>
                    <div className="relative bg-card rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                      <Image
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm text-foreground p-3 rounded-full shadow-lg hover:bg-background hover:scale-110 transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm text-foreground p-3 rounded-full shadow-lg hover:bg-background hover:scale-110 transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-125 shadow-lg" : "bg-background/50 hover:bg-background/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-parallax-float opacity-20">
        <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full animate-morphing"></div>
      </div>
      <div className="absolute bottom-32 left-16 animate-parallax-float opacity-15 animate-delay-300">
        <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full animate-morphing"></div>
      </div>
    </section>
  )
}

export default ModernHeroSection
