"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function StyleGuideSection() {
  const [activeStyle, setActiveStyle] = useState("traditional")

  const styleGuides = [
    {
      id: "traditional",
      title: "Traditional Heritage",
      description: "Authentic African prints and patterns that celebrate our rich cultural heritage",
      image: "/african-traditional-dress.png",
      colors: ["#8B4513", "#DAA520", "#CD853F", "#F4A460"],
      patterns: ["Kente", "Ankara", "Mudcloth", "Wax Print"],
    },
    {
      id: "contemporary",
      title: "Contemporary Fusion",
      description: "Modern interpretations of classic African designs for today's fashion-forward individual",
      image: "/contemporary-african-boutique.png",
      colors: ["#2C3E50", "#E74C3C", "#F39C12", "#27AE60"],
      patterns: ["Geometric", "Abstract", "Minimalist", "Urban"],
    },
    {
      id: "luxury",
      title: "Luxury Collection",
      description: "Premium fabrics and sophisticated designs for special occasions and formal events",
      image: "/elegant-african-model.png",
      colors: ["#1A1A1A", "#D4AF37", "#8B0000", "#4B0082"],
      patterns: ["Embroidered", "Beaded", "Silk Blend", "Premium Cotton"],
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Our Style Philosophy</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the artistry behind LunaLuxe's collections, where traditional African craftsmanship meets
          contemporary design excellence.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {styleGuides.map((style) => (
          <Button
            key={style.id}
            variant={activeStyle === style.id ? "default" : "outline"}
            onClick={() => setActiveStyle(style.id)}
            className="px-6 py-3"
          >
            {style.title}
          </Button>
        ))}
      </div>

      {styleGuides.map((style) => (
        <div
          key={style.id}
          className={`transition-all duration-500 ${
            activeStyle === style.id ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-foreground">{style.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{style.description}</p>

              <div>
                <h4 className="text-xl font-semibold mb-4">Color Palette</h4>
                <div className="flex gap-3">
                  {style.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-full border-2 border-border shadow-md"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">Signature Patterns</h4>
                <div className="flex flex-wrap gap-2">
                  {style.patterns.map((pattern, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {pattern}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={style.image || "/placeholder.svg"}
                  alt={style.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
