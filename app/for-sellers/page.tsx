"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, BarChart3, Users, Zap, Globe } from "lucide-react"

export default function ForSellers() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="hero-gradient py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Grow Your Business on GramLink</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reach thousands of conscious consumers and retailers. Sell your authentic products directly without
              middlemen.
            </p>
            <Link href="/signup" className="btn-primary inline-flex items-center gap-2">
              Start Selling Today <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  icon: Globe,
                  title: "Wider Market Reach",
                  desc: "Access customers across India through our growing network.",
                },
                {
                  icon: BarChart3,
                  title: "Better Margins",
                  desc: "Eliminate middlemen and keep more profit for your business.",
                },
                {
                  icon: Zap,
                  title: "Easy Management",
                  desc: "Manage listings, orders, and payments through one dashboard.",
                },
                {
                  icon: Users,
                  title: "Direct Customer Connect",
                  desc: "Chat with buyers, understand needs, and build relationships.",
                },
              ].map((item) => (
                <div key={item.title} className="feature-card">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How to Get Started</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: "01", title: "Sign Up", desc: "Create your seller account in minutes" },
                { num: "02", title: "Verify", desc: "Complete identity and product verification" },
                { num: "03", title: "List Products", desc: "Upload your products with photos and details" },
                { num: "04", title: "Start Selling", desc: "Receive orders and manage shipments" },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="inline-block text-4xl font-bold text-primary mb-4">{step.num}</div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Join 500+ Sellers</h2>
              <p className="text-lg text-muted-foreground">
                Be part of a movement empowering rural entrepreneurship. Grow your business with fair pricing and
                reliable support.
              </p>
              <Link href="/signup" className="btn-primary inline-flex items-center gap-2">
                Create Seller Account <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
