import type { Metadata } from "next"
import BlogContent from "@/components/blog/blog-content"

export const metadata: Metadata = {
  title: "Fashion Blog | Luna Luxe",
  description: "Latest fashion trends, style tips, and African fashion inspiration",
}

export default function BlogPage() {
  return <BlogContent />
}
