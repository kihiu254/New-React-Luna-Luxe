"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MessageCircle,
  Phone,
  Mail,
  Package,
  RefreshCw,
  CreditCard,
  Truck,
  HelpCircle,
  Clock,
  Shield,
} from "lucide-react"

export function CustomerServiceContent() {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      action: "Start Chat",
      onClick: () => alert("Live chat coming soon!"),
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our customer service team",
      action: "Call +254 112081866",
      onClick: () => (window.location.href = "tel:+254112081866"),
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      action: "Send Email",
      onClick: () => (window.location.href = "mailto:info@lunaluxe.co.ke"),
    },
  ]

  const helpTopics = [
    {
      icon: Package,
      title: "Order Status",
      description: "Track your order and get delivery updates",
      link: "/order-tracking",
    },
    {
      icon: RefreshCw,
      title: "Returns & Exchanges",
      description: "Learn about our return and exchange policy",
      link: "/returns",
    },
    {
      icon: CreditCard,
      title: "Payment Issues",
      description: "Get help with payment and billing questions",
      link: "/payment-help",
    },
    {
      icon: Truck,
      title: "Shipping Information",
      description: "Delivery options, costs, and timeframes",
      link: "/shipping",
    },
    {
      icon: Shield,
      title: "Size Guide",
      description: "Find the perfect fit with our sizing charts",
      link: "/size-guide",
    },
    {
      icon: HelpCircle,
      title: "General FAQ",
      description: "Answers to frequently asked questions",
      link: "/faq",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Customer Service</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're here to help! Get support, track your orders, or find answers to your questions.
        </p>
      </div>

      {/* Contact Options */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6 text-center">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={option.onClick} className="w-full">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Help Topics */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6 text-center">Popular Help Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpTopics.map((topic, index) => {
            const Icon = topic.icon
            return (
              <Link key={index} href={topic.link}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{topic.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="mt-2">{topic.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <Clock className="w-8 h-8 text-gray-600 mr-3" />
          <h2 className="text-2xl font-serif font-semibold text-gray-900">Business Hours</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Customer Service</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Store Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Response Times</h3>
            <p>Live Chat: Immediate</p>
            <p>Phone: Immediate</p>
            <p>Email: Within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  )
}
