import { CustomerServiceContent } from "@/components/customer-service/customer-service-content"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CustomerServicePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CustomerServiceContent />
      </main>
      <Footer />
    </div>
  )
}
