import { OrderTrackingContent } from "@/components/order-tracking/order-tracking-content"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Suspense } from "react"

function OrderTrackingFallback() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold mb-2">Track Your Order</h1>
        <p className="text-muted-foreground">Loading...</p>
      </div>
      <div className="animate-pulse">
        <div className="h-32 bg-gray-200 rounded-lg mb-4"></div>
        <div className="h-16 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  )
}

export default function OrderTrackingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Suspense fallback={<OrderTrackingFallback />}>
          <OrderTrackingContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
