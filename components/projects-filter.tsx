"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filters = [
    { id: "all", label: "All Projects", count: 8 },
    { id: "web", label: "Web Development", count: 5 },
    { id: "ecommerce", label: "E-commerce", count: 2 },
    { id: "ui-ux", label: "UI/UX Design", count: 3 },
    { id: "javascript", label: "JavaScript", count: 4 },
    { id: "python", label: "Python", count: 2 },
  ]

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground font-space-grotesk mb-4">All Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore my complete portfolio of web development projects, from e-commerce platforms to innovative web
          applications
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-muted-foreground" />
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className="text-xs"
            >
              {filter.label}
              <Badge variant="secondary" className="ml-2 text-xs">
                {filter.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
