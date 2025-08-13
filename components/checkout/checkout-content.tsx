"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/use-cart"
import { CheckoutSteps } from "@/components/checkout/checkout-steps"
import { CustomerDetailsForm } from "@/components/checkout/customer-details-form"
import { PaymentMethodForm } from "@/components/checkout/payment-method-form"
import { OrderConfirmation } from "@/components/checkout/order-confirmation"
import { OrderSummary } from "@/components/checkout/order-summary"

export interface CustomerDetails {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
}

export interface PaymentDetails {
  method: "mpesa" | "card"
  mpesaPhone?: string
  cardNumber?: string
  expiryDate?: string
  cvv?: string
  cardName?: string
}

export function CheckoutContent() {
  const [currentStep, setCurrentStep] = useState(1)
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails | null>(null)
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null)
  const [orderNumber, setOrderNumber] = useState<string>("")
  const { items, clearCart } = useCart()
  const router = useRouter()

  // Redirect if cart is empty
  if (items.length === 0 && currentStep < 3) {
    router.push("/cart")
    return null
  }

  const handleCustomerDetailsSubmit = (details: CustomerDetails) => {
    setCustomerDetails(details)
    setCurrentStep(2)
  }

  const handlePaymentSubmit = async (payment: PaymentDetails) => {
    setPaymentDetails(payment)

    // Generate order number
    const orderNum = `LL${Date.now().toString().slice(-6)}`
    setOrderNumber(orderNum)

    // Clear cart and move to confirmation
    clearCart()
    setCurrentStep(3)
  }

  const handleBackToStep = (step: number) => {
    setCurrentStep(step)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Checkout</h1>
        <CheckoutSteps currentStep={currentStep} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {currentStep === 1 && (
            <CustomerDetailsForm onSubmit={handleCustomerDetailsSubmit} initialData={customerDetails} />
          )}

          {currentStep === 2 && (
            <PaymentMethodForm
              onSubmit={handlePaymentSubmit}
              onBack={() => handleBackToStep(1)}
              customerDetails={customerDetails!}
            />
          )}

          {currentStep === 3 && (
            <OrderConfirmation
              orderNumber={orderNumber}
              customerDetails={customerDetails!}
              paymentDetails={paymentDetails!}
            />
          )}
        </div>

        {/* Order Summary Sidebar */}
        {currentStep < 3 && (
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        )}
      </div>
    </div>
  )
}
