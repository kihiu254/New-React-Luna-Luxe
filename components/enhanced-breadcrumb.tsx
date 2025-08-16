"use client"

import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface BreadcrumbSegment {
  label: string
  href?: string
}

interface EnhancedBreadcrumbProps {
  customSegments?: BreadcrumbSegment[]
  showHome?: boolean
  className?: string
}

export function EnhancedBreadcrumb({ customSegments, showHome = true, className = "" }: EnhancedBreadcrumbProps) {
  const pathname = usePathname()

  // Generate breadcrumb segments from pathname if no custom segments provided
  const generateSegments = (): BreadcrumbSegment[] => {
    if (customSegments) return customSegments

    const segments = pathname.split("/").filter(Boolean)
    const breadcrumbs: BreadcrumbSegment[] = []

    segments.forEach((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/")
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      // Don't add href for the last segment (current page)
      breadcrumbs.push({
        label,
        href: index === segments.length - 1 ? undefined : href,
      })
    })

    return breadcrumbs
  }

  const segments = generateSegments()

  if (segments.length === 0 && pathname === "/") return null

  return (
    <div className={`bg-muted/30 border-b border-border py-3 ${className}`}>
      <div className="container mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList className="flex items-center gap-2 text-sm">
            {showHome && (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      href="/"
                      className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Home className="w-4 h-4" />
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {segments.length > 0 && (
                  <BreadcrumbSeparator>
                    <ChevronRight className="w-4 h-4" />
                  </BreadcrumbSeparator>
                )}
              </>
            )}

            {segments.map((segment, index) => (
              <div key={index} className="flex items-center gap-2">
                <BreadcrumbItem>
                  {segment.href ? (
                    <BreadcrumbLink asChild>
                      <Link
                        href={segment.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
                      >
                        {segment.label}
                      </Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="text-foreground font-medium">{segment.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>

                {index < segments.length - 1 && (
                  <BreadcrumbSeparator>
                    <ChevronRight className="w-4 h-4" />
                  </BreadcrumbSeparator>
                )}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  )
}
