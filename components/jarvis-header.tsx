import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, Mic, Settings, Minimize2 } from "lucide-react"
import Link from "next/link"

export function JarvisHeader() {
  return (
    <header className="border-b bg-gradient-to-r from-cyan-50 to-lime-50 dark:from-cyan-950 dark:to-lime-950">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <Minimize2 className="w-5 h-5" />
              </Button>
            </Link>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-lime-500 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Jarvis AI</h1>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                    Online
                  </Badge>
                  <span className="text-xs text-muted-foreground">Your AI Entertainment Companion</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="bg-transparent">
              <Mic className="w-4 h-4 mr-2" />
              Voice Mode
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
