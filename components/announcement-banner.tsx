"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { getSiteConfig } from "@/lib/edge-config"

interface AnnouncementBanner {
  message: string
  type: "info" | "warning" | "success" | "error"
  dismissible: boolean
  link?: string
  linkText?: string
}

export function AnnouncementBanner() {
  const [banner, setBanner] = useState<AnnouncementBanner | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchBanner() {
      try {
        setIsLoading(true)
        const siteConfig = await getSiteConfig()
        if (siteConfig?.announcement_banner || siteConfig?.announcement) {
          // Support both announcement_banner and announcement keys
          const bannerConfig = siteConfig.announcement_banner || siteConfig.announcement
          setBanner(bannerConfig as AnnouncementBanner)
        }
      } catch (error) {
        console.error("Failed to fetch announcement banner:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchBanner()
  }, [])

  if (isLoading || !banner || !isVisible) return null

  const bgColor = {
    info: "bg-blue-600",
    warning: "bg-yellow-600",
    success: "bg-green-600",
    error: "bg-red-600",
  }[banner.type]

  return (
    <div className={`${bgColor} text-white px-4 py-2 text-center text-sm relative animate-slide-down`}>
      <div className="flex items-center justify-center gap-2">
        <span>{banner.message}</span>
        {banner.link && banner.linkText && (
          <a href={banner.link} className="underline hover:no-underline font-medium">
            {banner.linkText}
          </a>
        )}
      </div>
      {banner.dismissible && (
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
