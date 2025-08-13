"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import type { CustomerDetails, PaymentDetails } from "./checkout-content"

interface PaymentMethodFormProps {
  onSubmit: (payment: PaymentDetails) => void
  onBack: () => void
  customerDetails: CustomerDetails
}

export function PaymentMethodForm({ onSubmit, onBack, customerDetails }: PaymentMethodFormProps) {
  const [selectedMethod, setSelectedMethod] = useState<"mpesa" | "card">("mpesa")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const [mpesaData, setMpesaData] = useState({
    phone: customerDetails.phone || "",
  })

  const [cardData, setCardData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })

  const handleMpesaSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate M-Pesa payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Payment Successful",
        description: "Your M-Pesa payment has been processed successfully.",
      })

      onSubmit({
        method: "mpesa",
        mpesaPhone: mpesaData.phone,
      })
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your M-Pesa payment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCardSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate card payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Payment Successful",
        description: "Your card payment has been processed successfully.",
      })

      onSubmit({
        method: "card",
        cardNumber: cardData.cardNumber,
        expiryDate: cardData.expiryDate,
        cvv: cardData.cvv,
        cardName: cardData.cardName,
      })
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your card payment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6">Select Payment Method</h2>

      {/* Payment Method Selection */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <button
          type="button"
          onClick={() => setSelectedMethod("mpesa")}
          className={`p-4 border-2 rounded-lg flex items-center justify-center space-x-3 transition-colors ${
            selectedMethod === "mpesa" ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">M-PESA</span>
          </div>
          <span className="font-medium">M-Pesa</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedMethod("card")}
          className={`p-4 border-2 rounded-lg flex items-center justify-center space-x-3 transition-colors ${
            selectedMethod === "card" ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">VISA</span>
          </div>
          <span className="font-medium">Credit/Debit Card</span>
        </button>
      </div>

      {/* M-Pesa Form */}
      {selectedMethod === "mpesa" && (
        <form onSubmit={handleMpesaSubmit} className="space-y-6">
          <div>
            <Label htmlFor="mpesaPhone">M-Pesa Phone Number *</Label>
            <Input
              id="mpesaPhone"
              type="tel"
              value={mpesaData.phone}
              onChange={(e) => setMpesaData({ phone: e.target.value })}
              placeholder="254700000000"
              required
              className="mt-1"
            />
            <p className="text-sm text-gray-600 mt-1">You will receive an M-Pesa prompt on this number</p>
          </div>

          <div className="flex gap-4">
            <Button type="button" variant="outline" onClick={onBack} className="flex-1 bg-transparent">
              Back
            </Button>
            <Button type="submit" disabled={isLoading} className="flex-1">
              {isLoading ? "Processing..." : "Pay with M-Pesa"}
            </Button>
          </div>
        </form>
      )}

      {/* Card Form */}
      {selectedMethod === "card" && (
        <form onSubmit={handleCardSubmit} className="space-y-6">
          <div>
            <Label htmlFor="cardNumber">Card Number *</Label>
            <Input
              id="cardNumber"
              type="text"
              value={cardData.cardNumber}
              onChange={(e) => setCardData((prev) => ({ ...prev, cardNumber: e.target.value }))}
              placeholder="4111 1111 1111 1111"
              required
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiryDate">Expiry Date *</Label>
              <Input
                id="expiryDate"
                type="text"
                value={cardData.expiryDate}
                onChange={(e) => setCardData((prev) => ({ ...prev, expiryDate: e.target.value }))}
                placeholder="MM/YY"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="cvv">CVV *</Label>
              <Input
                id="cvv"
                type="text"
                value={cardData.cvv}
                onChange={(e) => setCardData((prev) => ({ ...prev, cvv: e.target.value }))}
                placeholder="123"
                required
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="cardName">Name on Card *</Label>
            <Input
              id="cardName"
              type="text"
              value={cardData.cardName}
              onChange={(e) => setCardData((prev) => ({ ...prev, cardName: e.target.value }))}
              placeholder="John Doe"
              required
              className="mt-1"
            />
          </div>

          <div className="flex gap-4">
            <Button type="button" variant="outline" onClick={onBack} className="flex-1 bg-transparent">
              Back
            </Button>
            <Button type="submit" disabled={isLoading} className="flex-1">
              {isLoading ? "Processing..." : "Pay with Card"}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
