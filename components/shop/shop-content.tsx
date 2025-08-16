"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Eye, Heart, Star, Filter, Grid, List, SortAsc } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  rating: number
  colors: string[]
  sizes?: string[]
}

const products: Product[] = [
  {
    id: 1,
    name: "Designer Dress",
    price: 4999,
    image: "/elegant-african-dress.png",
    category: "womens-dresses",
    rating: 4.8,
    colors: ["#000000", "#FF0000", "#0000FF"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Luxury Handbag",
    price: 5499,
    image: "/luxury-african-handbag.png",
    category: "womens-bags",
    rating: 4.9,
    colors: ["#000000", "#8B4513", "#A52A2A"],
  },
  {
    id: 3,
    name: "Signature Watch",
    price: 5299,
    image: "/placeholder-32ij4.png",
    category: "mens-watches",
    rating: 5.0,
    colors: ["#000000", "#C0C0C0"],
  },
  {
    id: 4,
    name: "Classic Shoes",
    price: 3999,
    image: "/placeholder-z0d7x.png",
    category: "mens-shoes",
    rating: 4.7,
    colors: ["#000000", "#8B4513"],
    sizes: ["39", "40", "41", "42", "43"],
  },
  {
    id: 5,
    name: "Stylish Sneakers",
    price: 3499,
    image: "/placeholder-y1asw.png",
    category: "footwear-sneakers",
    rating: 4.9,
    colors: ["#000000", "#FFFFFF", "#FF0000"],
    sizes: ["40", "41", "42", "43", "44"],
  },
  {
    id: 6,
    name: "Urban Sneakers",
    price: 3799,
    image: "/urban-african-sneakers.png",
    category: "footwear-sneakers",
    rating: 4.8,
    colors: ["#000000", "#808080", "#FFFFFF"],
    sizes: ["40", "41", "42", "43", "44"],
  },
  {
    id: 7,
    name: "Premium Brown & White Sneakers",
    price: 4199,
    image: "/sneakers-brown-white.webp",
    category: "footwear-sneakers",
    rating: 4.7,
    colors: ["#8B4513", "#FFFFFF", "#FFB6C1"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: 8,
    name: "Louis Vuitton Checkered Handbag",
    price: 5499,
    image: "/louis-vuitton-black-bag.webp",
    category: "womens-bags",
    rating: 5.0,
    colors: ["#000000", "#4169E1"],
  },
  {
    id: 9,
    name: "Coach Signature Tote Bag",
    price: 5299,
    image: "/coach-cream-bag.webp",
    category: "womens-bags",
    rating: 4.9,
    colors: ["#F5F5DC", "#8B4513"],
  },
  {
    id: 10,
    name: "Nike Blue & White Sneakers",
    price: 4299,
    image: "/nike-blue-white-sneakers.webp",
    category: "footwear-sneakers",
    rating: 4.8,
    colors: ["#0000FF", "#FFFFFF"],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
  },
  {
    id: 11,
    name: "Navy Casual Sneakers",
    price: 3299,
    image: "/navy-casual-sneakers.webp",
    category: "footwear-sneakers",
    rating: 4.6,
    colors: ["#000080", "#32CD32"],
    sizes: ["40", "41", "42", "43", "44"],
  },
  {
    id: 12,
    name: "Black Sneakers with Red Laces",
    price: 3899,
    image: "/black-sneakers-red-laces.webp",
    category: "footwear-sneakers",
    rating: 4.7,
    colors: ["#000000", "#FF0000"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: 13,
    name: "Light Brown Classic Sneakers",
    price: 3599,
    image: "/light-brown-sneakers.webp",
    category: "footwear-sneakers",
    rating: 4.5,
    colors: ["#D2B48C", "#8B4513"],
    sizes: ["40", "41", "42", "43", "44"],
  },
  {
    id: 14,
    name: "African Print T-Shirt",
    price: 2799,
    image: "/mens-tshirt-african.png",
    category: "mens-tshirts",
    rating: 4.6,
    colors: ["#FF6B35", "#F7931E", "#FFD23F"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 15,
    name: "Formal Business Shirt",
    price: 3299,
    image: "/mens-shirt-formal.png",
    category: "mens-shirts",
    rating: 4.7,
    colors: ["#FFFFFF", "#87CEEB", "#E6E6FA"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 16,
    name: "Premium Chino Pants",
    price: 3799,
    image: "/mens-pants-chino.png",
    category: "mens-pants",
    rating: 4.5,
    colors: ["#F5DEB3", "#000080", "#8B4513"],
    sizes: ["30", "32", "34", "36", "38"],
  },
  {
    id: 17,
    name: "Silk Blouse",
    price: 4199,
    image: "/womens-blouse-silk.png",
    category: "womens-blouses",
    rating: 4.8,
    colors: ["#F5F5DC", "#FFB6C1", "#E6E6FA"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 18,
    name: "Traditional Printed Shirt",
    price: 3499,
    image: "/african-printed-shirt.png",
    category: "african-shirts",
    rating: 4.9,
    colors: ["#FF6B35", "#32CD32", "#FFD700"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 19,
    name: "Ankara Traditional Dress",
    price: 4799,
    image: "/african-traditional-dress.png",
    category: "african-dresses",
    rating: 5.0,
    colors: ["#FF6B35", "#32CD32", "#FFD700"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 20,
    name: "African Jewelry Set",
    price: 2999,
    image: "/african-accessories-jewelry.png",
    category: "african-accessories",
    rating: 4.7,
    colors: ["#FFD700", "#B8860B", "#CD853F"],
  },
  {
    id: 21,
    name: "Leather Summer Sandals",
    price: 2599,
    image: "/footwear-sandals.png",
    category: "footwear-sandals",
    rating: 4.4,
    colors: ["#8B4513", "#000000", "#F5DEB3"],
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
  },
  {
    id: 22,
    name: "Stylish Ankle Boots",
    price: 4499,
    image: "/footwear-boots.png",
    category: "footwear-boots",
    rating: 4.8,
    colors: ["#8B4513", "#000000"],
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
  },
]

const categories = [
  {
    name: "Men's Fashion",
    icon: "👨",
    subcategories: [
      { name: "T-Shirts", value: "mens-tshirts" },
      { name: "Shirts", value: "mens-shirts" },
      { name: "Pants", value: "mens-pants" },
    ],
  },
  {
    name: "Women's Fashion",
    icon: "👩",
    subcategories: [
      { name: "Dresses", value: "womens-dresses" },
      { name: "Blouses", value: "womens-blouses" },
      { name: "Bags", value: "womens-bags" },
    ],
  },
  {
    name: "African Designs",
    icon: "🌍",
    subcategories: [
      { name: "Printed Shirts", value: "african-shirts" },
      { name: "Traditional Dresses", value: "african-dresses" },
      { name: "Accessories", value: "african-accessories" },
    ],
  },
  {
    name: "Footwear",
    icon: "👟",
    subcategories: [
      { name: "Sneakers", value: "footwear-sneakers" },
      { name: "Sandals", value: "footwear-sandals" },
      { name: "Boots", value: "footwear-boots" },
    ],
  },
]

export default function ShopContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState<"name" | "price-low" | "price-high" | "rating">("name")
  const [showFilters, setShowFilters] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()

  useEffect(() => {
    let filtered = products

    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setFilteredProducts(filtered)
  }, [selectedCategory, sortBy])

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName) ? prev.filter((name) => name !== categoryName) : [...prev, categoryName],
    )
  }

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
    })

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const formatPrice = (price: number) => {
    return `KSh ${price.toLocaleString()}`
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  const getCurrentCategoryName = () => {
    if (selectedCategory === "all") return "All Products"

    for (const category of categories) {
      const subcategory = category.subcategories.find((sub) => sub.value === selectedCategory)
      if (subcategory) {
        return subcategory.name
      }
    }
    return "Shop"
  }

  return (
    <div className="min-h-screen bg-background">
      <EnhancedBreadcrumb customSegments={[{ label: "Shop", href: "/shop" }, { label: getCurrentCategoryName() }]} />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-ping"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4 font-serif animate-fade-in">Our Collection</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto animate-slide-up">
            Discover premium African fashion and luxury clothing crafted with excellence
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 bg-card rounded-lg shadow-sm p-4 border">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{filteredProducts.length} products found</span>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="p-2"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="p-2"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <SortAsc className="w-4 h-4 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-background border border-border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="name">Name A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <aside className={`w-80 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-card rounded-lg shadow-sm p-6 border">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Categories
              </h3>

              <div className="space-y-4">
                <Button
                  variant={selectedCategory === "all" ? "default" : "ghost"}
                  onClick={() => setSelectedCategory("all")}
                  className="w-full justify-start"
                >
                  All Products ({products.length})
                </Button>

                {categories.map((category) => (
                  <div key={category.name} className="space-y-2">
                    <button
                      onClick={() => toggleCategory(category.name)}
                      className="flex items-center justify-between w-full p-2 rounded-md hover:bg-accent transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedCategories.includes(category.name) ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedCategories.includes(category.name) && (
                      <div className="ml-6 space-y-1">
                        {category.subcategories.map((sub) => {
                          const count = products.filter((p) => p.category === sub.value).length
                          return (
                            <button
                              key={sub.value}
                              onClick={() => setSelectedCategory(sub.value)}
                              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
                                selectedCategory === sub.value
                                  ? "bg-primary text-primary-foreground"
                                  : "hover:bg-accent"
                              }`}
                            >
                              {sub.name} ({count})
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid/List */}
          <main className="flex-1">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="bg-card rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 border"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="relative overflow-hidden aspect-square">
                      <Image
                        src={product.image || "/placeholder.svg?height=400&width=400&text=Product"}
                        alt={`${product.name} - ${product.category} with ${product.rating} star rating`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-background transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-background transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 font-serif line-clamp-2">{product.name}</h3>
                      <div className="text-xl font-bold text-primary mb-2">{formatPrice(product.price)}</div>

                      <div className="flex items-center gap-1 mb-3">
                        {renderStars(product.rating)}
                        <span className="text-sm text-muted-foreground ml-1">({product.rating})</span>
                      </div>

                      <div className="flex gap-2 mb-3">
                        {product.colors.slice(0, 4).map((color, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="w-6 h-6 rounded-full border-2 border-border cursor-pointer hover:border-primary transition-all duration-200 hover:scale-110"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                        {product.colors.length > 4 && (
                          <span className="text-xs text-muted-foreground self-center">
                            +{product.colors.length - 4} more
                          </span>
                        )}
                      </div>

                      <Button
                        onClick={() => handleAddToCart(product)}
                        className="w-full transition-all duration-200 hover:scale-105"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="bg-card rounded-lg shadow-sm p-6 border hover:shadow-lg transition-all duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex gap-6">
                      <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={product.image || "/placeholder.svg?height=128&width=128&text=Product"}
                          alt={`${product.name} - ${product.category}`}
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      </div>

                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-xl font-semibold font-serif">{product.name}</h3>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              {renderStars(product.rating)}
                              <span className="text-sm text-muted-foreground">({product.rating})</span>
                            </div>
                            <div className="text-2xl font-bold text-primary">{formatPrice(product.price)}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex gap-2">
                            {product.colors.slice(0, 6).map((color, colorIndex) => (
                              <div
                                key={colorIndex}
                                className="w-5 h-5 rounded-full border border-border"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>

                          {product.sizes && (
                            <div className="flex gap-1">
                              {product.sizes.slice(0, 4).map((size) => (
                                <span key={size} className="px-2 py-1 bg-muted text-xs rounded border">
                                  {size}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              Quick View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Heart className="w-4 h-4" />
                            </Button>
                          </div>

                          <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                  <Filter className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters or search terms</p>
                <Button onClick={() => setSelectedCategory("all")}>View All Products</Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
