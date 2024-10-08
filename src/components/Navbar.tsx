'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import './Navbar.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar">
      <div className="container">
        <Link href="/" passHref>
          <div className="logo">Café Delight</div>
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '≡'}
        </div>
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            <Link href="/" onClick={toggleMenu}>Home</Link>
            <Link href="/about" onClick={toggleMenu}>About</Link>
            <Link href="/menu" onClick={toggleMenu}>Menu</Link>
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
