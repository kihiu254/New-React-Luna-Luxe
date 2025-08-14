import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, BookOpen, Film, TrendingUp, Clock, MessageSquare } from "lucide-react"

export function JarvisSidebar() {
  const quickActions = [
    { icon: BookOpen, label: "Recommend Books", count: 3 },
    { icon: Film, label: "Suggest Movies", count: 5 },
    { icon: TrendingUp, label: "Trending Now", count: 12 },
    { icon: Clock, label: "Continue Reading", count: 2 },
  ]

  const recentChats = [
    { title: "Book recommendations for sci-fi", time: "2 hours ago" },
    { title: "Movies similar to Dune", time: "Yesterday" },
    { title: "Help me track reading progress", time: "2 days ago" },
    { title: "What should I watch tonight?", time: "3 days ago" },
  ]

  return (
    <aside className="w-80 border-r bg-card/50 backdrop-blur-sm">
      <div className="p-6 space-y-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-lime-500" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {quickActions.map((action, index) => (
              <Button key={index} variant="ghost" className="w-full justify-between h-auto p-3 hover:bg-muted/50">
                <div className="flex items-center gap-2">
                  <action.icon className="w-4 h-4 text-cyan-600" />
                  <span className="text-sm">{action.label}</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {action.count}
                </Badge>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">AI Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
              <p className="text-xs text-cyan-700 dark:text-cyan-300">
                You've been reading more sci-fi lately. I found 3 new releases that match your taste!
              </p>
            </div>
            <div className="p-3 bg-lime-50 dark:bg-lime-950 rounded-lg">
              <p className="text-xs text-lime-700 dark:text-lime-300">
                Your movie watching streak is 12 days. Keep it up!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Conversations */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Recent Chats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {recentChats.map((chat, index) => (
              <Button key={index} variant="ghost" className="w-full justify-start h-auto p-3 hover:bg-muted/50">
                <div className="text-left">
                  <p className="text-xs font-medium truncate">{chat.title}</p>
                  <p className="text-xs text-muted-foreground">{chat.time}</p>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </aside>
  )
}
