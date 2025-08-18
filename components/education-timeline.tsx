import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function EducationTimeline() {
  const education = [
    {
      institution: "Meru National Polytechnic",
      degree: "Diploma in Computer Science (Level 6)",
      period: "2022 - 2025",
      status: "In Progress",
      location: "Meru, Kenya",
      description:
        "Comprehensive computer science program covering software development, web technologies, database management, and system analysis.",
      highlights: [
        "Software Development & Programming",
        "Web Design & Development",
        "Database Design & Management",
        "System Analysis & Design",
        "Project Management",
        "Digital Innovation",
      ],
      achievements: [
        "Recognized for innovation in class projects",
        "Completed client-facing website projects",
        "Active participation in coding competitions",
      ],
    },
    {
      institution: "The Kirimara Boys High School",
      degree: "Kenya Certificate of Secondary Education (KCSE)",
      period: "2019 - 2022",
      status: "Completed",
      location: "Kenya",
      description:
        "Completed secondary education with strong performance in mathematics and sciences, laying the foundation for computer science studies.",
      highlights: ["Mathematics", "Physics", "Chemistry", "English", "Kiswahili"],
      achievements: [
        "Strong performance in STEM subjects",
        "Leadership roles in school activities",
        "Developed early interest in technology",
      ],
    },
  ]

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-foreground font-space-grotesk mb-4">Education Journey</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          My academic path in computer science and the foundation that shapes my technical expertise
        </p>
      </div>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <Card key={index} className="border-border bg-background">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="font-space-grotesk text-xl">{edu.institution}</CardTitle>
                  <p className="text-lg font-medium text-foreground">{edu.degree}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>
                </div>
                <Badge variant={edu.status === "In Progress" ? "default" : "secondary"} className="text-xs">
                  {edu.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">{edu.description}</p>

              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Key Subjects & Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <Badge key={highlightIndex} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Notable Achievements
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
