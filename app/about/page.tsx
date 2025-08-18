import { AboutHeader } from "@/components/about-header"
import { PersonalProfile } from "@/components/personal-profile"
import { EducationTimeline } from "@/components/education-timeline"
import { AchievementsSection } from "@/components/achievements-section"
import { InterestsHobbies } from "@/components/interests-hobbies"
import { AttachmentGoals } from "@/components/attachment-goals"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AboutHeader />

      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Personal Profile */}
        <PersonalProfile />

        {/* Education Timeline */}
        <EducationTimeline />

        {/* Achievements */}
        <AchievementsSection />

        {/* Interests & Hobbies */}
        <InterestsHobbies />

        {/* Attachment Goals */}
        <AttachmentGoals />
      </main>
    </div>
  )
}
