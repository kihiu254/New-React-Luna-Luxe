import { UserProfile } from "@/components/user-profile"
import { UserActivity } from "@/components/user-activity"
import { UserStats } from "@/components/user-stats"

interface ProfilePageProps {
  params: {
    username: string
  }
}

export default function ProfilePage({ params }: ProfilePageProps) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <UserProfile username={params.username} />
          </div>
          <div className="lg:col-span-2 space-y-8">
            <UserStats username={params.username} />
            <UserActivity username={params.username} />
          </div>
        </div>
      </main>
    </div>
  )
}
