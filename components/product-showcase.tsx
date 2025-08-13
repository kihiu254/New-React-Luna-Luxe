"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function ProductShowcase() {
  const [timeLeft, setTimeLeft] = useState({
    days: 28,
    hours: 20,
    minutes: 53,
    seconds: 51,
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-600">Clothings Hot</h3>
              </div>
              <div className="p-4 bg-gray-900 text-white rounded-lg">
                <h3 className="font-medium">Shoe Collection</h3>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-600">Accessories</h3>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="lg:w-2/5 relative">
            <div className="relative">
              <img
                src="/placeholder-ddh6e.png"
                alt="Multi-pocket Chest Bag Black"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-medium">
                <div>Sale Of</div>
                <div>KSH 3,499</div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/3">
            <div className="space-y-6">
              <div className="text-sm font-medium text-red-500 uppercase tracking-wide">
                DEAL OF THE WEEK - KSH 3,499
              </div>

              <h1 className="text-3xl font-serif font-bold text-gray-900">Multi-pocket Chest Bag Black</h1>

              {/* Countdown Timer */}
              <div className="flex gap-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="countdown-item">
                    <div className="countdown-number">{value}</div>
                    <div className="countdown-label capitalize">{unit}</div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full bg-gray-900 hover:bg-gray-800">
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
