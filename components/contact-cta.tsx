import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github } from "lucide-react"
import Link from "next/link"

export function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground font-space-grotesk mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Currently seeking attachment opportunities (Sept-Dec 2025) in software development, web design, and IT
              operations. Let's connect and build something amazing!
            </p>
          </div>

          <Card className="bg-petal-gradient border-border">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground font-space-grotesk mb-6">Get In Touch</h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <Link
                          href="mailto:1kihiupaul@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          1kihiupaul@gmail.com
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <Link
                          href="tel:+254112081866"
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          +254 112 081 866
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-muted-foreground">Meru, Kenya</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6">
                    <p className="font-medium text-foreground mb-4">Connect with me</p>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://github.com/kihiu254" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="mailto:1kihiupaul@gmail.com">
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Call-to-Action */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground font-space-grotesk">Attachment Goals</h3>
                  <p className="text-muted-foreground leading-relaxed">Seeking practical experience in:</p>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Python Programming",
                      "Data Analysis",
                      "Cloud Computing",
                      "Machine Learning",
                      "Database Design",
                      "Content Publishing",
                    ].map((goal, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{goal}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <Button size="lg" className="w-full bg-flower-gradient hover:opacity-90 text-white font-semibold">
                      <Link href="mailto:1kihiupaul@gmail.com?subject=Attachment Opportunity">
                        Start a Conversation
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
