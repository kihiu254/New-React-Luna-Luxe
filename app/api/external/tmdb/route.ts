import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("query")
  const type = searchParams.get("type") || "movie"

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 })
  }

  try {
    // Mock TMDB API response
    const mockResults = [
      {
        id: 438631,
        title: "Dune",
        overview:
          "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding...",
        poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        release_date: "2021-09-15",
        vote_average: 8.0,
        genre_ids: [878, 12, 18],
      },
      {
        id: 693134,
        title: "Dune: Part Two",
        overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen...",
        poster_path: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        release_date: "2024-02-27",
        vote_average: 8.5,
        genre_ids: [878, 12, 18],
      },
    ]

    return NextResponse.json({
      results: mockResults.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase())),
      total_results: mockResults.length,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to search movies" }, { status: 500 })
  }
}
