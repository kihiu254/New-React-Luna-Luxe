import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Book, Film, Star, Calendar, Filter } from "lucide-react"

export function AnalyticsTimeline() {
  const timelineData = [
    {
      date: "2024-01-20",
      type: "completed",
      media: {
        title: "The Midnight Library",
        author: "Matt Haig",
        type: "book",
        cover: "/midnight-library-cover.png",
        rating: 5,
        timeSpent: "8h 30m",
      },
    },
    {
      date: "2024-01-19",
      type: "started",
      media: {
        title: "Dune: Part Two",
        director: "Denis Villeneuve",
        type: "movie",
        cover: "/dune-part-two-poster.png",
        rating: null,
        timeSpent: null,
      },
    },
    {
      date: "2024-01-18",
      type: "completed",
      media: {
        title: "Project Hail Mary",
        author: "Andy Weir",
        type: "book",
        cover: "/project-hail-mary-cover.png",
        rating: 5,
        timeSpent: "12h 15m",
      },
    },
    {
      date: "2024-01-15",
      type: "milestone",
      milestone: {
        title: "Reading Goal Achieved",
        description: "Completed 20 books this year",
        icon: "🎯",
      },
    },
    {
      date: "2024-01-14",
      type: "completed",
      media: {
        title: "Everything Everywhere All at Once",
        director: "Daniels",
        type: "movie",
        cover: "/everything-everywhere-poster.png",
        rating: 4,
        timeSpent: "2h 19m",
      },
    },
    {
      date: "2024-01-12",
      type: "added",
      media: {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        type: "book",
        cover: "/evelyn-hugo-cover.png",
        rating: null,
        timeSpent: null,
      },
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "completed":
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
      case "started":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
      case "added":
        return "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300"
      case "milestone":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "completed":
        return "✓"
      case "started":
        return "▶"
      case "added":
        return "+"
      case "milestone":
        return "🏆"
      default:
        return "•"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Activity Timeline
        </CardTitle>
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Activity</SelectItem>
              <SelectItem value="books">Books Only</SelectItem>
              <SelectItem value="movies">Movies Only</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="bg-transparent">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {timelineData.map((item, index) => (
            <div key={index} className="flex gap-4">
              {/* Timeline Indicator */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${getTypeColor(item.type)}`}
                >
                  {getTypeIcon(item.type)}
                </div>
                {index < timelineData.length - 1 && <div className="w-px h-16 bg-border mt-2"></div>}
              </div>

              {/* Content */}
              <div className="flex-1 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className={getTypeColor(item.type)}>
                    {item.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{new Date(item.date).toLocaleDateString()}</span>
                </div>

                {item.media && (
                  <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                    <img
                      src={item.media.cover || "/placeholder.svg"}
                      alt={item.media.title}
                      className="w-12 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {item.media.type === "book" ? (
                          <Book className="w-4 h-4 text-cyan-600" />
                        ) : (
                          <Film className="w-4 h-4 text-lime-500" />
                        )}
                        <h4 className="font-medium text-sm">{item.media.title}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        by {item.media.author || item.media.director}
                      </p>
                      <div className="flex items-center gap-4">
                        {item.media.rating && (
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs">{item.media.rating}</span>
                          </div>
                        )}
                        {item.media.timeSpent && (
                          <span className="text-xs text-muted-foreground">{item.media.timeSpent}</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {item.milestone && (
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{item.milestone.icon}</span>
                      <h4 className="font-medium text-sm">{item.milestone.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.milestone.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
