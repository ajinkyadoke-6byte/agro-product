import React from 'react'
import logo from '../assets/AgroMartlogo.jpeg'
import { useNavigate } from 'react-router-dom'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

const Footer = () => {
  const navigate = useNavigate()
  const goToCategory = (name) => navigate(`/products?category=${encodeURIComponent(name)}`)

  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="AgroMart" />
            <span>AgroMart</span>
          </div>
          <p className="footer-tagline">Grow Better, Live Better</p>
          <p className="footer-desc">
            Providing top quality agricultural products to help farmers grow better and live better.
          </p>
          <div className="footer-socials">
            <a href="#"><Mail size={16} /></a>
            <a href="#"><Phone size={16} /></a>
            <a href="#"><MessageCircle size={16} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li onClick={() => navigate('/products')}>All Products</li>
            <li onClick={() => goToCategory('Fertilizers')}>Fertilizers</li>
            <li onClick={() => goToCategory('Pesticides')}>Pesticides</li>
            <li onClick={() => goToCategory('Micronutrients')}>Micronutrients</li>
            <li onClick={() => goToCategory('Organic Products')}>Organic Products</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Information</h4>
          <ul>
            <li onClick={() => navigate('/about')}>About Us</li>
            <li onClick={() => navigate('/contact')}>Contact Us</li>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li><Phone size={14} /> +91 98765 43210</li>
            <li><Mail size={14} /> support@agromart.com</li>
            <li><MapPin size={14} /> 123, Krishi Nagar, Pune, Maharashtra - 411001</li>
          </ul>
        </div>

        <div className="footer-col footer-newsletter">
          <h4><Mail size={20} /> Newsletter</h4>
          <p className="footer-newsletter-text">Subscribe to get updates on new products and offers</p>
          <div className="footer-input-group">
            <input type="email" placeholder="Enter your email" className="footer-input" />
            <button className="footer-subscribe">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 AgroMart. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer