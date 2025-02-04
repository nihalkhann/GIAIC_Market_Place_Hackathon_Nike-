import { Product } from "@/types/types";

export const addToWishlist = (product: Product) => {
  const wishlist: Product[] = JSON.parse(
    localStorage.getItem("wishlist") || "[]",
  );

  const existingProductIndex = wishlist.findIndex(
    (item) =>
      item._id === product._id &&
      JSON.stringify(item.colors) === JSON.stringify(product.colors),
  );

  if (existingProductIndex === -1) {
    wishlist.push({
      ...product,
      inventory: 1,
    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    triggerWishlistUpdate();
  }
};

export const removeFromWishlist = (productId: string) => {
  let wishlist: Product[] = JSON.parse(
    localStorage.getItem("wishlist") || "[]",
  );
  wishlist = wishlist.filter((item) => item._id !== productId);

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  triggerWishlistUpdate();
};

export const getWishlistItems = (): Product[] => {
  return JSON.parse(localStorage.getItem("wishlist") || "[]");
};

export const clearWishlist = () => {
  localStorage.removeItem("wishlist");
  triggerWishlistUpdate();
};

export const getWishlistTotal = (): number => {
  const wishlist = getWishlistItems();
  return wishlist.reduce(
    (total, item) => total + item.price * (item.inventory || 1),
    0,
  );
};

export const getWishlistItemCount = (): number => {
  const wishlist = getWishlistItems();
  return wishlist.length;
};

export const isInWishlist = (productId: string): boolean => {
  const wishlist = getWishlistItems();
  return wishlist.some((item) => item._id === productId);
};

export const triggerWishlistUpdate = () => {
  const event = new Event("wishlistUpdated");
  window.dispatchEvent(event);
};
