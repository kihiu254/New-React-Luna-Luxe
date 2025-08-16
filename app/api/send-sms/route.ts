import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { to, message } = await request.json()

    // Validate required fields
    if (!to || !message) {
      return NextResponse.json({ error: "Missing required fields: to, message" }, { status: 400 })
    }

    // Validate phone number format (basic validation)
    const phoneRegex = /^\+?[\d\s\-$$$$]+$/
    if (!phoneRegex.test(to)) {
      return NextResponse.json({ error: "Invalid phone number format" }, { status: 400 })
    }

    // Simulate SMS sending with a delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Log SMS details (in production, integrate with actual SMS service like Twilio)
    console.log("[v0] SMS sent:", {
      to,
      message: message.substring(0, 50) + "...",
      timestamp: new Date().toISOString(),
    })

    // Simulate successful response
    return NextResponse.json({
      success: true,
      id: `sms_${Date.now()}`,
      message: "SMS sent successfully",
    })
  } catch (error) {
    console.error("SMS API error:", error)
    return NextResponse.json({ error: "Failed to send SMS" }, { status: 500 })
  }
}
