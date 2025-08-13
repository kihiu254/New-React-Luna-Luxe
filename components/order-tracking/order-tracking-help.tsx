"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle } from "lucide-react"

export function OrderTrackingHelp() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">Need Help?</h2>
      <p className="text-gray-600 mb-6">
        Can't find your order or have questions about delivery? Our customer service team is here to help.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/contact">
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <MessageCircle className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
        </Link>

        <Button
          variant="outline"
          className="w-full justify-start bg-transparent"
          onClick={() => alert("FAQ section coming soon!")}
        >
          <HelpCircle className="mr-2 h-4 w-4" />
          View FAQs
        </Button>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-2">Tracking Tips</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Order numbers are case-sensitive</li>
          <li>• Use the same email address you used during checkout</li>
          <li>• Orders typically take 2-5 business days to deliver</li>
          <li>• You'll receive email updates when your order status changes</li>
        </ul>
      </div>
    </div>
  )
}
