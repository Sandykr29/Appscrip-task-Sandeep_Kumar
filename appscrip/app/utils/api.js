export async function api() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await res.json();
  
    return products;
  } catch (error) {
   
    return [];
  }
}
