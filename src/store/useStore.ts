import { create } from 'zustand';
import { MenuItem, Category, Order } from '../types';

interface Store {
  cart: { [key: string]: number };
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  selectedCategory: string | null;
  setSelectedCategory: (categoryId: string | null) => void;
}

export const useStore = create<Store>((set) => ({
  cart: {},
  addToCart: (itemId) =>
    set((state) => ({
      cart: { ...state.cart, [itemId]: (state.cart[itemId] || 0) + 1 },
    })),
  removeFromCart: (itemId) =>
    set((state) => {
      const newCart = { ...state.cart };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return { cart: newCart };
    }),
  clearCart: () => set({ cart: {} }),
  selectedCategory: null,
  setSelectedCategory: (categoryId) => set({ selectedCategory: categoryId }),
}));