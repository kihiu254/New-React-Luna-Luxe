"use client"

import { useState } from "react"
import { ArrowRight, Heart, Eye, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const collections = [
  {
    id: 1,
    name: "Royal Ankara",
    description: "Majestic prints inspired by African royalty",
    image: "/royal-ankara-collection.png",
    itemCount: 24,
    priceRange: "KSh 2,500 - 4,800",
    featured: true,
  },
  {
    id: 2,
    name: "Modern Kente",
    description: "Contemporary takes on traditional Kente patterns",
    image: "/modern-kente-collection.png",
    itemCount: 18,
    priceRange: "KSh 3,200 - 5,500",
    featured: false,
  },
  {
    id: 3,
    name: "Urban Dashiki",
    description: "Street-style meets traditional African fashion",
    image: "/urban-dashiki-collection.png",
    itemCount: 32,
    priceRange: "KSh 2,800 - 4,200",
    featured: false,
  },
  {
    id: 4,
    name: "Elegant Wax",
    description: "Sophisticated wax print designs for special occasions",
    image: "/elegant-wax-collection.png",
    itemCount: 16,
    priceRange: "KSh 4,000 - 5,500",
    featured: true,
  },
]

export function CollectionShowcase() {
  const [hoveredCollection, setHoveredCollection] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Featured <span className="text-gradient">Collections</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our curated collections that blend traditional African aesthetics with contemporary fashion
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {collections.map((collection, index) => (
          <div
            key={collection.id}
            className={`group relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover-scale cursor-pointer animate-slide-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setHoveredCollection(collection.id)}
            onMouseLeave={() => setHoveredCollection(null)}
          >
            {/* Collection Image */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={collection.image || "/placeholder.svg"}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Featured Badge */}
              {collection.featured && (
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium animate-bounce-in">
                  Featured
                </div>
              )}

              {/* Quick Actions */}
              <div
                className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
                  hoveredCollection === collection.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
              >
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </div>

              {/* Quick Shop Button */}
              <div
                className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
                  hoveredCollection === collection.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Quick Shop
                </Button>
              </div>
            </div>

            {/* Collection Info */}
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-card-foreground">{collection.name}</h3>
                <span className="text-sm text-muted-foreground">{collection.itemCount} items</span>
              </div>

              <p className="text-muted-foreground text-sm">{collection.description}</p>

              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-medium text-primary">{collection.priceRange}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary-foreground hover:bg-primary"
                >
                  View All
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Collections CTA */}
      <div className="text-center mt-16 animate-fade-in animate-delay-1000">
        <Button
          size="lg"
          variant="outline"
          className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 bg-transparent"
        >
          Explore All Collections
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  )
}
