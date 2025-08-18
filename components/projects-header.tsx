import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export function ProjectsHeader() {
  return (
    <header className="bg-petal-gradient border-b border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-foreground font-space-grotesk">
              My <span className="bg-flower-gradient bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of my web development journey, featuring responsive designs, innovative
              solutions, and real-world applications built with modern technologies.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button variant="outline" asChild>
                <Link href="https://github.com/kihiu254" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View All on GitHub
                </Link>
              </Button>
              <Button asChild>
                <Link href="#luna-luxe">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Featured Project
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
