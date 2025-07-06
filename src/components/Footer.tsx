import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa"; // Import necessary icons
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Section 1: Logo/Brand Info */}
        <div className={styles.brandInfo}>
          <h3 className={styles.brandName}>A-Bakes</h3>
          <p className={styles.tagline}>Sweet Delights, Crafted with Love.</p>
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className={styles.socialIcon} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className={styles.socialIcon} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className={styles.socialIcon} />
            </a>
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className={styles.socialIcon} />
            </a>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li>
              <Link to="/" className={styles.footerLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className={styles.footerLink}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.footerLink}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.footerLink}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className={styles.footerLink}>
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Customer Service */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Customer Service</h4>
          <ul className={styles.footerLinks}>
            <li>
              <Link to="/faq" className={styles.footerLink}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/shipping" className={styles.footerLink}>
                Shipping & Delivery
              </Link>
            </li>
            <li>
              <Link to="/returns" className={styles.footerLink}>
                Returns
              </Link>
            </li>
            <li>
              <Link to="/privacy" className={styles.footerLink}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className={styles.footerLink}>
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 4: Contact Info */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Get in Touch</h4>
          <ul className={styles.contactInfo}>
            <li>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span>123 Bakery Lane, Accra, Ghana</span>
            </li>
            <li>
              <FaPhone className={styles.contactIcon} />
              <span>+233 55 123 4567</span>
            </li>
            <li>
              <FaEnvelope className={styles.contactIcon} />
              <span>info@abakes.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} A-Bakes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
