"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send, Mail, MessageSquare } from "lucide-react"
import { NotificationService } from "@/lib/notification-service"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const emailResult = await NotificationService.sendEmail({
        to: "1kihiupaul@gmail.com",
        subject: `Contact Form: ${formData.subject}`,
        message: `
          New contact form submission:
          
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone || "Not provided"}
          Subject: ${formData.subject}
          
          Message:
          ${formData.message}
          
          Sent from LunaLuxe Fashion website.
        `,
        from: formData.email,
      })

      if (formData.phone) {
        await NotificationService.sendSMS({
          to: formData.phone,
          message: `Thank you ${formData.name}! We received your message about "${formData.subject}". We'll respond within 24 hours. - LunaLuxe Fashion`,
        })
      }

      if (emailResult.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error(emailResult.message)
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-card rounded-lg shadow-sm p-6 border border-border">
      <div className="flex items-center gap-2 mb-6">
        <Mail className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-serif font-semibold text-foreground">Send Us a Message</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Your Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email">Your Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number (Optional)</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+254 700 000 000"
            className="mt-1"
          />
          <p className="text-sm text-muted-foreground mt-1">We'll send you an SMS confirmation if provided</p>
        </div>

        <div>
          <Label htmlFor="subject">Subject *</Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this about?"
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="message">Your Message *</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us how we can help you..."
            required
            className="mt-1"
            rows={5}
          />
        </div>

        <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
          {isLoading ? (
            <>
              <Send className="mr-2 h-4 w-4 animate-pulse" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>

        <div className="flex items-start gap-2 p-3 bg-muted rounded-lg">
          <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium">Real-time notifications enabled:</p>
            <p>• Email confirmation sent to 1kihiupaul@gmail.com</p>
            <p>• SMS confirmation sent to your phone (if provided)</p>
          </div>
        </div>
      </form>
    </div>
  )
}
