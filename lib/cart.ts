"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  variantId?: string
  variantName?: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: string, variantId?: string) => void
  updateQuantity: (id: string, quantity: number, variantId?: string) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id && i.variantId === item.variantId)
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id && i.variantId === item.variantId ? { ...i, quantity: i.quantity + 1 } : i,
              ),
            }
          }
          return {
            items: [...state.items, { ...item, quantity: 1 }],
          }
        }),
      removeItem: (id, variantId) =>
        set((state) => ({
          items: state.items.filter((item) => !(item.id === id && item.variantId === variantId)),
        })),
      updateQuantity: (id, quantity, variantId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && item.variantId === variantId ? { ...item, quantity } : item,
          ),
        })),
      clearCart: () => set({ items: [] }),
      getTotalItems: () => {
        const { items } = get()
        return items.reduce((total, item) => total + item.quantity, 0)
      },
      getTotalPrice: () => {
        const { items } = get()
        return items.reduce((total, item) => total + item.price * item.quantity, 0)
      },
    }),
    {
      name: "cart-storage",
    },
  ),
)
