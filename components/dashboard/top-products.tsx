import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, TrendingUp, TrendingDown } from "lucide-react"

const topProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    sales: 156,
    revenue: 31200,
    trend: "up",
    trendValue: 12.5,
    progress: 78,
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    sales: 89,
    revenue: 2667,
    trend: "up",
    trendValue: 8.2,
    progress: 45,
  },
  {
    id: 3,
    name: "Smart Plant Pot",
    sales: 67,
    revenue: 5359,
    trend: "down",
    trendValue: -3.1,
    progress: 34,
  },
  {
    id: 4,
    name: "Art Print Collection",
    sales: 45,
    revenue: 4049,
    trend: "up",
    trendValue: 15.8,
    progress: 23,
  },
]

export function TopProducts() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Top Products</CardTitle>
            <CardDescription>Best performing products this month</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <ArrowUpRight className="mr-2 h-4 w-4" />
            View All Products
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topProducts.map((product, index) => (
            <div key={product.id} className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground">#{index + 1}</span>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium leading-none">{product.name}</h4>
                  <div className="flex items-center space-x-2">
                    {product.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 text-green-600" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-600" />
                    )}
                    <span className={`text-xs ${product.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                      {product.trend === "up" ? "+" : ""}
                      {product.trendValue}%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{product.sales} sales</span>
                  <span>${product.revenue.toLocaleString()}</span>
                </div>
                <Progress value={product.progress} className="h-1" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
