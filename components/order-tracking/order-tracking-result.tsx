"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { OrderTimeline } from "@/components/order-tracking/order-timeline"
import type { OrderStatus } from "./order-tracking-content"
import { Package, Calendar, MapPin, CreditCard, Truck, Phone, Mail } from "lucide-react"
import Image from "next/image"

interface OrderTrackingResultProps {
  orderStatus: OrderStatus
  onReset: () => void
}

export function OrderTrackingResult({ orderStatus, onReset }: OrderTrackingResultProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "out-for-delivery":
        return "bg-blue-100 text-blue-800"
      case "shipped":
        return "bg-purple-100 text-purple-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "placed":
        return "Order Placed"
      case "confirmed":
        return "Order Confirmed"
      case "processing":
        return "Processing"
      case "packed":
        return "Packed"
      case "shipped":
        return "Shipped"
      case "out-for-delivery":
        return "Out for Delivery"
      case "delivered":
        return "Delivered"
      case "cancelled":
        return "Cancelled"
      default:
        return status.charAt(0).toUpperCase() + status.slice(1)
    }
  }

  return (
    <div className="space-y-6">
      {/* Order Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Order #{orderStatus.orderNumber}
            </CardTitle>
            <div className="flex items-center gap-3">
              <Badge className={getStatusColor(orderStatus.currentStatus)}>
                {getStatusText(orderStatus.currentStatus)}
              </Badge>
              <Button variant="outline" onClick={onReset} size="sm">
                Track Another Order
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Order Date</p>
                <p className="font-semibold">{new Date(orderStatus.orderDate).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                <p className="font-semibold">{new Date(orderStatus.estimatedDelivery).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <CreditCard className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Payment Method</p>
                <p className="font-semibold">{orderStatus.paymentMethod}</p>
              </div>
            </div>

            {orderStatus.trackingNumber && (
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Tracking Number</p>
                  <p className="font-semibold">{orderStatus.trackingNumber}</p>
                  {orderStatus.carrier && <p className="text-xs text-muted-foreground">{orderStatus.carrier}</p>}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Order Timeline */}
      <OrderTimeline currentStatus={orderStatus.currentStatus} timeline={orderStatus.timeline} />

      {/* Order Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Items */}
        <Card>
          <CardHeader>
            <CardTitle>Order Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {orderStatus.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-semibold">KSh {(item.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <p className="font-semibold">Total</p>
                  <p className="font-bold text-lg text-primary">KSh {orderStatus.total.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shipping Info */}
        <Card>
          <CardHeader>
            <CardTitle>Shipping Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Delivery Address</p>
                <div className="font-medium">
                  <p>{orderStatus.shippingAddress.street}</p>
                  <p>
                    {orderStatus.shippingAddress.city}, {orderStatus.shippingAddress.state}
                  </p>
                  <p>
                    {orderStatus.shippingAddress.country} {orderStatus.shippingAddress.postalCode}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                <p className="font-medium">
                  {new Date(orderStatus.estimatedDelivery).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              {orderStatus.currentStatus === "delivered" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800 font-medium flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Package delivered successfully!
                  </p>
                </div>
              )}

              {orderStatus.currentStatus === "out-for-delivery" && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800 font-medium flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    Your package is out for delivery today!
                  </p>
                  <div className="mt-2 flex items-center gap-4 text-xs text-blue-700">
                    <span className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      Driver: +254 700 123 456
                    </span>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">Need help with your order?</p>
                <div className="flex items-center gap-4 text-sm">
                  <a
                    href="mailto:1kihiupaul@gmail.com"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <Mail className="h-3 w-3" />
                    Email Support
                  </a>
                  <a href="tel:+254700123456" className="flex items-center gap-1 text-primary hover:underline">
                    <Phone className="h-3 w-3" />
                    Call Support
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
