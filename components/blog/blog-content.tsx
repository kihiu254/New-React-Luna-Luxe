"use client"

import { useState, useEffect } from "react"
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  Heart,
  Share2,
  BookOpen,
  TrendingUp,
  MessageCircle,
  Eye,
  ThumbsUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  image: string
  readTime: string
  likes: number
  views: number
  comments: number
  tags: string[]
  featured?: boolean
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
    likes: 234,
    views: 1520,
    comments: 18,
    tags: ["African Fashion", "Prints", "Culture", "Heritage"],
    featured: true,
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
    likes: 189,
    views: 2340,
    comments: 25,
    tags: ["2025 Trends", "Fashion Week", "Colors", "Sustainability"],
    featured: true,
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
    likes: 156,
    views: 980,
    comments: 12,
    tags: ["Sustainability", "Eco-Fashion", "Wardrobe", "Conscious Living"],
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
    likes: 98,
    views: 756,
    comments: 8,
    tags: ["Styling Tips", "Patterns", "Fashion Advice", "Bold Looks"],
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
    likes: 312,
    views: 1890,
    comments: 34,
    tags: ["Street Style", "Nairobi", "Local Fashion", "Photography"],
    featured: true,
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
    likes: 145,
    views: 1120,
    comments: 16,
    tags: ["Accessories", "Styling", "Professional Tips", "Jewelry"],
  },
  {
    id: 7,
    title: "Color Psychology in Fashion",
    excerpt: "Understanding how colors affect mood and perception in your fashion choices.",
    category: "fashion",
    author: "Color Specialist",
    date: "2024-12-25",
    image: "/placeholder.svg?height=300&width=400&text=Color+Psychology",
    readTime: "6 min read",
    likes: 87,
    views: 654,
    comments: 9,
    tags: ["Color Theory", "Psychology", "Fashion", "Mood"],
  },
  {
    id: 8,
    title: "African Jewelry: Stories in Gold and Beads",
    excerpt: "Explore the cultural significance and modern interpretations of traditional African jewelry.",
    category: "culture",
    author: "Cultural Historian",
    date: "2024-12-22",
    image: "/placeholder.svg?height=300&width=400&text=African+Jewelry",
    readTime: "9 min read",
    likes: 203,
    views: 1456,
    comments: 22,
    tags: ["African Culture", "Jewelry", "Heritage", "Craftsmanship"],
  },
]

const categories = ["all", "fashion", "trends", "lifestyle", "culture"]

const InteractiveButton = ({
  icon: Icon,
  count,
  label,
  active = false,
  onClick,
}: {
  icon: any
  count: number
  label: string
  active?: boolean
  onClick?: () => void
}) => (
  <Button
    variant="ghost"
    size="sm"
    onClick={onClick}
    className={`flex items-center gap-2 transition-all duration-200 hover:scale-105 ${
      active ? "text-rose-600 bg-rose-50" : "text-gray-600 hover:text-rose-600"
    }`}
  >
    <Icon className="w-4 h-4" />
    <span className="text-sm">{count}</span>
    <span className="sr-only">{label}</span>
  </Button>
)

export default function BlogContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const [currentPage, setCurrentPage] = useState(1)
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set())
  const [activeTab, setActiveTab] = useState("all")
  const postsPerPage = 6

  useEffect(() => {
    let filtered = blogPosts

    if (activeTab === "featured") {
      filtered = filtered.filter((post) => post.featured)
    } else if (activeTab === "popular") {
      filtered = [...filtered].sort((a, b) => b.likes - a.likes)
    } else if (activeTab === "recent") {
      filtered = [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFilteredPosts(filtered)
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, activeTab])

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

  const handleLike = (postId: number) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) {
        newSet.delete(postId)
      } else {
        newSet.add(postId)
      }
      return newSet
    })
  }

  const handleShare = (post: BlogPost) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const featuredPost = blogPosts.find((post) => post.featured)
  const trendingTags = ["African Fashion", "2025 Trends", "Sustainability", "Street Style", "Styling Tips"]

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
        {/* Featured Article */}
        {featuredPost && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-rose-600" />
              Featured Article
            </h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg?height=400&width=600&text=Featured+Post"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <Badge className="absolute top-4 left-4 bg-rose-600">Featured</Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4 capitalize">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4 font-serif">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.date)}
                      </span>
                    </div>
                    <span className="text-rose-600 font-medium">{featuredPost.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <InteractiveButton
                        icon={Heart}
                        count={featuredPost.likes + (likedPosts.has(featuredPost.id) ? 1 : 0)}
                        label="likes"
                        active={likedPosts.has(featuredPost.id)}
                        onClick={() => handleLike(featuredPost.id)}
                      />
                      <InteractiveButton icon={Eye} count={featuredPost.views} label="views" />
                      <InteractiveButton icon={MessageCircle} count={featuredPost.comments} label="comments" />
                    </div>
                    <Button className="bg-rose-600 hover:bg-rose-700">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
            <div className="flex-1 space-y-4">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles, tags..."
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

            {/* Trending Tags */}
            <Card className="w-full lg:w-80">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-rose-600" />
                  Trending Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {trendingTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="cursor-pointer hover:bg-rose-100 hover:text-rose-700 transition-colors"
                      onClick={() => setSearchTerm(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              All Posts
            </TabsTrigger>
            <TabsTrigger value="featured" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Featured
            </TabsTrigger>
            <TabsTrigger value="popular" className="flex items-center gap-2">
              <ThumbsUp className="w-4 h-4" />
              Popular
            </TabsTrigger>
            <TabsTrigger value="recent" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Recent
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-8">
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg?height=300&width=400&text=Blog+Post"}
                      alt={`${post.title} - Fashion blog post about ${post.category}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-rose-600 capitalize">{post.category}</Badge>
                    </div>
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary">Featured</Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 font-serif line-clamp-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

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

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <InteractiveButton
                          icon={Heart}
                          count={post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                          label="likes"
                          active={likedPosts.has(post.id)}
                          onClick={() => handleLike(post.id)}
                        />
                        <InteractiveButton icon={Eye} count={post.views} label="views" />
                        <InteractiveButton icon={MessageCircle} count={post.comments} label="comments" />
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleShare(post)}
                        className="text-gray-600 hover:text-rose-600"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

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

        {/* Newsletter Signup */}
        <Card className="mt-16 bg-gradient-to-r from-rose-600 to-amber-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Fashion Trends</h3>
            <p className="mb-6 opacity-90">
              Subscribe to our newsletter and never miss the latest fashion insights and styling tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-white text-gray-900 border-0" />
              <Button variant="secondary" className="bg-white text-rose-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
