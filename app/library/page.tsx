import { LibraryHeader } from "@/components/library-header"
import { MediaGrid } from "@/components/media-grid"
import { LibraryFilters } from "@/components/library-filters"

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-background">
      <LibraryHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <LibraryFilters />
          </aside>

          {/* Media Grid */}
          <div className="flex-1">
            <MediaGrid />
          </div>
        </div>
      </main>
    </div>
  )
}
