"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { OrderTrackingForm } from "@/components/order-tracking/order-tracking-form"
import { OrderTrackingResult } from "@/components/order-tracking/order-tracking-result"
import { OrderTrackingHelp } from "@/components/order-tracking/order-tracking-help"

export interface OrderStatus {
  orderNumber: string
  email: string
  orderDate: string
  estimatedDelivery: string
  currentStatus: "placed" | "processing" | "in-transit" | "delivered"
  items: Array<{
    name: string
    quantity: number
    price: number
  }>
  shippingAddress: string
  paymentMethod: string
  total: number
}

// Mock order data - in a real app this would come from an API
const mockOrders: Record<string, OrderStatus> = {
  LL123456: {
    orderNumber: "LL123456",
    email: "customer@example.com",
    orderDate: "2025-01-10",
    estimatedDelivery: "2025-01-13",
    currentStatus: "in-transit",
    items: [
      { name: "Designer Dress", quantity: 1, price: 4500 },
      { name: "Luxury Handbag", quantity: 1, price: 3200 },
    ],
    shippingAddress: "123 Main Street, Nairobi, Kenya",
    paymentMethod: "M-Pesa",
    total: 7700,
  },
  LL789012: {
    orderNumber: "LL789012",
    email: "test@example.com",
    orderDate: "2025-01-08",
    estimatedDelivery: "2025-01-11",
    currentStatus: "delivered",
    items: [{ name: "Classic Shoes", quantity: 2, price: 2800 }],
    shippingAddress: "456 Oak Avenue, Mombasa, Kenya",
    paymentMethod: "Credit Card",
    total: 5600,
  },
}

export function OrderTrackingContent() {
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [initialOrderNumber, setInitialOrderNumber] = useState("")
  const [initialEmail, setInitialEmail] = useState("")
  const searchParams = useSearchParams()

  useEffect(() => {
    const orderParam = searchParams.get("order")
    const emailParam = searchParams.get("email")

    if (orderParam) {
      setInitialOrderNumber(orderParam)
    }

    if (emailParam) {
      setInitialEmail(decodeURIComponent(emailParam))
    }

    // If both parameters are present, automatically track the order
    if (orderParam && emailParam && mockOrders[orderParam.toUpperCase()]) {
      const order = mockOrders[orderParam.toUpperCase()]
      const decodedEmail = decodeURIComponent(emailParam)

      if (order.email.toLowerCase() === decodedEmail.toLowerCase()) {
        setOrderStatus(order)
      }
    }
  }, [searchParams])

  const handleTrackOrder = async (orderNumber: string, email: string) => {
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const order = mockOrders[orderNumber.toUpperCase()]

      if (!order) {
        throw new Error("Order not found. Please check your order number and try again.")
      }

      if (order.email.toLowerCase() !== email.toLowerCase()) {
        throw new Error("Email address does not match our records for this order.")
      }

      setOrderStatus(order)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while tracking your order.")
      setOrderStatus(null)
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setOrderStatus(null)
    setError(null)
    setInitialOrderNumber("")
    setInitialEmail("")
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold mb-2">Track Your Order</h1>
        <p className="text-muted-foreground">Enter your order details below to track your package</p>
      </div>

      {!orderStatus ? (
        <>
          <OrderTrackingForm
            onSubmit={handleTrackOrder}
            isLoading={isLoading}
            error={error}
            initialOrderNumber={initialOrderNumber}
            initialEmail={initialEmail}
          />
          <OrderTrackingHelp />
        </>
      ) : (
        <OrderTrackingResult orderStatus={orderStatus} onReset={handleReset} />
      )}
    </div>
  )
}
