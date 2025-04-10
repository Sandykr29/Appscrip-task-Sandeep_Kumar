export async function api() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await res.json();
    console.log("Fetched products:", products); // Server-side log
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
