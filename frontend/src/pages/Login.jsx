import React, { useState, useContext, useEffect } from 'react'
import { ProductContext } from '../context/ProductContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import logo from '../assets/AgroMartlogo.jpeg'
import farmerImg from '../assets/farmerImg.jpeg'
import { User, Lock, Eye, EyeOff, Package, Heart, ShieldCheck } from 'lucide-react'

const Login = () => {
  const { token, setToken, backendUrl } = useContext(ProductContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!email.trim()) {
      newErrors.email = 'Mobile number or email is required'
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    return newErrors
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    const newErrors = validate()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)

    try {
      const response = await axios.post(
        backendUrl + '/api/user/login',
        {
          email,
          password,
        }
      )

      console.log(response.data)

      if (response.data.success) {
        localStorage.setItem('token', response.data.token)

        setToken(response.data.token)

        toast.success('Login Successful')
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)

      toast.error(
        error.response?.data?.message ||
        error.message ||
        'Login failed'
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/profile')
    }
  }, [token, navigate])

  return (
    <div className="login-page">
      <div
        className="login-left"
        style={{ backgroundImage: `url(${farmerImg})` }}
      >
        <div className="login-left-overlay">
          <div className="login-left-content">
            <h2 className="login-welcome">
              Welcome <span>Back!</span>
            </h2>

            <p className="login-welcome-sub">
              Login to continue your journey with AgroMart.
            </p>

            <div className="login-features">
              <div className="login-feature-item">
                <div className="login-feature-icon">
                  <Package size={18} />
                </div>

                <div>
                  <p className="login-feature-title">
                    Easy Order Tracking
                  </p>

                  <p className="login-feature-subtitle">
                    Track your orders in real-time
                  </p>
                </div>
              </div>

              <div className="login-feature-item">
                <div className="login-feature-icon">
                  <Heart size={18} />
                </div>

                <div>
                  <p className="login-feature-title">
                    Save Your Favorites
                  </p>

                  <p className="login-feature-subtitle">
                    Bookmark your favorite products
                  </p>
                </div>
              </div>

              <div className="login-feature-item">
                <div className="login-feature-icon">
                  <ShieldCheck size={18} />
                </div>

                <div>
                  <p className="login-feature-title">
                    Secure & Safe
                  </p>

                  <p className="login-feature-subtitle">
                    Your data is always protected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="login-right">
        <form
          className="login-form-wrap"
          onSubmit={onSubmitHandler}
        >
          <div className="login-logo">
            <img src={logo} alt="AgroMart" />

            <div>
              <p className="login-logo-name">AgroMart</p>

              <p className="login-logo-tagline">
                Grow Better, Live Better
              </p>
            </div>
          </div>

          <h1 className="login-title">Login</h1>

          <p className="login-subtitle">
            Welcome back! Please login to your account.
          </p>

          <div className="login-field">
            <label>Mobile Number / Email</label>

            <div
              className={`login-input-wrap ${
                errors.email ? 'input-error' : ''
              }`}
            >
              <User size={17} />

              <input
                type="text"
                placeholder="Enter mobile number or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {errors.email && (
              <span className="error-msg">
                {errors.email}
              </span>
            )}
          </div>

          <div className="login-field">
            <div className="login-password-label-row">
              <label>Password</label>

              <span className="forgot-password-link">
                Forgot Password?
              </span>
            </div>

            <div
              className={`login-input-wrap ${
                errors.password ? 'input-error' : ''
              }`}
            >
              <Lock size={17} />

              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                className="login-eye-icon"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff size={17} />
                ) : (
                  <Eye size={17} />
                )}
              </span>
            </div>

            {errors.password && (
              <span className="error-msg">
                {errors.password}
              </span>
            )}
          </div>

          <label className="login-remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) =>
                setRemember(e.target.checked)
              }
            />

            Remember Me
          </label>

          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="login-divider">
            <span>or continue with</span>
          </div>

          <button
            type="button"
            className="login-social-btn"
          >
            Continue with Google
          </button>

          <p className="login-register-text">
            Don't have an account?{' '}

            <span
              className="login-register-link"
              onClick={() => navigate('/register')}
            >
              Register Now
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login