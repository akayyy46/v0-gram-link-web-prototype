"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
              G
            </div>
            <span className="hidden font-semibold text-foreground sm:inline">GramLink</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link
              href="/marketplace"
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              Marketplace
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
              How It Works
            </Link>
            <Link
              href="/mentorship"
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              Mentorship
            </Link>
            <Link
              href="/for-sellers"
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              For Sellers
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden gap-3 md:flex md:items-center">
            <Link href="/login" className="btn-secondary text-sm">
              Login
            </Link>
            <Link href="/signup" className="btn-primary text-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border py-4 md:hidden space-y-3">
            <Link href="/marketplace" className="block px-4 py-2 rounded-lg hover:bg-muted text-sm font-medium">
              Marketplace
            </Link>
            <Link href="/about" className="block px-4 py-2 rounded-lg hover:bg-muted text-sm font-medium">
              How It Works
            </Link>
            <Link href="/mentorship" className="block px-4 py-2 rounded-lg hover:bg-muted text-sm font-medium">
              Mentorship
            </Link>
            <Link href="/for-sellers" className="block px-4 py-2 rounded-lg hover:bg-muted text-sm font-medium">
              For Sellers
            </Link>
            <div className="flex gap-2 pt-2">
              <Link href="/login" className="flex-1 btn-secondary text-sm justify-center">
                Login
              </Link>
              <Link href="/signup" className="flex-1 btn-primary text-sm justify-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
