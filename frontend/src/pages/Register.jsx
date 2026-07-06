import React, { useState } from 'react'
import logo from '../assets/AgroMartlogo.jpeg'
import plantImg from '../assets/plantImg.jpeg'

const Register = ({ onRegisterSuccess, onLogin }) => {
  const [form, setForm] = useState({
    fullName: '', mobile: '', email: '',
    password: '', confirmPassword: '',
    dob: '', gender: '', agreeTerms: true,
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
    setErrors({ ...errors, [name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.fullName.trim())        newErrors.fullName = 'Full name is required'
    if (!form.mobile.trim())          newErrors.mobile = 'Mobile number is required'
    if (!form.email.trim())           newErrors.email = 'Email address is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Enter a valid email address'
    if (!form.password.trim())        newErrors.password = 'Password is required'
    else if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    if (!form.confirmPassword.trim()) newErrors.confirmPassword = 'Please confirm your password'
    else if (form.confirmPassword !== form.password) newErrors.confirmPassword = 'Passwords do not match'
    if (!form.dob.trim())             newErrors.dob = 'Date of birth is required'
    if (!form.gender.trim())          newErrors.gender = 'Please select your gender'
    if (!form.agreeTerms)             newErrors.agreeTerms = 'You must agree to the Terms & Conditions'
    return newErrors
  }

  const handleRegister = () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setLoading(true)
    // Simulate registration — replace with real auth
    setTimeout(() => {
      setLoading(false)
      onRegisterSuccess()
    }, 1000)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleRegister()
  }

  return (
    <div className="login-page">

      {/* Left Panel */}
      <div className="login-left" style={{ backgroundImage: `url(${plantImg})` }}>
        <div className="login-left-overlay">
          <div className="login-left-content">
            <h2 className="login-welcome">Create <span>Account</span></h2>
            <p className="login-welcome-sub">Join AgroMart today and experience the best in agricultural shopping.</p>
            <div className="login-features">
              <div className="login-feature-item">
                <div className="login-feature-icon"><i className="ti ti-discount-2"></i></div>
                <div>
                  <p className="login-feature-title">Exclusive Offers</p>
                  <p className="login-feature-subtitle">Get access to special discounts and offers.</p>
                </div>
              </div>
              <div className="login-feature-item">
                <div className="login-feature-icon"><i className="ti ti-package"></i></div>
                <div>
                  <p className="login-feature-title">Track Orders</p>
                  <p className="login-feature-subtitle">Track your orders in real-time with ease.</p>
                </div>
              </div>
              <div className="login-feature-item">
                <div className="login-feature-icon"><i className="ti ti-heart"></i></div>
                <div>
                  <p className="login-feature-title">Save Favorites</p>
                  <p className="login-feature-subtitle">Bookmark your favorite products and buy later.</p>
                </div>
              </div>
              <div className="login-feature-item">
                <div className="login-feature-icon"><i className="ti ti-shield-check"></i></div>
                <div>
                  <p className="login-feature-title">Secure &amp; Safe</p>
                  <p className="login-feature-subtitle">Your data is always protected with us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="login-right">
        <div className="login-form-wrap">

          <div className="login-logo">
            <img src={logo} alt="AgroMart" />
            <div>
              <p className="login-logo-name">AgroMart</p>
              <p className="login-logo-tagline">Grow Better, Live Better</p>
            </div>
          </div>

          <h1 className="login-title">Register</h1>
          <p className="login-subtitle">Create your account to get started.</p>

          <div className="login-field">
            <label>Full Name</label>
            <div className={`login-input-wrap ${errors.fullName ? 'input-error' : ''}`}>
              <i className="ti ti-user"></i>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
          </div>

          <div className="register-row-2">
            <div className="login-field">
              <label>Mobile Number</label>
              <div className={`login-input-wrap ${errors.mobile ? 'input-error' : ''}`}>
                <i className="ti ti-phone"></i>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={form.mobile}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
              </div>
              {errors.mobile && <span className="error-msg">{errors.mobile}</span>}
            </div>

            <div className="login-field">
              <label>Email Address</label>
              <div className={`login-input-wrap ${errors.email ? 'input-error' : ''}`}>
                <i className="ti ti-mail"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={form.email}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
              </div>
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>
          </div>

          <div className="register-row-2">
            <div className="login-field">
              <label>Password</label>
              <div className={`login-input-wrap ${errors.password ? 'input-error' : ''}`}>
                <i className="ti ti-lock"></i>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Create a password"
                  value={form.password}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                <i
                  className={`ti ${showPassword ? 'ti-eye-off' : 'ti-eye'} login-eye-icon`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
              {errors.password && <span className="error-msg">{errors.password}</span>}
            </div>

            <div className="login-field">
              <label>Confirm Password</label>
              <div className={`login-input-wrap ${errors.confirmPassword ? 'input-error' : ''}`}>
                <i className="ti ti-lock"></i>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                <i
                  className={`ti ${showConfirmPassword ? 'ti-eye-off' : 'ti-eye'} login-eye-icon`}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                ></i>
              </div>
              {errors.confirmPassword && <span className="error-msg">{errors.confirmPassword}</span>}
            </div>
          </div>

          <div className="register-row-2">
            <div className="login-field">
              <label>Date of Birth</label>
              <div className={`login-input-wrap ${errors.dob ? 'input-error' : ''}`}>
                <i className="ti ti-calendar"></i>
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
              </div>
              {errors.dob && <span className="error-msg">{errors.dob}</span>}
            </div>

            <div className="login-field">
              <label>Gender</label>
              <div className={`login-input-wrap ${errors.gender ? 'input-error' : ''}`}>
                <i className="ti ti-users"></i>
                <select name="gender" value={form.gender} onChange={handleChange}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {errors.gender && <span className="error-msg">{errors.gender}</span>}
            </div>
          </div>

          <label className="login-remember register-terms">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={form.agreeTerms}
              onChange={handleChange}
            />
            I agree to the <span className="register-terms-link">Terms &amp; Conditions</span> and{' '}
            <span className="register-terms-link">Privacy Policy</span>.
          </label>
          {errors.agreeTerms && <span className="error-msg">{errors.agreeTerms}</span>}

          <button className="login-btn" onClick={handleRegister} disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

          <div className="login-divider"><span>or register with</span></div>

          <div className="register-social-row">
            <button className="login-social-btn">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <button className="login-social-btn login-facebook-btn">
              <i className="ti ti-brand-facebook" style={{ color: '#1877F2', fontSize: 20 }}></i>
              Continue with Facebook
            </button>
          </div>

          <p className="login-register-text">
            Already have an account?{' '}
            <span className="login-register-link" onClick={onLogin}>Login Now</span>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Register