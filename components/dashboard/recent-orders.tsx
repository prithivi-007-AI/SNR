import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUpRight } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

const recentOrders = [
  {
    id: "ORD-001",
    customer: {
      name: "John Smith",
      email: "john@example.com",
      avatar: "/placeholder.svg?key=customer1",
    },
    products: ["Wireless Headphones", "Phone Case"],
    total: 249.99,
    status: "Processing",
    createdAt: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
  },
  {
    id: "ORD-002",
    customer: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      avatar: "/placeholder.svg?key=customer2",
    },
    products: ["Organic T-Shirt"],
    total: 29.99,
    status: "Shipped",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  },
  {
    id: "ORD-003",
    customer: {
      name: "Mike Chen",
      email: "mike@example.com",
      avatar: "/placeholder.svg?key=customer3",
    },
    products: ["Smart Plant Pot", "Fertilizer Kit"],
    total: 119.98,
    status: "Completed",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
  },
  {
    id: "ORD-004",
    customer: {
      name: "Emma Wilson",
      email: "emma@example.com",
      avatar: "/placeholder.svg?key=customer4",
    },
    products: ["Art Print Set"],
    total: 89.99,
    status: "Processing",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
  },
  {
    id: "ORD-005",
    customer: {
      name: "David Brown",
      email: "david@example.com",
      avatar: "/placeholder.svg?key=customer5",
    },
    products: ["Sports Equipment Bundle"],
    total: 199.99,
    status: "Cancelled",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
  },
]

export function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest orders from your customers</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <ArrowUpRight className="mr-2 h-4 w-4" />
            View All Orders
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={order.customer.avatar || "/placeholder.svg"} alt={order.customer.name} />
                      <AvatarFallback>{order.customer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{order.customer.name}</div>
                      <div className="text-xs text-muted-foreground">{order.customer.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm">
                    {order.products.slice(0, 2).join(", ")}
                    {order.products.length > 2 && ` +${order.products.length - 2} more`}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.status === "Completed"
                        ? "secondary"
                        : order.status === "Processing"
                          ? "outline"
                          : order.status === "Shipped"
                            ? "default"
                            : "destructive"
                    }
                    className={
                      order.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-800"
                          : ""
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">${order.total}</TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {formatDistanceToNow(order.createdAt, { addSuffix: true })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
