"use client"

import { useState, useEffect } from "react"
import { AddToCartButton } from "@/components/cart/add-to-cart-button"
import Image from "next/image"

const productCategories = {
  "best-sales": [
    { id: "1", name: "Designer Dress", image: "/elegant-african-designer-dress.png", price: 4500 },
    { id: "2", name: "Luxury Handbag", image: "/placeholder-4oyyy.png", price: 3200 },
    { id: "3", name: "Signature Watch", image: "/placeholder-zevio.png", price: 8500 },
    { id: "4", name: "Classic Shoes", image: "/classic-african-shoes.png", price: 2800 },
    { id: "5", name: "Elegant Dress", image: "/elegant-african-print-dress.png", price: 3800 },
    { id: "6", name: "Premium Watch", image: "/placeholder-29dec.png", price: 12000 },
    { id: "7", name: "Designer Bag", image: "/placeholder.svg?height=300&width=300", price: 4200 },
    { id: "8", name: "Fashion Boots", image: "/placeholder.svg?height=300&width=300", price: 3600 },
    { id: "9", name: "Luxury Watch", image: "/placeholder.svg?height=300&width=300", price: 15000 },
    { id: "10", name: "Classic Handbag", image: "/placeholder.svg?height=300&width=300", price: 2900 },
    { id: "11", name: "Designer Shoes", image: "/placeholder.svg?height=300&width=300", price: 3400 },
    { id: "12", name: "Premium Dress", image: "/placeholder.svg?height=300&width=300", price: 5200 },
  ],
  "new-arrivals": [
    { id: "13", name: "Modern Dress", image: "/placeholder.svg?height=300&width=300", price: 3900 },
    { id: "14", name: "Trendy Bag", image: "/placeholder.svg?height=300&width=300", price: 2700 },
    { id: "15", name: "Fashion Watch", image: "/placeholder.svg?height=300&width=300", price: 6800 },
    { id: "16", name: "Stylish Shoes", image: "/placeholder.svg?height=300&width=300", price: 3100 },
    { id: "17", name: "Chic Dress", image: "/placeholder.svg?height=300&width=300", price: 4100 },
    { id: "18", name: "Modern Watch", image: "/placeholder.svg?height=300&width=300", price: 9200 },
    { id: "19", name: "Fashion Bag", image: "/placeholder.svg?height=300&width=300", price: 3500 },
    { id: "20", name: "Trendy Boots", image: "/placeholder.svg?height=300&width=300", price: 4000 },
    { id: "21", name: "Smart Watch", image: "/placeholder.svg?height=300&width=300", price: 11500 },
    { id: "22", name: "Designer Tote", image: "/placeholder.svg?height=300&width=300", price: 3800 },
    { id: "23", name: "Modern Sneakers", image: "/placeholder.svg?height=300&width=300", price: 2600 },
    { id: "24", name: "Evening Dress", image: "/placeholder.svg?height=300&width=300", price: 6200 },
  ],
  "hot-sales": [
    { id: "25", name: "Sale Dress", image: "/placeholder.svg?height=300&width=300", price: 2400 },
    { id: "26", name: "Discount Bag", image: "/placeholder.svg?height=300&width=300", price: 1800 },
    { id: "27", name: "Special Watch", image: "/placeholder.svg?height=300&width=300", price: 4500 },
    { id: "28", name: "Sale Shoes", image: "/placeholder.svg?height=300&width=300", price: 1900 },
    { id: "29", name: "Special Dress", image: "/placeholder.svg?height=300&width=300", price: 2800 },
    { id: "30", name: "Discount Watch", image: "/placeholder.svg?height=300&width=300", price: 3200 },
    { id: "31", name: "Sale Bag", image: "/placeholder.svg?height=300&width=300", price: 2100 },
    { id: "32", name: "Special Boots", image: "/placeholder.svg?height=300&width=300", price: 2600 },
  ],
}

export function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof productCategories>("best-sales")
  const [animateProducts, setAnimateProducts] = useState(false)

  useEffect(() => {
    setAnimateProducts(false)
    const timer = setTimeout(() => setAnimateProducts(true), 100)
    return () => clearTimeout(timer)
  }, [activeCategory])

  return (
    <section className="py-16 scroll-reveal">
      <div className="max-w-7xl mx-auto px-4">
        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <nav className="flex gap-8">
            <button
              onClick={() => setActiveCategory("best-sales")}
              className={`text-lg font-medium pb-2 border-b-2 transition-all duration-300 hover-bounce ${
                activeCategory === "best-sales"
                  ? "text-foreground border-primary animate-glow"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              Best Sales
            </button>
            <button
              onClick={() => setActiveCategory("new-arrivals")}
              className={`text-lg font-medium pb-2 border-b-2 transition-all duration-300 hover-bounce ${
                activeCategory === "new-arrivals"
                  ? "text-foreground border-primary animate-glow"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              New Arrivals
            </button>
            <button
              onClick={() => setActiveCategory("hot-sales")}
              className={`text-lg font-medium pb-2 border-b-2 transition-all duration-300 hover-bounce ${
                activeCategory === "hot-sales"
                  ? "text-foreground border-primary animate-glow"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              Hot Sales
            </button>
          </nav>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productCategories[activeCategory].map((product, index) => (
            <div
              key={product.id}
              className={`product-card group cursor-pointer hover-tilt ${
                animateProducts ? "animate-bounce-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-muted mb-4 relative">
                <div className="absolute inset-0 skeleton animate-shimmer opacity-20"></div>
                <Image
                  src={product.image || "/placeholder.svg?height=300&width=300&text=Product"}
                  alt={`${product.name} - Featured product in ${activeCategory} category`}
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-500 relative z-10"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm font-semibold animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  KSh {product.price}
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-xl font-semibold price-text animate-heartbeat">{`KSh ${product.price.toFixed(2)}`}</p>
                <AddToCartButton product={product} className="w-full btn-primary hover-glow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
