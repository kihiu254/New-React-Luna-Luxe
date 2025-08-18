import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Target, Briefcase, Mail, FileText } from "lucide-react"
import Link from "next/link"

export function AttachmentGoals() {
  const attachmentAreas = [
    {
      title: "Python Programming",
      description: "Advanced Python development, data structures, and application development",
      level: "Intermediate to Advanced",
    },
    {
      title: "Data Analysis & Visualization",
      description: "Working with datasets, creating insights, and building visualization dashboards",
      level: "Beginner to Intermediate",
    },
    {
      title: "Cloud Computing",
      description: "Cloud platforms, deployment strategies, and scalable architecture design",
      level: "Beginner",
    },
    {
      title: "Machine Learning Applications",
      description: "Practical ML implementations, model training, and AI-powered solutions",
      level: "Beginner",
    },
    {
      title: "Database Design & Management",
      description: "Advanced database concepts, optimization, and enterprise-level data management",
      level: "Intermediate",
    },
    {
      title: "Content Publishing",
      description: "Content management systems, digital publishing, and web content strategies",
      level: "Intermediate",
    },
    {
      title: "Data Mining Techniques",
      description: "Extracting insights from large datasets and implementing data mining algorithms",
      level: "Beginner",
    },
  ]

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-foreground font-space-grotesk mb-4">
          Attachment <span className="bg-flower-gradient bg-clip-text text-transparent">Goals</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Seeking practical experience and mentorship opportunities from September to December 2025
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Attachment Information */}
        <Card className="border-border bg-background">
          <CardHeader>
            <CardTitle className="font-space-grotesk text-2xl flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" />
              Attachment Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Duration</p>
                  <p className="text-sm text-muted-foreground">September - December 2025 (4 months)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Objective</p>
                  <p className="text-sm text-muted-foreground">
                    Gain practical experience in software development, web design, and real-world IT operations
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Documentation</p>
                  <p className="text-sm text-muted-foreground">
                    Reference letter from Meru National Polytechnic available upon request
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-petal-gradient rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">What I Bring</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Strong foundation in web development and programming
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Proven ability to deliver client-facing projects
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Enthusiasm for learning and adapting to new technologies
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Strong problem-solving and teamwork skills
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1 bg-flower-gradient hover:opacity-90 text-white" asChild>
                <Link href="mailto:1kihiupaul@gmail.com?subject=Attachment Opportunity - Paul Kihiu">
                  <Mail className="w-4 h-4 mr-2" />
                  Discuss Opportunity
                </Link>
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent" asChild>
                <Link href="#" download>
                  <FileText className="w-4 h-4 mr-2" />
                  Download CV
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Areas of Interest */}
        <Card className="border-border bg-background">
          <CardHeader>
            <CardTitle className="font-space-grotesk text-2xl">Areas of Interest</CardTitle>
            <p className="text-sm text-muted-foreground">
              Specific domains where I'm seeking hands-on experience and mentorship
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {attachmentAreas.map((area, index) => (
                <div key={index} className="p-4 border border-border rounded-lg hover:bg-card transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{area.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {area.level}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-card rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Ideal Attachment Environment</h4>
              <p className="text-sm text-muted-foreground">
                Looking for a collaborative environment where I can contribute to real projects while learning from
                experienced professionals. Open to both startup and established company environments that value
                innovation and growth.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
