import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Users, Lightbulb } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "Client Project Success",
      description: "Completed a client-facing website for Mr Trendy Luxury Designs",
      category: "Professional",
      impact: "Delivered a complete luxury fashion platform that met all client requirements",
    },
    {
      icon: Star,
      title: "Innovation Recognition",
      description: "Recognized for innovation in class projects at Meru National Polytechnic",
      category: "Academic",
      impact: "Demonstrated creative problem-solving and technical excellence in coursework",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Successfully led collaborative development projects with version control",
      category: "Leadership",
      impact: "Coordinated team efforts and maintained code quality across multiple contributors",
    },
    {
      icon: Lightbulb,
      title: "Technology Adaptability",
      description: "Quick to adapt to new tools and technologies in the rapidly evolving tech landscape",
      category: "Technical",
      impact: "Consistently learned and implemented new frameworks and development practices",
    },
  ]

  const skills = [
    { category: "Programming", skills: ["HTML", "CSS", "JavaScript", "Python", "PHP"] },
    { category: "Tools", skills: ["MySQL", "Figma", "VS Code", "Git"] },
    { category: "Soft Skills", skills: ["Problem-solving", "Teamwork", "Adaptability", "Attention to Detail"] },
  ]

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-foreground font-space-grotesk mb-4">Achievements & Skills</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Recognition, accomplishments, and the technical skills that drive my success in software development
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Achievements */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground font-space-grotesk">Key Achievements</h3>
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card key={index} className="border-border bg-background">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {achievement.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground italic">{achievement.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Skills Summary */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground font-space-grotesk">Technical Skills</h3>
          {skills.map((skillGroup, index) => (
            <Card key={index} className="border-border bg-background">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-space-grotesk">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="border-border bg-petal-gradient">
            <CardContent className="p-6">
              <h4 className="font-semibold text-foreground mb-3">Professional Philosophy</h4>
              <p className="text-sm text-muted-foreground italic">
                "Success in technology comes not just from knowing the tools, but from understanding how to use them to
                create meaningful solutions that improve people's lives and solve real-world problems."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
