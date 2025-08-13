"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/hooks/use-cart"
import Image from "next/image"

interface WishlistItem {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  inStock: boolean
}

const mockWishlistItems: WishlistItem[] = [
  {
    id: "1",
    name: "Elegant Ankara Maxi Dress",
    price: 8500,
    originalPrice: 10000,
    image: "/elegant-african-model.png",
    category: "Dresses",
    inStock: true,
  },
  {
    id: "2",
    name: "Traditional Kente Wrap",
    price: 6500,
    image: "/contemporary-african-boutique.png",
    category: "Accessories",
    inStock: true,
  },
  {
    id: "3",
    name: "Modern African Print Blazer",
    price: 12000,
    originalPrice: 15000,
    image: "/vibrant-ankara-dress.png",
    category: "Blazers",
    inStock: false,
  },
]

export function WishlistContent() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(mockWishlistItems)
  const { toast } = useToast()
  const { addItem } = useCart()

  const removeFromWishlist = (itemId: string) => {
    setWishlistItems((items) => items.filter((item) => item.id !== itemId))
    toast({
      title: "Removed from Wishlist",
      description: "Item has been removed from your wishlist.",
    })
  }

  const addToCart = (item: WishlistItem) => {
    if (!item.inStock) {
      toast({
        title: "Out of Stock",
        description: "This item is currently out of stock.",
        variant: "destructive",
      })
      return
    }

    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    })
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Wishlist</h1>
          <p className="text-muted-foreground">
            {wishlistItems.length} item{wishlistItems.length !== 1 ? "s" : ""} saved for later
          </p>
        </div>

        {wishlistItems.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Heart className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Your Wishlist is Empty</h3>
              <p className="text-muted-foreground mb-6 text-center">
                Save items you love to your wishlist and shop them later.
              </p>
              <Button>
                <a href="/shop">Continue Shopping</a>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="secondary" className="bg-white text-black">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <h3 className="font-semibold text-sm line-clamp-2">{item.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">KSh {item.price.toLocaleString()}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          KSh {item.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button className="w-full mt-4" onClick={() => addToCart(item)} disabled={!item.inStock}>
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {item.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
