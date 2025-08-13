"use client"

import { Button } from "@/components/ui/button"
import { OrderTimeline } from "@/components/order-tracking/order-timeline"
import type { OrderStatus } from "./order-tracking-content"
import { Package, Calendar, MapPin, CreditCard } from "lucide-react"

interface OrderTrackingResultProps {
  orderStatus: OrderStatus
  onReset: () => void
}

export function OrderTrackingResult({ orderStatus, onReset }: OrderTrackingResultProps) {
  return (
    <div className="space-y-6">
      {/* Order Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-serif font-semibold text-gray-900">Order Status</h2>
          <Button variant="outline" onClick={onReset} size="sm" className="bg-transparent">
            Track Another Order
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center space-x-3">
            <Package className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">Order Number</p>
              <p className="font-semibold text-gray-900">{orderStatus.orderNumber}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">Order Date</p>
              <p className="font-semibold text-gray-900">{new Date(orderStatus.orderDate).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">Estimated Delivery</p>
              <p className="font-semibold text-gray-900">
                {new Date(orderStatus.estimatedDelivery).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <CreditCard className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">Payment Method</p>
              <p className="font-semibold text-gray-900">{orderStatus.paymentMethod}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Timeline */}
      <OrderTimeline currentStatus={orderStatus.currentStatus} />

      {/* Order Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Items */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">Order Items</h3>
          <div className="space-y-3">
            {orderStatus.items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="font-semibold text-gray-900">KSh {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="pt-3 border-t">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-900">Total</p>
                <p className="font-bold text-lg text-gray-900">KSh {orderStatus.total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">Shipping Information</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Delivery Address</p>
              <p className="font-medium text-gray-900">{orderStatus.shippingAddress}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Estimated Delivery</p>
              <p className="font-medium text-gray-900">
                {new Date(orderStatus.estimatedDelivery).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            {orderStatus.currentStatus === "delivered" && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm text-green-800 font-medium">✓ Package delivered successfully!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
