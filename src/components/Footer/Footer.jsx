import React from "react";
import "./Footer.css";
import visa from "../../assets/visa.png"
import mastercard from "../../assets/mastercard.png"
import amex from "../../assets/amex.png"
import paypal from "../../assets/paypal.jpg"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <p>
            Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no
            sit erat lorem et magna ipsum dolore amet erat.
          </p>
          <ul>
            <li>📍 123 Street, New York, USA</li>
            <li>📧 info@example.com</li>
            <li>📞 +012 345 67890</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>› Home</li>
            <li>› Our Shop</li>
            <li>› Shop Detail</li>
            <li>› Shopping Cart</li>
            <li>› Checkout</li>
            <li>› Contact Us</li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>› Home</li>
            <li>› Our Shop</li>
            <li>› Shop Detail</li>
            <li>› Shopping Cart</li>
            <li>› Checkout</li>
            <li>› Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © Your Site Name. All Rights Reserved. Designed by <strong>HTML Codex</strong><br />
          Distributed By ThemeWagon
        </p>
        <div className="payment-icons">
          <img src={visa} alt="Visa" />
          <img src={mastercard} alt="Mastercard" />
          <img src={amex} alt="Amex" />
          <img src={paypal} alt="Paypal" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
