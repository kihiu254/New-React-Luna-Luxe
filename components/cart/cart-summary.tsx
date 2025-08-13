"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"

export function CartSummary() {
  const { getSubtotal, getShipping, getTax, getTotal, items } = useCart()

  const subtotal = getSubtotal()
  const shipping = getShipping()
  const tax = getTax()
  const total = getTotal()

  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">Order Summary</h2>

      <div className="space-y-3 mb-6">
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
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
          <p className="text-sm text-blue-800">Add KSh {(5000 - subtotal).toFixed(2)} more for free shipping!</p>
        </div>
      )}

      <div className="space-y-3">
        <Link href="/checkout">
          <Button className="w-full" size="lg" disabled={items.length === 0}>
            Proceed to Checkout
          </Button>
        </Link>

        <Link href="/shop">
          <Button variant="outline" className="w-full bg-transparent">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  )
}
