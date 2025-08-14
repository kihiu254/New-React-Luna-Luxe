"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Clock, Star, Zap } from "lucide-react"

export function SpecialOffersSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="w-8 h-8 text-primary animate-wiggle" />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">Special Offers</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Limited time deals you don't want to miss</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Flash Sale Card */}
          <Card className="relative overflow-hidden border-2 border-primary/20 shadow-2xl animate-slide-in-left">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <CardContent className="relative z-10 p-8">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-yellow-500 animate-bounce" />
                <Badge className="bg-red-500 text-white animate-pulse">FLASH SALE</Badge>
              </div>

              <h3 className="text-3xl font-playfair font-bold mb-4 text-foreground">Up to 50% Off</h3>
              <p className="text-muted-foreground mb-6">
                Selected African print dresses and traditional wear. Premium quality at unbeatable prices.
              </p>

              {/* Countdown Timer */}
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Ends in:</span>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Min", value: timeLeft.minutes },
                  { label: "Sec", value: timeLeft.seconds },
                ].map((item, index) => (
                  <div key={item.label} className={`countdown-item animate-bounce-in animate-delay-${index * 100}`}>
                    <div className="countdown-number">{item.value.toString().padStart(2, "0")}</div>
                    <div className="countdown-label">{item.label}</div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full btn-primary animate-heartbeat">
                Shop Flash Sale
              </Button>
            </CardContent>
          </Card>

          {/* VIP Membership Card */}
          <Card className="relative overflow-hidden border-2 border-yellow-400/20 shadow-2xl animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5" />
            <CardContent className="relative z-10 p-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-500 animate-spin" />
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold">
                  VIP EXCLUSIVE
                </Badge>
              </div>

              <h3 className="text-3xl font-playfair font-bold mb-4 text-foreground">Join LunaLuxe VIP</h3>
              <p className="text-muted-foreground mb-6">
                Get exclusive access to new collections, special discounts, and personalized styling advice.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Early access to new collections",
                  "15% off all purchases",
                  "Free shipping on orders over KSh 3,000",
                  "Personal styling consultation",
                ].map((benefit, index) => (
                  <div key={benefit} className={`flex items-center gap-2 animate-fade-in animate-delay-${index * 100}`}>
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-yellow-500 hover:to-orange-500 font-bold animate-glow"
              >
                Become VIP Member
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
