import React from 'react'
import shineStarImg from '../assets/shineStarImg.jpeg'

const features = [
  { icon: 'ti-leaf', title: 'Quality Products', desc: 'Carefully selected and tested products for the best results.' },
  { icon: 'ti-truck', title: 'Fast Delivery', desc: 'Timely and safe delivery right to your doorstep.' },
  { icon: 'ti-user', title: 'Expert Support', desc: 'Our agricultural experts are always here to help you.' },
  { icon: 'ti-shield-check', title: 'Secure & Reliable', desc: '100% secure payments and a hassle-free shopping experience.' },
]

const stats = [
  { icon: 'ti-users', value: '50,000+', label: 'Happy Farmers' },
  { icon: 'ti-box', value: '10,000+', label: 'Products' },
  { icon: 'ti-truck', value: '500+', label: 'Cities Covered' },
  { icon: 'ti-rosette', value: '99%', label: 'Customer Satisfaction' },
]

const About = ({ onBack }) => {
  return (
    <div className="about-page">
      <div className="breadcrumb">
        <span onClick={onBack} style={{ cursor: 'pointer', color: '#1d6b2e' }}>Home</span>
        <i className="ti ti-chevron-right"></i>
        <span className="breadcrumb-current">About Us</span>
      </div>

      <div className="about-layout">

        {/* Left — product image */}
        <aside className="about-left">
          <img src={shineStarImg} alt="Shine Star product" className="about-product-img" />
        </aside>

        {/* Center — about content */}
        <main className="about-main">
          <h1 className="about-title">About Us</h1>
          <div className="about-title-bar"></div>

          <p className="about-description">
            AgroMart is committed to providing high-quality agricultural products to farmers,
            gardeners, and businesses. We believe in empowering farmers with the best tools,
            fertilizers, and solutions to maximize their yield and build a sustainable future.
          </p>

          <div className="about-features">
            {features.map((f) => (
              <div className="about-feature-row" key={f.title}>
                <div className="about-feature-icon">
                  <i className={`ti ${f.icon}`}></i>
                </div>
                <div>
                  <p className="about-feature-title">{f.title}</p>
                  <p className="about-feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Center-right — agriculture image */}
        <div className="about-hero-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&q=80"
            alt="Plant in soil"
            className="about-hero-img"
          />
        </div>

        {/* Right — Get in Touch */}
        <aside className="about-right">
          <div className="about-contact-card">
            <h3 className="about-contact-title">Get in Touch</h3>
            <div className="about-contact-bar"></div>
            <p className="about-contact-subtitle">We are here to help you!</p>

            <div className="about-contact-item">
              <i className="ti ti-phone"></i>
              <div>
                <p className="about-contact-value">+91 98765 43210</p>
                <p className="about-contact-note">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="about-contact-item">
              <i className="ti ti-mail"></i>
              <div>
                <p className="about-contact-value">support@agromart.com</p>
                <p className="about-contact-note">We reply within 24 hours</p>
              </div>
            </div>

            <div className="about-contact-item">
              <i className="ti ti-map-pin"></i>
              <div>
                <p className="about-contact-value">123, Krishi Nagar,</p>
                <p className="about-contact-note">Pune, Maharashtra - 411001</p>
              </div>
            </div>

            <div className="about-follow">
              <p className="about-follow-title">Follow Us</p>
              <div className="about-social-icons">
                <i className="ti ti-brand-facebook"></i>
                <i className="ti ti-brand-instagram"></i>
                <i className="ti ti-brand-youtube"></i>
                <i className="ti ti-brand-whatsapp"></i>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Stats strip */}
      <div className="about-stats-strip">
        {stats.map((s) => (
          <div className="about-stat" key={s.label}>
            <i className={`ti ${s.icon}`}></i>
            <p className="about-stat-value">{s.value}</p>
            <p className="about-stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About