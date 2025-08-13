import { ContactContent } from "@/components/contact/contact-content"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </div>
  )
}
