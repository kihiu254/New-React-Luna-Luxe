"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import type { CustomerDetails, PaymentDetails } from "./checkout-content"

interface OrderConfirmationProps {
  orderNumber: string
  customerDetails: CustomerDetails
  paymentDetails: PaymentDetails
}

export function OrderConfirmation({ orderNumber, customerDetails, paymentDetails }: OrderConfirmationProps) {
  const [confirmationsSent, setConfirmationsSent] = useState(false)
  const estimatedDelivery = new Date()
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 3)

  useEffect(() => {
    const sendConfirmations = async () => {
      // Simulate sending email confirmation
      setTimeout(() => {
        toast.success("📧 Email confirmation sent!", {
          description: `Order confirmation sent to ${customerDetails.email}`,
        })
      }, 1000)

      // Simulate sending SMS confirmation
      setTimeout(() => {
        toast.success("📱 SMS confirmation sent!", {
          description: `Order updates will be sent to ${customerDetails.phone}`,
        })
      }, 2000)

      setConfirmationsSent(true)
    }

    sendConfirmations()
  }, [customerDetails.email, customerDetails.phone])

  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-sm p-8 text-center border border-border">
      <div className="mb-6">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
        <h2 className="text-2xl font-serif font-bold mb-2">Order Confirmed!</h2>
        <p className="text-muted-foreground">Thank you for your purchase. Your order has been successfully placed.</p>
      </div>

      <div className="bg-muted rounded-lg p-6 mb-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Order Details</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Order Number:</span> {orderNumber}
              </p>
              <p>
                <span className="font-medium text-foreground">Payment Method:</span>{" "}
                {paymentDetails.method === "mpesa" ? "M-Pesa" : "Credit/Debit Card"}
              </p>
              <p>
                <span className="font-medium text-foreground">Payment Status:</span>{" "}
                <span className="text-green-600">Confirmed</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Delivery Information</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Delivery Address:</span>
              </p>
              <p>{customerDetails.address}</p>
              <p>{customerDetails.city}</p>
              <p>
                <span className="font-medium text-foreground">Estimated Delivery:</span>{" "}
                {estimatedDelivery.toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-green-600" />
            <span className="text-green-700 dark:text-green-300">
              {confirmationsSent ? "Email sent" : "Sending email..."}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-4 w-4 text-green-600" />
            <span className="text-green-700 dark:text-green-300">
              {confirmationsSent ? "SMS sent" : "Sending SMS..."}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          You will receive email and SMS confirmations with your order details and tracking information.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/order-tracking?order=${orderNumber}&email=${encodeURIComponent(customerDetails.email)}`}>
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
