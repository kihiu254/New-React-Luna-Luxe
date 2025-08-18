import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Film, BookOpen, Code, Camera, Music } from "lucide-react"

export function InterestsHobbies() {
  const interests = [
    {
      icon: Plane,
      title: "Travel & Exploration",
      description: "Exploring new destinations and cultures, gaining diverse perspectives that inspire creativity",
      color: "text-primary",
    },
    {
      icon: Film,
      title: "Cinema & Storytelling",
      description: "Watching a wide range of films to understand narrative structures and visual storytelling",
      color: "text-secondary",
    },
    {
      icon: BookOpen,
      title: "Reading & Learning",
      description: "Reading fiction and non-fiction across genres to expand knowledge and imagination",
      color: "text-accent",
    },
    {
      icon: Code,
      title: "Coding Projects",
      description: "Building personal projects and experimenting with new technologies in spare time",
      color: "text-chart-1",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and landscapes, developing an eye for composition and visual design",
      color: "text-chart-2",
    },
    {
      icon: Music,
      title: "Music & Audio",
      description: "Exploring different music genres and understanding how audio enhances digital experiences",
      color: "text-chart-3",
    },
  ]

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-foreground font-space-grotesk mb-4">Interests & Hobbies</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Beyond coding - the personal interests and hobbies that fuel creativity and provide inspiration for my work
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((interest, index) => {
          const IconComponent = interest.icon
          return (
            <Card key={index} className="border-border bg-background hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-card flex items-center justify-center ${interest.color}`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>
                <CardTitle className="text-lg font-semibold font-space-grotesk">{interest.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">{interest.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="border-border bg-petal-gradient max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground font-space-grotesk mb-4">How Interests Shape My Work</h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            My diverse interests contribute directly to my approach to software development. Travel broadens my
            perspective on user needs across different cultures, cinema teaches me about user experience and
            storytelling, reading enhances my problem-solving abilities, and photography develops my eye for design and
            composition. These experiences make me a more well-rounded developer who can create solutions that truly
            resonate with users.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
