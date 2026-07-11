import React, { useState, useContext, useMemo, useRef, useEffect } from 'react'
import logo from '../assets/AgroMartlogo.jpeg'
import { useNavigate, useLocation } from 'react-router-dom'
import { Search, Bell, CircleUserRound, ShoppingCart } from 'lucide-react'
import { ProductContext } from '../context/ProductContext'

const links = [
  { label: 'Home', path: '/' },
  { label: 'Product', path: '/products' },
  { label: 'Categories', path: '/categories' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
]

const Navbar = ({ cartCount = 0 }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { products } = useContext(ProductContext)

  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const wrapperRef = useRef(null)

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  const matches = useMemo(() => {
    if (!query.trim()) return []
    const q = query.trim().toLowerCase()
    return products
      .filter((p) => p.name.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q))
      .slice(0, 6)
  }, [query, products])

  const showDropdown = isFocused && query.trim().length > 0

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsFocused(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const goToProduct = (product) => {
    navigate(`/products/${product._id}`)
    setQuery('')
    setIsFocused(false)
  }

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="AgroMart" />
          <span>AgroMart</span>
        </div>

        <div className="search-bar" ref={wrapperRef} style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
          />
          <Search className="search-icon" size={24} color="#1F7A3A" />

          {showDropdown && (
            <div className="search-dropdown">
              {matches.length > 0 ? (
                matches.map((p) => (
                  <div key={p._id} className="search-dropdown-item" onClick={() => goToProduct(p)}>
                    <img src={p.image[0]} alt={p.name} />
                    <div>
                      <p className="search-dropdown-name">{p.name}</p>
                      <p className="search-dropdown-category">{p.category}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="search-dropdown-empty">No products found</div>
              )}
            </div>
          )}
        </div>

        <div className="header-icons">
          <div className="icon-wrap">
            <Bell className="nav-icon" size={24} color="#1F7A3A" />
            <span className="notif-dot"></span>
          </div>
          <div className="icon-wrap" onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}>
            <ShoppingCart className="nav-icon" size={24} color="#1F7A3A" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
          <CircleUserRound
            className="nav-icon"
            color="#1F7A3A"
            size={26}
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/login')}
          />
        </div>
      </div>

      <div className="nav-links">
        {links.map((link) => (
          <span
            key={link.path}
            className={isActive(link.path) ? 'nav-active' : ''}
            onClick={() => navigate(link.path)}
          >
            {link.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Navbar