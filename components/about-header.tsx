import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Mail } from "lucide-react"
import Link from "next/link"

export function AboutHeader() {
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
              About <span className="bg-flower-gradient bg-clip-text text-transparent">Paul</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate computer science student with a drive for innovation, problem-solving, and creating technology
              solutions that make a real-world impact.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button variant="outline" asChild>
                <Link href="#" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Link>
              </Button>
              <Button asChild>
                <Link href="mailto:1kihiupaul@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
