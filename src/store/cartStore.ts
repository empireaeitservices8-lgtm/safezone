import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  packSize: string;
  quantity: number;
  image?: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, packSize: string) => void;
  updateQuantity: (id: string, packSize: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((state) => {
        const existingItem = state.items.find((i) => i.id === item.id && i.packSize === item.packSize);
        if (existingItem) {
          return {
            items: state.items.map((i) =>
              i.id === item.id && i.packSize === item.packSize
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          };
        }
        return { items: [...state.items, item] };
      }),
      removeItem: (id, packSize) => set((state) => ({
        items: state.items.filter((i) => !(i.id === id && i.packSize === packSize)),
      })),
      updateQuantity: (id, packSize, quantity) => set((state) => ({
        items: state.items.map((i) =>
          i.id === id && i.packSize === packSize ? { ...i, quantity } : i
        ),
      })),
      clearCart: () => set({ items: [] }),
      getCartTotal: () => get().items.reduce((total, item) => total + item.price * item.quantity, 0),
      getCartCount: () => get().items.reduce((count, item) => count + item.quantity, 0),
    }),
    {
      name: 'safezone-cart',
    }
  )
);
