
import { Product } from "@/types/types";

export const addtoCart = (product: Product) => {
  if (typeof window !== "undefined") {
    const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProductIndex = cart.findIndex(
      (item) =>
        item._id === product._id &&
        JSON.stringify(item.colors) === JSON.stringify(product.colors),
    );

    if (existingProductIndex > -1) {
      cart[existingProductIndex].inventory += 1;
    } else {
      cart.push({
        ...product,
        inventory: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const removeFromCart = (productId: string) => {
  if (typeof window !== "undefined") {
    let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    cart = cart.filter((item) => item._id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const updateCartQty = (productId: string, quantity: number) => {
  if (typeof window !== "undefined") {
    const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const productIndex = cart.findIndex((item) => item._id === productId);

    if (productIndex > -1) {
      cart[productIndex].inventory = Math.max(1, quantity);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const getCartItems = (): Product[] => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }
  return [];
};

export const clearCart = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("cart");
  }
};

export const getCartTotal = (): number => {
  const cart = getCartItems();
  return cart.reduce(
    (total, item) => total + item.price * (item.inventory || 1),
    0,
  );
};

export const getCartItemCount = (): number => {
  const cart = getCartItems();
  return cart.reduce((count, item) => count + (item.inventory || 1), 0);
};






