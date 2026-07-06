import React, { useState } from 'react'
import logo from '../assets/AgroMartlogo.jpeg'
import farmerImg from '../assets/farmerImg.jpeg'

const Login = ({ onLoginSuccess, onRegister }) => {
  const [form, setForm] = useState({ credential: '', password: '', remember: false })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
    setErrors({ ...errors, [name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.credential.trim()) newErrors.credential = 'Mobile number or email is required'
    if (!form.password.trim())   newErrors.password   = 'Password is required'
    else if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    return newErrors
  }

  const handleLogin = () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setLoading(true)
    // Simulate login — replace with real auth
    setTimeout(() => {
      setLoading(false)
      onLoginSuccess()
    }, 1000)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleLogin()
  }

  return (
    <div className="login-page">

      {/* Left Panel */}
      <div className="login-left" style={{ backgroundImage: `url(${farmerImg})` }}>
        <div className="login-left-overlay">
          <div className="login-left-content">
            <h2 className="login-welcome">Welcome <span>Back!</span></h2>
            <p className="login-welcome-sub">Login to continue your journey with AgroMart.</p>
            <div className="login-features">
              <div className="login-feature-item">
                <div className="login-feature-icon"><i className="ti ti-package"></i></div>
                <div>
                  <p className="login-feature-title">Easy Order Tracking</p>
                  <p className="login-feature-subtitle">Track your orders in real-time</p>
                </div>
              </div>
              <div className="login-feature-item">
                <div className="login-feature-icon"><i className="ti ti-heart"></i></div>
                <div>
                  <p className="login-feature-title">Save Your Favorites</p>
                  <p className="login-feature-subtitle">Bookmark your favorite products</p>
                </div>
              </div>
              <div className="login-feature-item">
                <div className="login-feature-icon"><i className="ti ti-shield-check"></i></div>
                <div>
                  <p className="login-feature-title">Secure &amp; Safe</p>
                  <p className="login-feature-subtitle">Your data is always protected</p>
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

          <h1 className="login-title">Login</h1>
          <p className="login-subtitle">Welcome back! Please login to your account.</p>

          <div className="login-field">
            <label>Mobile Number / Email</label>
            <div className={`login-input-wrap ${errors.credential ? 'input-error' : ''}`}>
              <i className="ti ti-user"></i>
              <input
                type="text"
                name="credential"
                placeholder="Enter mobile number or email"
                value={form.credential}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            {errors.credential && <span className="error-msg">{errors.credential}</span>}
          </div>

          <div className="login-field">
            <div className="login-password-label-row">
              <label>Password</label>
              <span className="forgot-password-link">Forgot Password?</span>
            </div>
            <div className={`login-input-wrap ${errors.password ? 'input-error' : ''}`}>
              <i className="ti ti-lock"></i>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
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

          <label className="login-remember">
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
            />
            Remember Me
          </label>

          <button className="login-btn" onClick={handleLogin} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="login-divider"><span>or continue with</span></div>

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

          <p className="login-register-text">
            Don't have an account?{' '}
            <span className="login-register-link" onClick={onRegister}>Register Now</span>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Login