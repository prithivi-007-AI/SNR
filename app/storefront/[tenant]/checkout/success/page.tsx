import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

interface CheckoutSuccessProps {
  params: {
    tenant: string
  }
}

export default function CheckoutSuccess({ params }: CheckoutSuccessProps) {
  const orderNumber = "SNR-" + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-muted-foreground text-lg">
            Thank you for your purchase. Your order has been successfully placed and is being processed.
          </p>
        </div>

        <Card className="text-left mb-8">
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
            <CardDescription>Your order information and next steps</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <p className="font-medium">Order Number</p>
                <p className="text-2xl font-bold text-primary">{orderNumber}</p>
              </div>
              <Package className="h-8 w-8 text-muted-foreground" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Confirmation Email</p>
                    <p className="text-sm text-muted-foreground">
                      We've sent a confirmation email with your order details and tracking information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Package className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Estimated Delivery</p>
                    <p className="text-sm text-muted-foreground">
                      Your order will be delivered within 5-7 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-medium mb-4">What happens next?</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>We'll process your order within 1-2 business days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>You'll receive a shipping confirmation with tracking details</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>Your order will be delivered to your specified address</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href={`/storefront/${params.tenant}/account/orders`}>View Order Status</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/storefront/${params.tenant}/products`}>
              Continue Shopping <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            If you have any questions about your order, please don't hesitate to contact us.
          </p>
          <Button variant="outline" size="sm" asChild>
            <Link href={`/storefront/${params.tenant}/contact`}>Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
