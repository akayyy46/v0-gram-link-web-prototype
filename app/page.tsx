"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Zap, Users, TrendingUp, Shield } from "lucide-react"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="hero-gradient relative overflow-hidden py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 md:space-y-8">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 border border-primary/20">
                <p className="text-sm font-medium text-primary">Launching Rural Commerce Revolution</p>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight text-foreground">
                Fair Prices. Direct Connect. <span className="text-primary">Zero Middlemen</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Empowering rural artisans, farmers, and small producers to reach urban markets directly. Get authentic,
                handcrafted products at fair prices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/marketplace" className="btn-primary inline-flex items-center gap-2">
                  Explore Products <ArrowRight size={20} />
                </Link>
                <Link href="/for-sellers" className="btn-secondary inline-flex items-center gap-2">
                  Become a Seller
                </Link>
              </div>

              {/* Stats */}
              <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Rural Producers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-muted-foreground">Products Listed</p>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <p className="text-3xl font-bold text-primary">₹50Cr+</p>
                  <p className="text-sm text-muted-foreground">GMV Processed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GramLink?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're building the future of rural commerce with technology, trust, and transparency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="feature-card">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Direct Producer Connection</h3>
                    <p className="text-muted-foreground">
                      Buy directly from rural artisans and farmers. No middlemen, fair prices for everyone.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="feature-card">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Fair Pricing Model</h3>
                    <p className="text-muted-foreground">
                      Transparent pricing ensures producers earn better and buyers save more compared to traditional
                      retail.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="feature-card">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Seamless Delivery</h3>
                    <p className="text-muted-foreground">
                      Integrated logistics network ensures fast, safe delivery to your doorstep across India.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="feature-card">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Seller Mentorship</h3>
                    <p className="text-muted-foreground">
                      Access free resources, training, and mentorship to grow your business on the platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">Simple, transparent, and fast.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Browse",
                  desc: "Explore authentic handcrafted and agricultural products from verified sellers.",
                },
                {
                  step: "02",
                  title: "Connect",
                  desc: "Chat directly with producers, ask questions, and customize your order.",
                },
                {
                  step: "03",
                  title: "Enjoy",
                  desc: "Receive your products at fair prices with fast delivery and buyer protection.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mb-4 inline-block text-4xl font-bold text-primary">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Support Rural India?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of conscious consumers and retailers empowering rural entrepreneurs.
              </p>
              <Link href="/marketplace" className="btn-primary inline-flex items-center gap-2">
                Start Shopping Now <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
