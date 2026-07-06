// import React, { useState } from 'react'

// const Contact = ({ onBack }) => {
//   const [form, setForm] = useState({
//     fullName: '', email: '', mobile: '', subject: '', message: ''
//   })
//   const [errors, setErrors] = useState({})
//   const [submitted, setSubmitted] = useState(false)

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//     setErrors({ ...errors, [e.target.name]: '' })
//   }

//   const validate = () => {
//     const newErrors = {}
//     if (!form.fullName.trim())  newErrors.fullName = 'Full name is required'
//     if (!form.email.trim())     newErrors.email    = 'Email address is required'
//     if (!form.mobile.trim())    newErrors.mobile   = 'Mobile number is required'
//     if (!form.subject.trim())   newErrors.subject  = 'Subject is required'
//     if (!form.message.trim())   newErrors.message  = 'Message is required'
//     return newErrors
//   }

//   const handleSubmit = () => {
//     const newErrors = validate()
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       return
//     }
//     setSubmitted(true)
//     setForm({ fullName: '', email: '', mobile: '', subject: '', message: '' })
//   }

//   return (
//     <div className="contact-page">

//       {/* Breadcrumb */}
//       <div className="breadcrumb">
//         <span style={{ cursor: 'pointer', color: '#1d6b2e' }} onClick={onBack}>Home</span>
//         <i className="ti ti-chevron-right"></i>
//         <span className="breadcrumb-current">Contact Us</span>
//       </div>

//       <div className="contact-layout">

//         {/* Left — Form */}
//         <div className="contact-left">
//           <h1 className="contact-title">Contact Us</h1>
//           <p className="contact-subtitle">
//             We'd love to hear from you! Whether you have a question about our products,
//             orders, or anything else — our team is ready to help.
//           </p>
//           <div className="contact-title-underline"></div>

//           <div className="contact-form-card">
//             <div className="contact-form-header">
//               <div className="contact-form-icon"><i className="ti ti-send"></i></div>
//               <div>
//                 <h2>Send Us a Message</h2>
//                 <p>Fill out the form below and we will get back to you as soon as possible.</p>
//               </div>
//             </div>

//             {submitted && (
//               <div className="contact-success">
//                 <i className="ti ti-circle-check-filled"></i>
//                 Your message has been sent successfully! We'll get back to you within 24 hours.
//               </div>
//             )}

//             <div className="contact-form">
//               <div className="contact-form-row-2">
//                 <div className="contact-form-group">
//                   <label>Full Name *</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     placeholder="Enter your full name"
//                     value={form.fullName}
//                     onChange={handleChange}
//                     className={errors.fullName ? 'input-error' : ''}
//                   />
//                   {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
//                 </div>
//                 <div className="contact-form-group">
//                   <label>Email Address *</label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     value={form.email}
//                     onChange={handleChange}
//                     className={errors.email ? 'input-error' : ''}
//                   />
//                   {errors.email && <span className="error-msg">{errors.email}</span>}
//                 </div>
//               </div>

//               <div className="contact-form-group">
//                 <label>Mobile Number *</label>
//                 <input
//                   type="tel"
//                   name="mobile"
//                   placeholder="Enter your mobile number"
//                   value={form.mobile}
//                   onChange={handleChange}
//                   className={errors.mobile ? 'input-error' : ''}
//                 />
//                 {errors.mobile && <span className="error-msg">{errors.mobile}</span>}
//               </div>

//               <div className="contact-form-group">
//                 <label>Subject *</label>
//                 <input
//                   type="text"
//                   name="subject"
//                   placeholder="Enter subject"
//                   value={form.subject}
//                   onChange={handleChange}
//                   className={errors.subject ? 'input-error' : ''}
//                 />
//                 {errors.subject && <span className="error-msg">{errors.subject}</span>}
//               </div>

//               <div className="contact-form-group">
//                 <label>Message *</label>
//                 <textarea
//                   name="message"
//                   placeholder="Type your message here..."
//                   value={form.message}
//                   onChange={handleChange}
//                   rows={5}
//                   className={errors.message ? 'input-error' : ''}
//                 />
//                 {errors.message && <span className="error-msg">{errors.message}</span>}
//               </div>

//               <button className="contact-submit-btn" onClick={handleSubmit}>
//                 <i className="ti ti-send"></i> Send Message
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right — Get in Touch */}
//         <aside className="contact-right">
//           <div className="contact-info-card">
//             <h3>Get in Touch</h3>
//             <div className="contact-info-underline"></div>

//             <div className="contact-info-item">
//               <div className="contact-info-icon"><i className="ti ti-phone"></i></div>
//               <div>
//                 <p className="contact-info-label">Call Us</p>
//                 <p className="contact-info-value">+91 98765 43210</p>
//                 <p className="contact-info-note">Mon - Sat: 9:00 AM - 7:00 PM</p>
//               </div>
//             </div>

//             <div className="contact-info-item">
//               <div className="contact-info-icon"><i className="ti ti-mail"></i></div>
//               <div>
//                 <p className="contact-info-label">Email Us</p>
//                 <p className="contact-info-value">support@agromart.com</p>
//                 <p className="contact-info-note">We reply within 24 hours</p>
//               </div>
//             </div>

//             <div className="contact-info-item">
//               <div className="contact-info-icon"><i className="ti ti-map-pin"></i></div>
//               <div>
//                 <p className="contact-info-label">Our Location</p>
//                 <p className="contact-info-value">123, Krishi Nagar,</p>
//                 <p className="contact-info-note">Pune, Maharashtra - 411001, India</p>
//               </div>
//             </div>

