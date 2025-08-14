import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, Trophy, Users } from "lucide-react"
import Link from "next/link"

export function ChallengesHeader() {
  return (
    <header className="border-b bg-gradient-to-r from-purple-50 to-orange-50 dark:from-purple-950 dark:to-orange-950">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/community">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Reading & Watching Challenges</h1>
              <div className="flex items-center gap-4 mt-2">
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                >
                  <Trophy className="w-3 h-3 mr-1" />
                  15 Active Challenges
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                >
                  <Users className="w-3 h-3 mr-1" />
                  3.2K Participants
                </Badge>
              </div>
            </div>
          </div>

          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Create Challenge
          </Button>
        </div>
      </div>
    </header>
  )
}
