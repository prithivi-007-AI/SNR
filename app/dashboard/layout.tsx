import type React from "react"
import { StoreSidebar } from "@/components/dashboard/store-sidebar"
import { StoreHeader } from "@/components/dashboard/store-header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      <StoreSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <StoreHeader />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
