"use client";

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import FilterSidebar from '../components/FilterSidebar';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { api } from '../utils/api';

export default function Landingpage() {
  const [filters, setFilters] = useState({
    electronics: false,
    jewelery: false,
    "men's clothing": false,
    "women's clothing": false,
  });

  const [sortOrder, setSortOrder] = useState('recommended');
  const [isMobile, setIsMobile] = useState(false);
  const [productList, setProductList] = useState([]);
  const [isFilterVisible, setFilterVisible] = useState(true);

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await api();
      setProductList(data)
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
  
      // Trigger toggleFilter if screen size is less than 768px
      if (window.innerWidth < 768) {
        setFilterVisible(false); // Hide the filter when screen size is below 768px
      } else {
        setFilterVisible(true); // Show the filter for larger screen sizes
      }
    };
  
    handleResize(); // Check screen size initially on mount
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);
  

  // Filter logic
  const filteredProducts = productList.filter((product) => {
    const category = product.category.toLowerCase();
    return (
      (filters.electronics && category === 'electronics') ||
      (filters.jewelery && category === 'jewelery') ||
      (filters["men's clothing"] && category === "men's clothing") ||
      (filters["women's clothing"] && category === "women's clothing") ||
      (!filters.electronics &&
        !filters.jewelery &&
        !filters["men's clothing"] &&
        !filters["women's clothing"])
    );
  });

  // Sort logic
  const sortProducts = (products) => {
    switch (sortOrder) {
      case 'lowToHigh':
        return [...products].sort((a, b) => a.price - b.price);
      case 'highToLow':
        return [...products].sort((a, b) => b.price - a.price);
      case 'newest':
        return [...products].sort((a, b) => b.id - a.id);
      case 'popular':
        return [...products].sort((a, b) => b.rating?.count - a.rating?.count);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(filteredProducts);

  return (
    <>
      <Header />

      <main
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        {isFilterVisible && (
          <div style={{ width: isMobile ? '100%' : '250px' }}>
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>
        )}

        <div style={{ flex: 1, padding: isMobile ? '0 10px' : '0 20px' }}>
      
          <ProductGrid
            products={sortedProducts}
            selectedSort={sortOrder}
            onSortChange={setSortOrder}
            isFilterVisible={isFilterVisible} 
            toggleFilter={toggleFilter}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const products = await api();

  return {
   
    props: { products },
  };
}
