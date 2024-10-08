import React from 'react';
import './Footer.css'; 
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/menu">Menu</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="footer-contact">
                    <p>Follow us on:</p>
                    <a href="https://www.linkedin.com/in/aleeza-a-i68735305" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="footer-info">
                    <p>&copy; 2024 Café Delight. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
