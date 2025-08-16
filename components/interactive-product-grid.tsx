"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Eye } from "lucide-react"

export function InteractiveProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const categories = [
    { id: "all", name: "All Products" },
    { id: "dresses", name: "Dresses" },
    { id: "tops", name: "Tops & Blouses" },
    { id: "accessories", name: "Accessories" },
    { id: "traditional", name: "Traditional Wear" },
  ]

  const products = [
    {
      id: 1,
      name: "Royal Ankara Maxi Dress",
      price: "KSh 4,500",
      originalPrice: "KSh 5,500",
      image: "/royal-ankara-collection.png",
      category: "dresses",
      isNew: true,
      isSale: true,
      colors: ["#8B4513", "#DAA520", "#CD853F"],
    },
    {
      id: 2,
      name: "Modern Kente Blazer",
      price: "KSh 3,800",
      image: "/modern-kente-collection.png",
      category: "tops",
      isNew: false,
      isSale: false,
      colors: ["#2C3E50", "#E74C3C", "#F39C12"],
    },
    {
      id: 3,
      name: "Urban Dashiki Shirt",
      price: "KSh 2,900",
      image: "/urban-dashiki-collection.png",
      category: "tops",
      isNew: true,
      isSale: false,
      colors: ["#27AE60", "#3498DB", "#9B59B6"],
    },
    {
      id: 4,
      name: "Elegant Wax Print Dress",
      price: "KSh 4,200",
      originalPrice: "KSh 5,000",
      image: "/elegant-wax-collection.png",
      category: "dresses",
      isNew: false,
      isSale: true,
      colors: ["#E74C3C", "#F39C12", "#27AE60"],
    },
    {
      id: 5,
      name: "Traditional Boubou",
      price: "KSh 5,200",
      image: "/african-traditional-dress.png",
      category: "traditional",
      isNew: false,
      isSale: false,
      colors: ["#8B4513", "#DAA520", "#CD853F"],
    },
    {
      id: 6,
      name: "Contemporary Headwrap Set",
      price: "KSh 1,800",
      image: "/african-accessories.png",
      category: "accessories",
      isNew: true,
      isSale: false,
      colors: ["#E74C3C", "#F39C12", "#27AE60"],
    },
  ]

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Featured Collections</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Discover our handpicked selection of premium African fashion pieces, each telling a unique story of heritage
          and style.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="px-6 py-2"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && <Badge className="bg-green-500 text-white">New</Badge>}
                {product.isSale && <Badge className="bg-red-500 text-white">Sale</Badge>}
              </div>

              {/* Action Buttons */}
              <div
                className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
                  hoveredProduct === product.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
              >
                <Button size="sm" variant="secondary" className="w-10 h-10 p-0 rounded-full">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="secondary" className="w-10 h-10 p-0 rounded-full">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>

              {/* Quick Add to Cart */}
              <div
                className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
                  hoveredProduct === product.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Button className="w-full" size="sm">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>

            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                )}
              </div>

              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full border-2 border-border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button size="lg" className="px-8">
          View All Products
        </Button>
      </div>
    </div>
  )
}
