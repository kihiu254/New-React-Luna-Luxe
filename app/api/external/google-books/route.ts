import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("query")

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 })
  }

  try {
    // Mock Google Books API response
    const mockResults = [
      {
        id: "book_1",
        volumeInfo: {
          title: "The Midnight Library",
          authors: ["Matt Haig"],
          description:
            "Between life and death there is a library, and within that library, the shelves go on forever...",
          imageLinks: {
            thumbnail: "https://books.google.com/books/content?id=example&printsec=frontcover&img=1&zoom=1",
          },
          publishedDate: "2020-08-13",
          pageCount: 288,
          categories: ["Fiction"],
          averageRating: 4.2,
          ratingsCount: 125000,
        },
      },
      {
        id: "book_2",
        volumeInfo: {
          title: "Project Hail Mary",
          authors: ["Andy Weir"],
          description: "Ryland Grace is the sole survivor on a desperate, last-chance mission...",
          imageLinks: {
            thumbnail: "https://books.google.com/books/content?id=example2&printsec=frontcover&img=1&zoom=1",
          },
          publishedDate: "2021-05-04",
          pageCount: 496,
          categories: ["Science Fiction"],
          averageRating: 4.6,
          ratingsCount: 89000,
        },
      },
    ]

    return NextResponse.json({
      items: mockResults.filter(
        (book) =>
          book.volumeInfo.title.toLowerCase().includes(query.toLowerCase()) ||
          book.volumeInfo.authors.some((author) => author.toLowerCase().includes(query.toLowerCase())),
      ),
      totalItems: mockResults.length,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to search books" }, { status: 500 })
  }
}
