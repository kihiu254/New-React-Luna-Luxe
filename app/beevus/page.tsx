import { BeevusChat } from "@/components/beevus-chat"
import { BeevusHeader } from "@/components/beevus-header"
import { BeevisSidebar } from "@/components/beevus-sidebar"

export default function BeevusPage() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <BeevisSidebar />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <BeevusHeader />
        <BeevusChat />
      </div>
    </div>
  )
}
