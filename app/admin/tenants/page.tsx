import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Plus, MoreHorizontal, ExternalLink, Settings, Trash2 } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

const tenants = [
  {
    id: "1",
    name: "TechGadgets Pro",
    slug: "techgadgets-pro",
    domain: "techgadgets.com",
    owner: "John Smith",
    ownerEmail: "john@techgadgets.com",
    subscription: "Premium",
    status: "Active",
    revenue: "$12,450",
    orders: 234,
    createdAt: new Date("2024-01-15"),
    logo: "/abstract-tech-logo.png",
  },
  {
    id: "2",
    name: "Fashion Boutique",
    slug: "fashion-boutique",
    domain: null,
    owner: "Sarah Johnson",
    ownerEmail: "sarah@fashionboutique.com",
    subscription: "Basic",
    status: "Active",
    revenue: "$8,920",
    orders: 156,
    createdAt: new Date("2024-02-03"),
    logo: "/elegant-fashion-logo.png",
  },
  {
    id: "3",
    name: "Organic Foods Co",
    slug: "organic-foods-co",
    domain: "organicfoods.co",
    owner: "Mike Chen",
    ownerEmail: "mike@organicfoods.co",
    subscription: "Enterprise",
    status: "Active",
    revenue: "$24,680",
    orders: 445,
    createdAt: new Date("2023-11-20"),
    logo: "/organic-logo.png",
  },
  {
    id: "4",
    name: "Art Gallery Online",
    slug: "art-gallery-online",
    domain: null,
    owner: "Emma Wilson",
    ownerEmail: "emma@artgallery.com",
    subscription: "Premium",
    status: "Suspended",
    revenue: "$5,340",
    orders: 89,
    createdAt: new Date("2024-03-10"),
    logo: "/abstract-art-logo.png",
  },
  {
    id: "5",
    name: "Sports Equipment Hub",
    slug: "sports-equipment-hub",
    domain: "sportshub.net",
    owner: "David Brown",
    ownerEmail: "david@sportshub.net",
    subscription: "Basic",
    status: "Trial",
    revenue: "$1,250",
    orders: 23,
    createdAt: new Date("2024-11-01"),
    logo: "/generic-sports-logo.png",
  },
]

export default function TenantsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">Tenant Management</h1>
          <p className="text-muted-foreground">Manage all stores and their configurations</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Tenant
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Tenants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+12 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Stores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,189</div>
            <p className="text-xs text-muted-foreground">95.3% active rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Trial Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">58</div>
            <p className="text-xs text-muted-foreground">4.7% conversion rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Revenue/Tenant</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$10,240</div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Tenants Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Tenants</CardTitle>
              <CardDescription>A list of all registered stores on the platform</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search tenants..." className="pl-8 w-[300px]" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Store</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Subscription</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="w-[70px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tenants.map((tenant) => (
                <TableRow key={tenant.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={tenant.logo || "/placeholder.svg"} alt={tenant.name} />
                        <AvatarFallback>{tenant.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{tenant.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {tenant.domain || `${tenant.slug}.snrautomation.com`}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{tenant.owner}</div>
                      <div className="text-sm text-muted-foreground">{tenant.ownerEmail}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        tenant.subscription === "Enterprise"
                          ? "default"
                          : tenant.subscription === "Premium"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {tenant.subscription}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        tenant.status === "Active" ? "secondary" : tenant.status === "Trial" ? "outline" : "destructive"
                      }
                      className={
                        tenant.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : tenant.status === "Trial"
                            ? "bg-blue-100 text-blue-800"
                            : ""
                      }
                    >
                      {tenant.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{tenant.revenue}</TableCell>
                  <TableCell>{tenant.orders}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {formatDistanceToNow(tenant.createdAt, { addSuffix: true })}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Store
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="mr-2 h-4 w-4" />
                          Manage
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
