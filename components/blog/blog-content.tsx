"use client"

import { useState, useEffect } from "react"
import { Search, Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  image: string
  readTime: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "African Print Fashion: A Timeless Trend",
    excerpt:
      "Discover the rich history and modern interpretations of African print fashion that continues to inspire designers worldwide.",
    category: "fashion",
    author: "Luna Style Team",
    date: "2025-01-10",
    image: "/african-print-model.png",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "2025 Fashion Trends: What's Hot This Year",
    excerpt: "From bold colors to sustainable fabrics, explore the fashion trends that are defining 2025.",
    category: "trends",
    author: "Fashion Editor",
    date: "2025-01-08",
    image: "/2025-fashion-runway.png",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Building a Sustainable Wardrobe",
    excerpt: "Learn how to create a conscious closet with timeless pieces that reflect your personal style.",
    category: "lifestyle",
    author: "Sustainability Expert",
    date: "2025-01-05",
    image: "/sustainable-fashion-wardrobe.png",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "The Art of Mixing Patterns",
    excerpt: "Master the skill of combining different patterns and textures for a bold, confident look.",
    category: "fashion",
    author: "Style Consultant",
    date: "2025-01-03",
    image: "/mixed-pattern-fashion.png",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Street Style Inspiration from Nairobi",
    excerpt: "Explore the vibrant street fashion scene in Nairobi and get inspired by local style mavens.",
    category: "trends",
    author: "Street Style Photographer",
    date: "2025-01-01",
    image: "/nairobi-street-style.png",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Accessorizing Like a Pro",
    excerpt: "Transform any outfit with the right accessories. Learn the secrets of professional stylists.",
    category: "lifestyle",
    author: "Accessories Expert",
    date: "2024-12-28",
    image: "/fashion-accessories-styling.png",
    readTime: "5 min read",
  },
]

const categories = ["all", "fashion", "trends", "lifestyle"]

export default function BlogContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  useEffect(() => {
    let filtered = blogPosts

    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    setFilteredPosts(filtered)
    setCurrentPage(1)
  }, [searchTerm, selectedCategory])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-600 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 font-serif">Fashion Blog</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover the latest trends, styling tips, and fashion inspiration from the world of African luxury fashion
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 border-2 border-gray-200 focus:border-rose-400"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`capitalize ${
                    selectedCategory === category
                      ? "bg-rose-600 hover:bg-rose-700"
                      : "border-rose-200 text-rose-600 hover:bg-rose-50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 font-serif line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                  <span className="text-rose-600 font-medium">{post.readTime}</span>
                </div>

                <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 ${
                  currentPage === page
                    ? "bg-rose-600 hover:bg-rose-700"
                    : "border-rose-200 text-rose-600 hover:bg-rose-50"
                }`}
              >
                {page}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
