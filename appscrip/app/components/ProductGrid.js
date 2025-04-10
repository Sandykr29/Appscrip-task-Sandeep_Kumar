
import React from 'react';
import styles from './ProductGrid.module.css';

const ProductGrid = ({ products, selectedSort, onSortChange, isFilterVisible,toggleFilter }) => {
    return (
      <section className={`${styles.wrapper} ${!isFilterVisible ? styles.expandedGrid : ''}`}>
        <div className={styles.topBar}>
          <div className={styles.totalItems}>
            <span>{products.length || 0} ITEMS</span>
      
            <button
              onClick={toggleFilter}
              style={{
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                color: 'inherit',
                font: 'inherit',
                padding: 0,
              }}
            >
              {isFilterVisible ? '< HIDE FILTER' : '> SHOW FILTER'}
            </button>
            
          </div>
          <select
            className={styles.sortDropdown}
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="highToLow">PRICE: HIGH TO LOW</option>
            <option value="lowToHigh">PRICE: LOW TO HIGH</option>
          </select>
        </div>
  
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.image}
              />
              <p className={styles.name} style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                {product.title.length > 23 ? `${product.title.slice(0, 23)}...` : product.title}
              </p>
              <p className={styles.note} style={{ fontSize: '0.9rem' }}>
                Sign in or Create an account to see pricing
              </p>
              <img
                src="/heart.png"
                alt="Favorite"
                className={styles.favoriteIcon}
              />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
export default ProductGrid;
