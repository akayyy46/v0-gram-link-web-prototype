"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookOpen, Video, Users, Award } from "lucide-react"

export default function Mentorship() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="hero-gradient py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Learning & Mentorship Hub</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Free resources, training, and mentorship to help rural entrepreneurs succeed in digital commerce.
            </p>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Resources Available</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: BookOpen,
                  title: "Guides & Tutorials",
                  desc: "Step-by-step guides on photography, product description, and pricing.",
                },
                { icon: Video, title: "Video Training", desc: "Learn from successful sellers and industry experts." },
                { icon: Users, title: "Community Forum", desc: "Connect with other sellers and share experiences." },
                { icon: Award, title: "Certification", desc: "Earn badges and certifications as you grow." },
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

            {/* Featured Resources */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Featured Resources</h3>
              {[
                "Getting Started: Your First 30 Days",
                "Product Photography Masterclass",
                "Digital Payment Solutions Explained",
                "Scaling Your Business: From 10 to 100 Orders",
              ].map((resource) => (
                <a
                  key={resource}
                  href="#"
                  className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg transition"
                >
                  <span className="font-medium">{resource}</span>
                  <ArrowRight size={20} className="text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import { ArrowRight } from "lucide-react"
