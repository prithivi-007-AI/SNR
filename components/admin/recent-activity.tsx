import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDistanceToNow } from "date-fns"

const activities = [
  {
    id: 1,
    type: "tenant_created",
    user: "John Smith",
    avatar: "/diverse-user-avatars.png",
    action: "created a new store",
    target: "TechGadgets Pro",
    timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
    status: "success",
  },
  {
    id: 2,
    type: "payment_failed",
    user: "Sarah Johnson",
    avatar: "/diverse-user-avatar-set-2.png",
    action: "payment failed for",
    target: "Fashion Boutique",
    timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
    status: "error",
  },
  {
    id: 3,
    type: "user_registered",
    user: "Mike Chen",
    avatar: "/diverse-user-avatars-3.png",
    action: "registered as store owner",
    target: "Organic Foods Co",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    status: "success",
  },
  {
    id: 4,
    type: "subscription_upgraded",
    user: "Emma Wilson",
    avatar: "/user-avatar-4.png",
    action: "upgraded to Premium",
    target: "Art Gallery Online",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    status: "success",
  },
  {
    id: 5,
    type: "security_alert",
    user: "System",
    avatar: "/system-avatar.png",
    action: "detected suspicious login",
    target: "Admin Panel",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
    status: "warning",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest platform events and user actions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.user} />
                <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center space-x-2">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>{" "}
                    <span className="text-muted-foreground">{activity.action}</span>{" "}
                    <span className="font-medium">{activity.target}</span>
                  </p>
                  <Badge
                    variant={
                      activity.status === "success"
                        ? "secondary"
                        : activity.status === "error"
                          ? "destructive"
                          : "outline"
                    }
                    className="text-xs"
                  >
                    {activity.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
