import { FaInstagram, FaLinkedin } from "react-icons/fa";
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

      <div className="footer-top">

        <div className="footer-left">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from our store</p>

          <div className="subscribe">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-right">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4 className="currency-row">CURRENCY</h4>
          <p>🇺🇸 USD</p>
          <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">

        <div className="footer-col">
          <h4>mettā muse</h4>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
        </div>

        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Returns & Refunds</p>
          <p>FAQs</p>
        </div>

        <div className="footer-col">
          <h4>FOLLOW US</h4>

          <div className="social-icons">
            <FaInstagram />
            <FaLinkedin />
          </div>

          <h4 style={{ marginTop: "20px" }}>
            mettā muse ACCEPTS
          </h4>

          <div className="payments">
            <img src="/GPay.png" alt="" />
            <img src="/Mastercard.png" alt="" />
            <img src="/PayPal.png" alt="" />
            <img src="/Amex.png" alt="" />
            <img src="/ApplePay.png" alt="" />
            <img src="/PhonePe.png" alt="" />
          </div>
        </div>

      </div>

      <p className="footer-copy">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
      </div>
    </footer>
  );
}