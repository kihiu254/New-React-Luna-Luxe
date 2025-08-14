import { JarvisChat } from "@/components/jarvis-chat"
import { JarvisHeader } from "@/components/jarvis-header"
import { JarvisSidebar } from "@/components/jarvis-sidebar"

export default function JarvisPage() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <JarvisSidebar />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <JarvisHeader />
        <JarvisChat />
      </div>
    </div>
  )
}
