"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Book, Film, Search, Plus, X } from "lucide-react"

export function AddMediaForm() {
  const [mediaType, setMediaType] = useState<"book" | "movie" | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [genres, setGenres] = useState<string[]>([])
  const [newGenre, setNewGenre] = useState("")

  const addGenre = () => {
    if (newGenre && !genres.includes(newGenre)) {
      setGenres([...genres, newGenre])
      setNewGenre("")
    }
  }

  const removeGenre = (genre: string) => {
    setGenres(genres.filter((g) => g !== genre))
  }

  return (
    <div className="space-y-6">
      {/* Media Type Selection */}
      <Card>
        <CardHeader>
          <CardTitle>What would you like to add?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant={mediaType === "book" ? "default" : "outline"}
              className="h-20 flex flex-col gap-2"
              onClick={() => setMediaType("book")}
            >
              <Book className="w-6 h-6" />
              Book
            </Button>
            <Button
              variant={mediaType === "movie" ? "default" : "outline"}
              className="h-20 flex flex-col gap-2"
              onClick={() => setMediaType("movie")}
            >
              <Film className="w-6 h-6" />
              Movie
            </Button>
          </div>
        </CardContent>
      </Card>

      {mediaType && (
        <>
          {/* Search Existing */}
          <Card>
            <CardHeader>
              <CardTitle>Search Existing {mediaType === "book" ? "Books" : "Movies"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder={`Search for ${mediaType === "book" ? "books" : "movies"}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button>Search</Button>
              </div>

              {searchQuery && (
                <div className="text-sm text-muted-foreground">
                  Search results would appear here with auto-complete from external APIs
                </div>
              )}
            </CardContent>
          </Card>

          {/* Manual Entry Form */}
          <Card>
            <CardHeader>
              <CardTitle>Add Manually</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input id="title" placeholder={`${mediaType === "book" ? "Book" : "Movie"} title`} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="creator">{mediaType === "book" ? "Author" : "Director"} *</Label>
                  <Input id="creator" placeholder={mediaType === "book" ? "Author name" : "Director name"} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year">Release Year</Label>
                  <Input id="year" type="number" placeholder="2024" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wishlist">Wishlist</SelectItem>
                      <SelectItem value="in-progress">{mediaType === "book" ? "Reading" : "Watching"}</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {mediaType === "book" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="pages">Total Pages</Label>
                      <Input id="pages" type="number" placeholder="300" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="current-page">Current Page</Label>
                      <Input id="current-page" type="number" placeholder="0" />
                    </div>
                  </>
                )}

                {mediaType === "movie" && (
                  <div className="space-y-2">
                    <Label htmlFor="runtime">Runtime (minutes)</Label>
                    <Input id="runtime" type="number" placeholder="120" />
                  </div>
                )}
              </div>

              {/* Genres */}
              <div className="space-y-2">
                <Label>Genres</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add genre"
                    value={newGenre}
                    onChange={(e) => setNewGenre(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addGenre()}
                  />
                  <Button type="button" onClick={addGenre} size="icon">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                {genres.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {genres.map((genre) => (
                      <Badge key={genre} variant="secondary" className="flex items-center gap-1">
                        {genre}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => removeGenre(genre)} />
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Add a description or personal notes..." rows={3} />
              </div>

              {/* Cover Image */}
              <div className="space-y-2">
                <Label htmlFor="cover">Cover Image URL</Label>
                <Input id="cover" placeholder="https://example.com/cover.jpg" />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button className="flex-1 bg-cyan-600 hover:bg-cyan-700">Add to Library</Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Save as Draft
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
