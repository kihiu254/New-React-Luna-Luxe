"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Eye, TrendingUp } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

const trendingProducts = [
  {
    id: "trend-1",
    name: "Ankara Print Blazer",
    price: 4200,
    originalPrice: 5500,
    image: "/trending-blazer.png",
    category: "Women's Fashion",
    trending: true,
    discount: 24,
  },
  {
    id: "trend-2",
    name: "Kente Bow Tie Set",
    price: 2800,
    originalPrice: 3200,
    image: "/trending-bowtie.png",
    category: "Men's Fashion",
    trending: true,
    discount: 13,
  },
  {
    id: "trend-3",
    name: "Maasai Beaded Sandals",
    price: 3500,
    originalPrice: 4000,
    image: "/trending-sandals.png",
    category: "Footwear",
    trending: true,
    discount: 13,
  },
  {
    id: "trend-4",
    name: "Dashiki Midi Dress",
    price: 4800,
    originalPrice: 5500,
    image: "/trending-dress.png",
    category: "African Designs",
    trending: true,
    discount: 13,
  },
]

export function TrendingSection() {
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set())
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleLike = (productId: string) => {
    const newLiked = new Set(likedItems)
    if (newLiked.has(productId)) {
      newLiked.delete(productId)
    } else {
      newLiked.add(productId)
    }
    setLikedItems(newLiked)
  }

  const handleAddToCart = (product: (typeof trendingProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-8 h-8 text-primary animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">Trending Now</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Most popular items this week - don't miss out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingProducts.map((product, index) => (
            <Card
              key={product.id}
              className={`group product-card animate-slide-up animate-delay-${index * 100} relative overflow-hidden`}
            >
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Trending badge */}
                <Badge className="absolute top-3 left-3 bg-red-500 text-white animate-pulse">🔥 Trending</Badge>

                {/* Discount badge */}
                <Badge className="absolute top-3 right-3 bg-green-500 text-white">-{product.discount}%</Badge>

                {/* Action buttons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="animate-scale-in animate-delay-100"
                    onClick={() => handleLike(product.id)}
                  >
                    <Heart className={`w-4 h-4 ${likedItems.has(product.id) ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                  <Button size="sm" variant="secondary" className="animate-scale-in animate-delay-200">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="animate-scale-in animate-delay-300"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <Badge variant="outline" className="mb-2 text-xs">
                  {product.category}
                </Badge>
                <h3 className="font-playfair font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">KSh {product.price.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground line-through">
                    KSh {product.originalPrice.toLocaleString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="btn-primary animate-glow">
            View All Trending Items
          </Button>
        </div>
      </div>
    </section>
  )
}
