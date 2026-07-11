import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import CategoryGrid from './components/CategoryGrid'
import Footer from './components/Footer'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import MyOrders from './pages/MyOrders'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import NotFound from './pages/NotFound'
import HomeCategoryGrid from './components/HomeCategoryGrid'
import './index.css'
import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

function App() {
  const [cartItems, setCartItems] = useState([])
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const addToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
        )
      }
      return [...prev, { product, quantity: qty }]
    })
  }

  const increaseQty = (id) =>
    setCartItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i)))

  const decreaseQty = (id) =>
    setCartItems((prev) =>
      prev.map((i) => (i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
    )

  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((i) => i.product.id !== id))

  const handlePlaceOrder = (orderDetails) => {
    console.log('Order placed:', orderDetails)
    setCartItems([])
    navigate('/')
    alert('Order placed successfully!')
  }

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register'

  return (
    <div className="app">
      {!isAuthPage && (
        <Navbar cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HomeCategoryGrid />
              <TrustBadges />
            </>
          }
        />

        <Route
          path="/products"
          element={<Products onAddToCart={addToCart} />}
        />

       <Route
          path="/products/:id"
          element={<ProductDetails onAddToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onIncrease={increaseQty}
              onDecrease={decreaseQty}
              onRemove={removeFromCart}
              onContinueShopping={() => navigate('/products')}
              onCheckout={() => navigate('/checkout')}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cartItems={cartItems}
              onEditCart={() => navigate('/cart')}
              onPlaceOrder={handlePlaceOrder}
            />
          }
        />

        <Route
          path="/login"
          element={
            <Login
              onLoginSuccess={() => navigate('/profile')}
              onRegister={() => navigate('/register')}
            />
          }
        />

        <Route
          path="/register"
          element={
            <Register
              onRegisterSuccess={() => navigate('/profile')}
              onLogin={() => navigate('/login')}
            />
          }
        />

        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/categories" element={<CategoryGrid />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </div>
  )
}

export default App