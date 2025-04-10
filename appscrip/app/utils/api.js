export async function api() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    const products = await res.json();
    console.log('Fetched products:', products); // Debug log to check the API response
    return {
      props: { products: Array.isArray(products) ? products : [] }, // Ensure products is an array
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: { products: [] }, // Return an empty array in case of an error
    };
  }
}
