"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const heroSlides = [
  {
    id: 1,
    title: "Timeless African Elegance",
    subtitle: "Discover our exclusive collection where tradition meets contemporary fashion",
    cta: "Shop Collection",
    image: "/timeless-elegance-hero.png",
    badge: "New Collection",
    rating: 4.9,
    reviews: 2847,
  },
  {
    id: 2,
    title: "Luxury Ankara Prints",
    subtitle: "Handcrafted pieces that celebrate African heritage with modern sophistication",
    cta: "Explore Prints",
    image: "/luxury-african-prints.png",
    badge: "Limited Edition",
    rating: 4.8,
    reviews: 1923,
  },
  {
    id: 3,
    title: "Contemporary Fashion",
    subtitle: "Bold designs for the modern African woman who embraces her roots",
    cta: "View Styles",
    image: "/contemporary-fashion-hero.png",
    badge: "Trending Now",
    rating: 4.9,
    reviews: 3156,
  },
]

export function LuxuryHeroSection() {
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
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, var(--primary) 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-bounce-in animate-delay-200">
              <Star className="w-4 h-4 fill-current" />
              {currentSlideData.badge}
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight animate-slide-up animate-delay-300">
                {currentSlideData.title.split(" ").map((word, index) => (
                  <span key={index} className={index === 1 ? "text-gradient" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg animate-slide-up animate-delay-500">
                {currentSlideData.subtitle}
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 animate-slide-up animate-delay-700">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {currentSlideData.rating} ({currentSlideData.reviews.toLocaleString()} reviews)
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-1000">
              <Button
                size="lg"
                className="btn-primary bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
              >
                {currentSlideData.cta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Story
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative animate-scale-in animate-delay-500">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={currentSlideData.image || "/placeholder.svg"}
                alt={currentSlideData.title}
                fill
                className="object-cover hover-scale"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium animate-float">
              Free Shipping
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium animate-float animate-delay-1000">
              Authentic Designs
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="bg-background/80 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-primary scale-125" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="bg-background/80 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Auto-play Control */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-8 right-8 bg-background/80 backdrop-blur-sm"
      >
        {isAutoPlaying ? "Pause" : "Play"}
      </Button>
    </div>
  )
}

export default LuxuryHeroSection
