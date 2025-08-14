import { IntegrationsHeader } from "@/components/integrations-header"
import { IntegrationGrid } from "@/components/integration-grid"
import { IntegrationSettings } from "@/components/integration-settings"

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <IntegrationsHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <IntegrationGrid />
          </div>
          <div>
            <IntegrationSettings />
          </div>
        </div>
      </main>
    </div>
  )
}
