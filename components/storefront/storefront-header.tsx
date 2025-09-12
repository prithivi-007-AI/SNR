"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, User, Menu, Heart, Store } from "lucide-react"
import { CartSheet } from "./cart-sheet"

interface StorefrontHeaderProps {
  tenant: string
}

export function StorefrontHeader({ tenant }: StorefrontHeaderProps) {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">Free shipping on orders over $50! 🚚</p>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/storefront/${tenant}`} className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">Demo Store</h1>
              <p className="text-xs text-muted-foreground">Premium Quality Products</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href={`/storefront/${tenant}`} className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href={`/storefront/${tenant}/products`}
              className="text-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href={`/storefront/${tenant}/categories`}
              className="text-foreground hover:text-primary transition-colors"
            >
              Categories
            </Link>
            <Link href={`/storefront/${tenant}/about`} className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link
              href={`/storefront/${tenant}/contact`}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-10 bg-muted/50" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>

            {/* Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={`/storefront/${tenant}/account`}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={`/storefront/${tenant}/orders`}>Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={`/storefront/${tenant}/wishlist`}>Wishlist</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={`/storefront/${tenant}/auth/signin`}>Sign In</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Shopping Cart */}
            <CartSheet tenant={tenant} />

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link href={`/storefront/${tenant}`} className="text-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link
                    href={`/storefront/${tenant}/products`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Products
                  </Link>
                  <Link
                    href={`/storefront/${tenant}/categories`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Categories
                  </Link>
                  <Link
                    href={`/storefront/${tenant}/about`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href={`/storefront/${tenant}/contact`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
