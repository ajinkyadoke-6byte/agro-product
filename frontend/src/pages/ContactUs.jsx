import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ChevronRight, Send, CheckCircle2, Phone, Mail, MapPin, Clock,
  Leaf, Truck, Lock, RotateCcw, ChevronDown, MessageCircle
} from 'lucide-react'

const faqs = [
  {
    q: "How long does delivery usually take?",
    a: "Most orders are delivered within 3-5 business days, depending on your location. Remote areas may take slightly longer."
  },
  {
    q: "Do you offer bulk order discounts?",
    a: "Yes! We offer special pricing for bulk and wholesale orders. Reach out to us via the form below or call us directly to discuss your requirements."
  },
  {
    q: "What is your return and refund policy?",
    a: "We accept returns within 7 days of delivery for unopened, unused products. Refunds are processed within 5-7 business days after we receive the returned item."
  },
  {
    q: "Are your products certified organic?",
    a: "Our Organic Products category is certified by recognized agricultural bodies. Look for the certification badge on individual product pages for details."
  },
  {
    q: "Can I track my order?",
    a: "Yes, once your order ships you'll receive a tracking link via email and SMS. You can also check your order status under 'My Orders' in your account."
  },
]

const FAQItem = ({ faq, isOpen, onClick }) => (
  <div className={`faq-item ${isOpen ? 'faq-open' : ''}`} onClick={onClick}>
    <div className="faq-question">
      <span>{faq.q}</span>
      <ChevronDown size={18} className="faq-chevron" />
    </div>
    <div className="faq-answer">
      <p>{faq.a}</p>
    </div>
  </div>
)

const ContactUs = () => {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(0)
  const [form, setForm] = useState({
    fullName: '', email: '', mobile: '', subject: '', message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.fullName.trim())  newErrors.fullName = 'Full name is required'
    if (!form.email.trim())     newErrors.email    = 'Email address is required'
    if (!form.mobile.trim())    newErrors.mobile   = 'Mobile number is required'
    if (!form.subject.trim())   newErrors.subject  = 'Subject is required'
    if (!form.message.trim())   newErrors.message  = 'Message is required'
    return newErrors
  }

  const handleSubmit = () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
    setForm({ fullName: '', email: '', mobile: '', subject: '', message: '' })
  }

  return (
    <div className="contact-page">

      <div className="breadcrumb">
        <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</span>
        <ChevronRight size={14} />
        <span className="breadcrumb-current">Contact Us</span>
      </div>

      <div className="contact-hero-band">
        <span className="contact-eyebrow">We're Here to Help</span>
        <h1 className="contact-title">Get in Touch With Us</h1>
        <p className="contact-subtitle">
          Have a question about our products, an order, or anything else?
          Our team typically replies within 24 hours.
        </p>

        <div className="contact-quick-actions">
          <a href="tel:+919876543210" className="quick-action-btn">
            <div className="quick-action-icon"><Phone size={18} /></div>
            <span>Call Now</span>
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="quick-action-btn">
            <div className="quick-action-icon"><MessageCircle size={18} /></div>
            <span>WhatsApp Us</span>
          </a>
          <a href="mailto:support@agromart.com" className="quick-action-btn">
            <div className="quick-action-icon"><Mail size={18} /></div>
            <span>Email Us</span>
          </a>
        </div>
      </div>

      <div className="contact-layout">

        <div className="contact-left">
          <div className="contact-form-card">
            <div className="contact-form-header">
              <div className="contact-form-icon"><Send size={18} color="#fff" /></div>
              <div>
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we will get back to you as soon as possible.</p>
              </div>
            </div>

            {submitted && (
              <div className="contact-success">
                <CheckCircle2 size={18} />
                Your message has been sent successfully! We'll get back to you within 24 hours.
              </div>
            )}

            <div className="contact-form">
              <div className="contact-form-row-2">
                <div className="contact-form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={form.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? 'input-error' : ''}
                  />
                  {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
                </div>
                <div className="contact-form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
              </div>

              <div className="contact-form-group">
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={form.mobile}
                  onChange={handleChange}
                  className={errors.mobile ? 'input-error' : ''}
                />
                {errors.mobile && <span className="error-msg">{errors.mobile}</span>}
              </div>

              <div className="contact-form-group">
                <label>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'input-error' : ''}
                />
                {errors.subject && <span className="error-msg">{errors.subject}</span>}
              </div>

              <div className="contact-form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className={errors.message ? 'input-error' : ''}
                />
                {errors.message && <span className="error-msg">{errors.message}</span>}
              </div>

              <button className="contact-submit-btn" onClick={handleSubmit}>
                <Send size={16} /> Send Message
              </button>
            </div>
          </div>
        </div>

        <aside className="contact-right">
          <div className="contact-info-card">
            <h3>Get in Touch</h3>

            <div className="contact-info-item">
              <div className="contact-info-icon"><Phone size={16} /></div>
              <div>
                <p className="contact-info-label">Call Us</p>
                <p className="contact-info-value">+91 98765 43210</p>
                <p className="contact-info-note">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon"><Mail size={16} /></div>
              <div>
                <p className="contact-info-label">Email Us</p>
                <p className="contact-info-value">support@agromart.com</p>
                <p className="contact-info-note">We reply within 24 hours</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon"><MapPin size={16} /></div>
              <div>
                <p className="contact-info-label">Our Location</p>
                <p className="contact-info-value">123, Krishi Nagar,</p>
                <p className="contact-info-note">Pune, Maharashtra - 411001, India</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon"><Clock size={16} /></div>
              <div>
                <p className="contact-info-label">Working Hours</p>
                <p className="contact-info-value">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="contact-info-note">Sunday: Closed</p>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                title="AgroMart Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: 12 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </aside>
      </div>

      {/* FAQ Section */}
      <div className="contact-faq-section">
        <div className="contact-faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to common questions — you might find what you need right here.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openFaq === index}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default ContactUs