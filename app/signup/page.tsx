"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { User, Mail, Lock, Phone } from "lucide-react"
import { useState } from "react"

export default function Signup() {
  const [userType, setUserType] = useState<"buyer" | "seller">("buyer")

  return (
    <>
      <Navigation />
      <main>
        <div className="min-h-screen flex items-center justify-center py-12 px-4">
          <div className="w-full max-w-md space-y-8">
            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold">Join GramLink</h1>
              <p className="text-muted-foreground">Create your account in minutes</p>
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
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

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

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
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
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-2 text-sm cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border border-border mt-1" />
                <span className="text-muted-foreground">
                  I agree to GramLink's{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              {/* Sign Up Button */}
              <button className="btn-primary w-full py-3 font-medium">Create Account</button>

              {/* Sign In Link */}
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline font-medium">
                  Sign in here
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
