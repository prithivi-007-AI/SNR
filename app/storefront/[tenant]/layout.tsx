import type React from "react"
import { StorefrontHeader } from "@/components/storefront/storefront-header"
import { StorefrontFooter } from "@/components/storefront/storefront-footer"

interface StorefrontLayoutProps {
  children: React.ReactNode
  params: {
    tenant: string
  }
}

export default function StorefrontLayout({ children, params }: StorefrontLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <StorefrontHeader tenant={params.tenant} />
      <main className="flex-1">{children}</main>
      <StorefrontFooter tenant={params.tenant} />
    </div>
  )
}
