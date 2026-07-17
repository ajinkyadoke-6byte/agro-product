// import React, { useState, useContext, useEffect } from 'react'
// import { ProductContext } from '../context/ProductContext'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import logo from '../assets/AgroMartlogo.jpeg'
// import farmerImg from '../assets/farmerImg.jpeg'
// import { User, Lock, Eye, EyeOff, Package, Heart, ShieldCheck } from 'lucide-react'

// const Login = () => {
//   const { token, setToken, backendUrl } = useContext(ProductContext)
//   const navigate = useNavigate()

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [remember, setRemember] = useState(false)
//   const [errors, setErrors] = useState({})
//   const [showPassword, setShowPassword] = useState(false)
//   const [loading, setLoading] = useState(false)

//   const validate = () => {
//     const newErrors = {}

//     if (!email.trim()) {
//       newErrors.email = 'Mobile number or email is required'
//     }

//     if (!password.trim()) {
//       newErrors.password = 'Password is required'
//     } else if (password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters'
//     }

//     return newErrors
//   }

//   const onSubmitHandler = async (event) => {
//     event.preventDefault()

//     const newErrors = validate()

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       return
//     }

//     setLoading(true)

//     try {
//       const response = await axios.post(
//         backendUrl + '/api/user/login',
//         {
//           email,
//           password,
//         }
//       )

//       console.log(response.data)

//       if (response.data.success) {
//         localStorage.setItem('token', response.data.token)

//         setToken(response.data.token)

//         toast.success('Login Successful')
//       } else {
//         toast.error(response.data.message)
//       }
//     } catch (error) {
//       console.log(error)

