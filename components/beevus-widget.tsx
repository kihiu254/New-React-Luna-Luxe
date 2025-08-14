import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, Mic, MessageCircle, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export function BeevusWidget() {
  const recommendations = [
    {
      type: "book",
      title: "The Seven Husbands of Evelyn Hugo",
      reason: "Based on your love for character-driven stories",
      confidence: 95,
    },
    {
      type: "movie",
      title: "Everything Everywhere All at Once",
      reason: "Matches your sci-fi preferences",
      confidence: 88,
    },
  ]

  const insights = [
    "You've read 3 more books this month than last month!",
    "Your sci-fi reading streak is 5 books strong",
    "2 books on your wishlist are now available",
  ]

  return (
    <div className="space-y-6">
      <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            Beevus AI
            <Badge
              variant="secondary"
              className="ml-auto bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
              Online
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            "Good evening! I've analyzed your recent activity and have some personalized recommendations ready."
          </p>

          <div className="flex gap-2">
            <Link href="/beevus" className="flex-1">
              <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                <MessageCircle className="w-4 h-4 mr-2" />
                Open Chat
              </Button>
            </Link>
            <Button size="sm" variant="outline" className="bg-transparent">
              <Mic className="w-4 h-4 mr-2" />
              Voice
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-500" />
            AI Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {insights.map((insight, index) => (
            <div key={index} className="p-3 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground">{insight}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-500" />
            Smart Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-sm">{rec.title}</h4>
                <Badge variant="outline" className="text-xs">
                  {rec.confidence}% match
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{rec.reason}</p>
              <Button size="sm" variant="outline" className="w-full bg-transparent">
                Add to Wishlist
              </Button>
            </div>
          ))}

          <Link href="/beevus">
            <Button variant="ghost" className="w-full text-purple-600 hover:text-purple-700">
              Ask Beevus for More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
