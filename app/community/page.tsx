import { CommunityHeader } from "@/components/community-header"
import { CommunityFeed } from "@/components/community-feed"
import { CommunitySidebar } from "@/components/community-sidebar"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <CommunityHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <CommunityFeed />
          </div>
          <div>
            <CommunitySidebar />
          </div>
        </div>
      </main>
    </div>
  )
}
