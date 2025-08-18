import { ContactHeader } from "@/components/contact-header"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactMap } from "@/components/contact-map"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <ContactHeader />

      <main className="container mx-auto px-4 py-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div className="space-y-8">
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </main>
    </div>
  )
}
