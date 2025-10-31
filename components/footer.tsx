import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                G
              </div>
              <span className="font-semibold">GramLink</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering rural entrepreneurs through direct market access and fair pricing.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/marketplace" className="text-muted-foreground hover:text-foreground transition">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/for-sellers" className="text-muted-foreground hover:text-foreground transition">
                  For Sellers
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="text-muted-foreground hover:text-foreground transition">
                  Mentorship
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 GramLink. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
