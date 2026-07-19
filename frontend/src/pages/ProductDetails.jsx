import React, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import axios from 'axios'
import {
  Star, StarHalf, ChevronRight, ShoppingCart, Zap, Calendar, Lock, RotateCcw,
  Droplet, Leaf, BarChart2, ShieldCheck, MessageCircle, Mail, Link as LinkIcon, User
} from 'lucide-react'

const renderStars = (rating, size = 14, interactive = false, onStarClick = null) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    const filled = rating >= i
    const half = !filled && rating >= i - 0.5
    stars.push(
      filled ? (
        <Star key={i} size={size} fill="#f5a623" color="#f5a623" style={interactive ? { cursor: 'pointer' } : {}} onClick={interactive ? () => onStarClick(i) : undefined} />
      ) : half ? (
        <StarHalf key={i} size={size} fill="#f5a623" color="#f5a623" style={interactive ? { cursor: 'pointer' } : {}} onClick={interactive ? () => onStarClick(i) : undefined} />
      ) : (
        <Star key={i} size={size} color="#d0d0d0" style={interactive ? { cursor: 'pointer' } : {}} onClick={interactive ? () => onStarClick(i) : undefined} />
      )
    )
  }
  return stars
}

const highlights = [
  { icon: Droplet, title: '100%', subtitle: 'Water Soluble' },
  { icon: Leaf, title: 'For All', subtitle: 'Crops' },
  { icon: BarChart2, title: 'Improves Growth', subtitle: '& Yield' },
  { icon: ShieldCheck, title: 'Safe &', subtitle: 'Effective' },
]

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { products, loading, getProducts, backendUrl } = useContext(ProductContext)

  const [activeThumb, setActiveThumb] = useState(0)
  const [selectedPack, setSelectedPack] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('Description')

  const [reviews, setReviews] = useState([])
  const [reviewsLoaded, setReviewsLoaded] = useState(false)
  const [reviewName, setReviewName] = useState('')
  const [reviewRating, setReviewRating] = useState(0)
  const [reviewComment, setReviewComment] = useState('')
  const [submittingReview, setSubmittingReview] = useState(false)

  const product = products.find((p) => p._id === id)

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/review/${id}`)
      if (res.data.success) {
        setReviews(res.data.reviews)
      }
      setReviewsLoaded(true)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (id) fetchReviews()
  }, [id])

  const handleReviewSubmit = async () => {
    if (reviewRating === 0) {
      alert('Please select a star rating')
      return
    }
    if (!reviewComment.trim()) {
      alert('Please write a comment')
      return
    }

    setSubmittingReview(true)
    try {
      const res = await axios.post(`${backendUrl}/api/review/add`, {
        productId: id,
        name: reviewName,
        rating: reviewRating,
        comment: reviewComment,
      })

      if (res.data.success) {
        setReviewName('')
        setReviewRating(0)
        setReviewComment('')
        await fetchReviews()
        await getProducts()
      }
    } catch (err) {
      console.log(err)
    } finally {
      setSubmittingReview(false)
    }
  }

  if (loading) return <div className="product-detail-page"><p>Loading...</p></div>
  if (!product) return <div className="product-detail-page"><p>Product not found.</p></div>

  const currentPack = product.packSizes?.[selectedPack] || { size: 'N/A', price: 0 }
  const packPrice = currentPack.price || 0
  const offPercent = product.off || 0
  const packMrp = offPercent < 100
    ? Math.round(packPrice / (1 - offPercent / 100))
    : packPrice

  const specs = [
    { label: 'Brand', value: product.brand },
    { label: 'Category', value: product.category },
    { label: 'Form', value: product.form || 'Liquid' },
    { label: 'Pack Size', value: (product.packSizes || []).map(p => p.size).join(' / ') || 'N/A' },
    { label: 'Shelf Life', value: product.shelfLife || '24 Months' },
    { label: 'Suitable For', value: product.suitableFor || 'All Crops' },
  ]

  const tabContent = {
    Description: (
      <>
        <p>{product.description}</p>
        <ul style={{ marginTop: 12, paddingLeft: 20, lineHeight: 1.9 }}>
          <li>Brand: {product.brand}</li>
          <li>Category: {product.category}</li>
          <li>Rating: {product.rating} / 5 &nbsp;({product.reviews} reviews)</li>
          <li>MRP: ₹{product.mrp} &nbsp;|&nbsp; Offer: ₹{product.price} ({product.off}% OFF)</li>
        </ul>
      </>
    ),
    Benefits: (
      <p>
        {product.name} promotes balanced crop growth, stronger root development and improved
        flowering and fruiting. Trusted by farmers for consistent yield improvement.
      </p>
    ),
    Usage: (
      <p>
        Dissolve {product.name} completely in water and apply through drip irrigation,
        foliar spray or directly to the soil based on the crop stage.
      </p>
    ),
    Dosage: <p>{product.description}</p>,
    Crops: (
      <p><strong>Suitable For:</strong> {product.suitableFor || 'All Crops & Plants'}</p>
    ),
    Packing: (
      <p>
        {product.name} is available in {(product.packSizes || []).map(p => p.size).join(', ') || 'various'} resealable packs
        to suit both home gardeners and large-scale farmers.
      </p>
    ),
    [`Reviews (${product.reviews})`]: (
      <div className="reviews-section">
        <div className="reviews-summary">
          <span className="reviews-summary-score">{product.rating}</span>
          <div>
            <div className="reviews-summary-stars">{renderStars(product.rating, 16)}</div>
            <p className="reviews-summary-count">Based on {product.reviews} review{product.reviews !== 1 ? 's' : ''}</p>
          </div>
        </div>

        <div className="review-form-card">
          <h4>Write a Review</h4>

          <div className="review-form-row">
            <label>Your Rating</label>
            <div className="review-star-picker">
              {renderStars(reviewRating, 24, true, setReviewRating)}
            </div>
          </div>

          <div className="review-form-row">
            <label>Your Name (optional)</label>
            <div className="review-name-input">
              <User size={16} />
              <input
                type="text"
                placeholder="Leave blank to post anonymously"
                value={reviewName}
                onChange={(e) => setReviewName(e.target.value)}
              />
            </div>
          </div>

          <div className="review-form-row">
            <label>Your Review</label>
            <textarea
              placeholder="Share your experience with this product..."
              value={reviewComment}
              onChange={(e) => setReviewComment(e.target.value)}
              rows={4}
            />
          </div>

          <button className="review-submit-btn" onClick={handleReviewSubmit} disabled={submittingReview}>
            {submittingReview ? 'Posting...' : 'Post Review'}
          </button>
        </div>

        <div className="review-list">
          {!reviewsLoaded && <p>Loading reviews...</p>}
          {reviewsLoaded && reviews.length === 0 && <p className="no-reviews-msg">No reviews yet. Be the first to review this product!</p>}
          {reviews.map((r) => (
            <div className="review-item" key={r._id}>
              <div className="review-item-header">
                <span className="review-item-name">{r.name}</span>
                <span className="review-item-date">{new Date(r.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="review-item-stars">{renderStars(r.rating, 13)}</div>
              <p className="review-item-comment">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  }

  const tabs = ['Description', 'Benefits', 'Usage', 'Dosage', 'Crops', 'Packing', `Reviews (${product.reviews})`]

  const images = product.image && product.image.length ? product.image : []
  const thumbnails = images.length ? images : []

  const relatedProducts = (() => {
    const sameCategory = products.filter(
      (p) => p._id !== product._id && p.category === product.category
    )
    if (sameCategory.length >= 4) return sameCategory
    const others = products.filter(
      (p) => p._id !== product._id && !sameCategory.includes(p)
    )
    return [...sameCategory, ...others]
  })()

  return (
    <div className="product-detail-page">

      <div className="breadcrumb">
        <span style={{ cursor: 'pointer', color: '#1d6b2e' }} onClick={() => navigate('/')}>Home</span>
        <ChevronRight size={14} />
        <span style={{ cursor: 'pointer', color: '#1d6b2e' }} onClick={() => navigate('/products')}>Products</span>
        <ChevronRight size={14} />
        <span className="breadcrumb-current">{product.name}</span>
      </div>

      <div className="product-detail-layout">

        <div className="product-gallery">
          {thumbnails.length > 1 && (
            <div className="gallery-thumbs">
              {thumbnails.map((thumb, i) => (
                <button
                  key={i}
                  className={`gallery-thumb ${activeThumb === i ? 'gallery-thumb-active' : ''}`}
                  onClick={() => setActiveThumb(i)}
                >
                  <img src={thumb} alt={`${product.name} view ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
          <div className="gallery-main">
            {thumbnails.length > 0 ? (
              <img src={thumbnails[activeThumb]} alt={product.name} />
            ) : (
              <div className="gallery-no-image">No image available</div>
            )}
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>

          <div className="product-rating-row">
            <span className="rating-badge">
              {renderStars(product.rating)}
              <span className="rating-value">{product.rating}</span>
              <span className="rating-reviews">({product.reviews} Reviews)</span>
            </span>
            <span className="bestseller-badge">Bestseller</span>
          </div>

          <div className="product-price-block">
            <span className="product-price-large">₹{packPrice.toLocaleString('en-IN')}</span>
            <span className="product-mrp-large">₹{packMrp.toLocaleString('en-IN')}</span>
            <span className="product-off-large">({offPercent}% OFF)</span>
          </div>

          <p className="product-stock">
            <ShieldCheck size={14} /> In Stock (50 available)
          </p>

          <p className="product-description">{product.description}</p>

          <div className="product-highlights">
            {highlights.map((h, i) => {
              const Icon = h.icon
              return (
                <div className="product-highlight" key={i}>
                  <Icon size={20} color="#1d6b2e" />
                  <div>
                    <p className="highlight-title">{h.title}</p>
                    <p className="highlight-subtitle">{h.subtitle}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="product-specs">
            {specs.map((s) => (
              <div className="product-spec-row" key={s.label}>
                <span className="spec-label">{s.label}</span>
                <span className="spec-colon">:</span>
                <span className="spec-value">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="purchase-panel">
          <div className="purchase-card">
            <h4>Select Pack Size</h4>
            <div className="pack-size-grid">
              {(product.packSizes || []).map((p, i) => (
                <button
                  key={p.size || i}
                  className={`pack-size-option ${selectedPack === i ? 'pack-size-active' : ''}`}
                  onClick={() => setSelectedPack(i)}
                >
                  <span className="pack-size-name">{p.size || 'N/A'}</span>
                  <span className="pack-size-price">₹{(p.price || 0).toLocaleString('en-IN')}</span>
                </button>
              ))}
            </div>

            <h4>Quantity</h4>
            <div className="quantity-control">
              <button className="qty-btn" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
              <span className="qty-value">{quantity}</span>
              <button className="qty-btn" onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>

            <p className="quantity-total">
              Total: <strong>₹{(packPrice * quantity).toLocaleString('en-IN')}</strong>
            </p>

            <button className="add-to-cart-btn-large" onClick={() => onAddToCart(product, quantity)}>
              <ShoppingCart size={16} /> Add to Cart
            </button>
            <button
              className="buy-now-btn"
              onClick={() => {
                onAddToCart(product, quantity)
                navigate('/checkout')
              }}
            >
              <Zap size={16} /> Buy Now
            </button>

            <div className="delivery-info">
              <Calendar size={18} />
              <div>
                <p className="delivery-title">Estimated Delivery</p>
                <p className="delivery-date">Tomorrow</p>
                <p className="delivery-window">Order within 4h 30m</p>
              </div>
            </div>

            <div className="trust-info">
              <div className="trust-info-row">
                <Lock size={16} />
                <div>
                  <p className="trust-title">Secure Transaction</p>
                  <p className="trust-subtitle">Multiple payment options</p>
                </div>
              </div>
              <div className="trust-info-row">
                <RotateCcw size={16} />
                <div>
                  <p className="trust-title">Easy Returns</p>
                  <p className="trust-subtitle">Hassle free returns</p>
                </div>
              </div>
            </div>

            <div className="share-product">
              <p>Share this product</p>
              <div className="share-icons">
                
                <a href={`https://wa.me/?text=${encodeURIComponent(`Check out ${product.name} on AgroMart: ${window.location.href}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} />
                </a>
                <a href={`mailto:?subject=${encodeURIComponent(product.name)}&body=${encodeURIComponent(`Check this out: ${window.location.href}`)}`}>
                  <Mail size={18} />
                </a>
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    alert('Link copied to clipboard!')
                  }}
                >
                  <LinkIcon size={18} />
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="product-tabs-section">
        <div className="product-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`product-tab ${activeTab === tab ? 'product-tab-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="product-tab-content">{tabContent[activeTab]}</div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-products-section">
          <div className="related-products-header">
            <h3>Related Products</h3>
            <span className="view-all-link" onClick={() => navigate('/products')}>View All</span>
          </div>
          <div className="related-products-grid">
            {relatedProducts.map((rp) => (
              <div
                key={rp._id}
                className="related-product-card"
                onClick={() => navigate(`/products/${rp._id}`)}
              >
                <img src={rp.image[0]} alt={rp.name} className="related-product-img" />
                <p className="related-product-name">{rp.name}</p>
                <p className="related-product-size">{rp.form || 'Liquid'}</p>
                <p className="related-product-price">₹{rp.price}</p>
                <div className="related-product-rating">
                  {renderStars(rp.rating)} <span className="rating-count">({rp.reviews})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

export default ProductDetails