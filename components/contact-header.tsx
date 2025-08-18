import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function ContactHeader() {
  return (
    <header className="bg-petal-gradient border-b border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-foreground font-space-grotesk">
              Get In <span className="bg-flower-gradient bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate, discuss opportunities, or just have a conversation about technology? I'd love to
              hear from you.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button variant="outline" asChild>
                <Link href="tel:+254112081866">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Link>
              </Button>
              <Button asChild>
                <Link href="mailto:1kihiupaul@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
