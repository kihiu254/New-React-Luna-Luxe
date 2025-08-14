import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Film, Star, MessageCircle, Heart, Clock } from "lucide-react"

interface ActivityItem {
  id: string
  type: "book_read" | "movie_watched" | "review_posted" | "book_rated" | "movie_rated"
  title: string
  subtitle?: string
  rating?: number
  timestamp: string
  content?: string
}

interface UserActivityProps {
  activities: ActivityItem[]
}

export function UserActivity({ activities }: UserActivityProps) {
  const getActivityIcon = (type: ActivityItem["type"]) => {
    switch (type) {
      case "book_read":
        return <BookOpen className="w-4 h-4 text-purple-600" />
      case "movie_watched":
        return <Film className="w-4 h-4 text-pink-600" />
      case "review_posted":
        return <MessageCircle className="w-4 h-4 text-blue-600" />
      case "book_rated":
      case "movie_rated":
        return <Star className="w-4 h-4 text-yellow-500" />
      default:
        return <Heart className="w-4 h-4 text-red-500" />
    }
  }

  const getActivityText = (activity: ActivityItem) => {
    switch (activity.type) {
      case "book_read":
        return `finished reading "${activity.title}"`
      case "movie_watched":
        return `watched "${activity.title}"`
      case "review_posted":
        return `posted a review for "${activity.title}"`
      case "book_rated":
        return `rated "${activity.title}" ${activity.rating} stars`
      case "movie_rated":
        return `rated "${activity.title}" ${activity.rating} stars`
      default:
        return `interacted with "${activity.title}"`
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-purple-600" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <div className="mt-1">{getActivityIcon(activity.type)}</div>

            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-medium">You</span> {getActivityText(activity)}
              </p>

              {activity.subtitle && <p className="text-xs text-muted-foreground mt-1">{activity.subtitle}</p>}

              {activity.content && <p className="text-xs text-muted-foreground mt-2 italic">"{activity.content}"</p>}

              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                {activity.rating && (
                  <Badge variant="secondary" className="text-xs">
                    {activity.rating} ⭐
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ))}

        {activities.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p>No recent activity</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
