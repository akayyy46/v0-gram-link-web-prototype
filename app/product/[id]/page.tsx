"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Star, MapPin, Heart, ShoppingCart, MessageCircle } from "lucide-react"
import { useState } from "react"

const PRODUCT_DETAILS = {
  1: {
    name: "Handwoven Dhurrie Rug",
    price: 2999,
    producer: "Rajasthan Weavers Cooperative",
    location: "Jaipur, Rajasthan",
    rating: 4.8,
    reviews: 124,
    image: "/handwoven-rug-dhurrie.jpg",
    description:
      "Authentic handwoven dhurrie rug crafted by skilled weavers in Jaipur. Made with natural cotton and traditional weaving techniques passed down through generations. Perfect for adding warmth and cultural touch to your home.",
    features: ["100% Natural Cotton", "Hand-woven", "Traditional Design", "Eco-friendly", "Durable & Long-lasting"],
    dimensions: "4ft x 6ft",
    shipsIn: "5-7 business days",
  },
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const product = PRODUCT_DETAILS[params.id as keyof typeof PRODUCT_DETAILS] || PRODUCT_DETAILS[1]

  return (
    <>
      <Navigation />
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/marketplace" className="text-sm font-medium text-primary hover:underline mb-8 inline-block">
            ← Back to Marketplace
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="rounded-lg overflow-hidden bg-muted h-96 md:h-full">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
                <p className="text-muted-foreground">{product.producer}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? "fill-yellow-500 text-yellow-500" : "text-muted"}
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <p className="text-4xl font-bold text-primary">₹{product.price}</p>
                <p className="text-sm text-muted-foreground">Direct from producer • No middlemen</p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 p-4 rounded-lg bg-muted">
                <MapPin size={20} className="text-accent" />
                <div>
                  <p className="font-medium">{product.location}</p>
                  <p className="text-sm text-muted-foreground">Ships in {product.shipsIn}</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold mb-2">About this product</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Quantity:</span>
                  <div className="flex items-center gap-3 border border-border rounded-lg p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 hover:bg-muted rounded transition"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 hover:bg-muted rounded transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 btn-primary inline-flex items-center justify-center gap-2">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="btn-secondary inline-flex items-center justify-center gap-2"
                  >
                    <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                  </button>
                </div>

                <button className="w-full btn-secondary inline-flex items-center justify-center gap-2">
                  <MessageCircle size={20} />
                  Chat with Producer
                </button>
              </div>

              {/* Producer Info */}
              <div className="border-t border-border pt-6">
                <h3 className="font-semibold mb-3">About the Producer</h3>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">RW</span>
                  </div>
                  <div>
                    <p className="font-medium">{product.producer}</p>
                    <p className="text-sm text-muted-foreground">Verified Seller • Active since 2020</p>
                    <p className="text-sm text-muted-foreground mt-2">Supporting 50+ artisans in rural Jaipur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
