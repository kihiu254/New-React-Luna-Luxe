import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // Mock Netflix API integration
    const mockData = {
      status: "connected",
      lastSync: new Date().toISOString(),
      viewingHistory: [
        {
          id: "netflix_1",
          title: "Stranger Things",
          type: "series",
          watchedAt: "2024-01-20T10:30:00Z",
          progress: 100,
          season: 4,
          episode: 9,
        },
        {
          id: "netflix_2",
          title: "The Queen's Gambit",
          type: "series",
          watchedAt: "2024-01-19T20:15:00Z",
          progress: 100,
          season: 1,
          episode: 7,
        },
      ],
      watchlist: [
        {
          id: "netflix_w1",
          title: "Wednesday",
          type: "series",
          addedAt: "2024-01-18T14:20:00Z",
        },
      ],
    }

    return NextResponse.json(mockData)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch Netflix data" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Mock connection process
    if (body.action === "connect") {
      return NextResponse.json({
        success: true,
        message: "Netflix account connected successfully",
        connectionId: "netflix_" + Date.now(),
      })
    }

    if (body.action === "sync") {
      return NextResponse.json({
        success: true,
        message: "Sync initiated",
        itemsImported: 47,
        lastSync: new Date().toISOString(),
      })
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
