import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, GraduationCap, Target } from "lucide-react"

export function PersonalProfile() {
  const personalInfo = [
    { icon: MapPin, label: "Location", value: "Meru, Kenya" },
    { icon: Calendar, label: "Age", value: "21 years old" },
    { icon: GraduationCap, label: "Education", value: "Diploma in Computer Science" },
    { icon: Target, label: "Goal", value: "Software Development Excellence" },
  ]

  const coreValues = [
    {
      title: "Innovation",
      description: "Constantly seeking new ways to solve problems and improve existing solutions",
    },
    {
      title: "Quality",
      description: "Committed to delivering high-quality, efficient, and scalable solutions",
    },
    {
      title: "Learning",
      description: "Passionate about continuous learning and staying updated with latest technologies",
    },
    {
      title: "Impact",
      description: "Focused on creating technology that makes a meaningful difference in people's lives",
    },
  ]

  return (
    <section id="about" className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-foreground font-space-grotesk mb-4">Personal Profile</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Get to know the person behind the code - my background, values, and what drives my passion for technology
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personal Information */}
        <Card className="border-border bg-background">
          <CardHeader>
            <CardTitle className="font-space-grotesk text-2xl">Who I Am</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I am a passionate and motivated computer science student at Meru National Polytechnic with a strong
              interest in software development, web design, and digital innovation. My goal is to apply technology to
              solve real-world problems by building user-friendly, efficient, and scalable solutions.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {personalInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="pt-4">
              <h4 className="font-semibold text-foreground mb-3">Languages</h4>
              <div className="flex gap-3">
                <Badge variant="secondary">English - Fluent</Badge>
                <Badge variant="secondary">Kiswahili - Fluent</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Values */}
        <Card className="border-border bg-background">
          <CardHeader>
            <CardTitle className="font-space-grotesk text-2xl">Core Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {coreValues.map((value, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground pl-4">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-petal-gradient rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Mission Statement</h4>
              <p className="text-sm text-muted-foreground italic">
                "To leverage technology as a force for positive change, creating innovative solutions that bridge the
                gap between complex problems and user-friendly experiences."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
