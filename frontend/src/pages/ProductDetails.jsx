import React, { useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import {
  Star, StarHalf, ChevronRight, ShoppingCart, Zap, Calendar, Lock, RotateCcw,
  Droplet, Leaf, BarChart2, ShieldCheck, MessageCircle,   Mail, Link as LinkIcon
} from 'lucide-react'

const renderStars = (rating) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<Star key={i} size={14} fill="#f5a623" color="#f5a623" />)
    else if (rating >= i - 0.5) stars.push(<StarHalf key={i} size={14} fill="#f5a623" color="#f5a623" />)
    else stars.push(<Star key={i} size={14} color="#d0d0d0" />)
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
  const { products, loading } = useContext(ProductContext)

  const [activeThumb, setActiveThumb] = useState(0)
  const [selectedPack, setSelectedPack] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('Description')

  const product = products.find((p) => p._id === id)

  if (loading) return <div className="product-detail-page"><p>Loading...</p></div>
  if (!product) return <div className="product-detail-page"><p>Product not found.</p></div>

  const currentPack = product.packSizes[selectedPack]
  const packPrice = currentPack.price
  const packMrp = Math.round(currentPack.price / (1 - product.off / 100))
  const offPercent = product.off

  const specs = [
    { label: 'Brand', value: product.brand },
    { label: 'Category', value: product.category },
    { label: 'Form', value: product.form || 'Liquid' },
    { label: 'Pack Size', value: product.packSizes.map(p => p.size).join(' / ') },
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
        {product.name} is available in {product.packSizes.map(p => p.size).join(', ')} resealable packs
        to suit both home gardeners and large-scale farmers.
      </p>
    ),
    [`Reviews (${product.reviews})`]: (
      <p>
        {product.rating} out of 5 based on {product.reviews} verified customer
        reviews for {product.name}.
      </p>
    ),
  }

  const tabs = ['Description', 'Benefits', 'Usage', 'Dosage', 'Crops', 'Packing', `Reviews (${product.reviews})`]

  const images = product.image && product.image.length ? product.image : []
  const thumbnails = images.length >= 4 ? images.slice(0, 4) : [...images, ...Array(4 - images.length).fill(images[0])]

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
          <div className="gallery-main">
            <img src={thumbnails[activeThumb]} alt={product.name} />
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
              {product.packSizes.map((p, i) => (
                <button
                  key={p.size}
                  className={`pack-size-option ${selectedPack === i ? 'pack-size-active' : ''}`}
                  onClick={() => setSelectedPack(i)}
                >
                  <span className="pack-size-name">{p.size}</span>
                  <span className="pack-size-price">₹{p.price.toLocaleString('en-IN')}</span>
                </button>
              ))}
            </div>

            <h4>Quantity</h4>
            <div className="quantity-control">
              <button className="qty-btn" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
              <span className="qty-value">{quantity}</span>
              <button className="qty-btn" onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>

            <button className="add-to-cart-btn-large" onClick={() => onAddToCart(product, quantity)}>
              <ShoppingCart size={16} /> Add to Cart
            </button>
            <button className="buy-now-btn">
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
                <MessageCircle size={18} />
                {/* <Facebook size={18} /> */}
                {/* <Twitter size={18} /> */}
                <Mail size={18} />
                <LinkIcon size={18} />
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