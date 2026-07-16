import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import logo from '../assets/AgroMartlogo.jpeg'
import plantImg from '../assets/plantImg.jpeg'
import { User, Phone, Mail, Lock, Calendar, Users, Eye, EyeOff, Tag, Package, Heart, ShieldCheck } from 'lucide-react'

const Register = () => {
  const navigate = useNavigate()
  const { token, setToken, backendUrl } = useContext(ProductContext)

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
    else if (form.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    if (!form.confirmPassword.trim()) newErrors.confirmPassword = 'Please confirm your password'
    else if (form.confirmPassword !== form.password) newErrors.confirmPassword = 'Passwords do not match'
    if (!form.dob.trim())             newErrors.dob = 'Date of birth is required'
    if (!form.gender.trim())          newErrors.gender = 'Please select your gender'
    if (!form.agreeTerms)             newErrors.agreeTerms = 'You must agree to the Terms & Conditions'
    return newErrors
  }

  const handleRegister = async () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    try {
      const response = await axios.post(backendUrl + '/api/user/register', {
        name: form.fullName,
        email: form.email,
        password: form.password,
        mobile: form.mobile,
        dob: form.dob,
        gender: form.gender,
      })

      if (response.data.success) {
        setToken(response.data.token)
        toast.success('Account created successfully')
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || error.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleRegister()
  }

  useEffect(() => {
    if (token) {
      navigate('/profile')
    }
  }, [token, navigate])

  return (
    <div className="login-page">
      <div className="login-left" style={{ backgroundImage: `url(${plantImg})` }}>
        <div className="login-left-overlay">
          <div className="login-left-content">
            <h2 className="login-welcome">Create <span>Account</span></h2>
            <p className="login-welcome-sub">Join AgroMart today and experience the best in agricultural shopping.</p>
            <div className="login-features">
              <div className="login-feature-item">
                <div className="login-feature-icon"><Tag size={18} /></div>
                <div>
                  <p className="login-feature-title">Exclusive Offers</p>
                  <p className="login-feature-subtitle">Get access to special discounts and offers.</p>
                </div>
              </div>
              <div className="login-feature-item">
                <div className="login-feature-icon"><Package size={18} /></div>
                <div>
                  <p className="login-feature-title">Track Orders</p>
                  <p className="login-feature-subtitle">Track your orders in real-time with ease.</p>
                </div>
              </div>
              <div className="login-feature-item">
                <div className="login-feature-icon"><Heart size={18} /></div>
                <div>
                  <p className="login-feature-title">Save Favorites</p>
                  <p className="login-feature-subtitle">Bookmark your favorite products and buy later.</p>
                </div>
              </div>
              <div className="login-feature-item">
                <div className="login-feature-icon"><ShieldCheck size={18} /></div>
                <div>
                  <p className="login-feature-title">Secure &amp; Safe</p>
                  <p className="login-feature-subtitle">Your data is always protected with us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="login-form-wrap register-form-wrap">
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
              <User size={17} />
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
                <Phone size={17} />
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
                <Mail size={17} />
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
                <Lock size={17} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Create a password"
                  value={form.password}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                <span className="login-eye-icon" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </span>
              </div>
              {errors.password && <span className="error-msg">{errors.password}</span>}
            </div>

            <div className="login-field">
              <label>Confirm Password</label>
              <div className={`login-input-wrap ${errors.confirmPassword ? 'input-error' : ''}`}>
                <Lock size={17} />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                <span className="login-eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </span>
              </div>
              {errors.confirmPassword && <span className="error-msg">{errors.confirmPassword}</span>}
            </div>
          </div>

          <div className="register-row-2">
            <div className="login-field">
              <label>Date of Birth</label>
              <div className={`login-input-wrap ${errors.dob ? 'input-error' : ''}`}>
                <Calendar size={17} />
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
                <Users size={17} />
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

          <p className="login-register-text">
            Already have an account?{' '}
            <span className="login-register-link" onClick={() => navigate('/login')}>Login Now</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register