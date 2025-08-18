import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star } from "lucide-react"
import Link from "next/link"

export function FeaturedProjects() {
  const projects = [
    {
      title: "LunaLuxe E-commerce",
      description:
        "Responsive e-commerce website for a Kenyan fashion brand with integrated shopping carts, newsletter forms, and product displays. Built with focus on mobile responsiveness and clean navigation.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      featured: true,
      status: "Completed",
      type: "Solo Project",
    },
    {
      title: "Mr Trendy Platform",
      description:
        "Luxury fashion web platform developed in collaboration with a team. Contributed to UI/UX planning, visual branding, and frontend styling with Git-based version control.",
      technologies: ["HTML", "CSS", "JavaScript", "Git", "UI/UX"],
      featured: false,
      status: "Completed",
      type: "Team Project",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground font-space-grotesk mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development and digital innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all duration-300 border-border ${
                project.featured ? "ring-2 ring-primary/20 bg-background" : "bg-background"
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl font-bold font-space-grotesk">{project.title}</CardTitle>
                    {project.featured && <Star className="w-5 h-5 text-secondary fill-secondary" />}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="text-xs">
                      {project.type}
                    </Badge>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
