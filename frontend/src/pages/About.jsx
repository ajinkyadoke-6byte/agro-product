import React from 'react'
import { useNavigate } from 'react-router-dom'
import shineStarImg from '../assets/shineStarImg.jpeg'
import {
  ChevronRight, Leaf, Truck, Users, ShieldCheck,
  Phone, Mail, MapPin,  MessageCircle,
  Package, Award
} from 'lucide-react'

const features = [
  { icon: Leaf, title: 'Quality Products', desc: 'Carefully selected and tested products for the best results.' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Timely and safe delivery right to your doorstep.' },
  { icon: Users, title: 'Expert Support', desc: 'Our agricultural experts are always here to help you.' },
  { icon: ShieldCheck, title: 'Secure & Reliable', desc: '100% secure payments and a hassle-free shopping experience.' },
]

const stats = [
  { icon: Users, value: '50,000+', label: 'Happy Farmers' },
  { icon: Package, value: '10,000+', label: 'Products' },
  { icon: Truck, value: '500+', label: 'Cities Covered' },
  { icon: Award, value: '99%', label: 'Customer Satisfaction' },
]

const About = () => {
  const navigate = useNavigate()

  return (
    <div className="about-page">
      <div className="breadcrumb">
        <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</span>
        <ChevronRight size={14} />
        <span className="breadcrumb-current">About Us</span>
      </div>

      {/* Hero intro band */}
      <div className="about-hero-band">
        <div className="about-hero-text">
          <span className="about-eyebrow">Who We Are</span>
          <h1 className="about-title">Growing Trust, One Farm at a Time</h1>
          <p className="about-description">
            AgroMart is committed to providing high-quality agricultural products to farmers,
            gardeners, and businesses. We believe in empowering farmers with the best tools,
            fertilizers, and solutions to maximize their yield and build a sustainable future.
          </p>
        </div>
        <div className="about-hero-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"
            alt="Plant in soil"
            className="about-hero-img"
          />
        </div>
      </div>

      <div className="about-layout">
        {/* Left — features */}
        <main className="about-main">
          <h2 className="about-section-heading">Why Choose Us</h2>

          <div className="about-features">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div className="about-feature-card" key={f.title}>
                  <div className="about-feature-icon">
                    <Icon size={22} color="#1d6b2e" />
                  </div>
                  <div>
                    <p className="about-feature-title">{f.title}</p>
                    <p className="about-feature-desc">{f.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="about-product-highlight">
            <img src={shineStarImg} alt="Shine Star product" className="about-product-img" />
            <div>
              <p className="about-product-tag">Featured Product</p>
              <p className="about-product-name">Shine Star Growth Formula</p>
              <p className="about-product-desc">One of our top-rated micronutrient blends, trusted by thousands of farmers across India.</p>
            </div>
          </div>
        </main>

        {/* Right — Get in Touch */}
        <aside className="about-right">
          <div className="about-contact-card">
            <h3 className="about-contact-title">Get in Touch</h3>
            <p className="about-contact-subtitle">We are here to help you!</p>

            <div className="about-contact-item">
              <div className="about-contact-icon"><Phone size={16} color="#fff" /></div>
              <div>
                <p className="about-contact-value">+91 98765 43210</p>
                <p className="about-contact-note">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="about-contact-item">
              <div className="about-contact-icon"><Mail size={16} color="#fff" /></div>
              <div>
                <p className="about-contact-value">support@agromart.com</p>
                <p className="about-contact-note">We reply within 24 hours</p>
              </div>
            </div>

            <div className="about-contact-item">
              <div className="about-contact-icon"><MapPin size={16} color="#fff" /></div>
              <div>
                <p className="about-contact-value">123, Krishi Nagar,</p>
                <p className="about-contact-note">Pune, Maharashtra - 411001</p>
              </div>
            </div>

            <div className="about-follow">
              <p className="about-follow-title">Follow Us</p>
              <div className="about-social-icons">
                {/* <a href="#"><Facebook size={16} /></a>
                <a href="#"><Instagram size={16} /></a>
                <a href="#"><Youtube size={16} /></a> */}
                <a href="#"><MessageCircle size={16} /></a>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Stats strip */}
      <div className="about-stats-strip">
        {stats.map((s) => {
          const Icon = s.icon
          return (
            <div className="about-stat" key={s.label}>
              <Icon size={26} color="#fff" />
              <p className="about-stat-value">{s.value}</p>
              <p className="about-stat-label">{s.label}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default About