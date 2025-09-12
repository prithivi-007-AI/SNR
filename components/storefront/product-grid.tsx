import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"

interface ProductGridProps {
  tenant: string
  featured?: boolean
}

const products = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 199.99,
    comparePrice: 249.99,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    badge: "Best Seller",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    comparePrice: 39.99,
    rating: 4.6,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    badge: "Eco-Friendly",
    category: "Clothing",
  },
  {
    id: "3",
    name: "Smart Plant Pot",
    price: 79.99,
    comparePrice: null,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop",
    badge: "New",
    category: "Home & Garden",
  },
  {
    id: "4",
    name: "Premium Coffee Beans",
    price: 24.99,
    comparePrice: null,
    rating: 4.7,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop",
    badge: null,
    category: "Food & Beverage",
  },
  {
    id: "5",
    name: "Yoga Mat Pro",
    price: 89.99,
    comparePrice: 119.99,
    rating: 4.5,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop",
    badge: "Sale",
    category: "Sports",
  },
  {
    id: "6",
    name: "Ceramic Dinnerware Set",
    price: 149.99,
    comparePrice: null,
    rating: 4.8,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    badge: null,
    category: "Home & Kitchen",
  },
]

export function ProductGrid({ tenant, featured = false }: ProductGridProps) {
  const displayProducts = featured ? products.slice(0, 4) : products

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {displayProducts.map((product) => (
        <Card key={product.id} className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow">
          <div className="relative overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {product.badge && (
              <Badge className="absolute top-3 left-3" variant={product.badge === "Sale" ? "destructive" : "secondary"}>
                {product.badge}
              </Badge>
            )}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="secondary" size="icon" className="h-8 w-8">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{product.category}</p>
              <h3 className="font-semibold text-sm leading-tight">
                <Link
                  href={`/storefront/${tenant}/products/${product.id}`}
                  className="hover:text-primary transition-colors"
                >
                  {product.name}
                </Link>
              </h3>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-muted-foreground">({product.reviews})</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-bold">${product.price}</span>
                {product.comparePrice && (
                  <span className="text-sm text-muted-foreground line-through">${product.comparePrice}</span>
                )}
              </div>
              <Button className="w-full" size="sm">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
