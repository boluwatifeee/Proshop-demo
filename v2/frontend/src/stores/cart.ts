import { create } from "zustand";

export type CartItem = {
  productId: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (productId: string) => void;
  clear: () => void;
  totalQty: number;
  totalPrice: number;
};

const STORAGE_KEY = "proshop_v2_cart";

const load = (): CartItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
};

const persist = (items: CartItem[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    console.error("Failed to persist cart items");
  }
};

export const useCart = create<CartState>((set, get) => ({
  items: load(),
  add: (item, qty = 1) => {
    const items = [...get().items];
    const idx = items.findIndex((i) => i.productId === item.productId);
    if (idx >= 0) {
      items[idx] = { ...items[idx], qty: items[idx].qty + qty };
    } else {
      items.push({ ...item, qty });
    }
    persist(items);
    set({ items });
  },
  remove: (productId) => {
    const items = get().items.filter((i) => i.productId !== productId);
    persist(items);
    set({ items });
  },
  clear: () => {
    persist([]);
    set({ items: [] });
  },
  get totalQty() {
    return get().items.reduce((sum, i) => sum + i.qty, 0);
  },
  get totalPrice() {
    return get().items.reduce((sum, i) => sum + i.qty * i.price, 0);
  },
}));
