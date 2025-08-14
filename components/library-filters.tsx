import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function LibraryFilters() {
  const mediaTypes = [
    { id: "books", label: "Books", count: 24 },
    { id: "movies", label: "Movies", count: 47 },
  ]

  const statuses = [
    { id: "completed", label: "Completed", count: 45 },
    { id: "in-progress", label: "In Progress", count: 8 },
    { id: "wishlist", label: "Wishlist", count: 18 },
  ]

  const genres = [
    { id: "sci-fi", label: "Sci-Fi", count: 12 },
    { id: "fantasy", label: "Fantasy", count: 8 },
    { id: "thriller", label: "Thriller", count: 15 },
    { id: "romance", label: "Romance", count: 6 },
    { id: "mystery", label: "Mystery", count: 9 },
    { id: "biography", label: "Biography", count: 4 },
  ]

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Active Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="flex items-center gap-1">
              Sci-Fi
              <X className="w-3 h-3 cursor-pointer" />
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              Completed
              <X className="w-3 h-3 cursor-pointer" />
            </Badge>
          </div>
          <Button variant="ghost" size="sm" className="w-full text-xs">
            Clear All
          </Button>
        </CardContent>
      </Card>

      {/* Media Type */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Media Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {mediaTypes.map((type) => (
            <div key={type.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id={type.id} />
                <label htmlFor={type.id} className="text-sm font-medium">
                  {type.label}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">{type.count}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Status */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {statuses.map((status) => (
            <div key={status.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id={status.id} />
                <label htmlFor={status.id} className="text-sm font-medium">
                  {status.label}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">{status.count}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Rating */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Rating</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Minimum Rating</span>
              <span>4.0</span>
            </div>
            <Slider defaultValue={[4]} max={5} min={1} step={0.5} className="w-full" />
          </div>
        </CardContent>
      </Card>

      {/* Genres */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Genres</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {genres.map((genre) => (
            <div key={genre.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id={genre.id} />
                <label htmlFor={genre.id} className="text-sm font-medium">
                  {genre.label}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">{genre.count}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
