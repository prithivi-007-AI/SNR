import Link from "next/link"
import { Store, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface StorefrontFooterProps {
  tenant: string
}

export function StorefrontFooter({ tenant }: StorefrontFooterProps) {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Store Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Store className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-bold">Demo Store</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for premium quality products. We're committed to providing exceptional customer
              service and the best shopping experience.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href={`/storefront/${tenant}/products`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                All Products
              </Link>
              <Link
                href={`/storefront/${tenant}/categories`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Categories
              </Link>
              <Link
                href={`/storefront/${tenant}/deals`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Special Deals
              </Link>
              <Link
                href={`/storefront/${tenant}/new-arrivals`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                New Arrivals
              </Link>
              <Link
                href={`/storefront/${tenant}/bestsellers`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Best Sellers
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href={`/storefront/${tenant}/contact`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Contact Us
              </Link>
              <Link
                href={`/storefront/${tenant}/shipping`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Shipping Info
              </Link>
              <Link
                href={`/storefront/${tenant}/returns`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Returns & Exchanges
              </Link>
              <Link
                href={`/storefront/${tenant}/faq`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                FAQ
              </Link>
              <Link
                href={`/storefront/${tenant}/size-guide`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Size Guide
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for the latest products and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@demo-store.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Store Street, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Demo Store. All rights reserved. Powered by SNR Automation.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href={`/storefront/${tenant}/privacy`}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href={`/storefront/${tenant}/terms`}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href={`/storefront/${tenant}/cookies`}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
