import { Card } from "@/components/ui/card"
import Link from "next/link"

interface CategoryGridProps {
  tenant: string
}

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    description: "Latest gadgets and tech",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop",
    productCount: 45,
  },
  {
    id: "clothing",
    name: "Clothing",
    description: "Fashion for every occasion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop",
    productCount: 128,
  },
  {
    id: "home-garden",
    name: "Home & Garden",
    description: "Everything for your home",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
    productCount: 67,
  },
  {
    id: "sports",
    name: "Sports & Fitness",
    description: "Gear up for your workout",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    productCount: 89,
  },
  {
    id: "food-beverage",
    name: "Food & Beverage",
    description: "Gourmet treats and drinks",
    image: "https://images.unsplash.com/photo-1506617420156-8e4536971650?w=300&h=200&fit=crop",
    productCount: 34,
  },
  {
    id: "beauty",
    name: "Beauty & Personal Care",
    description: "Look and feel your best",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop",
    productCount: 56,
  },
]

export function CategoryGrid({ tenant }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={`/storefront/${tenant}/categories/${category.id}`}>
          <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90 mb-2">{category.description}</p>
                  <p className="text-xs opacity-75">{category.productCount} products</p>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
