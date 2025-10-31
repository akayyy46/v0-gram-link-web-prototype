"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Search, Filter, Star, ShoppingCart } from "lucide-react"

// Sample product data
const PRODUCTS = [
  {
    id: 1,
    name: "Handwoven Cotton Sarees",
    seller: "Artisans of Odisha",
    price: 1299,
    originalPrice: 1899,
    rating: 4.8,
    reviews: 245,
    category: "Textiles",
    image: "/handwoven-cotton-saree-with-traditional-patterns.jpg",
    location: "Odisha",
  },
  {
    id: 2,
    name: "Organic Honey Collection",
    seller: "Village Beekeepers",
    price: 549,
    originalPrice: 699,
    rating: 4.9,
    reviews: 189,
    category: "Food",
    image: "/organic-honey-jar-with-honeycomb.jpg",
    location: "Himachal Pradesh",
  },
  {
    id: 3,
    name: "Terracotta Pottery Set",
    seller: "Khurja Ceramics",
    price: 799,
    originalPrice: 1099,
    rating: 4.6,
    reviews: 127,
    category: "Pottery",
    image: "/traditional-terracotta-pottery-bowls.jpg",
    location: "Uttar Pradesh",
  },
  {
    id: 4,
    name: "Kashmiri Pashmina Shawl",
    seller: "Kashmir Crafts Co.",
    price: 3499,
    originalPrice: 4999,
    rating: 4.9,
    reviews: 312,
    category: "Textiles",
    image: "/luxurious-kashmiri-pashmina-shawl.jpg",
    location: "Jammu & Kashmir",
  },
  {
    id: 5,
    name: "Bamboo Handicrafts",
    seller: "Northeast Artisans",
    price: 399,
    originalPrice: 599,
    rating: 4.5,
    reviews: 98,
    category: "Handicrafts",
    image: "/bamboo-handicrafts-baskets-and-boxes.jpg",
    location: "Assam",
  },
  {
    id: 6,
    name: "Spice Masala Box",
    seller: "Kerala Spice House",
    price: 449,
    originalPrice: 599,
    rating: 4.7,
    reviews: 156,
    category: "Food",
    image: "/traditional-spice-masala-collection-box.jpg",
    location: "Kerala",
  },
  {
    id: 7,
    name: "Brass Cooking Set",
    seller: "Jaipur Metalwork",
    price: 1899,
    originalPrice: 2699,
    rating: 4.8,
    reviews: 203,
    category: "Kitchenware",
    image: "/traditional-brass-cooking-pots-and-pans.jpg",
    location: "Rajasthan",
  },
  {
    id: 8,
    name: "Marble Handicrafts",
    seller: "Agra Artisans",
    price: 2299,
    originalPrice: 3299,
    rating: 4.6,
    reviews: 89,
    category: "Handicrafts",
    image: "/marble-handicrafts-and-vases.jpg",
    location: "Uttar Pradesh",
  },
]

const CATEGORIES = ["All", "Textiles", "Food", "Pottery", "Handicrafts", "Kitchenware"]
const PRICE_RANGES = [
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹500 - ₹1000", min: 500, max: 1000 },
  { label: "₹1000 - ₹2500", min: 1000, max: 2500 },
  { label: "Above ₹2500", min: 2500, max: Number.POSITIVE_INFINITY },
]

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPriceRange, setSelectedPriceRange] = useState<{
    min: number
    max: number
  } | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  // Filter products based on search, category, and price
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.seller.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.location.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory

      const matchesPrice =
        !selectedPriceRange || (product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max)

      return matchesSearch && matchesCategory && matchesPrice
    })
  }, [searchQuery, selectedCategory, selectedPriceRange])

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="border-b border-border bg-card py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-6 text-3xl md:text-4xl font-bold">Discover Products</h1>

            {/* Search Bar */}
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products, sellers, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 pl-12 text-foreground placeholder-muted-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div>
                  <h3 className="mb-4 font-semibold text-foreground">Categories</h3>
                  <div className="space-y-2">
                    {CATEGORIES.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left rounded px-3 py-2 text-sm transition ${
                          selectedCategory === category
                            ? "bg-primary text-primary-foreground font-medium"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 font-semibold text-foreground">Price Range</h3>
                  <div className="space-y-2">
                    {PRICE_RANGES.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => setSelectedPriceRange(range)}
                        className={`block w-full text-left rounded px-3 py-2 text-sm transition ${
                          selectedPriceRange?.min === range.min
                            ? "bg-primary text-primary-foreground font-medium"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                    {selectedPriceRange && (
                      <button
                        onClick={() => setSelectedPriceRange(null)}
                        className="block w-full text-left rounded px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition"
                      >
                        Clear Filter
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Mobile Filter Toggle */}
              <div className="mb-6 flex items-center justify-between lg:hidden">
                <p className="text-sm font-medium text-muted-foreground">{filteredProducts.length} Products</p>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
                >
                  <Filter size={16} />
                  Filters
                </button>
              </div>

              {/* Mobile Filters */}
              {showFilters && (
                <div className="mb-6 space-y-4 rounded-lg border border-border bg-card p-4 lg:hidden">
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Categories</h4>
                    <div className="flex flex-wrap gap-2">
                      {CATEGORIES.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`rounded px-3 py-1 text-xs font-medium transition ${
                            selectedCategory === category
                              ? "bg-primary text-primary-foreground"
                              : "border border-border bg-background text-foreground hover:border-primary"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Price</h4>
                    <div className="flex flex-wrap gap-2">
                      {PRICE_RANGES.map((range) => (
                        <button
                          key={range.label}
                          onClick={() => setSelectedPriceRange(range)}
                          className={`rounded px-3 py-1 text-xs font-medium transition ${
                            selectedPriceRange?.min === range.min
                              ? "bg-primary text-primary-foreground"
                              : "border border-border bg-background text-foreground hover:border-primary"
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <Link key={product.id} href={`/product/${product.id}`}>
                      <div className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg hover:border-primary/50">
                        {/* Product Image */}
                        <div className="relative overflow-hidden bg-muted h-64 sm:h-56">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                          {product.originalPrice > product.price && (
                            <div className="absolute top-3 right-3 rounded-lg bg-accent px-2 py-1 text-xs font-semibold text-accent-foreground">
                              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                            </div>
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="p-4 space-y-3">
                          <div>
                            <p className="text-xs text-muted-foreground font-medium mb-1">{product.location}</p>
                            <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition">
                              {product.name}
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1">{product.seller}</p>
                          </div>

                          {/* Rating */}
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star size={14} className="fill-accent text-accent" />
                              <span className="text-sm font-medium text-foreground">{product.rating}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">({product.reviews})</span>
                          </div>

                          {/* Price */}
                          <div className="flex items-baseline gap-2">
                            <p className="text-lg font-bold text-primary">₹{product.price}</p>
                            {product.originalPrice > product.price && (
                              <p className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</p>
                            )}
                          </div>

                          {/* Add to Cart Button */}
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                            }}
                            className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 active:scale-95 flex items-center justify-center gap-2"
                          >
                            <ShoppingCart size={16} />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border border-border bg-card p-12 text-center">
                  <p className="text-muted-foreground mb-2">No products found</p>
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
