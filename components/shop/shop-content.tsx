"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Eye, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

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
    price: 19999,
    image: "/elegant-african-dress.png",
    category: "womens-dresses",
    rating: 4.8,
    colors: ["#000000", "#FF0000", "#0000FF"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Luxury Handbag",
    price: 14999,
    image: "/luxury-african-handbag.png",
    category: "womens-bags",
    rating: 4.9,
    colors: ["#000000", "#8B4513", "#A52A2A"],
  },
  {
    id: 3,
    name: "Signature Watch",
    price: 24999,
    image: "/placeholder-32ij4.png",
    category: "mens-watches",
    rating: 5.0,
    colors: ["#000000", "#C0C0C0"],
  },
  {
    id: 4,
    name: "Classic Shoes",
    price: 12999,
    image: "/placeholder-z0d7x.png",
    category: "mens-shoes",
    rating: 4.7,
    colors: ["#000000", "#8B4513"],
    sizes: ["39", "40", "41", "42", "43"],
  },
  {
    id: 5,
    name: "Stylish Sneakers",
    price: 15999,
    image: "/placeholder-y1asw.png",
    category: "footwear-sneakers",
    rating: 4.9,
    colors: ["#000000", "#FFFFFF", "#FF0000"],
    sizes: ["40", "41", "42", "43", "44"],
  },
  {
    id: 6,
    name: "Urban Sneakers",
    price: 17999,
    image: "/urban-african-sneakers.png",
    category: "footwear-sneakers",
    rating: 4.8,
    colors: ["#000000", "#808080", "#FFFFFF"],
    sizes: ["40", "41", "42", "43", "44"],
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
  const { addItem } = useCart()
  const { toast } = useToast()

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter((product) => product.category === selectedCategory))
    }
  }, [selectedCategory])

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName) ? prev.filter((name) => name !== categoryName) : [...prev, categoryName],
    )
  }

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id.toString(), // Convert to string to match CartItem interface
      name: product.name,
      price: product.price,
      image: product.image,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-600 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 font-serif">Our Collection</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover premium African fashion and luxury clothing crafted with excellence
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif text-center">Shop By Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div key={category.name} className="bg-white rounded-lg shadow-lg p-6">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleCategory(category.name)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <span className="font-semibold text-gray-800">{category.name}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      expandedCategories.includes(category.name) ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {expandedCategories.includes(category.name) && (
                  <div className="mt-4 space-y-2">
                    {category.subcategories.map((sub) => (
                      <button
                        key={sub.value}
                        onClick={() => setSelectedCategory(sub.value)}
                        className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedCategory === sub.value
                            ? "bg-rose-100 text-rose-700 font-medium"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedCategory("all")}
            className={
              selectedCategory === "all"
                ? "bg-rose-600 hover:bg-rose-700"
                : "border-rose-200 text-rose-600 hover:bg-rose-50"
            }
          >
            All Products
          </Button>
          {categories
            .flatMap((cat) => cat.subcategories)
            .map((sub) => (
              <Button
                key={sub.value}
                variant={selectedCategory === sub.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(sub.value)}
                className={
                  selectedCategory === sub.value
                    ? "bg-rose-600 hover:bg-rose-700"
                    : "border-rose-200 text-rose-600 hover:bg-rose-50"
                }
              >
                {sub.name}
              </Button>
            ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-serif">{product.name}</h3>
                <div className="text-xl font-bold text-rose-600 mb-2">{formatPrice(product.price)}</div>

                <div className="flex items-center gap-1 mb-3">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
                </div>

                {/* Color Options */}
                <div className="flex gap-2 mb-3">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full border-2 border-gray-200 cursor-pointer hover:border-gray-400"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Size Options */}
                {product.sizes && (
                  <div className="flex gap-2 mb-4">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className="px-3 py-1 border border-gray-200 rounded-md text-sm hover:border-rose-400 hover:text-rose-600"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}

                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
