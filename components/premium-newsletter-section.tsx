"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Gift, Star, Sparkles } from "lucide-react"

export function PremiumNewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  const benefits = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Exclusive Offers",
      description: "First access to sales and member-only discounts",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "New Collections",
      description: "Be the first to see our latest African fashion pieces",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Style Tips",
      description: "Expert advice on styling African prints and patterns",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <Mail className="w-16 h-16 mx-auto mb-6 text-white/80" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Join the LunaLuxe Family</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Subscribe to our newsletter and become part of an exclusive community celebrating African fashion
            excellence.
          </p>
        </div>

        {!isSubscribed ? (
          <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-12">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  required
                />
                <Button type="submit" size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-12">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Welcome to LunaLuxe!</h3>
                <p className="text-white/90">
                  Thank you for subscribing. Check your email for a special welcome offer!
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
