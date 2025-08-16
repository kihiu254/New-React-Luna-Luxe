"use client"

interface EmailData {
  to: string
  subject: string
  message: string
  from?: string
}

interface SMSData {
  to: string
  message: string
}

interface NotificationResponse {
  success: boolean
  message: string
  id?: string
}

export class NotificationService {
  private static readonly EMAIL_API_URL = "/api/send-email"
  private static readonly SMS_API_URL = "/api/send-sms"

  static async sendEmail(data: EmailData): Promise<NotificationResponse> {
    try {
      const response = await fetch(this.EMAIL_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          from: data.from || "1kihiupaul@gmail.com",
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send email")
      }

      return {
        success: true,
        message: "Email sent successfully",
        id: result.id,
      }
    } catch (error) {
      console.error("Email sending failed:", error)
      return {
        success: false,
        message: error instanceof Error ? error.message : "Failed to send email",
      }
    }
  }

  static async sendSMS(data: SMSData): Promise<NotificationResponse> {
    try {
      const response = await fetch(this.SMS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send SMS")
      }

      return {
        success: true,
        message: "SMS sent successfully",
        id: result.id,
      }
    } catch (error) {
      console.error("SMS sending failed:", error)
      return {
        success: false,
        message: error instanceof Error ? error.message : "Failed to send SMS",
      }
    }
  }

  static async sendOrderConfirmation(email: string, phone: string, orderDetails: any): Promise<void> {
    const emailContent = `
      Dear ${orderDetails.customerName},
      
      Thank you for your order with LunaLuxe Fashion!
      
      Order Details:
      - Order Number: ${orderDetails.orderNumber}
      - Total Amount: KSh ${orderDetails.total.toLocaleString()}
      - Items: ${orderDetails.items.length} item(s)
      
      We'll send you tracking information once your order ships.
      
      Best regards,
      LunaLuxe Fashion Team
      1kihiupaul@gmail.com
    `

    const smsContent = `LunaLuxe: Order ${orderDetails.orderNumber} confirmed! Total: KSh ${orderDetails.total.toLocaleString()}. Track at lunaluxe.co.ke/order-tracking`

    // Send email notification
    await this.sendEmail({
      to: email,
      subject: `Order Confirmation - ${orderDetails.orderNumber}`,
      message: emailContent,
    })

    // Send SMS notification if phone number provided
    if (phone) {
      await this.sendSMS({
        to: phone,
        message: smsContent,
      })
    }
  }
}
