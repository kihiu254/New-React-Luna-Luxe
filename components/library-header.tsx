import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Filter, Grid, List } from "lucide-react"
import Link from "next/link"

export function LibraryHeader() {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-4">
          {/* Title and Stats */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">My Library</h1>
              <div className="flex items-center gap-4 mt-2">
                <Badge variant="secondary" className="bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">
                  71 Total Items
                </Badge>
                <Badge variant="secondary" className="bg-lime-100 text-lime-700 dark:bg-lime-900 dark:text-lime-300">
                  24 Books • 47 Movies
                </Badge>
              </div>
            </div>

            <Link href="/add-media">
              <Button className="bg-cyan-600 hover:bg-cyan-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Media
              </Button>
            </Link>
          </div>

          {/* Search and View Controls */}
          <div className="flex items-center gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search your library..." className="pl-10" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
              <div className="flex border rounded-md">
                <Button variant="ghost" size="icon" className="rounded-r-none border-r">
                  <Grid className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-l-none">
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
