"use client"

import { useState, useEffect } from "react"
import { getProductConfig } from "@/lib/edge-config"

interface DynamicPricingProps {
  basePrice: number
  productId: string
  className?: string
}

export function DynamicPricing({ basePrice, productId, className }: DynamicPricingProps) {
  const [finalPrice, setFinalPrice] = useState(basePrice)
  const [discount, setDiscount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function calculatePrice() {
      try {
        const config = await getProductConfig()

        // Check if product has special pricing
        const specialPricing = config.featured_products?.find((p: any) => p.id === productId)

        if (specialPricing?.discount) {
          const discountAmount = Math.min(specialPricing.discount, config.max_discount)
          const discountedPrice = basePrice * (1 - discountAmount / 100)
          setFinalPrice(Math.round(discountedPrice))
          setDiscount(discountAmount)
        } else {
          setFinalPrice(basePrice)
        }
      } catch (error) {
        console.error("Error calculating dynamic price:", error)
        setFinalPrice(basePrice)
      } finally {
        setLoading(false)
      }
    }

    calculatePrice()
  }, [basePrice, productId])

  if (loading) {
    return <div className="animate-pulse bg-muted h-6 w-20 rounded" />
  }

  return (
    <div className={className}>
      {discount > 0 ? (
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">KSh {finalPrice.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground line-through">KSh {basePrice.toLocaleString()}</span>
          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">-{discount}%</span>
        </div>
      ) : (
        <span className="text-lg font-bold text-primary">KSh {finalPrice.toLocaleString()}</span>
      )}
    </div>
  )
}
