import type { Metadata } from "next"
import { ResetPasswordForm } from "@/components/auth/reset-password-form"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Reset Password - LunaLuxe",
  description: "Create a new password for your LunaLuxe account",
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Create New Password</h1>
          <p className="text-muted-foreground">Enter your new password below to complete the reset process.</p>
        </div>

        <div className="bg-card border border-border rounded-lg shadow-lg p-6">
          <Suspense fallback={<div>Loading...</div>}>
            <ResetPasswordForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
