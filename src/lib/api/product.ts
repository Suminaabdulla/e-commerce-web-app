import { Product } from "@/models/product";
import { BASE_URL, PRODUCTS_ENDPOINT } from "./config";

export const fetchProducts = async () => {
  try {
    const res = await fetch(`${BASE_URL}${PRODUCTS_ENDPOINT}`);
    const data: Product[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
