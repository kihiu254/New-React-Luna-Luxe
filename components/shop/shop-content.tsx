"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Eye, Heart, Star, Home, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

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
      id: product.id.toString(),
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 dark:text-white font-medium">Shop</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-600 to-amber-600 text-white py-16 relative overflow-hidden">
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
        <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Link>
            <Link
              href="/customer-service"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Customer Service
            </Link>
            <Link
              href="/contact"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
            <Link
              href="/shipping"
              className="text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              Shipping Info
            </Link>
            <Link
              href="/size-guide"
              className="text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              Size Guide
            </Link>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-serif text-center">
            Shop By Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleCategory(category.name)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl animate-bounce">{category.icon}</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{category.name}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      expandedCategories.includes(category.name) ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {expandedCategories.includes(category.name) && (
                  <div className="mt-4 space-y-2 animate-slide-down">
                    {category.subcategories.map((sub) => (
                      <button
                        key={sub.value}
                        onClick={() => setSelectedCategory(sub.value)}
                        className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 transform hover:scale-105 ${
                          selectedCategory === sub.value
                            ? "bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300 font-medium"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
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
            className={`transition-all duration-200 transform hover:scale-105 ${
              selectedCategory === "all"
                ? "bg-rose-600 hover:bg-rose-700"
                : "border-rose-200 text-rose-600 hover:bg-rose-50 dark:border-rose-800 dark:text-rose-400 dark:hover:bg-rose-950"
            }`}
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
                className={`transition-all duration-200 transform hover:scale-105 ${
                  selectedCategory === sub.value
                    ? "bg-rose-600 hover:bg-rose-700"
                    : "border-rose-200 text-rose-600 hover:bg-rose-50 dark:border-rose-800 dark:text-rose-400 dark:hover:bg-rose-950"
                }`}
              >
                {sub.name}
              </Button>
            ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <button className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Eye className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </button>
                  <button className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Heart className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-serif">{product.name}</h3>
                <div className="text-xl font-bold text-rose-600 dark:text-rose-400 mb-2">
                  {formatPrice(product.price)}
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">({product.rating})</span>
                </div>

                {/* Color Options */}
                <div className="flex gap-2 mb-3">
                  {product.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-6 h-6 rounded-full border-2 border-gray-200 dark:border-gray-600 cursor-pointer hover:border-gray-400 dark:hover:border-gray-400 transition-all duration-200 transform hover:scale-110"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Size Options */}
                {product.sizes && (
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className="px-3 py-1 border border-gray-200 dark:border-gray-600 rounded-md text-sm hover:border-rose-400 hover:text-rose-600 dark:hover:border-rose-400 dark:hover:text-rose-400 transition-all duration-200 transform hover:scale-105"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}

                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white transition-all duration-200 transform hover:scale-105"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
