"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Lock, Eye } from "lucide-react"
import { useState } from "react"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState<"buyer" | "seller">("buyer")

  return (
    <>
      <Navigation />
      <main>
        <div className="min-h-screen flex items-center justify-center py-12 px-4">
          <div className="w-full max-w-md space-y-8">
            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold">Welcome Back</h1>
              <p className="text-muted-foreground">Sign in to your GramLink account</p>
            </div>

            {/* User Type Toggle */}
            <div className="flex gap-2 bg-muted rounded-lg p-1">
              {(["buyer", "seller"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setUserType(type)}
                  className={`flex-1 py-2 px-4 rounded-md transition font-medium capitalize ${
                    userType === type
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <Eye size={18} />
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border border-border" />
                  <span>Remember me</span>
                </label>
                <Link href="#" className="text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <button className="btn-primary w-full py-3 font-medium">Sign In</button>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/signup" className="text-primary hover:underline font-medium">
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
