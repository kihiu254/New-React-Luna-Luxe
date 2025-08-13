import { CheckoutContent } from "@/components/checkout/checkout-content"
import { Header } from "@/components/header"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <CheckoutContent />
      </main>
    </div>
  )
}
