"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/use-cart"
import { useAuth } from "@/hooks/use-auth"
import { CheckoutSteps } from "@/components/checkout/checkout-steps"
import { CustomerDetailsForm } from "@/components/checkout/customer-details-form"
import { PaymentMethodForm } from "@/components/checkout/payment-method-form"
import { OrderConfirmation } from "@/components/checkout/order-confirmation"
import { OrderSummary } from "@/components/checkout/order-summary"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, User } from "lucide-react"

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
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login?redirect=/checkout")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-600"></div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-rose-600" />
            </div>
            <CardTitle className="text-2xl font-serif">Authentication Required</CardTitle>
            <CardDescription className="text-lg">
              Please log in to your account to proceed with checkout
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              To ensure secure transactions and order tracking, you must be logged in to complete your purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => router.push("/login?redirect=/checkout")}
                className="bg-rose-600 hover:bg-rose-700"
              >
                <User className="w-4 h-4 mr-2" />
                Log In
              </Button>
              <Button variant="outline" onClick={() => router.push("/signup?redirect=/checkout")}>
                Create Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

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

    const orderNum = `LL${Date.now().toString().slice(-6)}`
    setOrderNumber(orderNum)

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
        {user && <p className="text-muted-foreground mb-4">Welcome back, {user.name}!</p>}
        <CheckoutSteps currentStep={currentStep} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

        {currentStep < 3 && (
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        )}
      </div>
    </div>
  )
}
