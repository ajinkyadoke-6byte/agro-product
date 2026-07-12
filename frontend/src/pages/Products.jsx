import React, { useState, useMemo, useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ProductContext } from "../context/ProductContext";
import {
  ChevronRight, Star, StarHalf, ShoppingCart, ShieldCheck,
  Truck, Lock, Headset, ArrowLeft, ArrowRight
} from 'lucide-react'

const categoryList = [
  'Fertilizers', 'Pesticides', 'Fungicides',
  'Micronutrients', 'Plant Growth Promoters', 'Organic Products'
]

const ratingThresholds = [4, 3, 2]

const renderStars = (rating) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<Star key={i} size={14} fill="#f5a623" color="#f5a623" />)
    else if (rating >= i - 0.5) stars.push(<StarHalf key={i} size={14} fill="#f5a623" color="#f5a623" />)
    else stars.push(<Star key={i} size={14} color="#d0d0d0" />)
  }
  return stars
}

const Products = ({ onAddToCart }) => {
  const { products } = useContext(ProductContext)
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const categoryFromUrl = searchParams.get('category') || 'All Categories'
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl)

  // Highest price among all products — used as the slider's starting point
  const maxPrice = useMemo(() => {
    if (!products.length) return 5000
    return Math.max(...products.map((p) => p.price))
  }, [products])

  const [priceRange, setPriceRange] = useState(maxPrice)
  const [selectedRating, setSelectedRating] = useState(null)
  const [sortBy, setSortBy] = useState('Popularity')
  const [currentPage, setCurrentPage] = useState(1)

  // Once products load, snap the slider to the real max price
  useEffect(() => {
    setPriceRange(maxPrice)
  }, [maxPrice])

  useEffect(() => {
    setSelectedCategory(categoryFromUrl)
  }, [categoryFromUrl])

  // Real category counts computed from actual product data
  const categoryCounts = useMemo(() => {
    const counts = {}
    categoryList.forEach((name) => {
      counts[name] = products.filter((p) => p.category === name).length
    })
    return counts
  }, [products])

  // Real rating filter counts computed from actual product data
  const ratingCounts = useMemo(() => {
    const counts = {}
    ratingThresholds.forEach((stars) => {
      counts[stars] = products.filter((p) => p.rating >= stars).length
    })
    return counts
  }, [products])

  const chooseCategory = (name) => {
    setSelectedCategory(name)
    if (name === 'All Categories') {
      setSearchParams({})
    } else {
      setSearchParams({ category: name })
    }
  }

  const resetFilters = () => {
    chooseCategory('All Categories')
    setPriceRange(maxPrice)
    setSelectedRating(null)
  }

  const displayedProducts = useMemo(() => {
    let result = [...products]
    if (selectedCategory !== 'All Categories') {
      result = result.filter((p) => p.category === selectedCategory)
    }
    result = result.filter((p) => p.price <= priceRange)
    if (selectedRating) {
      result = result.filter((p) => p.rating >= selectedRating)
    }
    switch (sortBy) {
      case 'Price: Low to High': result.sort((a, b) => a.price - b.price); break;
      case 'Price: High to Low': result.sort((a, b) => b.price - a.price); break;
      case 'Rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'Newest': result.reverse(); break;
      default: result.sort((a, b) => b.reviews - a.reviews); break;
    }
    return result
  }, [selectedCategory, priceRange, selectedRating, sortBy, products])

  return (
    <div className="products-page">
      <div className="breadcrumb">
        <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</span>
        <ChevronRight size={14} />
        <span className="breadcrumb-current">Products</span>
      </div>

      <div className="products-layout">
        <aside className="filters-sidebar">
          <div className="filters-header">
            <h3>Filters</h3>
            <span className="reset-link" onClick={resetFilters}>Reset</span>
          </div>

          <div className="filter-group">
            <h4>Category</h4>
            <label className="filter-checkbox">
              <input type="checkbox" checked={selectedCategory === 'All Categories'} onChange={() => chooseCategory('All Categories')} />
              All Categories
            </label>
            {categoryList.map((name) => (
              <label className="filter-checkbox" key={name}>
                <input type="checkbox" checked={selectedCategory === name} onChange={() => chooseCategory(name)} />
                {name} <span className="filter-count">({categoryCounts[name] || 0})</span>
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>Price Range</h4>
            <div className="price-range-labels">
              <span>₹0</span>
              <span>₹{priceRange}</span>
            </div>
            <input
              type="range"
              min="0"
              max={maxPrice}
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="price-slider"
            />
          </div>

          <div className="filter-group">
            <h4>Rating</h4>
            {ratingThresholds.map((stars) => (
              <label className="filter-checkbox rating-checkbox" key={stars}>
                <input
                  type="checkbox"
                  checked={selectedRating === stars}
                  onChange={() => setSelectedRating(selectedRating === stars ? null : stars)}
                />
                <span className="rating-stars">
                  {renderStars(stars)} <span className="rating-label">& above</span>
                </span>
                <span className="filter-count">({ratingCounts[stars] || 0})</span>
              </label>
            ))}
          </div>
        </aside>

        <main className="products-main">
          <div className="products-toolbar">
            <div>
              <h1>{selectedCategory === 'All Categories' ? 'All Products' : selectedCategory}</h1>
              <p className="products-count">Showing 1–{displayedProducts.length} of {displayedProducts.length} products</p>
            </div>
            <div className="sort-wrap">
              <label htmlFor="sortBy">Sort by:</label>
              <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
                <option>Rating</option>
              </select>
            </div>
          </div>

          <div className="products-grid">
            {displayedProducts.map((p) => (
              <div className="product-card" key={p._id} onClick={() => navigate(`/products/${p._id}`)} style={{ cursor: 'pointer' }}>
                <img src={p.image[0]} alt={p.name} className="product-img" />
                <p className="product-name">{p.name}</p>
                <p className="product-brand">{p.brand}</p>
                <div className="product-price-row">
                  <span className="product-price">₹{p.price}</span>
                  <span className="product-mrp">₹{p.mrp}</span>
                  <span className="product-off">({p.off}% OFF)</span>
                </div>
                <div className="product-rating">
                  {renderStars(p.rating)} <span className="rating-count">({p.reviews})</span>
                </div>
                <button className="add-to-cart-btn" onClick={(e) => { e.stopPropagation(); onAddToCart(p) }}>
                  <ShoppingCart size={14} /> Add to Cart
                </button>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="page-arrow" onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}>
              <ArrowLeft size={16} />
            </button>
            {[1, 2, 3].map((num) => (
              <button key={num} className={`page-num ${currentPage === num ? 'page-active' : ''}`} onClick={() => setCurrentPage(num)}>{num}</button>
            ))}
            <span className="page-dots">...</span>
            <button className={`page-num ${currentPage === 11 ? 'page-active' : ''}`} onClick={() => setCurrentPage(11)}>11</button>
            <button className="page-arrow" onClick={() => setCurrentPage((p) => Math.min(11, p + 1))}>
              <ArrowRight size={16} />
            </button>
          </div>
        </main>
      </div>

      <div className="products-bottom-strip">
        <div className="bottom-trust-badges">
          <div className="bottom-badge"><ShieldCheck size={22} color="#1d6b2e" /><div><p className="bottom-badge-title">100% Genuine Products</p><p className="bottom-badge-subtitle">Original &amp; Trusted</p></div></div>
          <div className="bottom-badge"><Truck size={22} color="#1d6b2e" /><div><p className="bottom-badge-title">Fast Delivery</p><p className="bottom-badge-subtitle">On time, every time</p></div></div>
          <div className="bottom-badge"><Lock size={22} color="#1d6b2e" /><div><p className="bottom-badge-title">Secure Payments</p><p className="bottom-badge-subtitle">Multiple safe payment options</p></div></div>
          <div className="bottom-badge"><Headset size={22} color="#1d6b2e" /><div><p className="bottom-badge-title">Expert Support</p><p className="bottom-badge-subtitle">24/7 customer support</p></div></div>
        </div>
        <div className="bulk-order-banner">
          <div><p className="bulk-title">Bulk Orders?</p><p className="bulk-subtitle">Get special discounts</p></div>
          <button className="bulk-contact-btn">Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Products