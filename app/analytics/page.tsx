import { AnalyticsHeader } from "@/components/analytics-header"
import { AnalyticsOverview } from "@/components/analytics-overview"
import { AnalyticsCharts } from "@/components/analytics-charts"
import { AnalyticsTimeline } from "@/components/analytics-timeline"
import { AnalyticsInsights } from "@/components/analytics-insights"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnalyticsHeader />

      <main className="container mx-auto px-4 py-6 space-y-8">
        <AnalyticsOverview />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <AnalyticsCharts />
            <AnalyticsTimeline />
          </div>
          <div>
            <AnalyticsInsights />
          </div>
        </div>
      </main>
    </div>
  )
}
