import { SignupForm } from "@/components/auth/signup-form"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center">
          <div className="text-3xl font-serif font-bold text-foreground">
            Luna<span className="text-gradient">Luxe</span>
          </div>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-serif font-bold text-foreground">Create Account</h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Join LunaLuxe and discover premium African fashion
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-card border border-border py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <SignupForm />

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card text-muted-foreground">Already have an account?</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link href="/login" className="font-medium text-foreground hover:text-muted-foreground transition-colors">
                Sign in here
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>
          &copy; 2025 Luna Luxe. All rights reserved. |{" "}
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
        </p>
      </footer>
    </div>
  )
}
