"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { OrderTrackingForm } from "@/components/order-tracking/order-tracking-form"
import { OrderTrackingResult } from "@/components/order-tracking/order-tracking-result"
import { OrderTrackingHelp } from "@/components/order-tracking/order-tracking-help"
import { LiveTrackingMap } from "@/components/order-tracking/live-tracking-map"
import { OrderNotifications } from "@/components/order-tracking/order-notifications"

export interface OrderStatus {
  orderNumber: string
  email: string
  orderDate: string
  estimatedDelivery: string
  currentStatus:
    | "placed"
    | "confirmed"
    | "processing"
    | "packed"
    | "shipped"
    | "out-for-delivery"
    | "delivered"
    | "cancelled"
  items: Array<{
    id: string
    name: string
    quantity: number
    price: number
    image: string
  }>
  shippingAddress: {
    street: string
    city: string
    state: string
    country: string
    postalCode: string
  }
  paymentMethod: string
  total: number
  trackingNumber?: string
  carrier?: string
  timeline: Array<{
    status: string
    timestamp: string
    location?: string
    description: string
  }>
  deliveryLocation?: {
    lat: number
    lng: number
  }
  notifications: Array<{
    id: string
    type: "email" | "sms"
    message: string
    timestamp: string
    status: "sent" | "delivered" | "failed"
  }>
}

