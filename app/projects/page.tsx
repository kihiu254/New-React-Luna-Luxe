import { ProjectsHeader } from "@/components/projects-header"
import { ProjectsFilter } from "@/components/projects-filter"
import { ProjectsGrid } from "@/components/projects-grid"
import { LunaLuxeShowcase } from "@/components/luna-luxe-showcase"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProjectsHeader />

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Luna Luxe E-commerce Highlight */}
        <LunaLuxeShowcase />

        {/* Projects Filter */}
        <ProjectsFilter />

        {/* All Projects Grid */}
        <ProjectsGrid />
      </main>
    </div>
  )
}
