import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Palette, Users } from "lucide-react"

export function SkillsOverview() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["HTML", "CSS", "JavaScript", "Python", "PHP"],
      color: "text-primary",
    },
    {
      icon: Database,
      title: "Tools & Technologies",
      skills: ["MySQL", "VS Code", "Git", "Figma"],
      color: "text-secondary",
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: ["UI/UX Planning", "Visual Branding", "Responsive Design", "Mobile-First"],
      color: "text-accent",
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Problem-solving", "Teamwork", "Adaptability", "Attention to Detail"],
      color: "text-chart-1",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground font-space-grotesk mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and solving complex problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full bg-card flex items-center justify-center ${category.color}`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold font-space-grotesk">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
