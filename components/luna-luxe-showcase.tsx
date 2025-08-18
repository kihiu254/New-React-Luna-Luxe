import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Smartphone, Zap, Users, TrendingUp, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function LunaLuxeShowcase() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Shopping Cart Integration",
      description: "Seamless cart functionality with real-time updates and persistent storage",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Fully responsive layout optimized for all device sizes and orientations",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized loading times and smooth user interactions across all pages",
    },
    {
      icon: Users,
      title: "Newsletter Integration",
      description: "Built-in newsletter signup with form validation and user feedback",
    },
  ]

  const metrics = [
    { label: "Page Load Time", value: "< 2s", icon: Zap },
    { label: "Mobile Score", value: "98/100", icon: Smartphone },
    { label: "User Engagement", value: "+45%", icon: TrendingUp },
    { label: "Conversion Rate", value: "12.3%", icon: ShoppingCart },
  ]

  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript ES6+",
    "Responsive Design",
    "Mobile-First",
    "Performance Optimization",
    "Form Validation",
    "Local Storage",
  ]

  return (
    <section id="luna-luxe" className="space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star className="w-6 h-6 text-secondary fill-secondary" />
          <Badge variant="secondary" className="text-sm font-semibold">
            Featured E-commerce Project
          </Badge>
          <Star className="w-6 h-6 text-secondary fill-secondary" />
        </div>
        <h2 className="text-4xl font-bold text-foreground font-space-grotesk">
          Luna<span className="bg-flower-gradient bg-clip-text text-transparent">Luxe</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A sophisticated e-commerce platform for a Kenyan fashion brand, featuring modern design, seamless shopping
          experience, and mobile-first architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Project Overview */}
        <Card className="border-border bg-background">
          <CardHeader>
            <CardTitle className="font-space-grotesk text-2xl">Project Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground">{feature.title}</h5>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1 bg-flower-gradient hover:opacity-90 text-white" asChild>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent" asChild>
                <Link href="https://github.com/kihiu254/lunaluxe-ecommerce" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Project Metrics & Impact */}
        <Card className="border-border bg-background">
          <CardHeader>
            <CardTitle className="font-space-grotesk text-2xl">Impact & Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon
                return (
                  <div key={index} className="text-center p-4 bg-card rounded-lg border border-border">
                    <IconComponent className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-bold text-xl text-foreground">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                )
              })}
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Project Highlights</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Successfully delivered a complete e-commerce solution for a real Kenyan fashion brand
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Implemented responsive design ensuring seamless experience across all devices
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Integrated shopping cart functionality with persistent storage and form validation
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-chart-1 rounded-full mt-1.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Optimized for performance with fast loading times and smooth user interactions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-petal-gradient rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Client Feedback</h4>
              <p className="text-sm text-muted-foreground italic">
                "Paul delivered an exceptional e-commerce platform that perfectly captured our brand vision. The
                attention to detail and mobile optimization exceeded our expectations."
              </p>
              <p className="text-xs text-muted-foreground mt-2">- Luna Luxe Fashion Team</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
