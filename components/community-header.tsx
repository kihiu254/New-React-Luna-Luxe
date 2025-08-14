import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Users, Trophy, MessageSquare, ArrowLeft } from "lucide-react"
import Link from "next/link"

export function CommunityHeader() {
  return (
    <header className="border-b bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Community</h1>
              <div className="flex items-center gap-4 mt-2">
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                >
                  <Users className="w-3 h-3 mr-1" />
                  12.5K Members
                </Badge>
                <Badge variant="secondary" className="bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300">
                  <MessageSquare className="w-3 h-3 mr-1" />
                  2.3K Active Today
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search community..." className="pl-10 w-64" />
            </div>
            <Link href="/community/challenges">
              <Button variant="outline" className="bg-transparent">
                <Trophy className="w-4 h-4 mr-2" />
                Challenges
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
