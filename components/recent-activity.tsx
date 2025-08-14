import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Book, Film, Star } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      type: "book",
      title: "The Midnight Library",
      author: "Matt Haig",
      status: "completed",
      rating: 5,
      date: "2 hours ago",
      cover: "/midnight-library-cover.png",
    },
    {
      type: "movie",
      title: "Dune: Part Two",
      director: "Denis Villeneuve",
      status: "watching",
      progress: 65,
      date: "Yesterday",
      cover: "/dune-part-two-poster.png",
    },
    {
      type: "book",
      title: "Project Hail Mary",
      author: "Andy Weir",
      status: "reading",
      progress: 78,
      date: "3 days ago",
      cover: "/project-hail-mary-cover.png",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Recent Activity
          <Badge variant="secondary" className="ml-auto">
            {activities.length} items
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <img
              src={activity.cover || "/placeholder.svg"}
              alt={activity.title}
              className="w-12 h-16 object-cover rounded-md shadow-sm"
            />

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                {activity.type === "book" ? (
                  <Book className="w-4 h-4 text-cyan-600" />
                ) : (
                  <Film className="w-4 h-4 text-lime-500" />
                )}
                <h4 className="font-medium text-foreground truncate">{activity.title}</h4>
              </div>

              <p className="text-sm text-muted-foreground">
                {activity.type === "book" ? activity.author : activity.director}
              </p>

              <div className="flex items-center gap-2 mt-2">
                <Badge variant={activity.status === "completed" ? "default" : "secondary"} className="text-xs">
                  {activity.status}
                </Badge>

                {activity.rating && (
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-muted-foreground">{activity.rating}</span>
                  </div>
                )}

                {activity.progress && <span className="text-xs text-muted-foreground">{activity.progress}%</span>}
              </div>
            </div>

            <span className="text-xs text-muted-foreground">{activity.date}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
