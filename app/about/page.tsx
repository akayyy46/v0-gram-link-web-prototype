"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="hero-gradient py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">About GramLink</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building a fair, transparent marketplace for rural India.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  We believe rural artisans, farmers, and small producers deserve fair compensation for their authentic
                  work. GramLink eliminates middlemen and connects them directly with conscious consumers who value
                  quality and authenticity.
                </p>
                <p className="text-lg text-muted-foreground">
                  By leveraging technology and community, we're building a sustainable marketplace that empowers rural
                  entrepreneurship and preserves traditional crafts while supporting modern growth.
                </p>
              </div>
              <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
                <img
                  src="/rural-artisans-working-together.jpg"
                  alt="Our Mission"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Fairness", desc: "Transparent pricing that ensures producers earn what they deserve." },
                { title: "Authenticity", desc: "We celebrate genuine handcrafted and agricultural products." },
                { title: "Sustainability", desc: "Supporting traditional crafts and sustainable farming practices." },
              ].map((value) => (
                <div key={value.title} className="feature-card">
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { stat: "500+", label: "Rural Producers" },
                { stat: "10K+", label: "Products Listed" },
                { stat: "₹50Cr+", label: "GMV Processed" },
                { stat: "50K+", label: "Happy Customers" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{item.stat}</p>
                  <p className="text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