const mockOrders: Record<string, OrderStatus> = {
  LL123456: {
    orderNumber: "LL123456",
    email: "1kihiupaul@gmail.com",
    orderDate: "2025-01-10",
    estimatedDelivery: "2025-01-13",
    currentStatus: "out-for-delivery",
    items: [
      {
        id: "1",
        name: "Royal Ankara Dress",
        quantity: 1,
        price: 4500,
        image: "/royal-ankara-collection.png",
      },
      {
        id: "2",
        name: "Luxury Kente Handbag",
        quantity: 1,
        price: 3200,
        image: "/luxury-african-handbag.png",
      },
    ],
    shippingAddress: {
      street: "123 Kimathi Street",
      city: "Nairobi",
      state: "Nairobi County",
      country: "Kenya",
      postalCode: "00100",
    },
    paymentMethod: "M-Pesa",
    total: 7700,
    trackingNumber: "LL2025010001",
    carrier: "LunaLuxe Express",
    timeline: [
      {
        status: "placed",
        timestamp: "2025-01-10T10:00:00Z",
        location: "Online",
        description: "Order placed successfully",
      },
      {
        status: "confirmed",
        timestamp: "2025-01-10T10:15:00Z",
        location: "Nairobi Warehouse",
        description: "Order confirmed and payment verified",
      },
      {
        status: "processing",
        timestamp: "2025-01-10T14:30:00Z",
        location: "Nairobi Warehouse",
        description: "Items being prepared for shipment",
      },
      {
        status: "packed",
        timestamp: "2025-01-11T09:00:00Z",
        location: "Nairobi Warehouse",
        description: "Package packed and ready for pickup",
      },
      {
        status: "shipped",
        timestamp: "2025-01-11T16:45:00Z",
        location: "Nairobi Distribution Center",
        description: "Package picked up by carrier",
      },
      {
        status: "out-for-delivery",
        timestamp: "2025-01-13T08:30:00Z",
        location: "Nairobi Local Hub",
        description: "Out for delivery - arriving today",
      },
    ],
    deliveryLocation: {
      lat: -1.2921,
      lng: 36.8219,
    },
    notifications: [
      {
        id: "1",
        type: "email",
        message: "Order confirmation sent",
        timestamp: "2025-01-10T10:15:00Z",
        status: "delivered",
      },
      {
        id: "2",
        type: "sms",
        message: "Your order is being processed",
        timestamp: "2025-01-10T14:30:00Z",
        status: "delivered",
      },
      {
        id: "3",
        type: "email",
        message: "Your order has been shipped",
        timestamp: "2025-01-11T16:45:00Z",
        status: "delivered",
      },
      {
        id: "4",
        type: "sms",
        message: "Out for delivery - arriving today",
        timestamp: "2025-01-13T08:30:00Z",
        status: "delivered",
      },
    ],
  },
  LL789012: {
    orderNumber: "LL789012",
    email: "customer@example.com",
    orderDate: "2025-01-08",
    estimatedDelivery: "2025-01-11",
    currentStatus: "delivered",
    items: [
      {
        id: "3",
        name: "Classic African Print Shoes",
        quantity: 2,
        price: 2800,
        image: "/african-print-shoes.png",
      },
    ],
    shippingAddress: {
      street: "456 Moi Avenue",
      city: "Mombasa",
      state: "Mombasa County",
      country: "Kenya",
      postalCode: "80100",
    },
    paymentMethod: "Credit Card",
    total: 5600,
    trackingNumber: "LL2025010002",
    carrier: "LunaLuxe Express",
    timeline: [
      {
        status: "placed",
        timestamp: "2025-01-08T09:00:00Z",
        location: "Online",
        description: "Order placed successfully",
      },
      {
        status: "confirmed",
        timestamp: "2025-01-08T09:30:00Z",
        location: "Nairobi Warehouse",
        description: "Order confirmed and payment processed",
      },
      {
        status: "processing",
        timestamp: "2025-01-08T15:00:00Z",
        location: "Nairobi Warehouse",
        description: "Items prepared for shipment",
      },
      {
        status: "shipped",
        timestamp: "2025-01-09T10:00:00Z",
        location: "Nairobi Distribution Center",
        description: "Package shipped to Mombasa",
      },
      {
        status: "delivered",
        timestamp: "2025-01-11T14:30:00Z",
        location: "Mombasa",
        description: "Package delivered successfully",
      },
    ],
    deliveryLocation: {
      lat: -4.0435,
      lng: 39.6682,
    },
    notifications: [
      {
        id: "5",
        type: "email",
        message: "Order confirmation sent",
        timestamp: "2025-01-08T09:30:00Z",
        status: "delivered",
      },
      {
        id: "6",
        type: "sms",
        message: "Your order has been shipped",
        timestamp: "2025-01-09T10:00:00Z",
        status: "delivered",
      },
      {
        id: "7",
        type: "email",
        message: "Package delivered successfully",
        timestamp: "2025-01-11T14:30:00Z",
        status: "delivered",
      },
    ],
  },
  LL345678: {
    orderNumber: "LL345678",
    email: "1kihiupaul@gmail.com",
    orderDate: "2025-01-12",
    estimatedDelivery: "2025-01-15",
    currentStatus: "processing",
    items: [
      {
        id: "4",
        name: "Modern Dashiki Shirt",
        quantity: 1,
        price: 3500,
        image: "/modern-dashiki-shirt.png",
      },
      {
        id: "5",
        name: "Traditional Kente Scarf",
        quantity: 2,
        price: 1800,
        image: "/kente-scarf.png",
      },
    ],
    shippingAddress: {
      street: "789 Uhuru Highway",
      city: "Nairobi",
      state: "Nairobi County",
      country: "Kenya",
      postalCode: "00200",
    },
    paymentMethod: "M-Pesa",
    total: 7100,
    trackingNumber: "LL2025010003",
    carrier: "LunaLuxe Express",
    timeline: [
      {
        status: "placed",
        timestamp: "2025-01-12T11:00:00Z",
        location: "Online",
        description: "Order placed successfully",
      },
      {
        status: "confirmed",
        timestamp: "2025-01-12T11:20:00Z",
        location: "Nairobi Warehouse",
        description: "Order confirmed and payment verified",
      },
      {
        status: "processing",
        timestamp: "2025-01-12T16:00:00Z",
        location: "Nairobi Warehouse",
        description: "Items being prepared for shipment",
      },
    ],
    deliveryLocation: {
      lat: -1.2921,
      lng: 36.8219,
    },
    notifications: [
      {
        id: "8",
        type: "email",
        message: "Order confirmation sent",
        timestamp: "2025-01-12T11:20:00Z",
        status: "delivered",
      },
      {
        id: "9",
        type: "sms",
        message: "Your order is being processed",
        timestamp: "2025-01-12T16:00:00Z",
        status: "delivered",
      },
    ],
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

  useEffect(() => {
    if (orderStatus && orderStatus.currentStatus !== "delivered" && orderStatus.currentStatus !== "cancelled") {
      const interval = setInterval(() => {
        // Simulate real-time updates every 30 seconds
        console.log("[v0] Checking for order updates...")
        // In a real app, this would make an API call to check for updates
      }, 30000)

      return () => clearInterval(interval)
    }
  }, [orderStatus])

  const handleTrackOrder = async (orderNumber: string, email: string) => {
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold mb-2">Track Your Order</h1>
        <p className="text-muted-foreground">Enter your order details below to track your package in real-time</p>
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
        <div className="space-y-8">
          <OrderTrackingResult orderStatus={orderStatus} onReset={handleReset} />

          {orderStatus.currentStatus === "out-for-delivery" && orderStatus.deliveryLocation && (
            <LiveTrackingMap orderStatus={orderStatus} deliveryLocation={orderStatus.deliveryLocation} />
          )}

          <OrderNotifications notifications={orderStatus.notifications} />
        </div>
      )}
    </div>
  )
}
