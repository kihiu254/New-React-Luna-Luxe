"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  email: string
  name: string
  avatar?: string
  provider?: "email" | "google" | "twitter"
}

interface AuthContextType {
  user: User | null
  login: (user: User) => void
  logout: () => void
  isLoading: boolean
  loginWithGoogle: () => Promise<void>
  loginWithTwitter: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user data on mount
    const storedUser = localStorage.getItem("lunaluxe_user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        localStorage.removeItem("lunaluxe_user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = (userData: User) => {
    setUser(userData)
    localStorage.setItem("lunaluxe_user", JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("lunaluxe_user")
  }

  const loginWithGoogle = async () => {
    setIsLoading(true)
    try {
      // Simulate Google OAuth flow
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const googleUser: User = {
        id: `google_${Date.now()}`,
        email: "1kihiupaul@gmail.com",
        name: "Paul Kihiu",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s96-c",
        provider: "google",
      }
      login(googleUser)
    } catch (error) {
      console.error("Google login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const loginWithTwitter = async () => {
    setIsLoading(true)
    try {
      // Simulate Twitter OAuth flow
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const twitterUser: User = {
        id: `twitter_${Date.now()}`,
        email: "1kihiupaul@gmail.com",
        name: "Paul Kihiu",
        avatar: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
        provider: "twitter",
      }
      login(twitterUser)
    } catch (error) {
      console.error("Twitter login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoading,
        loginWithGoogle,
        loginWithTwitter,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
