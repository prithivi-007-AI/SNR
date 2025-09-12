import Stripe from "stripe"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set")
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
  typescript: true,
})

export const formatAmountForStripe = (amount: number, currency: string): number => {
  return Math.round(amount * 100)
}

export const formatAmountFromStripe = (amount: number, currency: string): number => {
  return amount / 100
}
