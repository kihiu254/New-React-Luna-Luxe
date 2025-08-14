import { MediaDetail } from "@/components/media-detail"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface MediaPageProps {
  params: {
    id: string
  }
}

export default function MediaPage({ params }: MediaPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/library">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Media Details</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <MediaDetail mediaId={params.id} />
      </main>
    </div>
  )
}
