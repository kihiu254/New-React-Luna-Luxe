"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import type { CustomerDetails, PaymentDetails } from "./checkout-content"

interface OrderConfirmationProps {
  orderNumber: string
  customerDetails: CustomerDetails
  paymentDetails: PaymentDetails
}

export function OrderConfirmation({ orderNumber, customerDetails, paymentDetails }: OrderConfirmationProps) {
  const estimatedDelivery = new Date()
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 3)

  return (
    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
      <div className="mb-6">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Order Confirmed!</h2>
        <p className="text-gray-600">Thank you for your purchase. Your order has been successfully placed.</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Order Details</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>
                <span className="font-medium">Order Number:</span> {orderNumber}
              </p>
              <p>
                <span className="font-medium">Payment Method:</span>{" "}
                {paymentDetails.method === "mpesa" ? "M-Pesa" : "Credit/Debit Card"}
              </p>
              <p>
                <span className="font-medium">Payment Status:</span> <span className="text-green-600">Confirmed</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Delivery Information</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>
                <span className="font-medium">Delivery Address:</span>
              </p>
              <p>{customerDetails.address}</p>
              <p>{customerDetails.city}</p>
              <p>
                <span className="font-medium">Estimated Delivery:</span> {estimatedDelivery.toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          You will receive an email confirmation shortly with your order details and tracking information.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/order-tracking?order=${orderNumber}`}>
            <Button variant="outline" className="w-full sm:w-auto bg-transparent">
              Track Your Order
            </Button>
          </Link>
          <Link href="/">
            <Button className="w-full sm:w-auto">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
