import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>

      <form 
        className="contact-form" 
        action="https://formspree.io/f/xzzplglw" 
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="tel" name="phone" placeholder="Your Phone Number" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

    
      </div>
  
  );
};

export default Contact;
