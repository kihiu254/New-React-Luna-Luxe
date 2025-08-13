import type { Metadata } from "next"
import ShopContent from "@/components/shop/shop-content"

export const metadata: Metadata = {
  title: "Shop | Luna Luxe",
  description: "Discover our collection of premium African fashion and luxury clothing",
}

export default function ShopPage() {
  return <ShopContent />
}
