// components/Header.js
import React, { useState } from 'react';
import Image from 'next/image'; // Import the Image component
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <header className={styles.header}>

{/* topContainer Starts  */}

      <div className={styles.container}>
     <div className={styles.topContainer}>

        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo-icon" width="36" height="36" />
        </div>

        <h1>LOGO</h1>

        <div className={styles.actions}>
          <span>
            <Image src="/search-normal.png" alt="Search Icon" width={24} height={24} />
          </span>
          <span>
            <Image src="/heart.png" alt="Wishlist Icon" width={24} height={24} />
          </span>
          <span>
            <Image src="/shopping-bag.png" alt="Shopping Bag Icon" width={24} height={24} />
          </span>
          <span>
            <Image src="/profile.png" alt="Profile Icon" width={24} height={24} />
          </span>
          <span>ENG ▼</span>
        </div>

      </div>
      </div>

{/* bottmContainer Starts  */}

<div className={styles.bottomContainer}>
   <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </nav>


      </div>
      
    </header>
    <div className={styles.banner}>
    <section className={styles.sectionBanner} >
    <h1>DISCOVER OUR PRODUCTS</h1>
    <p >
    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
    </p>
  </section>
  </div>
  </>
  );
};

export default Header;
