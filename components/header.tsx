"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, Menu, X, ArrowRight, Sparkles } from "lucide-react"
import { UserMenu } from "@/components/auth/user-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { useCart } from "@/hooks/use-cart"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([])
  const { getTotalItems } = useCart()

  const popularSearches = [
    "African dresses",
    "Designer handbags",
    "Luxury watches",
    "Sneakers",
    "Traditional prints",
    "Formal shirts",
    "Ankara styles",
    "Fashion accessories",
  ]

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = popularSearches.filter((search) => search.toLowerCase().includes(searchQuery.toLowerCase()))
      setSearchSuggestions(filtered.slice(0, 5))
    } else {
      setSearchSuggestions(popularSearches.slice(0, 4))
    }
  }, [searchQuery])

  const handleSearch = (query: string) => {
    if (query.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(query.trim())}`
    }
  }

  return (
    <>
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-2 px-4 text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="font-medium">Free shipping on orders over KSh 5,000 • 30-day returns</span>
          </div>
          <div className="hidden lg:block">
            <UserMenu />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-sm border-b border-border sticky top-0 z-40 backdrop-blur-sm bg-background/95">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center flex-shrink-0 group">
              <Image
                src="/lunaluxe-logo.png"
                alt="LunaLuxe - Premium African Fashion"
                width={100}
                height={50}
                className="h-8 sm:h-10 md:h-12 w-auto transition-transform group-hover:scale-105"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                href="/"
                className="relative text-foreground hover:text-primary font-medium transition-all duration-300 group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/shop"
                className="relative text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                Shop
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/blog"
                className="relative text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="relative text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/customer-service"
                className="relative text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                Support
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Header Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="hidden sm:block">
                <ThemeToggle />
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="hidden sm:flex h-9 w-9 sm:h-10 sm:w-10 hover:bg-accent hover:scale-110 transition-all duration-300"
                aria-label="Search products"
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>

              <Link href="/cart">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative h-9 w-9 sm:h-10 sm:w-10 hover:bg-accent hover:scale-110 transition-all duration-300"
                  aria-label="Shopping cart"
                >
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-medium animate-bounce">
                      {getTotalItems()}
                    </span>
                  )}
                </Button>
              </Link>

              <div className="hidden lg:block">
                <UserMenu />
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-9 w-9 sm:h-10 sm:w-10 hover:bg-accent transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                )}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-slide-down">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-foreground hover:text-primary font-medium py-3 px-3 rounded-lg hover:bg-accent transition-all duration-300 flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/shop"
                  className="text-muted-foreground hover:text-primary py-3 px-3 rounded-lg hover:bg-accent transition-all duration-300 flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Shop
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary py-3 px-3 rounded-lg hover:bg-accent transition-all duration-300 flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary py-3 px-3 rounded-lg hover:bg-accent transition-all duration-300 flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/customer-service"
                  className="text-muted-foreground hover:text-primary py-3 px-3 rounded-lg hover:bg-accent transition-all duration-300 flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Support
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>

                <Button
                  variant="outline"
                  className="justify-start gap-2 mt-2 sm:hidden bg-transparent hover:bg-accent transition-all duration-300"
                  onClick={() => {
                    setIsSearchOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <Search className="h-4 w-4" />
                  Search Products
                </Button>

                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <UserMenu />
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-4 sm:pt-20 p-4 backdrop-blur-sm">
          <div className="bg-card rounded-xl p-4 sm:p-6 w-full max-w-2xl animate-scale-in shadow-2xl border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg sm:text-xl font-serif font-semibold text-card-foreground">Search Products</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(false)}
                aria-label="Close search"
                className="hover:bg-accent rounded-full"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            <div className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <Input
                  placeholder="Search for products, categories, or brands..."
                  className="flex-1 text-base pr-12 rounded-lg border-2 focus:border-primary transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch(searchQuery)
                    }
                  }}
                  autoFocus
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              <Button
                className="px-4 sm:px-6 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                onClick={() => handleSearch(searchQuery)}
              >
                Search
              </Button>
            </div>

            {/* Search Suggestions */}
            {searchSuggestions.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-medium">
                  {searchQuery ? "Suggestions" : "Popular Searches"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {searchSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(suggestion)}
                      className="px-3 py-1.5 bg-muted hover:bg-accent text-sm rounded-full transition-all duration-300 hover:scale-105 border border-border hover:border-primary"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
