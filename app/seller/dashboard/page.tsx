"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BarChart3, TrendingUp, Package, ShoppingBag, Plus, Edit2, Trash2, Eye, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Sample seller dashboard data
const SELLER_STATS = {
  totalSales: 1250000,
  totalOrders: 342,
  activeProducts: 28,
  totalRating: 4.8,
}

const RECENT_ORDERS = [
  {
    id: "ORD001",
    product: "Handwoven Cotton Sarees",
    buyer: "Priya Kumar",
    amount: 2598,
    status: "Delivered",
    date: "Today",
  },
  {
    id: "ORD002",
    product: "Kashmiri Pashmina Shawl",
    buyer: "Raj Singh",
    amount: 6998,
    status: "Shipped",
    date: "Yesterday",
  },
  {
    id: "ORD003",
    product: "Terracotta Pottery Set",
    buyer: "Meera Patel",
    amount: 1598,
    status: "Processing",
    date: "2 days ago",
  },
  {
    id: "ORD004",
    product: "Organic Honey Collection",
    buyer: "Ahmed Hassan",
    amount: 1098,
    status: "Delivered",
    date: "3 days ago",
  },
]

const TOP_PRODUCTS = [
  {
    id: 1,
    name: "Handwoven Cotton Sarees",
    sales: 156,
    revenue: 202644,
    rating: 4.8,
    image: "/handwoven-cotton-saree-with-traditional-patterns.jpg",
  },
  {
    id: 2,
    name: "Kashmiri Pashmina Shawl",
    sales: 89,
    revenue: 311311,
    rating: 4.9,
    image: "/luxurious-kashmiri-pashmina-shawl.jpg",
  },
  {
    id: 3,
    name: "Terracotta Pottery Set",
    sales: 67,
    revenue: 53633,
    rating: 4.6,
    image: "/traditional-terracotta-pottery-bowls.jpg",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-800"
    case "Shipped":
      return "bg-blue-100 text-blue-800"
    case "Processing":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function SellerDashboard() {
  const [selectedTab, setSelectedTab] = useState("overview")

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold mb-2">Seller Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Artisans of Odisha</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Sales</p>
                  <p className="text-3xl font-bold">₹{(SELLER_STATS.totalSales / 100000).toFixed(1)}L</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
              </div>
              <p className="text-xs text-green-600 mt-3 flex items-center gap-1">
                <TrendingUp size={14} /> +12% from last month
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Orders</p>
                  <p className="text-3xl font-bold">{SELLER_STATS.totalOrders}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <ShoppingBag className="h-6 w-6 text-accent" />
                </div>
              </div>
              <p className="text-xs text-green-600 mt-3 flex items-center gap-1">
                <TrendingUp size={14} /> +8% from last month
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Products</p>
                  <p className="text-3xl font-bold">{SELLER_STATS.activeProducts}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Package className="h-6 w-6 text-primary" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">3 pending approval</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Rating</p>
                  <p className="text-3xl font-bold">{SELLER_STATS.totalRating}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <span className="text-2xl">⭐</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Based on 1,245 reviews</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-border mb-8">
            <div className="flex gap-8">
              {["overview", "products", "orders"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`pb-4 text-sm font-medium transition border-b-2 ${
                    selectedTab === tab
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          {selectedTab === "overview" && (
            <div className="space-y-8">
              {/* Top Products */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Top Performing Products</h2>
                  <Link href="/seller/products" className="text-sm text-primary hover:underline">
                    View all →
                  </Link>
                </div>
                <div className="space-y-3">
                  {TOP_PRODUCTS.map((product) => (
                    <div
                      key={product.id}
                      className="rounded-lg border border-border bg-card p-4 flex items-center gap-4"
                    >
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-16 w-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.sales} units sold</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">₹{(product.revenue / 1000).toFixed(1)}K</p>
                        <p className="text-sm text-muted-foreground">⭐ {product.rating}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Orders */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Recent Orders</h2>
                  <Link href="/seller/orders" className="text-sm text-primary hover:underline">
                    View all →
                  </Link>
                </div>
                <div className="rounded-lg border border-border bg-card overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="px-6 py-3 text-left text-sm font-semibold">Order ID</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Product</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Buyer</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RECENT_ORDERS.map((order) => (
                        <tr key={order.id} className="border-b border-border hover:bg-muted/50 transition">
                          <td className="px-6 py-4 text-sm font-medium">{order.id}</td>
                          <td className="px-6 py-4 text-sm">{order.product}</td>
                          <td className="px-6 py-4 text-sm">{order.buyer}</td>
                          <td className="px-6 py-4 text-sm font-medium">₹{order.amount}</td>
                          <td className="px-6 py-4 text-sm">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{order.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "products" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Manage Products</h2>
                <button className="btn-primary inline-flex items-center gap-2 text-sm">
                  <Plus size={16} /> Add Product
                </button>
              </div>
              <div className="grid gap-4">
                {TOP_PRODUCTS.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-lg border border-border bg-card p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-20 w-20 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-semibold mb-1">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">Rating: ⭐ {product.rating}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-muted transition" title="View">
                        <Eye size={16} className="text-muted-foreground" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-muted transition" title="Edit">
                        <Edit2 size={16} className="text-muted-foreground" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-muted transition" title="Delete">
                        <Trash2 size={16} className="text-destructive" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === "orders" && (
            <div>
              <h2 className="text-xl font-semibold mb-6">All Orders</h2>
              <div className="rounded-lg border border-border bg-card overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-3 text-left text-sm font-semibold">Order ID</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Product</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Buyer</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RECENT_ORDERS.map((order) => (
                      <tr key={order.id} className="border-b border-border hover:bg-muted/50 transition">
                        <td className="px-6 py-4 text-sm font-medium">{order.id}</td>
                        <td className="px-6 py-4 text-sm">{order.product}</td>
                        <td className="px-6 py-4 text-sm">{order.buyer}</td>
                        <td className="px-6 py-4 text-sm font-medium">₹{order.amount}</td>
                        <td className="px-6 py-4 text-sm">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <button className="text-primary hover:underline inline-flex items-center gap-1">
                            <MessageSquare size={14} /> Message
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
