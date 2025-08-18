import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Clock, MessageCircle } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "1kihiupaul@gmail.com",
      description: "Best for detailed inquiries and formal communication",
      action: "mailto:1kihiupaul@gmail.com",
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+254 112 081 866",
      description: "Available for calls during business hours",
      action: "tel:+254112081866",
      color: "text-secondary",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Meru, Kenya",
      description: "Open to remote work and local opportunities",
      action: "#",
      color: "text-accent",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/kihiu254",
      description: "View my code repositories and contributions",
      action: "https://github.com/kihiu254",
      color: "text-chart-1",
    },
  ]

  return (
    <Card className="border-border bg-background">
      <CardHeader>
        <CardTitle className="font-space-grotesk text-2xl">Contact Information</CardTitle>
        <p className="text-sm text-muted-foreground">Multiple ways to reach me for different types of inquiries</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {contactMethods.map((method, index) => {
          const IconComponent = method.icon
          return (
            <div key={index} className="flex items-start gap-4">
              <div className={`w-12 h-12 bg-card rounded-full flex items-center justify-center ${method.color}`}>
                <IconComponent className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{method.title}</h4>
                <p className="text-sm font-medium text-foreground">{method.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                {method.action !== "#" && (
                  <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto" asChild>
                    <Link
                      href={method.action}
                      target={method.action.startsWith("http") ? "_blank" : undefined}
                      rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      Contact via {method.title}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          )
        })}

        <div className="pt-6 border-t border-border">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-primary" />
            <h4 className="font-semibold text-foreground">Response Times</h4>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Email inquiries:</span>
              <span className="font-medium">Within 24 hours</span>
            </div>
            <div className="flex justify-between">
              <span>Attachment opportunities:</span>
              <span className="font-medium">Within 12 hours</span>
            </div>
            <div className="flex justify-between">
              <span>Project collaborations:</span>
              <span className="font-medium">Within 6 hours</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-petal-gradient rounded-lg border border-border">
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="w-4 h-4 text-primary" />
            <h4 className="font-semibold text-foreground">Preferred Communication</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            I prefer email for detailed discussions and phone calls for urgent matters. Feel free to reach out through
            any channel that works best for you!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