//             <div className="contact-info-item">
//               <div className="contact-info-icon"><i className="ti ti-clock"></i></div>
//               <div>
//                 <p className="contact-info-label">Working Hours</p>
//                 <p className="contact-info-value">Mon - Sat: 9:00 AM - 7:00 PM</p>
//                 <p className="contact-info-note">Sunday: Closed</p>
//               </div>
//             </div>

//             {/* Google Map Embed */}
//             <div className="contact-map">
//               <iframe
//                 title="AgroMart Location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
//                 width="100%"
//                 height="180"
//                 style={{ border: 0, borderRadius: 8 }}
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             </div>
//           </div>
//         </aside>
//       </div>

//       {/* Trust Strip */}
//       <div className="contact-trust-strip">
//         <div className="contact-trust-item">
//           <div className="contact-trust-icon"><i className="ti ti-leaf"></i></div>
//           <div>
//             <p className="contact-trust-title">100% Genuine Products</p>
//             <p className="contact-trust-subtitle">Original &amp; Trusted</p>
//           </div>
//         </div>
//         <div className="contact-trust-divider"></div>
//         <div className="contact-trust-item">
//           <div className="contact-trust-icon"><i className="ti ti-truck"></i></div>
//           <div>
//             <p className="contact-trust-title">Fast Delivery</p>
//             <p className="contact-trust-subtitle">On time, every time</p>
//           </div>
//         </div>
//         <div className="contact-trust-divider"></div>
//         <div className="contact-trust-item">
//           <div className="contact-trust-icon"><i className="ti ti-lock"></i></div>
//           <div>
//             <p className="contact-trust-title">Secure Payments</p>
//             <p className="contact-trust-subtitle">Multiple safe payment options</p>
//           </div>
//         </div>
//         <div className="contact-trust-divider"></div>
//         <div className="contact-trust-item">
//           <div className="contact-trust-icon"><i className="ti ti-rotate"></i></div>
//           <div>
//             <p className="contact-trust-title">Easy Returns</p>
//             <p className="contact-trust-subtitle">Hassle free returns</p>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default 

import React, { useState } from 'react'

const ContactUs = ({ onBack }) => {
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

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span style={{ cursor: 'pointer', color: '#1d6b2e' }} onClick={onBack}>Home</span>
        <i className="ti ti-chevron-right"></i>
        <span className="breadcrumb-current">Contact Us</span>
      </div>

      <div className="contact-layout">

        {/* Left — Form */}
        <div className="contact-left">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            We'd love to hear from you! Whether you have a question about our products,
            orders, or anything else — our team is ready to help.
          </p>
          <div className="contact-title-underline"></div>

          <div className="contact-form-card">
            <div className="contact-form-header">
              <div className="contact-form-icon"><i className="ti ti-send"></i></div>
              <div>
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we will get back to you as soon as possible.</p>
              </div>
            </div>

            {submitted && (
              <div className="contact-success">
                <i className="ti ti-circle-check-filled"></i>
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
                <i className="ti ti-send"></i> Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Right — Get in Touch */}
        <aside className="contact-right">
          <div className="contact-info-card">
            <h3>Get in Touch</h3>
            <div className="contact-info-underline"></div>

            <div className="contact-info-item">
              <div className="contact-info-icon"><i className="ti ti-phone"></i></div>
              <div>
                <p className="contact-info-label">Call Us</p>
                <p className="contact-info-value">+91 98765 43210</p>
                <p className="contact-info-note">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon"><i className="ti ti-mail"></i></div>
              <div>
                <p className="contact-info-label">Email Us</p>
                <p className="contact-info-value">support@agromart.com</p>
                <p className="contact-info-note">We reply within 24 hours</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon"><i className="ti ti-map-pin"></i></div>
              <div>
                <p className="contact-info-label">Our Location</p>
                <p className="contact-info-value">123, Krishi Nagar,</p>
                <p className="contact-info-note">Pune, Maharashtra - 411001, India</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon"><i className="ti ti-clock"></i></div>
              <div>
                <p className="contact-info-label">Working Hours</p>
                <p className="contact-info-value">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="contact-info-note">Sunday: Closed</p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="contact-map">
              <iframe
                title="AgroMart Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: 8 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </aside>
      </div>

      {/* Trust Strip */}
      <div className="contact-trust-strip">
        <div className="contact-trust-item">
          <div className="contact-trust-icon"><i className="ti ti-leaf"></i></div>
          <div>
            <p className="contact-trust-title">100% Genuine Products</p>
            <p className="contact-trust-subtitle">Original &amp; Trusted</p>
          </div>
        </div>
        <div className="contact-trust-divider"></div>
        <div className="contact-trust-item">
          <div className="contact-trust-icon"><i className="ti ti-truck"></i></div>
          <div>
            <p className="contact-trust-title">Fast Delivery</p>
            <p className="contact-trust-subtitle">On time, every time</p>
          </div>
        </div>
        <div className="contact-trust-divider"></div>
        <div className="contact-trust-item">
          <div className="contact-trust-icon"><i className="ti ti-lock"></i></div>
          <div>
            <p className="contact-trust-title">Secure Payments</p>
            <p className="contact-trust-subtitle">Multiple safe payment options</p>
          </div>
        </div>
        <div className="contact-trust-divider"></div>
        <div className="contact-trust-item">
          <div className="contact-trust-icon"><i className="ti ti-rotate"></i></div>
          <div>
            <p className="contact-trust-title">Easy Returns</p>
            <p className="contact-trust-subtitle">Hassle free returns</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactUs