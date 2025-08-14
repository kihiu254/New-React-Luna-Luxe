import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Star, Book, Film, Play, MoreHorizontal } from "lucide-react"
import Link from "next/link"

export function MediaGrid() {
  const mediaItems = [
    {
      id: "1",
      type: "book",
      title: "The Midnight Library",
      author: "Matt Haig",
      cover: "/midnight-library-cover.png",
      rating: 5,
      status: "completed",
      progress: 100,
      genre: "Fiction",
      dateAdded: "2024-01-15",
    },
    {
      id: "2",
      type: "movie",
      title: "Dune: Part Two",
      director: "Denis Villeneuve",
      cover: "/dune-part-two-poster.png",
      rating: 4,
      status: "in-progress",
      progress: 65,
      genre: "Sci-Fi",
      dateAdded: "2024-01-10",
    },
    {
      id: "3",
      type: "book",
      title: "Project Hail Mary",
      author: "Andy Weir",
      cover: "/project-hail-mary-cover.png",
      rating: 5,
      status: "reading",
      progress: 78,
      genre: "Sci-Fi",
      dateAdded: "2024-01-08",
    },
    {
      id: "4",
      type: "movie",
      title: "Everything Everywhere All at Once",
      director: "Daniels",
      cover: "/everything-everywhere-poster.png",
      rating: null,
      status: "wishlist",
      progress: 0,
      genre: "Sci-Fi",
      dateAdded: "2024-01-05",
    },
    {
      id: "5",
      type: "book",
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      cover: "/evelyn-hugo-cover.png",
      rating: 4,
      status: "completed",
      progress: 100,
      genre: "Romance",
      dateAdded: "2024-01-01",
    },
    {
      id: "6",
      type: "movie",
      title: "Oppenheimer",
      director: "Christopher Nolan",
      cover: "/oppenheimer-poster.png",
      rating: 5,
      status: "completed",
      progress: 100,
      genre: "Biography",
      dateAdded: "2023-12-28",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Showing {mediaItems.length} of 71 items</p>
        <select className="text-sm border rounded-md px-3 py-1 bg-background">
          <option>Sort by Date Added</option>
          <option>Sort by Title</option>
          <option>Sort by Rating</option>
          <option>Sort by Progress</option>
        </select>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mediaItems.map((item) => (
          <Card key={item.id} className="group hover:shadow-lg transition-all duration-200 overflow-hidden">
            <div className="relative">
              <img
                src={item.cover || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
              />

              {/* Status Badge */}
              <Badge variant={item.status === "completed" ? "default" : "secondary"} className="absolute top-2 left-2">
                {item.status}
              </Badge>

              {/* Type Icon */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                {item.type === "book" ? (
                  <Book className="w-4 h-4 text-white" />
                ) : (
                  <Film className="w-4 h-4 text-white" />
                )}
              </div>

              {/* Progress Overlay for In-Progress Items */}
              {item.status === "in-progress" || item.status === "reading" ? (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                  <Progress value={item.progress} className="h-1" />
                  <p className="text-xs text-white mt-1">{item.progress}% complete</p>
                </div>
              ) : null}
            </div>

            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm truncate">{item.title}</h3>
                    <p className="text-xs text-muted-foreground truncate">
                      {item.type === "book" ? item.author : item.director}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {item.genre}
                  </Badge>

                  {item.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">{item.rating}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Link href={`/media/${item.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full text-xs bg-transparent">
                      View Details
                    </Button>
                  </Link>

                  {item.status === "wishlist" && (
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-xs">
                      <Play className="w-3 h-3 mr-1" />
                      Start
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
