"use client"

import { useCart } from "@/hooks/use-cart"

export function OrderSummary() {
  const { items, getSubtotal, getShipping, getTax, getTotal } = useCart()

  const subtotal = getSubtotal()
  const shipping = getShipping()
  const tax = getTax()
  const total = getTotal()

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">Order Summary</h2>

      {/* Cart Items */}
      <div className="space-y-3 mb-6">
        {items.map((item) => (
          <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center gap-3">
            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-12 h-12 object-cover rounded" />
            <div className="flex-grow">
              <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
              <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
            </div>
            <p className="text-sm font-semibold text-gray-900">KSh {(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Pricing Breakdown */}
      <div className="space-y-3 border-t pt-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>KSh {subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>{shipping === 0 ? "Free" : `KSh ${shipping.toFixed(2)}`}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Tax (16% VAT)</span>
          <span>KSh {tax.toFixed(2)}</span>
        </div>

        <div className="border-t pt-3">
          <div className="flex justify-between text-lg font-semibold text-gray-900">
            <span>Total</span>
            <span>KSh {total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {shipping > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
          <p className="text-sm text-blue-800">Add KSh {(5000 - subtotal).toFixed(2)} more for free shipping!</p>
        </div>
      )}
    </div>
  )
}
