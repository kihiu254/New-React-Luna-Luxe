import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Users, Trophy, Calendar, Star } from "lucide-react"

export function CommunitySidebar() {
  const trendingTopics = [
    { tag: "#SciFiSeptember", posts: 234 },
    { tag: "#BookClub", posts: 189 },
    { tag: "#MovieNight", posts: 156 },
    { tag: "#ReadingGoals", posts: 142 },
    { tag: "#NetflixRecommendations", posts: 98 },
  ]

  const activeUsers = [
    { name: "Sarah Chen", username: "sarahreads", avatar: "/user-avatar-1.png", points: 1250 },
    { name: "Mike Rodriguez", username: "moviemike", avatar: "/user-avatar-2.png", points: 1180 },
    { name: "Emma Thompson", username: "emmareads", avatar: "/user-avatar-3.png", points: 1050 },
    { name: "David Park", username: "davidwatches", avatar: "/user-avatar-4.png", points: 980 },
  ]

  const upcomingEvents = [
    {
      title: "Virtual Book Club: Dune Discussion",
      date: "Tomorrow, 7 PM",
      participants: 45,
    },
    {
      title: "Movie Night: Sci-Fi Classics",
      date: "Friday, 8 PM",
      participants: 78,
    },
    {
      title: "Reading Challenge Check-in",
      date: "Sunday, 3 PM",
      participants: 156,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Trending Topics */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-orange-500" />
            Trending Topics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{topic.tag}</span>
              <span className="text-xs text-muted-foreground">{topic.posts} posts</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Top Contributors */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            Top Contributors
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {activeUsers.map((user, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex items-center gap-2 flex-1">
                <span className="text-xs font-bold text-muted-foreground w-4">#{index + 1}</span>
                <Avatar className="w-6 h-6">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-xs">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium truncate">{user.name}</p>
                  <p className="text-xs text-muted-foreground">@{user.username}</p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                {user.points}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Current Challenge */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Trophy className="w-4 h-4 text-purple-500" />
            Your Active Challenge
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-medium text-sm">Sci-Fi September</h4>
            <p className="text-xs text-muted-foreground">Read 5 sci-fi books this month</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>Progress</span>
              <span>3/5 books</span>
            </div>
            <Progress value={60} className="h-2" />
          </div>
          <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
            View Challenge
          </Button>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-500" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="p-3 bg-muted/50 rounded-lg">
              <h5 className="font-medium text-xs mb-1">{event.title}</h5>
              <p className="text-xs text-muted-foreground mb-2">{event.date}</p>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{event.participants} attending</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
