import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { to, subject, message, from } = await request.json()

    // Validate required fields
    if (!to || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields: to, subject, message" }, { status: 400 })
    }

    // Simulate email sending with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Log email details (in production, integrate with actual email service)
    console.log("[v0] Email sent:", {
      from: from || "1kihiupaul@gmail.com",
      to,
      subject,
      message: message.substring(0, 100) + "...",
      timestamp: new Date().toISOString(),
    })

    // Simulate successful response
    return NextResponse.json({
      success: true,
      id: `email_${Date.now()}`,
      message: "Email sent successfully",
    })
  } catch (error) {
    console.error("Email API error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
