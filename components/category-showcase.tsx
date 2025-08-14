"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, User, Users, Globe, Footprints } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: "mens",
    title: "Men's Fashion",
    description: "Contemporary African menswear",
    icon: User,
    image: "/mens-fashion-category.png",
    products: 120,
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: "womens",
    title: "Women's Fashion",
    description: "Elegant feminine designs",
    icon: Users,
    image: "/womens-fashion-category.png",
    products: 180,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "african",
    title: "African Designs",
    description: "Traditional meets modern",
    icon: Globe,
    image: "/african-designs-category.png",
    products: 95,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: "footwear",
    title: "Footwear",
    description: "Stylish shoes & sandals",
    icon: Footprints,
    image: "/footwear-category.png",
    products: 75,
    gradient: "from-purple-500 to-violet-600",
  },
]

export function CategoryShowcase() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">Shop By Category</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections of premium African fashion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.id}
                className={`group relative overflow-hidden border-0 shadow-xl hover-scale cursor-pointer animate-slide-up animate-delay-${index * 100}`}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90`} />
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${category.image})` }}
                />

                <CardContent className="relative z-10 p-8 text-white h-64 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <IconComponent className="w-12 h-12 animate-float" />
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                      {category.products}+ items
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-playfair font-bold">{category.title}</h3>
                    <p className="text-white/90 text-sm">{category.description}</p>

                    <Link href={`/shop?category=${category.id}`}>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="group/btn bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-300"
                      >
                        Explore
                        <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>

                {hoveredCategory === category.id && <div className="absolute inset-0 bg-black/20 animate-fade-in" />}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
