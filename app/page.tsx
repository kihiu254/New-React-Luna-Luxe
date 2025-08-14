import { DashboardHeader } from "@/components/dashboard-header"
import { StatsOverview } from "@/components/stats-overview"
import { RecentActivity } from "@/components/recent-activity"
import { QuickActions } from "@/components/quick-actions"
import { BeevusWidget } from "@/components/beevus-widget"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6 space-y-8">
        {/* Welcome Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Your Entertainment, <span className="text-purple-600">Elevated</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track, discover, and enjoy with Beevus - your AI companion for books and movies
          </p>
        </section>

        {/* Stats Overview */}
        <StatsOverview />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <RecentActivity />
            <QuickActions />
          </div>

          <div className="space-y-8">
            <BeevusWidget />
          </div>
        </div>
      </main>
    </div>
  )
}
