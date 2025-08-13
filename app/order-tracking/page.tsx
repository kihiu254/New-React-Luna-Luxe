import { OrderTrackingContent } from "@/components/order-tracking/order-tracking-content"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function OrderTrackingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <OrderTrackingContent />
      </main>
      <Footer />
    </div>
  )
}