//       toast.error(
//         error.response?.data?.message ||
//         error.message ||
//         'Login failed'
//       )
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     if (token) {
//       navigate('/profile')
//     }
//   }, [token, navigate])

//   return (
//     <div className="login-page">
//       <div
//         className="login-left"
//         style={{ backgroundImage: `url(${farmerImg})` }}
//       >
//         <div className="login-left-overlay">
//           <div className="login-left-content">
//             <h2 className="login-welcome">
//               Welcome <span>Back!</span>
//             </h2>

//             <p className="login-welcome-sub">
//               Login to continue your journey with AgroMart.
//             </p>

//             <div className="login-features">
//               <div className="login-feature-item">
//                 <div className="login-feature-icon">
//                   <Package size={18} />
//                 </div>

//                 <div>
//                   <p className="login-feature-title">
//                     Easy Order Tracking
//                   </p>

//                   <p className="login-feature-subtitle">
//                     Track your orders in real-time
//                   </p>
//                 </div>
//               </div>

//               <div className="login-feature-item">
//                 <div className="login-feature-icon">
//                   <Heart size={18} />
//                 </div>

//                 <div>
//                   <p className="login-feature-title">
//                     Save Your Favorites
//                   </p>

//                   <p className="login-feature-subtitle">
//                     Bookmark your favorite products
//                   </p>
//                 </div>
//               </div>

//               <div className="login-feature-item">
//                 <div className="login-feature-icon">
//                   <ShieldCheck size={18} />
//                 </div>

//                 <div>
//                   <p className="login-feature-title">
//                     Secure & Safe
//                   </p>

//                   <p className="login-feature-subtitle">
//                     Your data is always protected
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="login-right">
//         <form
//           className="login-form-wrap"
//           onSubmit={onSubmitHandler}
//         >
//           <div className="login-logo">
//             <img src={logo} alt="AgroMart" />

//             <div>
//               <p className="login-logo-name">AgroMart</p>

//               <p className="login-logo-tagline">
//                 Grow Better, Live Better
//               </p>
//             </div>
//           </div>

//           <h1 className="login-title">Login</h1>

//           <p className="login-subtitle">
//             Welcome back! Please login to your account.
//           </p>

//           <div className="login-field">
//             <label>Mobile Number / Email</label>

//             <div
//               className={`login-input-wrap ${
//                 errors.email ? 'input-error' : ''
//               }`}
//             >
//               <User size={17} />

//               <input
//                 type="text"
//                 placeholder="Enter mobile number or email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             {errors.email && (
//               <span className="error-msg">
//                 {errors.email}
//               </span>
//             )}
//           </div>

//           <div className="login-field">
//             <div className="login-password-label-row">
//               <label>Password</label>

//               <span className="forgot-password-link">
//                 Forgot Password?
//               </span>
//             </div>

//             <div
//               className={`login-input-wrap ${
//                 errors.password ? 'input-error' : ''
//               }`}
//             >
//               <Lock size={17} />

//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <span
//                 className="login-eye-icon"
//                 onClick={() =>
//                   setShowPassword(!showPassword)
//                 }
//               >
//                 {showPassword ? (
//                   <EyeOff size={17} />
//                 ) : (
//                   <Eye size={17} />
//                 )}
//               </span>
//             </div>

//             {errors.password && (
//               <span className="error-msg">
//                 {errors.password}
//               </span>
//             )}
//           </div>

//           <label className="login-remember">
//             <input
//               type="checkbox"
//               checked={remember}
//               onChange={(e) =>
//                 setRemember(e.target.checked)
//               }
//             />

//             Remember Me
//           </label>

//           <button
//             type="submit"
//             className="login-btn"
//             disabled={loading}
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>

//           <div className="login-divider">
//             <span>or continue with</span>
//           </div>

//           <button type="button" className="login-social-btn">
//             <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
//               <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
//               <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
//               <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
//             </svg>
//             Continue with Google
//           </button>

//           <p className="login-register-text">
//             Don't have an account?{' '}

//             <span
//               className="login-register-link"
//               onClick={() => navigate('/register')}
//             >
//               Register Now
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login
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

  // On page load, check if a remembered email exists and pre-fill it
  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail')
    if (savedEmail) {
      setEmail(savedEmail)
      setRemember(true)
    }
  }, [])

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
        { email, password }
      )

      if (response.data.success) {
        localStorage.setItem('token', response.data.token)
        setToken(response.data.token)

        // Save or clear the remembered email based on checkbox state
        if (remember) {
          localStorage.setItem('rememberedEmail', email)
        } else {
          localStorage.removeItem('rememberedEmail')
        }

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
      <div className="login-left" style={{ backgroundImage: `url(${farmerImg})` }}>
        <div className="login-left-overlay">
          <div className="login-left-content">
            <h2 className="login-welcome">Welcome <span>Back!</span></h2>
            <p className="login-welcome-sub">Login to continue your journey with AgroMart.</p>
            <div className="login-features">
              <div className="login-feature-item">
                <div className="login-feature-icon"><Package size={18} /></div>
                <div>
                  <p className="login-feature-title">Easy Order Tracking</p>
                  <p className="login-feature-subtitle">Track your orders in real-time</p>
                </div>
              </div>
              <div className="login-feature-item">
                <div className="login-feature-icon"><Heart size={18} /></div>
                <div>
                  <p className="login-feature-title">Save Your Favorites</p>
                  <p className="login-feature-subtitle">Bookmark your favorite products</p>
                </div>
              </div>
              <div className="login-feature-item">
                <div className="login-feature-icon"><ShieldCheck size={18} /></div>
                <div>
                  <p className="login-feature-title">Secure & Safe</p>
                  <p className="login-feature-subtitle">Your data is always protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="login-right">
        <form className="login-form-wrap" onSubmit={onSubmitHandler}>
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
            <div className={`login-input-wrap ${errors.email ? 'input-error' : ''}`}>
              <User size={17} />
              <input
                type="text"
                placeholder="Enter mobile number or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          <div className="login-field">
            <div className="login-password-label-row">
              <label>Password</label>
              <span className="forgot-password-link">Forgot Password?</span>
            </div>
            <div className={`login-input-wrap ${errors.password ? 'input-error' : ''}`}>
              <Lock size={17} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="login-eye-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </span>
            </div>
            {errors.password && <span className="error-msg">{errors.password}</span>}
          </div>

          <label className="login-remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember Me
          </label>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="login-divider"><span>or continue with</span></div>

          <button type="button" className="login-social-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
              <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <p className="login-register-text">
            Don't have an account?{' '}
            <span className="login-register-link" onClick={() => navigate('/register')}>
              Register Now
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login