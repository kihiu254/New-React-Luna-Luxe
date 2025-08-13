"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { UserMenu } from "@/components/auth/user-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { useCart } from "@/hooks/use-cart"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getTotalItems } = useCart()

  return (
    <>
      <div className="bg-slate-900 dark:bg-slate-800 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>Free shipping, 30-day return or refund guarantee.</div>
          <div className="hidden md:block">
            <UserMenu />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image src="/lunaluxe-logo.png" alt="LunaLuxe" width={120} height={60} className="h-12 w-auto" priority />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-muted-foreground font-medium">
                Home
              </Link>
              <Link href="/shop" className="text-muted-foreground hover:text-foreground">
                Shop
              </Link>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
              <Link href="/customer-service" className="text-muted-foreground hover:text-foreground">
                Customer Service
              </Link>
            </nav>

            {/* Header Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="hidden md:flex">
                <Search className="h-5 w-5" />
              </Button>

              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </Button>
              </Link>

              <div className="hidden md:block">
                <UserMenu />
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-foreground hover:text-muted-foreground font-medium">
                  Home
                </Link>
                <Link href="/shop" className="text-muted-foreground hover:text-foreground">
                  Shop
                </Link>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
                <Link href="/customer-service" className="text-muted-foreground hover:text-foreground">
                  Customer Service
                </Link>
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <UserMenu />
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-card rounded-lg p-6 w-full max-w-2xl mx-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-serif font-semibold text-card-foreground">Search Products</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Input placeholder="Search for products..." className="flex-1" autoFocus />
              <Button>
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
