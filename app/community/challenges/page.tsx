import { ChallengesHeader } from "@/components/challenges-header"
import { ChallengesList } from "@/components/challenges-list"
import { MyChallenges } from "@/components/my-challenges"

export default function ChallengesPage() {
  return (
    <div className="min-h-screen bg-background">
      <ChallengesHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ChallengesList />
          </div>
          <div>
            <MyChallenges />
          </div>
        </div>
      </main>
    </div>
  )
}
