"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Search } from "lucide-react"

interface OrderTrackingFormProps {
  onSubmit: (orderNumber: string, email: string) => void
  isLoading: boolean
  error: string | null
}

export function OrderTrackingForm({ onSubmit, isLoading, error }: OrderTrackingFormProps) {
  const [orderNumber, setOrderNumber] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(orderNumber, email)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6">Enter Order Details</h2>

      {error && (
        <Alert className="mb-6 border-red-200 bg-red-50">
          <AlertDescription className="text-red-800">{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="orderNumber">Order Number *</Label>
          <Input
            id="orderNumber"
            type="text"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            placeholder="Enter your order number (e.g., LL123456)"
            required
            className="mt-1"
          />
          <p className="text-sm text-gray-600 mt-1">You can find this in your order confirmation email</p>
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="mt-1"
          />
        </div>

        <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
          {isLoading ? (
            <>
              <Search className="mr-2 h-4 w-4 animate-spin" />
              Tracking Order...
            </>
          ) : (
            <>
              <Search className="mr-2 h-4 w-4" />
              Track Order
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-medium text-blue-900 mb-2">Demo Order Numbers</h3>
        <p className="text-sm text-blue-800">
          Try these demo orders: <strong>LL123456</strong> (customer@example.com) or <strong>LL789012</strong>{" "}
          (test@example.com)
        </p>
      </div>
    </div>
  )
}
