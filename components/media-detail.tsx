import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Star, Book, Film, Calendar, Clock, User, Edit, Trash2, Heart } from "lucide-react"

interface MediaDetailProps {
  mediaId: string
}

export function MediaDetail({ mediaId }: MediaDetailProps) {
  // Mock data - in real app, this would fetch based on mediaId
  const media = {
    id: mediaId,
    type: "book",
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "/midnight-library-cover.png",
    rating: 5,
    status: "completed",
    progress: 100,
    genres: ["Fiction", "Philosophy", "Contemporary"],
    year: 2020,
    pages: 288,
    currentPage: 288,
    dateAdded: "2024-01-15",
    dateCompleted: "2024-01-20",
    description:
      "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    personalNotes:
      "Absolutely loved this book! The concept of infinite lives and possibilities was beautifully executed. Made me think about my own life choices.",
    timeSpent: "8 hours 30 minutes",
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Media Info */}
      <div className="lg:col-span-1">
        <Card>
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <img
                src={media.cover || "/placeholder.svg"}
                alt={media.title}
                className="w-full max-w-48 mx-auto rounded-lg shadow-lg"
              />

              <div>
                <h1 className="text-2xl font-bold text-foreground">{media.title}</h1>
                <p className="text-muted-foreground flex items-center justify-center gap-2 mt-1">
                  {media.type === "book" ? <Book className="w-4 h-4" /> : <Film className="w-4 h-4" />}
                  {media.author}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= media.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({media.rating}/5)</span>
              </div>

              {/* Status */}
              <Badge variant={media.status === "completed" ? "default" : "secondary"} className="text-sm">
                {media.status}
              </Badge>

              {/* Progress */}
              {media.status !== "completed" && (
                <div className="space-y-2">
                  <Progress value={media.progress} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    {media.currentPage} of {media.pages} pages ({media.progress}%)
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-2">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                  <Edit className="w-4 h-4 mr-2" />
                  Update Progress
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Heart className="w-4 h-4 mr-2" />
                    Favorite
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Details and Notes */}
      <div className="lg:col-span-2 space-y-6">
        {/* Basic Info */}
        <Card>
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">
                  <strong>Year:</strong> {media.year}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Book className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">
                  <strong>Pages:</strong> {media.pages}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">
                  <strong>Time Spent:</strong> {media.timeSpent}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">
                  <strong>Added:</strong> {new Date(media.dateAdded).toLocaleDateString()}
                </span>
              </div>
            </div>

            {/* Genres */}
            <div>
              <strong className="text-sm">Genres:</strong>
              <div className="flex flex-wrap gap-2 mt-1">
                {media.genres.map((genre) => (
                  <Badge key={genre} variant="outline" className="text-xs">
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <strong className="text-sm">Description:</strong>
              <p className="text-sm text-muted-foreground mt-1">{media.description}</p>
            </div>
          </CardContent>
        </Card>

        {/* Personal Notes */}
        <Card>
          <CardHeader>
            <CardTitle>My Notes & Review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Add your personal notes, thoughts, or review..."
              value={media.personalNotes}
              rows={4}
            />
            <Button className="bg-lime-500 hover:bg-lime-600">Save Notes</Button>
          </CardContent>
        </Card>

        {/* Reading/Watching History */}
        <Card>
          <CardHeader>
            <CardTitle>Activity History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm">Completed reading</span>
                <span className="text-xs text-muted-foreground">Jan 20, 2024</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm">Updated progress to 80%</span>
                <span className="text-xs text-muted-foreground">Jan 18, 2024</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm">Started reading</span>
                <span className="text-xs text-muted-foreground">Jan 15, 2024</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
