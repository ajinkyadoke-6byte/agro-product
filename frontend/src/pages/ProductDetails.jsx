// import React, { useState } from 'react'
// import NpkImg from '../assets/NpkImg.jpeg'
// import bavistinImg from '../assets/bavistin.jpeg'
// import confidorImg from '../assets/confidor.jpeg'
// import zincImg from '../assets/zinc.jpeg'
// import humicImg from '../assets/humic.jpeg'
// import gibberellicImg from '../assets/gibberellic.jpeg'
// import neemImg from '../assets/neem.jpeg'
// import monopotassiumImg from '../assets/monopotassium.jpeg'
// import micronutrientMixImg from '../assets/micronutrient_mix.jpeg'
// import seaweedImg from '../assets/seaweed.jpeg'
// import organicManureImg from '../assets/organic_manure.jpeg'
// import mancozebImg from '../assets/mancozeb.jpeg'

// const products = [
//   { id: 1, name: 'NPK 19:19:19', brand: 'Coromandel', img: NpkImg, price: 1250, mrp: 1450, off: 14, rating: 5, reviews: 128 },
//   { id: 2, name: 'Bavistin Fungicide', brand: 'BASF', img: bavistinImg, price: 540, mrp: 620, off: 13, rating: 4.5, reviews: 96 },
//   { id: 3, name: 'Confidor Insecticide', brand: 'Bayer', img: confidorImg, price: 900, mrp: 1050, off: 14, rating: 4.5, reviews: 84 },
//   { id: 4, name: 'Zinc Sulphate', brand: 'UPL', img: zincImg, price: 180, mrp: 210, off: 14, rating: 4.5, reviews: 60 },
//   { id: 5, name: 'Humic Acid', brand: 'IFFCO', img: humicImg, price: 420, mrp: 500, off: 16, rating: 5, reviews: 78 },
//   { id: 6, name: 'Gibberellic Acid', brand: 'Coromandel', img: gibberellicImg, price: 230, mrp: 270, off: 15, rating: 4.5, reviews: 45 },
//   { id: 7, name: 'Neem Oil', brand: 'IFFCO', img: neemImg, price: 310, mrp: 360, off: 14, rating: 5, reviews: 63 },
//   { id: 8, name: 'Monopotassium Phosphate', brand: 'UPL', img: monopotassiumImg, price: 770, mrp: 900, off: 14, rating: 4.5, reviews: 54 },
//   { id: 9, name: 'Micronutrient Mix', brand: 'Coromandel', img: micronutrientMixImg, price: 280, mrp: 320, off: 13, rating: 4.5, reviews: 42 },
//   { id: 10, name: 'Seaweed Extract', brand: 'IFFCO', img: seaweedImg, price: 360, mrp: 420, off: 14, rating: 4.5, reviews: 38 },
//   { id: 11, name: 'Organic Manure', brand: 'Indogulfbio', img: organicManureImg, price: 210, mrp: 250, off: 16, rating: 4.5, reviews: 31 },
//   { id: 12, name: 'Mancozeb 75% WP', brand: 'Syngenta', img: mancozebImg, price: 350, mrp: 410, off: 15, rating: 4.5, reviews: 29 },
// ]

// const categories = [
//   { name: 'Fertilizers', count: 28 },
//   { name: 'Pesticides', count: 24 },
//   { name: 'Fungicides', count: 18 },
//   { name: 'Micronutrients', count: 16 },
//   { name: 'Plant Growth Promoters', count: 12 },
//   { name: 'Organic Products', count: 30 },
// ]

// const brands = ['Coromandel', 'BASF', 'Bayer', 'UPL', 'IFFCO', 'Syngenta', 'Indogulfbio']

// const ratingFilters = [
//   { stars: 4, label: '& above', count: 32 },
//   { stars: 3, label: '& above', count: 60 },
//   { stars: 2, label: '& above', count: 89 },
// ]

// const renderStars = (rating) => {
//   const stars = []
//   for (let i = 1; i <= 5; i++) {
//     if (rating >= i) stars.push(<i key={i} className="ti ti-star-filled"></i>)
//     else if (rating >= i - 0.5) stars.push(<i key={i} className="ti ti-star-half-filled"></i>)
//     else stars.push(<i key={i} className="ti ti-star"></i>)
//   }
//   return stars
// }

// const ProductsDetails = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All Categories')
//   const [selectedBrands, setSelectedBrands] = useState([])
//   const [priceRange, setPriceRange] = useState(5000)
//   const [selectedRating, setSelectedRating] = useState(null)
//   const [sortBy, setSortBy] = useState('Popularity')
//   const [currentPage, setCurrentPage] = useState(1)

//   const toggleBrand = (brand) => {
//     setSelectedBrands((prev) =>
//       prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
//     )
//   }

//   const resetFilters = () => {
//     setSelectedCategory('All Categories')
//     setSelectedBrands([])
//     setPriceRange(5000)
//     setSelectedRating(null)
//   }

//   return (
//     <div className="products-page">
//       <div className="breadcrumb">
//         <span>Home</span> <i className="ti ti-chevron-right"></i> <span className="breadcrumb-current">Products</span>
//       </div>

//       <div className="products-layout">
//         <aside className="filters-sidebar">
//           <div className="filters-header">
//             <h3>Filters</h3>
//             <span className="reset-link" onClick={resetFilters}>Reset</span>
//           </div>

//           <div className="filter-group">
//             <h4>Category</h4>
//             <label className="filter-checkbox">
//               <input
//                 type="checkbox"
//                 checked={selectedCategory === 'All Categories'}
//                 onChange={() => setSelectedCategory('All Categories')}
//               />
//               All Categories
//             </label>
//             {categories.map((cat) => (
//               <label className="filter-checkbox" key={cat.name}>
//                 <input
//                   type="checkbox"
//                   checked={selectedCategory === cat.name}
//                   onChange={() => setSelectedCategory(cat.name)}
//                 />
//                 {cat.name} <span className="filter-count">({cat.count})</span>
//               </label>
//             ))}
//           </div>

//           <div className="filter-group">
//             <h4>Price Range</h4>
//             <div className="price-range-labels">
//               <span>₹0</span>
//               <span>₹{priceRange}</span>
//             </div>
//             <input
//               type="range"
//               min="0"
//               max="5000"
//               value={priceRange}
//               onChange={(e) => setPriceRange(Number(e.target.value))}
//               className="price-slider"
//             />
//           </div>

//           <div className="filter-group">
//             <h4>Brand</h4>
//             {brands.map((brand) => (
//               <label className="filter-checkbox" key={brand}>
//                 <input
//                   type="checkbox"
//                   checked={selectedBrands.includes(brand)}
//                   onChange={() => toggleBrand(brand)}
//                 />
//                 {brand}
//               </label>
//             ))}
//           </div>

//           <div className="filter-group">
//             <h4>Rating</h4>
//             {ratingFilters.map((r) => (
//               <label className="filter-checkbox rating-checkbox" key={r.stars}>
//                 <input
//                   type="checkbox"
//                   checked={selectedRating === r.stars}
//                   onChange={() => setSelectedRating(selectedRating === r.stars ? null : r.stars)}
//                 />
//                 <span className="rating-stars">
//                   {renderStars(r.stars)} <span className="rating-label">{r.label}</span>
//                 </span>
//                 <span className="filter-count">({r.count})</span>
//               </label>
//             ))}
//           </div>
//         </aside>

//         <main className="products-main">
//           <div className="products-toolbar">
//             <div>
//               <h1>All Products</h1>
//               <p className="products-count">Showing 1–12 of 128 products</p>
//             </div>
//             <div className="sort-wrap">
//               <label htmlFor="sortBy">Sort by:</label>
//               <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//                 <option>Popularity</option>
//                 <option>Price: Low to High</option>
//                 <option>Price: High to Low</option>
//                 <option>Newest</option>
//                 <option>Rating</option>
//               </select>
//             </div>
//           </div>

//           <div className="products-grid">
//             {products.map((p) => (
//               <div className="product-card" key={p.id}>
//                 <img src={p.img} alt={p.name} className="product-img" />
//                 <p className="product-name">{p.name}</p>
//                 <p className="product-brand">{p.brand}</p>
//                 <div className="product-price-row">
//                   <span className="product-price">₹{p.price}</span>
//                   <span className="product-mrp">₹{p.mrp}</span>
//                   <span className="product-off">({p.off}% OFF)</span>
//                 </div>
//                 <div className="product-rating">
//                   {renderStars(p.rating)} <span className="rating-count">({p.reviews})</span>
//                 </div>
//                 <button className="add-to-cart-btn">
//                   <i className="ti ti-shopping-cart"></i> Add to Cart
//                 </button>
//               </div>
//             ))}
//           </div>

//           <div className="pagination">
//             <button
//               className="page-arrow"
//               onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//             >
//               <i className="ti ti-arrow-left"></i>
//             </button>
//             {[1, 2, 3].map((num) => (
//               <button
//                 key={num}
//                 className={`page-num ${currentPage === num ? 'page-active' : ''}`}
//                 onClick={() => setCurrentPage(num)}
//               >
//                 {num}
//               </button>
//             ))}
//             <span className="page-dots">...</span>
//             <button
//               className={`page-num ${currentPage === 11 ? 'page-active' : ''}`}
//               onClick={() => setCurrentPage(11)}
//             >
//               11
//             </button>
//             <button
//               className="page-arrow"
//               onClick={() => setCurrentPage((p) => Math.min(11, p + 1))}
//             >
//               <i className="ti ti-arrow-right"></i>
//             </button>
//           </div>
//         </main>
//       </div>

//       <div className="products-bottom-strip">
//         <div className="bottom-trust-badges">
//           <div className="bottom-badge">
//             <i className="ti ti-shield-check"></i>
//             <div>
//               <p className="bottom-badge-title">100% Genuine Products</p>
//               <p className="bottom-badge-subtitle">Original &amp; Trusted</p>
//             </div>
//           </div>
//           <div className="bottom-badge">
//             <i className="ti ti-truck"></i>
//             <div>
//               <p className="bottom-badge-title">Fast Delivery</p>
//               <p className="bottom-badge-subtitle">On time, every time</p>
//             </div>
//           </div>
//           <div className="bottom-badge">
//             <i className="ti ti-lock"></i>
//             <div>
//               <p className="bottom-badge-title">Secure Payments</p>
//               <p className="bottom-badge-subtitle">Multiple safe payment options</p>
//             </div>
//           </div>
//           <div className="bottom-badge">
//             <i className="ti ti-headset"></i>
//             <div>
//               <p className="bottom-badge-title">Expert Support</p>
//               <p className="bottom-badge-subtitle">24/7 customer support</p>
//             </div>
//           </div>
//         </div>
//         <div className="bulk-order-banner">
//           <div>
//             <p className="bulk-title">Bulk Orders?</p>
//             <p className="bulk-subtitle">Get special discounts</p>
//           </div>
//           <button className="bulk-contact-btn">Contact Us</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductsDetails


// import React, { useState } from 'react'
// import NpkImg from '../assets/NpkImg.jpeg'
// import bavistinImg from '../assets/bavistinImg.jpeg'
// import confidorImg from '../assets/confidorImg.jpeg'
// import zincImg from '../assets/zincImg.jpeg'
// import humicImg from '../assets/humicImg.jpeg'

// const thumbnails = [NpkImg, NpkImg, NpkImg, NpkImg]

// const packSizes = [
//   { size: '250 g', price: 350 },
//   { size: '500 g', price: 700 },
//   { size: '1 kg', price: 1250 },
//   { size: '5 kg', price: 5500 },
// ]

// const specs = [
//   { label: 'Brand', value: 'GreenGrow' },
//   { label: 'NPK Ratio', value: '19% Nitrogen, 19% Phosphorus, 19% Potassium' },
//   { label: 'Form', value: 'Powder' },
//   { label: 'Pack Size', value: '1 kg' },
//   { label: 'Shelf Life', value: '24 Months' },
//   { label: 'Suitable For', value: 'All Crops & Plants' },
// ]

// const highlights = [
//   { icon: 'ti-droplet', title: '100%', subtitle: 'Water Soluble' },
//   { icon: 'ti-leaf', title: 'For All', subtitle: 'Crops' },
//   { icon: 'ti-chart-bar', title: 'Improves Growth', subtitle: '& Yield' },
//   { icon: 'ti-shield-check', title: 'Safe &', subtitle: 'Effective' },
// ]

// const tabs = ['Description', 'Benefits', 'Usage', 'Dosage', 'Crops', 'Packing', 'Reviews (128)']

// const tabContent = {
//   Description: (
//     <>
//       <p>
//         NPK 19:19:19 is a balanced fertilizer with equal proportions of Nitrogen (N), Phosphorus (P) and Potassium
//         (K). It helps in vigorous vegetative growth, enhances flowering and fruit development and improves overall
//         crop quality.
//       </p>
//       <ul>
//         <li>100% Water Soluble</li>
//         <li>Suitable for all crops</li>
//         <li>Improves growth and yield</li>
//         <li>Enhances nutrient uptake</li>
//       </ul>
//     </>
//   ),
//   Benefits: <p>Promotes balanced vegetative growth, stronger root development and improved flowering and fruiting across a wide range of crops.</p>,
//   Usage: <p>Dissolve completely in water and apply through drip irrigation, foliar spray or directly to the soil based on crop stage.</p>,
//   Dosage: <p>Use 4–5 g per litre of water for foliar application, or 2–3 kg per acre for soil/drip application, depending on crop and growth stage.</p>,
//   Crops: <p>Suitable for cereals, pulses, vegetables, fruits, flowers and plantation crops at all growth stages.</p>,
//   Packing: <p>Available in 250 g, 500 g, 1 kg and 5 kg resealable packs to suit both home gardeners and farmers.</p>,
//   'Reviews (128)': <p>4.5 out of 5 based on 128 verified customer reviews.</p>,
// }

// const relatedProducts = [
//   { id: 2, name: 'Bavistin Fungicide', size: '500 ml', img: bavistinImg, price: 540, rating: 4, reviews: 90 },
//   { id: 3, name: 'Confidor Insecticide', size: '100 ml', img: confidorImg, price: 900, rating: 3.5, reviews: 84 },
//   { id: 4, name: 'Zinc Sulphate', size: '1 kg', img: zincImg, price: 180, rating: 4, reviews: 60 },
//   { id: 5, name: 'Humic Acid', size: '500 gm', img: humicImg, price: 420, rating: 4.5, reviews: 78 },
// ]

// const renderStars = (rating) => {
//   const stars = []
//   for (let i = 1; i <= 5; i++) {
//     if (rating >= i) stars.push(<i key={i} className="ti ti-star-filled"></i>)
//     else if (rating >= i - 0.5) stars.push(<i key={i} className="ti ti-star-half-filled"></i>)
//     else stars.push(<i key={i} className="ti ti-star"></i>)
//   }
//   return stars
// }

// const ProductDetails = () => {
//   const [activeThumb, setActiveThumb] = useState(0)
//   const [selectedPack, setSelectedPack] = useState(2)
//   const [quantity, setQuantity] = useState(1)
//   const [activeTab, setActiveTab] = useState('Description')

//   const currentPack = packSizes[selectedPack]
//   const mrp = Math.round(currentPack.price / 0.86)
//   const offPercent = Math.round(((mrp - currentPack.price) / mrp) * 100)

//   const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1))
//   const increaseQty = () => setQuantity((q) => q + 1)

//   return (
//     <div className="product-detail-page">
//       <div className="breadcrumb">
//         <span>Home</span> <i className="ti ti-chevron-right"></i>
//         <span>Fertilizers</span> <i className="ti ti-chevron-right"></i>
//         <span className="breadcrumb-current">NPK 19:19:19</span>
//       </div>

//       <div className="product-detail-layout">
//         <div className="product-gallery">
//           <div className="gallery-thumbs">
//             {thumbnails.map((thumb, i) => (
//               <button
//                 key={i}
//                 className={`gallery-thumb ${activeThumb === i ? 'gallery-thumb-active' : ''}`}
//                 onClick={() => setActiveThumb(i)}
//               >
//                 <img src={thumb} alt={`NPK 19:19:19 view ${i + 1}`} />
//               </button>
//             ))}
//           </div>
//           <div className="gallery-main">
//             <img src={thumbnails[activeThumb]} alt="NPK 19:19:19" />
//           </div>
//         </div>

//         <div className="product-info">
//           <h1 className="product-title">NPK 19:19:19</h1>

//           <div className="product-rating-row">
//             <span className="rating-badge">
//               {renderStars(4.5)} <span className="rating-value">4.5</span> <span className="rating-reviews">(128 Reviews)</span>
//             </span>
//             <span className="bestseller-badge">Bestseller</span>
//           </div>

//           <div className="product-price-block">
//             <span className="product-price-large">₹{currentPack.price.toLocaleString('en-IN')}</span>
//             <span className="product-mrp-large">₹{mrp.toLocaleString('en-IN')}</span>
//             <span className="product-off-large">({offPercent}% OFF)</span>
//           </div>

//           <p className="product-stock">
//             <i className="ti ti-circle-check-filled"></i> In Stock (50 available)
//           </p>

//           <p className="product-description">
//             NPK 19:19:19 is a 100% water soluble fertilizer which contains equal ratio of Nitrogen, Phosphorus and
//             Potassium. It is ideal for all crops and increases yield, quality and growth.
//           </p>

//           <div className="product-highlights">
//             {highlights.map((h, i) => (
//               <div className="product-highlight" key={i}>
//                 <i className={`ti ${h.icon}`}></i>
//                 <div>
//                   <p className="highlight-title">{h.title}</p>
//                   <p className="highlight-subtitle">{h.subtitle}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="product-specs">
//             {specs.map((s) => (
//               <div className="product-spec-row" key={s.label}>
//                 <span className="spec-label">{s.label}</span>
//                 <span className="spec-colon">:</span>
//                 <span className="spec-value">{s.value}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <aside className="purchase-panel">
//           <div className="purchase-card">
//             <h4>Select Pack Size</h4>
//             <div className="pack-size-grid">
//               {packSizes.map((p, i) => (
//                 <button
//                   key={p.size}
//                   className={`pack-size-option ${selectedPack === i ? 'pack-size-active' : ''}`}
//                   onClick={() => setSelectedPack(i)}
//                 >
//                   <span className="pack-size-name">{p.size}</span>
//                   <span className="pack-size-price">₹{p.price.toLocaleString('en-IN')}</span>
//                 </button>
//               ))}
//             </div>

//             <h4>Quantity</h4>
//             <div className="quantity-control">
//               <button className="qty-btn" onClick={decreaseQty}>−</button>
//               <span className="qty-value">{quantity}</span>
//               <button className="qty-btn" onClick={increaseQty}>+</button>
//             </div>

//             <button className="add-to-cart-btn-large">
//               <i className="ti ti-shopping-cart"></i> Add to Cart
//             </button>
//             <button className="buy-now-btn">
//               <i className="ti ti-bolt"></i> Buy Now
//             </button>

//             <div className="delivery-info">
//               <i className="ti ti-calendar"></i>
//               <div>
//                 <p className="delivery-title">Estimated Delivery</p>
//                 <p className="delivery-date">Tomorrow, 25 May</p>
//                 <p className="delivery-window">Order within 4h 30m</p>
//               </div>
//             </div>

//             <div className="trust-info">
//               <div className="trust-info-row">
//                 <i className="ti ti-lock"></i>
//                 <div>
//                   <p className="trust-title">Secure Transaction</p>
//                   <p className="trust-subtitle">Multiple payment options</p>
//                 </div>
//               </div>
//               <div className="trust-info-row">
//                 <i className="ti ti-rotate"></i>
//                 <div>
//                   <p className="trust-title">Easy Returns</p>
//                   <p className="trust-subtitle">Hassle free returns</p>
//                 </div>
//               </div>
//             </div>

//             <div className="share-product">
//               <p>Share this product</p>
//               <div className="share-icons">
//                 <i className="ti ti-brand-whatsapp"></i>
//                 <i className="ti ti-brand-facebook"></i>
//                 <i className="ti ti-brand-twitter"></i>
//                 <i className="ti ti-mail"></i>
//                 <i className="ti ti-link"></i>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>

//       <div className="product-tabs-section">
//         <div className="product-tabs">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               className={`product-tab ${activeTab === tab ? 'product-tab-active' : ''}`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//         <div className="product-tab-content">{tabContent[activeTab]}</div>
//       </div>

//       <div className="related-products-section">
//         <div className="related-products-header">
//           <h3>Related Products</h3>
//           <span className="view-all-link">View All</span>
//         </div>
//         <div className="related-products-grid">
//           {relatedProducts.map((p) => (
//             <div className="related-product-card" key={p.id}>
//               <img src={p.img} alt={p.name} className="related-product-img" />
//               <p className="related-product-name">{p.name}</p>
//               <p className="related-product-size">{p.size}</p>
//               <p className="related-product-price">₹{p.price}</p>
//               <div className="related-product-rating">
//                 {renderStars(p.rating)} <span className="rating-count">({p.reviews})</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductDetails



// import React, { useState } from 'react'
// import NpkImg from '../assets/NpkImg.jpeg'
// import bavistinImg from '../assets/bavistinImg.jpeg'
// import confidorImg from '../assets/confidorImg.jpeg'
// import zincImg from '../assets/zincImg.jpeg'
// import humicImg from '../assets/humicImg.jpeg'

// const thumbnails = [NpkImg, NpkImg, NpkImg, NpkImg]

// const packSizes = [
//   { size: '250 g', price: 350 },
//   { size: '500 g', price: 700 },
//   { size: '1 kg', price: 1250 },
//   { size: '5 kg', price: 5500 },
// ]

// const specs = [
//   { label: 'Brand', value: 'GreenGrow' },
//   { label: 'NPK Ratio', value: '19% Nitrogen, 19% Phosphorus, 19% Potassium' },
//   { label: 'Form', value: 'Powder' },
//   { label: 'Pack Size', value: '1 kg' },
//   { label: 'Shelf Life', value: '24 Months' },
//   { label: 'Suitable For', value: 'All Crops & Plants' },
// ]

// const highlights = [
//   { icon: 'ti-droplet', title: '100%', subtitle: 'Water Soluble' },
//   { icon: 'ti-leaf', title: 'For All', subtitle: 'Crops' },
//   { icon: 'ti-chart-bar', title: 'Improves Growth', subtitle: '& Yield' },
//   { icon: 'ti-shield-check', title: 'Safe &', subtitle: 'Effective' },
// ]

// const tabs = ['Description', 'Benefits', 'Usage', 'Dosage', 'Crops', 'Packing', 'Reviews (128)']

// const tabContent = {
//   Description: (
//     <>
//       <p>
//         NPK 19:19:19 is a balanced fertilizer with equal proportions of Nitrogen (N), Phosphorus (P) and Potassium
//         (K). It helps in vigorous vegetative growth, enhances flowering and fruit development and improves overall
//         crop quality.
//       </p>
//       <ul>
//         <li>100% Water Soluble</li>
//         <li>Suitable for all crops</li>
//         <li>Improves growth and yield</li>
//         <li>Enhances nutrient uptake</li>
//       </ul>
//     </>
//   ),
//   Benefits: <p>Promotes balanced vegetative growth, stronger root development and improved flowering and fruiting across a wide range of crops.</p>,
//   Usage: <p>Dissolve completely in water and apply through drip irrigation, foliar spray or directly to the soil based on crop stage.</p>,
//   Dosage: <p>Use 4–5 g per litre of water for foliar application, or 2–3 kg per acre for soil/drip application, depending on crop and growth stage.</p>,
//   Crops: <p>Suitable for cereals, pulses, vegetables, fruits, flowers and plantation crops at all growth stages.</p>,
//   Packing: <p>Available in 250 g, 500 g, 1 kg and 5 kg resealable packs to suit both home gardeners and farmers.</p>,
//   'Reviews (128)': <p>4.5 out of 5 based on 128 verified customer reviews.</p>,
// }

// const relatedProducts = [
//   { id: 2, name: 'Bavistin Fungicide', size: '500 ml', img: bavistinImg, price: 540, rating: 4, reviews: 90 },
//   { id: 3, name: 'Confidor Insecticide', size: '100 ml', img: confidorImg, price: 900, rating: 3.5, reviews: 84 },
//   { id: 4, name: 'Zinc Sulphate', size: '1 kg', img: zincImg, price: 180, rating: 4, reviews: 60 },
//   { id: 5, name: 'Humic Acid', size: '500 gm', img: humicImg, price: 420, rating: 4.5, reviews: 78 },
// ]

// const renderStars = (rating) => {
//   const stars = []
//   for (let i = 1; i <= 5; i++) {
//     if (rating >= i) stars.push(<i key={i} className="ti ti-star-filled"></i>)
//     else if (rating >= i - 0.5) stars.push(<i key={i} className="ti ti-star-half-filled"></i>)
//     else stars.push(<i key={i} className="ti ti-star"></i>)
//   }
//   return stars
// }

// const ProductDetails = () => {
//   const [activeThumb, setActiveThumb] = useState(0)
//   const [selectedPack, setSelectedPack] = useState(2)
//   const [quantity, setQuantity] = useState(1)
//   const [activeTab, setActiveTab] = useState('Description')

//   const currentPack = packSizes[selectedPack]
//   const mrp = Math.round(currentPack.price / 0.86)
//   const offPercent = Math.round(((mrp - currentPack.price) / mrp) * 100)

//   const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1))
//   const increaseQty = () => setQuantity((q) => q + 1)

//   return (
//     <div className="product-detail-page">
//       <div className="breadcrumb">
//         <span>Home</span> <i className="ti ti-chevron-right"></i>
//         <span>Fertilizers</span> <i className="ti ti-chevron-right"></i>
//         <span className="breadcrumb-current">NPK 19:19:19</span>
//       </div>

//       <div className="product-detail-layout">
//         <div className="product-gallery">
//           <div className="gallery-thumbs">
//             {thumbnails.map((thumb, i) => (
//               <button
//                 key={i}
//                 className={`gallery-thumb ${activeThumb === i ? 'gallery-thumb-active' : ''}`}
//                 onClick={() => setActiveThumb(i)}
//               >
//                 <img src={thumb} alt={`NPK 19:19:19 view ${i + 1}`} />
//               </button>
//             ))}
//           </div>
//           <div className="gallery-main">
//             <img src={thumbnails[activeThumb]} alt="NPK 19:19:19" />
//           </div>
//         </div>

//         <div className="product-info">
//           <h1 className="product-title">NPK 19:19:19</h1>

//           <div className="product-rating-row">
//             <span className="rating-badge">
//               {renderStars(4.5)} <span className="rating-value">4.5</span> <span className="rating-reviews">(128 Reviews)</span>
//             </span>
//             <span className="bestseller-badge">Bestseller</span>
//           </div>

//           <div className="product-price-block">
//             <span className="product-price-large">₹{currentPack.price.toLocaleString('en-IN')}</span>
//             <span className="product-mrp-large">₹{mrp.toLocaleString('en-IN')}</span>
//             <span className="product-off-large">({offPercent}% OFF)</span>
//           </div>

//           <p className="product-stock">
//             <i className="ti ti-circle-check-filled"></i> In Stock (50 available)
//           </p>

//           <p className="product-description">
//             NPK 19:19:19 is a 100% water soluble fertilizer which contains equal ratio of Nitrogen, Phosphorus and
//             Potassium. It is ideal for all crops and increases yield, quality and growth.
//           </p>

//           <div className="product-highlights">
//             {highlights.map((h, i) => (
//               <div className="product-highlight" key={i}>
//                 <i className={`ti ${h.icon}`}></i>
//                 <div>
//                   <p className="highlight-title">{h.title}</p>
//                   <p className="highlight-subtitle">{h.subtitle}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="product-specs">
//             {specs.map((s) => (
//               <div className="product-spec-row" key={s.label}>
//                 <span className="spec-label">{s.label}</span>
//                 <span className="spec-colon">:</span>
//                 <span className="spec-value">{s.value}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <aside className="purchase-panel">
//           <div className="purchase-card">
//             <h4>Select Pack Size</h4>
//             <div className="pack-size-grid">
//               {packSizes.map((p, i) => (
//                 <button
//                   key={p.size}
//                   className={`pack-size-option ${selectedPack === i ? 'pack-size-active' : ''}`}
//                   onClick={() => setSelectedPack(i)}
//                 >
//                   <span className="pack-size-name">{p.size}</span>
//                   <span className="pack-size-price">₹{p.price.toLocaleString('en-IN')}</span>
//                 </button>
//               ))}
//             </div>

//             <h4>Quantity</h4>
//             <div className="quantity-control">
//               <button className="qty-btn" onClick={decreaseQty}>−</button>
//               <span className="qty-value">{quantity}</span>
//               <button className="qty-btn" onClick={increaseQty}>+</button>
//             </div>

//             <button className="add-to-cart-btn-large">
//               <i className="ti ti-shopping-cart"></i> Add to Cart
//             </button>
//             <button className="buy-now-btn">
//               <i className="ti ti-bolt"></i> Buy Now
//             </button>

//             <div className="delivery-info">
//               <i className="ti ti-calendar"></i>
//               <div>
//                 <p className="delivery-title">Estimated Delivery</p>
//                 <p className="delivery-date">Tomorrow, 25 May</p>
//                 <p className="delivery-window">Order within 4h 30m</p>
//               </div>
//             </div>

//             <div className="trust-info">
//               <div className="trust-info-row">
//                 <i className="ti ti-lock"></i>
//                 <div>
//                   <p className="trust-title">Secure Transaction</p>
//                   <p className="trust-subtitle">Multiple payment options</p>
//                 </div>
//               </div>
//               <div className="trust-info-row">
//                 <i className="ti ti-rotate"></i>
//                 <div>
//                   <p className="trust-title">Easy Returns</p>
//                   <p className="trust-subtitle">Hassle free returns</p>
//                 </div>
//               </div>
//             </div>

//             <div className="share-product">
//               <p>Share this product</p>
//               <div className="share-icons">
//                 <i className="ti ti-brand-whatsapp"></i>
//                 <i className="ti ti-brand-facebook"></i>
//                 <i className="ti ti-brand-twitter"></i>
//                 <i className="ti ti-mail"></i>
//                 <i className="ti ti-link"></i>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>

//       <div className="product-tabs-section">
//         <div className="product-tabs">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               className={`product-tab ${activeTab === tab ? 'product-tab-active' : ''}`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//         <div className="product-tab-content">{tabContent[activeTab]}</div>
//       </div>

//       <div className="related-products-section">
//         <div className="related-products-header">
//           <h3>Related Products</h3>
//           <span className="view-all-link">View All</span>
//         </div>
//         <div className="related-products-grid">
//           {relatedProducts.map((p) => (
//             <div className="related-product-card" key={p.id}>
//               <img src={p.img} alt={p.name} className="related-product-img" />
//               <p className="related-product-name">{p.name}</p>
//               <p className="related-product-size">{p.size}</p>
//               <p className="related-product-price">₹{p.price}</p>
//               <div className="related-product-rating">
//                 {renderStars(p.rating)} <span className="rating-count">({p.reviews})</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductDetails

// import React, { useState } from 'react'

// const packSizes = [
//   { size: '250 g', price: 350 },
//   { size: '500 g', price: 700 },
//   { size: '1 kg', price: 1250 },
//   { size: '5 kg', price: 5500 },
// ]

// const highlights = [
//   { icon: 'ti-droplet', title: '100%', subtitle: 'Water Soluble' },
//   { icon: 'ti-leaf', title: 'For All', subtitle: 'Crops' },
//   { icon: 'ti-chart-bar', title: 'Improves Growth', subtitle: '& Yield' },
//   { icon: 'ti-shield-check', title: 'Safe &', subtitle: 'Effective' },
// ]

// const tabs = ['Description', 'Benefits', 'Usage', 'Dosage', 'Crops', 'Packing', 'Reviews']

// const renderStars = (rating) => {
//   const stars = []
//   for (let i = 1; i <= 5; i++) {
//     if (rating >= i) stars.push(<i key={i} className="ti ti-star-filled"></i>)
//     else if (rating >= i - 0.5) stars.push(<i key={i} className="ti ti-star-half-filled"></i>)
//     else stars.push(<i key={i} className="ti ti-star"></i>)
//   }
//   return stars
// }

// const ProductDetails = ({ product, onBack }) => {
//   const [activeThumb, setActiveThumb] = useState(0)
//   const [selectedPack, setSelectedPack] = useState(2)
//   const [quantity, setQuantity] = useState(1)
//   const [activeTab, setActiveTab] = useState('Description')

//   if (!product) return null

//   const thumbnails = [product.img, product.img, product.img, product.img]

//   // ── All specs pulled from the clicked product ──
//   const specs = [
//     { label: 'Brand',        value: product.brand },
//     { label: 'Category',     value: product.category },
//     { label: 'Form',         value: product.form || 'Liquid / Powder' },
//     { label: 'Pack Size',    value: '250g / 500g / 1kg / 5kg' },
//     { label: 'Shelf Life',   value: product.shelfLife || '24 Months' },
//     { label: 'Suitable For', value: product.suitableFor || 'All Crops & Plants' },
//   ]

//   // ── Tab content built from the clicked product ──
//   const tabContent = {
//     Description: (
//       <>
//         <p>{product.description}</p>
//         <ul style={{ marginTop: 12, paddingLeft: 20 }}>
//           <li>Brand: {product.brand}</li>
//           <li>Category: {product.category}</li>
//           <li>Rating: {product.rating} / 5 ({product.reviews} reviews)</li>
//           <li>MRP: ₹{product.mrp} | Offer Price: ₹{product.price} ({product.off}% OFF)</li>
//         </ul>
//       </>
//     ),
//     Benefits: (
//       <p>
//         {product.name} promotes balanced crop growth, stronger root development and improved
//         flowering and fruiting. It is trusted by farmers across India for consistent yield improvement.
//       </p>
//     ),
//     Usage: (
//       <p>
//         Dissolve completely in water and apply through drip irrigation, foliar spray or
//         directly to the soil based on the crop stage and recommendation on the label of {product.name}.
//       </p>
//     ),
//     Dosage: <p>{product.description}</p>,
//     Crops: (
//       <p>
//         <strong>Suitable For:</strong> {product.suitableFor || 'All Crops & Plants'}
//       </p>
//     ),
//     Packing: (
//       <p>
//         {product.name} is available in 250 g, 500 g, 1 kg and 5 kg resealable packs
//         to suit both home gardeners and large-scale farmers.
//       </p>
//     ),
//     Reviews: (
//       <p>
//         {product.rating} out of 5 based on {product.reviews} verified customer reviews
//         for {product.name}.
//       </p>
//     ),
//   }

//   const currentPack = packSizes[selectedPack]
//   const mrp = Math.round(currentPack.price / 0.86)
//   const offPercent = Math.round(((mrp - currentPack.price) / mrp) * 100)

//   const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1))
//   const increaseQty = () => setQuantity((q) => q + 1)

//   return (
//     <div className="product-detail-page">
//       <div className="breadcrumb">
//         <span style={{ cursor: 'pointer', color: '#1d6b2e' }} onClick={onBack}>Home</span>
//         <i className="ti ti-chevron-right"></i>
//         <span style={{ cursor: 'pointer', color: '#1d6b2e' }} onClick={onBack}>Products</span>
//         <i className="ti ti-chevron-right"></i>
//         <span className="breadcrumb-current">{product.name}</span>
//       </div>

//       <div className="product-detail-layout">

//         {/* Gallery */}
//         <div className="product-gallery">
//           <div className="gallery-thumbs">
//             {thumbnails.map((thumb, i) => (
//               <button
//                 key={i}
//                 className={`gallery-thumb ${activeThumb === i ? 'gallery-thumb-active' : ''}`}
//                 onClick={() => setActiveThumb(i)}
//               >
//                 <img src={thumb} alt={`${product.name} view ${i + 1}`} />
//               </button>
//             ))}
//           </div>
//           <div className="gallery-main">
//             <img src={thumbnails[activeThumb]} alt={product.name} />
//           </div>
//         </div>

//         {/* Info */}
//         <div className="product-info">
//           <h1 className="product-title">{product.name}</h1>

//           <div className="product-rating-row">
//             <span className="rating-badge">
//               {renderStars(product.rating)}
//               <span className="rating-value">{product.rating}</span>
//               <span className="rating-reviews">({product.reviews} Reviews)</span>
//             </span>
//             <span className="bestseller-badge">Bestseller</span>
//           </div>

//           <div className="product-price-block">
//             <span className="product-price-large">₹{currentPack.price.toLocaleString('en-IN')}</span>
//             <span className="product-mrp-large">₹{mrp.toLocaleString('en-IN')}</span>
//             <span className="product-off-large">({offPercent}% OFF)</span>
//           </div>

//           <p className="product-stock">
//             <i className="ti ti-circle-check-filled"></i> In Stock (50 available)
//           </p>

//           <p className="product-description">{product.description}</p>

//           <div className="product-highlights">
//             {highlights.map((h, i) => (
//               <div className="product-highlight" key={i}>
//                 <i className={`ti ${h.icon}`}></i>
//                 <div>
//                   <p className="highlight-title">{h.title}</p>
//                   <p className="highlight-subtitle">{h.subtitle}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="product-specs">
//             {specs.map((s) => (
//               <div className="product-spec-row" key={s.label}>
//                 <span className="spec-label">{s.label}</span>
//                 <span className="spec-colon">:</span>
//                 <span className="spec-value">{s.value}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Purchase Panel */}
//         <aside className="purchase-panel">
//           <div className="purchase-card">
//             <h4>Select Pack Size</h4>
//             <div className="pack-size-grid">
//               {packSizes.map((p, i) => (
//                 <button
//                   key={p.size}
//                   className={`pack-size-option ${selectedPack === i ? 'pack-size-active' : ''}`}
//                   onClick={() => setSelectedPack(i)}
//                 >
//                   <span className="pack-size-name">{p.size}</span>
//                   <span className="pack-size-price">₹{p.price.toLocaleString('en-IN')}</span>
//                 </button>
//               ))}
//             </div>

//             <h4>Quantity</h4>
//             <div className="quantity-control">
//               <button className="qty-btn" onClick={decreaseQty}>−</button>
//               <span className="qty-value">{quantity}</span>
//               <button className="qty-btn" onClick={increaseQty}>+</button>
//             </div>

//             <button className="add-to-cart-btn-large">
//               <i className="ti ti-shopping-cart"></i> Add to Cart
//             </button>
//             <button className="buy-now-btn">
//               <i className="ti ti-bolt"></i> Buy Now
//             </button>

//             <div className="delivery-info">
//               <i className="ti ti-calendar"></i>
//               <div>
//                 <p className="delivery-title">Estimated Delivery</p>
//                 <p className="delivery-date">Tomorrow</p>
//                 <p className="delivery-window">Order within 4h 30m</p>
//               </div>
//             </div>

//             <div className="trust-info">
//               <div className="trust-info-row">
//                 <i className="ti ti-lock"></i>
//                 <div>
//                   <p className="trust-title">Secure Transaction</p>
//                   <p className="trust-subtitle">Multiple payment options</p>
//                 </div>
//               </div>
//               <div className="trust-info-row">
//                 <i className="ti ti-rotate"></i>
//                 <div>
//                   <p className="trust-title">Easy Returns</p>
//                   <p className="trust-subtitle">Hassle free returns</p>
//                 </div>
//               </div>
//             </div>

//             <div className="share-product">
//               <p>Share this product</p>
//               <div className="share-icons">
//                 <i className="ti ti-brand-whatsapp"></i>
//                 <i className="ti ti-brand-facebook"></i>
//                 <i className="ti ti-brand-twitter"></i>
//                 <i className="ti ti-mail"></i>
//                 <i className="ti ti-link"></i>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>

//       {/* Tabs */}
//       <div className="product-tabs-section">
//         <div className="product-tabs">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               className={`product-tab ${activeTab === tab ? 'product-tab-active' : ''}`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab === 'Reviews' ? `Reviews (${product.reviews})` : tab}
//             </button>
//           ))}
//         </div>
//         <div className="product-tab-content">{tabContent[activeTab]}</div>
//       </div>
//     </div>
//   )
// }

// export default ProductDetails


// import React, { useState } from 'react'

// const packSizes = [
//   { size: '250 g', multiplier: 0.28 },
//   { size: '500 g', multiplier: 0.56 },
//   { size: '1 kg',  multiplier: 1    },
//   { size: '5 kg',  multiplier: 4.4  },
// ]

// const highlights = [
//   { icon: 'ti-droplet',     title: '100%',           subtitle: 'Water Soluble'  },
//   { icon: 'ti-leaf',        title: 'For All',        subtitle: 'Crops'          },
//   { icon: 'ti-chart-bar',   title: 'Improves Growth',subtitle: '& Yield'        },
//   { icon: 'ti-shield-check',title: 'Safe &',         subtitle: 'Effective'      },
// ]

// const renderStars = (rating) => {
//   const stars = []
//   for (let i = 1; i <= 5; i++) {
//     if (rating >= i)         stars.push(<i key={i} className="ti ti-star-filled"></i>)
//     else if (rating >= i - 0.5) stars.push(<i key={i} className="ti ti-star-half-filled"></i>)
//     else                     stars.push(<i key={i} className="ti ti-star"></i>)
//   }
//   return stars
// }

// const ProductDetails = ({ product, onBack }) => {
//   const [activeThumb, setActiveThumb]   = useState(0)
//   const [selectedPack, setSelectedPack] = useState(2)   // default: 1 kg
//   const [quantity, setQuantity]         = useState(1)
//   const [activeTab, setActiveTab]       = useState('Description')

//   if (!product) return null

//   // --- prices scale with pack size relative to the product's base (1 kg) price ---
//   const basePrice   = product.price
//   const baseMrp     = product.mrp
//   const packPrice   = Math.round(basePrice * packSizes[selectedPack].multiplier)
//   const packMrp     = Math.round(baseMrp   * packSizes[selectedPack].multiplier)
//   const offPercent  = Math.round(((packMrp - packPrice) / packMrp) * 100)

//   // --- specs built entirely from the clicked product ---
//   const specs = [
//     { label: 'Brand',        value: product.brand                        },
//     { label: 'Category',     value: product.category                     },
//     { label: 'Form',         value: product.form        || 'Liquid'      },
//     { label: 'Pack Size',    value: '250g / 500g / 1kg / 5kg'            },
//     { label: 'Shelf Life',   value: product.shelfLife   || '24 Months'   },
//     { label: 'Suitable For', value: product.suitableFor || 'All Crops'   },
//   ]

//   // --- tabs built from the clicked product ---
//   const tabContent = {
//     Description: (
//       <>
//         <p>{product.description}</p>
//         <ul style={{ marginTop: 12, paddingLeft: 20, lineHeight: 1.9 }}>
//           <li>Brand: {product.brand}</li>
//           <li>Category: {product.category}</li>
//           <li>Rating: {product.rating} / 5 &nbsp;({product.reviews} reviews)</li>
//           <li>MRP: ₹{product.mrp} &nbsp;|&nbsp; Offer: ₹{product.price} ({product.off}% OFF)</li>
//         </ul>
//       </>
//     ),
//     Benefits: (
//       <p>
//         {product.name} promotes balanced crop growth, stronger root development and improved
//         flowering and fruiting. Trusted by farmers for consistent yield improvement.
//       </p>
//     ),
//     Usage: (
//       <p>
//         Dissolve {product.name} completely in water and apply through drip irrigation,
//         foliar spray or directly to the soil based on the crop stage.
//       </p>
//     ),
//     Dosage: <p>{product.description}</p>,
//     Crops: (
//       <p><strong>Suitable For:</strong> {product.suitableFor || 'All Crops & Plants'}</p>
//     ),
//     Packing: (
//       <p>
//         {product.name} is available in 250 g, 500 g, 1 kg and 5 kg resealable packs
//         to suit both home gardeners and large-scale farmers.
//       </p>
//     ),
//     [`Reviews (${product.reviews})`]: (
//       <p>
//         {product.rating} out of 5 based on {product.reviews} verified customer
//         reviews for {product.name}.
//       </p>
//     ),
//   }

//   const tabs = ['Description', 'Benefits', 'Usage', 'Dosage', 'Crops', 'Packing', `Reviews (${product.reviews})`]
//   const thumbnails = [product.img, product.img, product.img, product.img]

//   return (
//     <div className="product-detail-page">

//       {/* Breadcrumb */}
//       <div className="breadcrumb">
//         <span style={{ cursor: 'pointer', color: '#1d6b2e' }} onClick={onBack}>Home</span>
//         <i className="ti ti-chevron-right"></i>
//         <span style={{ cursor: 'pointer', color: '#1d6b2e' }} onClick={onBack}>Products</span>
//         <i className="ti ti-chevron-right"></i>
//         <span className="breadcrumb-current">{product.name}</span>
//       </div>

//       <div className="product-detail-layout">

//         {/* Gallery */}
//         <div className="product-gallery">
//           <div className="gallery-thumbs">
//             {thumbnails.map((thumb, i) => (
//               <button
//                 key={i}
//                 className={`gallery-thumb ${activeThumb === i ? 'gallery-thumb-active' : ''}`}
//                 onClick={() => setActiveThumb(i)}
//               >
//                 <img src={thumb} alt={`${product.name} view ${i + 1}`} />
//               </button>
//             ))}
//           </div>
//           <div className="gallery-main">
//             <img src={thumbnails[activeThumb]} alt={product.name} />
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="product-info">
//           <h1 className="product-title">{product.name}</h1>

//           <div className="product-rating-row">
//             <span className="rating-badge">
//               {renderStars(product.rating)}
//               <span className="rating-value">{product.rating}</span>
//               <span className="rating-reviews">({product.reviews} Reviews)</span>
//             </span>
//             <span className="bestseller-badge">Bestseller</span>
//           </div>

//           <div className="product-price-block">
//             <span className="product-price-large">₹{packPrice.toLocaleString('en-IN')}</span>
//             <span className="product-mrp-large">₹{packMrp.toLocaleString('en-IN')}</span>
//             <span className="product-off-large">({offPercent}% OFF)</span>
//           </div>

//           <p className="product-stock">
//             <i className="ti ti-circle-check-filled"></i> In Stock (50 available)
//           </p>

//           <p className="product-description">{product.description}</p>

//           <div className="product-highlights">
//             {highlights.map((h, i) => (
//               <div className="product-highlight" key={i}>
//                 <i className={`ti ${h.icon}`}></i>
//                 <div>
//                   <p className="highlight-title">{h.title}</p>
//                   <p className="highlight-subtitle">{h.subtitle}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="product-specs">
//             {specs.map((s) => (
//               <div className="product-spec-row" key={s.label}>
//                 <span className="spec-label">{s.label}</span>
//                 <span className="spec-colon">:</span>
//                 <span className="spec-value">{s.value}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Purchase Panel */}
//         <aside className="purchase-panel">
//           <div className="purchase-card">
//             <h4>Select Pack Size</h4>
//             <div className="pack-size-grid">
//               {packSizes.map((p, i) => (
//                 <button
//                   key={p.size}
//                   className={`pack-size-option ${selectedPack === i ? 'pack-size-active' : ''}`}
//                   onClick={() => setSelectedPack(i)}
//                 >
//                   <span className="pack-size-name">{p.size}</span>
//                   <span className="pack-size-price">
//                     ₹{Math.round(basePrice * p.multiplier).toLocaleString('en-IN')}
//                   </span>
//                 </button>
//               ))}
//             </div>

//             <h4>Quantity</h4>
//             <div className="quantity-control">
//               <button className="qty-btn" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
//               <span className="qty-value">{quantity}</span>
//               <button className="qty-btn" onClick={() => setQuantity((q) => q + 1)}>+</button>
//             </div>

//             <button className="add-to-cart-btn-large">
//               <i className="ti ti-shopping-cart"></i> Add to Cart
//             </button>
//             <button className="buy-now-btn">
//               <i className="ti ti-bolt"></i> Buy Now
//             </button>

//             <div className="delivery-info">
//               <i className="ti ti-calendar"></i>
//               <div>
//                 <p className="delivery-title">Estimated Delivery</p>
//                 <p className="delivery-date">Tomorrow</p>
//                 <p className="delivery-window">Order within 4h 30m</p>
//               </div>
//             </div>

//             <div className="trust-info">
//               <div className="trust-info-row">
//                 <i className="ti ti-lock"></i>
//                 <div>
//                   <p className="trust-title">Secure Transaction</p>
//                   <p className="trust-subtitle">Multiple payment options</p>
//                 </div>
//               </div>
//               <div className="trust-info-row">
//                 <i className="ti ti-rotate"></i>
//                 <div>
//                   <p className="trust-title">Easy Returns</p>
//                   <p className="trust-subtitle">Hassle free returns</p>
//                 </div>
//               </div>
//             </div>

//             <div className="share-product">
//               <p>Share this product</p>
//               <div className="share-icons">
//                 <i className="ti ti-brand-whatsapp"></i>
//                 <i className="ti ti-brand-facebook"></i>
//                 <i className="ti ti-brand-twitter"></i>
//                 <i className="ti ti-mail"></i>
//                 <i className="ti ti-link"></i>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>

//       {/* Tabs */}
//       <div className="product-tabs-section">
//         <div className="product-tabs">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               className={`product-tab ${activeTab === tab ? 'product-tab-active' : ''}`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//         <div className="product-tab-content">{tabContent[activeTab]}</div>
//       </div>

//     </div>
//   )
// }

// export default ProductDetails

// import React, { useState } from 'react'
// import { products } from './Products'

// const packSizes = [
//   { size: '250 g', multiplier: 0.28 },
//   { size: '500 g', multiplier: 0.56 },
//   { size: '1 kg',  multiplier: 1    },
//   { size: '5 kg',  multiplier: 4.4  },
// ]

// const highlights = [
//   { icon: 'ti-droplet',     title: '100%',           subtitle: 'Water Soluble'  },
//   { icon: 'ti-leaf',        title: 'For All',        subtitle: 'Crops'          },
//   { icon: 'ti-chart-bar',   title: 'Improves Growth',subtitle: '& Yield'        },
//   { icon: 'ti-shield-check',title: 'Safe &',         subtitle: 'Effective'      },
// ]

// const renderStars = (rating) => {
//   const stars = []
//   for (let i = 1; i <= 5; i++) {
//     if (rating >= i)         stars.push(<i key={i} className="ti ti-star-filled"></i>)
//     else if (rating >= i - 0.5) stars.push(<i key={i} className="ti ti-star-half-filled"></i>)
//     else                     stars.push(<i key={i} className="ti ti-star"></i>)
//   }
//   return stars
// }

// const ProductDetails = ({ product, onBack, onProductClick }) => {
//   const [activeThumb, setActiveThumb]   = useState(0)
//   const [selectedPack, setSelectedPack] = useState(2)   // default: 1 kg
//   const [quantity, setQuantity]         = useState(1)
//   const [activeTab, setActiveTab]       = useState('Description')

//   if (!product) return null

//   // --- prices scale with pack size relative to the product's base (1 kg) price ---
//   const basePrice   = product.price
//   const baseMrp     = product.mrp
//   const packPrice   = Math.round(basePrice * packSizes[selectedPack].multiplier)
//   const packMrp     = Math.round(baseMrp   * packSizes[selectedPack].multiplier)
//   const offPercent  = Math.round(((packMrp - packPrice) / packMrp) * 100)

//   // --- specs built entirely from the clicked product ---
//   const specs = [
//     { label: 'Brand',        value: product.brand                        },
//     { label: 'Category',     value: product.category                     },
//     { label: 'Form',         value: product.form        || 'Liquid'      },
//     { label: 'Pack Size',    value: '250g / 500g / 1kg / 5kg'            },
//     { label: 'Shelf Life',   value: product.shelfLife   || '24 Months'   },
//     { label: 'Suitable For', value: product.suitableFor || 'All Crops'   },
//   ]

//   // --- tabs built from the clicked product ---
//   const tabContent = {
//     Description: (
//       <>
//         <p>{product.description}</p>
//         <ul style={{ marginTop: 12, paddingLeft: 20, lineHeight: 1.9 }}>
//           <li>Brand: {product.brand}</li>
//           <li>Category: {product.category}</li>
//           <li>Rating: {product.rating} / 5 &nbsp;({product.reviews} reviews)</li>
//           <li>MRP: ₹{product.mrp} &nbsp;|&nbsp; Offer: ₹{product.price} ({product.off}% OFF)</li>
//         </ul>
//       </>
//     ),
//     Benefits: (
//       <p>
//         {product.name} promotes balanced crop growth, stronger root development and improved
//         flowering and fruiting. Trusted by farmers for consistent yield improvement.
//       </p>
//     ),
//     Usage: (
//       <p>
//         Dissolve {product.name} completely in water and apply through drip irrigation,
//         foliar spray or directly to the soil based on the crop stage.
//       </p>
//     ),
//     Dosage: <p>{product.description}</p>,
//     Crops: (
//       <p><strong>Suitable For:</strong> {product.suitableFor || 'All Crops & Plants'}</p>
//     ),
//     Packing: (
//       <p>
//         {product.name} is available in 250 g, 500 g, 1 kg and 5 kg resealable packs
//         to suit both home gardeners and large-scale farmers.
//       </p>
//     ),
//     [`Reviews (${product.reviews})`]: (
//       <p>
//         {product.rating} out of 5 based on {product.reviews} verified customer
//         reviews for {product.name}.
//       </p>
//     ),
//   }

//   const tabs = ['Description', 'Benefits', 'Usage', 'Dosage', 'Crops', 'Packing', `Reviews (${product.reviews})`]
//   const thumbnails = [product.img, product.img, product.img, product.img]

//   // Related products: same category first, excluding the current one, fallback to any others
//   const relatedProducts = (() => {
//     const sameCategory = products.filter(
//       (p) => p.id !== product.id && p.category === product.category
//     )
//     if (sameCategory.length >= 4) return sameCategory
//     const others = products.filter(
//       (p) => p.id !== product.id && !sameCategory.includes(p)
//     )
//     return [...sameCategory, ...others]
//   })()

//   return (
//     <div className="product-detail-page">

//       {/* Breadcrumb */}
//       <div className="breadcrumb">
//         <span style={{ cursor: 'pointer', color: '#1d6b2e' }} onClick={onBack}>Home</span>
//         <i className="ti ti-chevron-right"></i>
//         <span style={{ cursor: 'pointer', color: '#1d6b2e' }} onClick={onBack}>Products</span>
//         <i className="ti ti-chevron-right"></i>
//         <span className="breadcrumb-current">{product.name}</span>
//       </div>

//       <div className="product-detail-layout">

//         {/* Gallery */}
//         <div className="product-gallery">
//           <div className="gallery-thumbs">
//             {thumbnails.map((thumb, i) => (
//               <button
//                 key={i}
//                 className={`gallery-thumb ${activeThumb === i ? 'gallery-thumb-active' : ''}`}
//                 onClick={() => setActiveThumb(i)}
//               >
//                 <img src={thumb} alt={`${product.name} view ${i + 1}`} />
//               </button>
//             ))}
//           </div>
//           <div className="gallery-main">
//             <img src={thumbnails[activeThumb]} alt={product.name} />
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="product-info">
//           <h1 className="product-title">{product.name}</h1>

//           <div className="product-rating-row">
//             <span className="rating-badge">
//               {renderStars(product.rating)}
//               <span className="rating-value">{product.rating}</span>
//               <span className="rating-reviews">({product.reviews} Reviews)</span>
//             </span>
//             <span className="bestseller-badge">Bestseller</span>
//           </div>

//           <div className="product-price-block">
//             <span className="product-price-large">₹{packPrice.toLocaleString('en-IN')}</span>
//             <span className="product-mrp-large">₹{packMrp.toLocaleString('en-IN')}</span>
//             <span className="product-off-large">({offPercent}% OFF)</span>
//           </div>

//           <p className="product-stock">
//             <i className="ti ti-circle-check-filled"></i> In Stock (50 available)
//           </p>

//           <p className="product-description">{product.description}</p>

//           <div className="product-highlights">
//             {highlights.map((h, i) => (
//               <div className="product-highlight" key={i}>
//                 <i className={`ti ${h.icon}`}></i>
//                 <div>
//                   <p className="highlight-title">{h.title}</p>
//                   <p className="highlight-subtitle">{h.subtitle}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="product-specs">
//             {specs.map((s) => (
//               <div className="product-spec-row" key={s.label}>
//                 <span className="spec-label">{s.label}</span>
//                 <span className="spec-colon">:</span>
//                 <span className="spec-value">{s.value}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Purchase Panel */}
//         <aside className="purchase-panel">
//           <div className="purchase-card">
//             <h4>Select Pack Size</h4>
//             <div className="pack-size-grid">
//               {packSizes.map((p, i) => (
//                 <button
//                   key={p.size}
//                   className={`pack-size-option ${selectedPack === i ? 'pack-size-active' : ''}`}
//                   onClick={() => setSelectedPack(i)}
//                 >
//                   <span className="pack-size-name">{p.size}</span>
//                   <span className="pack-size-price">
//                     ₹{Math.round(basePrice * p.multiplier).toLocaleString('en-IN')}
//                   </span>
//                 </button>
//               ))}
//             </div>

//             <h4>Quantity</h4>
//             <div className="quantity-control">
//               <button className="qty-btn" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
//               <span className="qty-value">{quantity}</span>
//               <button className="qty-btn" onClick={() => setQuantity((q) => q + 1)}>+</button>
//             </div>

//             <button className="add-to-cart-btn-large">
//               <i className="ti ti-shopping-cart"></i> Add to Cart
//             </button>
//             <button className="buy-now-btn">
//               <i className="ti ti-bolt"></i> Buy Now
//             </button>

//             <div className="delivery-info">
//               <i className="ti ti-calendar"></i>
//               <div>
//                 <p className="delivery-title">Estimated Delivery</p>
//                 <p className="delivery-date">Tomorrow</p>
//                 <p className="delivery-window">Order within 4h 30m</p>
//               </div>
//             </div>

//             <div className="trust-info">
//               <div className="trust-info-row">
//                 <i className="ti ti-lock"></i>
//                 <div>
//                   <p className="trust-title">Secure Transaction</p>
//                   <p className="trust-subtitle">Multiple payment options</p>
//                 </div>
//               </div>
//               <div className="trust-info-row">
//                 <i className="ti ti-rotate"></i>
//                 <div>
//                   <p className="trust-title">Easy Returns</p>
//                   <p className="trust-subtitle">Hassle free returns</p>
//                 </div>
//               </div>
//             </div>

//             <div className="share-product">
//               <p>Share this product</p>
//               <div className="share-icons">
//                 <i className="ti ti-brand-whatsapp"></i>
//                 <i className="ti ti-brand-facebook"></i>
//                 <i className="ti ti-brand-twitter"></i>
//                 <i className="ti ti-mail"></i>
//                 <i className="ti ti-link"></i>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>

//       {/* Tabs */}
//       <div className="product-tabs-section">
//         <div className="product-tabs">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               className={`product-tab ${activeTab === tab ? 'product-tab-active' : ''}`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//         <div className="product-tab-content">{tabContent[activeTab]}</div>
//       </div>

//       {/* Related Products */}
//       {relatedProducts.length > 0 && (
//         <div className="related-products-section">
//           <div className="related-products-header">
//             <h3>Related Products</h3>
//             <span className="view-all-link" onClick={onBack}>View All</span>
//           </div>
//           <div className="related-products-grid">
//             {relatedProducts.map((rp) => (
//               <div
//                 key={rp.id}
//                 className="related-product-card"
//                 onClick={() => onProductClick && onProductClick(rp)}
//               >
//                 <img src={rp.img} alt={rp.name} className="related-product-img" />
//                 <p className="related-product-name">{rp.name}</p>
//                 <p className="related-product-size">{rp.form || 'Liquid'}</p>
//                 <p className="related-product-price">₹{rp.price}</p>
//                 <div className="related-product-rating">
//                   {renderStars(rp.rating)} <span className="rating-count">({rp.reviews})</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//     </div>
//   )
// }

// export default ProductDetails

// import React, { useState } from 'react'
// import { products } from './Products'

// // const packSizes = [
// //   { size: '250 g', multiplier: 0.28 },
// //   { size: '500 g', multiplier: 0.56 },
// //   { size: '1 kg',  multiplier: 1    },
// //   { size: '5 kg',  multiplier: 4.4  }, 
// // ]

// const highlights = [
//   { icon: 'ti-droplet',     title: '100%',           subtitle: 'Water Soluble'  },
//   { icon: 'ti-leaf',        title: 'For All',        subtitle: 'Crops'          },
//   { icon: 'ti-chart-bar',   title: 'Improves Growth',subtitle: '& Yield'        },
//   { icon: 'ti-shield-check',title: 'Safe &',         subtitle: 'Effective'      },
// ]

// const renderStars = (rating) => {
//   const stars = []
//   for (let i = 1; i <= 5; i++) {
//     if (rating >= i)         stars.push(<i key={i} className="ti ti-star-filled"></i>)
//     else if (rating >= i - 0.5) stars.push(<i key={i} className="ti ti-star-half-filled"></i>)
//     else                     stars.push(<i key={i} className="ti ti-star"></i>)
//   }
//   return stars
// }

// const ProductDetails = ({ product, onBack, onProductClick, onAddToCart }) => {
//   const [activeThumb, setActiveThumb]   = useState(0)
//   const [selectedPack, setSelectedPack] = useState(2)   // default: 1 kg
//   const [quantity, setQuantity]         = useState(1)
//   const [activeTab, setActiveTab]       = useState('Description')

//   if (!product) return null

//   // --- prices scale with pack size relative to the product's base (1 kg) price ---
//   const basePrice   = product.price
//   const baseMrp     = product.mrp
//   const packPrice   = Math.round(basePrice * packSizes[selectedPack].multiplier)
//   const packMrp     = Math.round(baseMrp   * packSizes[selectedPack].multiplier)
//   const offPercent  = Math.round(((packMrp - packPrice) / packMrp) * 100)

//   // --- specs built entirely from the clicked product ---
//   const specs = [
//     { label: 'Brand',        value: product.brand                        },
//     { label: 'Category',     value: product.category                     },
//     { label: 'Form',         value: product.form        || 'Liquid'      },
//     { label: 'Pack Size',    value: '250g / 500g / 1kg / 5kg'            },
//     { label: 'Shelf Life',   value: product.shelfLife   || '24 Months'   },
//     { label: 'Suitable For', value: product.suitableFor || 'All Crops'   },
//   ]

//   // --- tabs built from the clicked product ---
//   const tabContent = {
//     Description: (
//       <>
//         <p>{product.description}</p>
//         <ul style={{ marginTop: 12, paddingLeft: 20, lineHeight: 1.9 }}>
//           <li>Brand: {product.brand}</li>
//           <li>Category: {product.category}</li>
//           <li>Rating: {product.rating} / 5 &nbsp;({product.reviews} reviews)</li>
//           <li>MRP: ₹{product.mrp} &nbsp;|&nbsp; Offer: ₹{product.price} ({product.off}% OFF)</li>
//         </ul>
//       </>
//     ),
//     Benefits: (
//       <p>
//         {product.name} promotes balanced crop growth, stronger root development and improved
//         flowering and fruiting. Trusted by farmers for consistent yield improvement.
//       </p>
//     ),
//     Usage: (
//       <p>
//         Dissolve {product.name} completely in water and apply through drip irrigation,
//         foliar spray or directly to the soil based on the crop stage.
//       </p>
//     ),
//     Dosage: <p>{product.description}</p>,
//     Crops: (
//       <p><strong>Suitable For:</strong> {product.suitableFor || 'All Crops & Plants'}</p>
//     ),
//     Packing: (
//       <p>
//         {product.name} is available in 250 g, 500 g, 1 kg and 5 kg resealable packs
//         to suit both home gardeners and large-scale farmers.
//       </p>
//     ),
//     [`Reviews (${product.reviews})`]: (
//       <p>
//         {product.rating} out of 5 based on {product.reviews} verified customer
//         reviews for {product.name}.
//       </p>
//     ),
//   }

//   const tabs = ['Description', 'Benefits', 'Usage', 'Dosage', 'Crops', 'Packing', `Reviews (${product.reviews})`]
//   const thumbnails = [product.image, product.image, product.image, product.image]

//   // Related products: same category first, excluding the current one, fallback to any others
//   const relatedProducts = (() => {
//     const sameCategory = products.filter(
//       (p) => p.id !== product.id && p.category === product.category
//     )
//     if (sameCategory.length >= 4) return sameCategory
//     const others = products.filter(
//       (p) => p.id !== product.id && !sameCategory.includes(p)
//     )
//     return [...sameCategory, ...others]
//   })()

//   return (
//     <div className="product-detail-page">

//       {/* Breadcrumb */}
//       <div className="breadcrumb">
//         <span style={{ cursor: 'pointer', color: '#1d6b2e' }} onClick={onBack}>Home</span>
//         <i className="ti ti-chevron-right"></i>
//         <span style={{ cursor: 'pointer', color: '#1d6b2e' }} onClick={onBack}>Products</span>
//         <i className="ti ti-chevron-right"></i>
//         <span className="breadcrumb-current">{product.name}</span>
//       </div>

//       <div className="product-detail-layout">

//         {/* Gallery */}
//         <div className="product-gallery">
//           <div className="gallery-thumbs">
//             {thumbnails.map((thumb, i) => (
//               <button
//                 key={i}
//                 className={`gallery-thumb ${activeThumb === i ? 'gallery-thumb-active' : ''}`}
//                 onClick={() => setActiveThumb(i)}
//               >
//                 <img src={thumb} alt={`${product.name} view ${i + 1}`} />
//               </button>
//             ))}
//           </div>
//           <div className="gallery-main">
//             <img src={thumbnails[activeThumb]} alt={product.name} />
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="product-info">
//           <h1 className="product-title">{product.name}</h1>

//           <div className="product-rating-row">
//             <span className="rating-badge">
//               {renderStars(product.rating)}
//               <span className="rating-value">{product.rating}</span>
//               <span className="rating-reviews">({product.reviews} Reviews)</span>
//             </span>
//             <span className="bestseller-badge">Bestseller</span>
//           </div>

//           <div className="product-price-block">
//             <span className="product-price-large">₹{packPrice.toLocaleString('en-IN')}</span>
//             <span className="product-mrp-large">₹{packMrp.toLocaleString('en-IN')}</span>
//             <span className="product-off-large">({offPercent}% OFF)</span>
//           </div>

//           <p className="product-stock">
//             <i className="ti ti-circle-check-filled"></i> In Stock (50 available)
//           </p>

//           <p className="product-description">{product.description}</p>

//           <div className="product-highlights">
//             {highlights.map((h, i) => (
//               <div className="product-highlight" key={i}>
//                 <i className={`ti ${h.icon}`}></i>
//                 <div>
//                   <p className="highlight-title">{h.title}</p>
//                   <p className="highlight-subtitle">{h.subtitle}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="product-specs">
//             {specs.map((s) => (
//               <div className="product-spec-row" key={s.label}>
//                 <span className="spec-label">{s.label}</span>
//                 <span className="spec-colon">:</span>
//                 <span className="spec-value">{s.value}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Purchase Panel */}
//         <aside className="purchase-panel">
//           <div className="purchase-card">
//             <h4>Select Pack Size</h4>
//             <div className="pack-size-grid">
//               {packSizes.map((p, i) => (
//                 <button
//                   key={p.size}
//                   className={`pack-size-option ${selectedPack === i ? 'pack-size-active' : ''}`}
//                   onClick={() => setSelectedPack(i)}
//                 >
//                   <span className="pack-size-name">{p.size}</span>
//                   <span className="pack-size-price">
//                     ₹{Math.round(basePrice * p.multiplier).toLocaleString('en-IN')}
//                   </span>
//                 </button>
//               ))}
//             </div>

//             <h4>Quantity</h4>
//             <div className="quantity-control">
//               <button className="qty-btn" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
//               <span className="qty-value">{quantity}</span>
//               <button className="qty-btn" onClick={() => setQuantity((q) => q + 1)}>+</button>
//             </div>

//             <button
//               className="add-to-cart-btn-large"
//               onClick={() => onAddToCart(product, quantity)}
//             >
//               <i className="ti ti-shopping-cart"></i> Add to Cart
//             </button>
//             <button className="buy-now-btn">
//               <i className="ti ti-bolt"></i> Buy Now
//             </button>

//             <div className="delivery-info">
//               <i className="ti ti-calendar"></i>
//               <div>
//                 <p className="delivery-title">Estimated Delivery</p>
//                 <p className="delivery-date">Tomorrow</p>
//                 <p className="delivery-window">Order within 4h 30m</p>
//               </div>
//             </div>

//             <div className="trust-info">
//               <div className="trust-info-row">
//                 <i className="ti ti-lock"></i>
//                 <div>
//                   <p className="trust-title">Secure Transaction</p>
//                   <p className="trust-subtitle">Multiple payment options</p>
//                 </div>
//               </div>
//               <div className="trust-info-row">
//                 <i className="ti ti-rotate"></i>
//                 <div>
//                   <p className="trust-title">Easy Returns</p>
//                   <p className="trust-subtitle">Hassle free returns</p>
//                 </div>
//               </div>
//             </div>

//             <div className="share-product">
//               <p>Share this product</p>
//               <div className="share-icons">
//                 <i className="ti ti-brand-whatsapp"></i>
//                 <i className="ti ti-brand-facebook"></i>
//                 <i className="ti ti-brand-twitter"></i>
//                 <i className="ti ti-mail"></i>
//                 <i className="ti ti-link"></i>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>

//       {/* Tabs */}
//       <div className="product-tabs-section">
//         <div className="product-tabs">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               className={`product-tab ${activeTab === tab ? 'product-tab-active' : ''}`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//         <div className="product-tab-content">{tabContent[activeTab]}</div>
//       </div>

//       {/* Related Products */}
//       {relatedProducts.length > 0 && (
//         <div className="related-products-section">
//           <div className="related-products-header">
//             <h3>Related Products</h3>
//             <span className="view-all-link" onClick={onBack}>View All</span>
//           </div>
//           <div className="related-products-grid">
//             {relatedProducts.map((rp) => (
//               <div
//                 key={rp.id}
//                 className="related-product-card"
//                 onClick={() => onProductClick && onProductClick(rp)}
//               >
//                 <img src={rp.img} alt={rp.name} className="related-product-img" />
//                 <p className="related-product-name">{rp.name}</p>
//                 <p className="related-product-size">{rp.form || 'Liquid'}</p>
//                 <p className="related-product-price">₹{rp.price}</p>
//                 <div className="related-product-rating">
//                   {renderStars(rp.rating)} <span className="rating-count">({rp.reviews})</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//     </div>
//   )
// }

// export default ProductDetails


// import React, { useState } from 'react'
// import { products } from './Products'

// const renderStars = (rating) => {
//   const stars = []
//   for (let i = 1; i <= 5; i++) {
//     if (rating >= i)             stars.push(<i key={i} className="ti ti-star-filled"></i>)
//     else if (rating >= i - 0.5) stars.push(<i key={i} className="ti ti-star-half-filled"></i>)
//     else                         stars.push(<i key={i} className="ti ti-star"></i>)
//   }
//   return stars
// }

// const highlights = [
//   { icon: 'ti-droplet',     title: '100%',            subtitle: 'Water Soluble' },
//   { icon: 'ti-leaf',        title: 'For All',         subtitle: 'Crops'         },
//   { icon: 'ti-chart-bar',   title: 'Improves Growth', subtitle: '& Yield'       },
//   { icon: 'ti-shield-check',title: 'Safe &',          subtitle: 'Effective'     },
// ]

// const ProductDetails = ({ product, onBack, onProductClick, onAddToCart }) => {
//   const [activeThumb, setActiveThumb]   = useState(0)
//   const [selectedPack, setSelectedPack] = useState(0)
//   const [quantity, setQuantity]         = useState(1)
//   const [activeTab, setActiveTab]       = useState('Description')

//   if (!product) return null

//   const basePrice = product.price
//   const packPrice   = currentPack.price
//   const packMrp     = Math.round(currentPack.price / (1 - product.off / 100))
//   const offPercent  = product.off

//   const specs = [
//     { label: 'Brand',        value: product.brand                       },
//     { label: 'Category',     value: product.category                    },
//     { label: 'Form',         value: product.form        || 'Liquid'     },
//     { label: 'Pack Size',    value: product.packSizes.map(p => p.size).join(' / ') },
//     { label: 'Shelf Life',   value: product.shelfLife   || '24 Months'  },
//     { label: 'Suitable For', value: product.suitableFor || 'All Crops'  },
//   ]

//   const tabContent = {
//     Description: (
//       <>
//         <p>{product.description}</p>
//         <ul style={{ marginTop: 12, paddingLeft: 20, lineHeight: 1.9 }}>
//           <li>Brand: {product.brand}</li>
//           <li>Category: {product.category}</li>
//           <li>Rating: {product.rating} / 5 &nbsp;({product.reviews} reviews)</li>
//           <li>MRP: ₹{product.mrp} &nbsp;|&nbsp; Offer: ₹{product.price} ({product.off}% OFF)</li>
//         </ul>
//       </>
//     ),
//     Benefits: (
//       <p>
//         {product.name} promotes balanced crop growth, stronger root development and improved
//         flowering and fruiting. Trusted by farmers for consistent yield improvement.
//       </p>
//     ),
//     Usage: (
//       <p>
//         Dissolve {product.name} completely in water and apply through drip irrigation,
//         foliar spray or directly to the soil based on the crop stage.
//       </p>
//     ),
//     Dosage: <p>{product.description}</p>,
//     Crops: (
//       <p><strong>Suitable For:</strong> {product.suitableFor || 'All Crops & Plants'}</p>
//     ),
//     Packing: (
//       <p>
//         {product.name} is available in {product.packSizes.map(p => p.size).join(', ')} resealable packs
//         to suit both home gardeners and large-scale farmers.
//       </p>
//     ),
//     [`Reviews (${product.reviews})`]: (
//       <p>
//         {product.rating} out of 5 based on {product.reviews} verified customer
//         reviews for {product.name}.
//       </p>
//     ),
//   }

//   const tabs = ['Description', 'Benefits', 'Usage', 'Dosage', 'Crops', 'Packing', `Reviews (${product.reviews})`]
//   const thumbnails = [product.image, product.image, product.image, product.image]

//   const relatedProducts = (() => {
//     const sameCategory = products.filter(
//       (p) => p.id !== product.id && p.category === product.category
//     )
//     if (sameCategory.length >= 4) return sameCategory
//     const others = products.filter(
//       (p) => p.id !== product.id && !sameCategory.includes(p)
//     )
//     return [...sameCategory, ...others]
//   })()

//   return (
//     <div className="product-detail-page">

//       <div className="breadcrumb">
//         <span style={{ cursor: 'pointer', color: '#1d6b2e' }} onClick={onBack}>Home</span>
//         <i className="ti ti-chevron-right"></i>
//         <span style={{ cursor: 'pointer', color: '#1d6b2e' }} onClick={onBack}>Products</span>
//         <i className="ti ti-chevron-right"></i>
//         <span className="breadcrumb-current">{product.name}</span>
//       </div>

//       <div className="product-detail-layout">

//         <div className="product-gallery">
//           <div className="gallery-thumbs">
//             {thumbnails.map((thumb, i) => (
//               <button
//                 key={i}
//                 className={`gallery-thumb ${activeThumb === i ? 'gallery-thumb-active' : ''}`}
//                 onClick={() => setActiveThumb(i)}
//               >
//                 <img src={thumb} alt={`${product.name} view ${i + 1}`} />
//               </button>
//             ))}
//           </div>
//           <div className="gallery-main">
//             <img src={thumbnails[activeThumb]} alt={product.name} />
//           </div>
//         </div>

//         <div className="product-info">
//           <h1 className="product-title">{product.name}</h1>

//           <div className="product-rating-row">
//             <span className="rating-badge">
//               {renderStars(product.rating)}
//               <span className="rating-value">{product.rating}</span>
//               <span className="rating-reviews">({product.reviews} Reviews)</span>
//             </span>
//             <span className="bestseller-badge">Bestseller</span>
//           </div>

//           <div className="product-price-block">
//             <span className="product-price-large">₹{packPrice.toLocaleString('en-IN')}</span>
//             <span className="product-mrp-large">₹{packMrp.toLocaleString('en-IN')}</span>
//             <span className="product-off-large">({offPercent}% OFF)</span>
//           </div>

//           <p className="product-stock">
//             <i className="ti ti-circle-check-filled"></i> In Stock (50 available)
//           </p>

//           <p className="product-description">{product.description}</p>

//           <div className="product-highlights">
//             {highlights.map((h, i) => (
//               <div className="product-highlight" key={i}>
//                 <i className={`ti ${h.icon}`}></i>
//                 <div>
//                   <p className="highlight-title">{h.title}</p>
//                   <p className="highlight-subtitle">{h.subtitle}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="product-specs">
//             {specs.map((s) => (
//               <div className="product-spec-row" key={s.label}>
//                 <span className="spec-label">{s.label}</span>
//                 <span className="spec-colon">:</span>
//                 <span className="spec-value">{s.value}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <aside className="purchase-panel">
//           <div className="purchase-card">
//             <h4>Select Pack Size</h4>
//             <div className="pack-size-grid">
//               {product.packSizes.map((p, i) => (
//                 <button
//                   key={p.size}
//                   className={`pack-size-option ${selectedPack === i ? 'pack-size-active' : ''}`}
//                   onClick={() => setSelectedPack(i)}
//                 >
//                   <span className="pack-size-name">{p.size}</span>
//                   <span className="pack-size-price">₹{p.price.toLocaleString('en-IN')}</span>
//                 </button>
//               ))}
//             </div>

//             <h4>Quantity</h4>
//             <div className="quantity-control">
//               <button className="qty-btn" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
//               <span className="qty-value">{quantity}</span>
//               <button className="qty-btn" onClick={() => setQuantity((q) => q + 1)}>+</button>
//             </div>

//             <button className="add-to-cart-btn-large" onClick={() => onAddToCart(product, quantity)}>
//               <i className="ti ti-shopping-cart"></i> Add to Cart
//             </button>
//             <button className="buy-now-btn">
//               <i className="ti ti-bolt"></i> Buy Now
//             </button>

//             <div className="delivery-info">
//               <i className="ti ti-calendar"></i>
//               <div>
//                 <p className="delivery-title">Estimated Delivery</p>
//                 <p className="delivery-date">Tomorrow</p>
//                 <p className="delivery-window">Order within 4h 30m</p>
//               </div>
//             </div>

//             <div className="trust-info">
//               <div className="trust-info-row">
//                 <i className="ti ti-lock"></i>
//                 <div>
//                   <p className="trust-title">Secure Transaction</p>
//                   <p className="trust-subtitle">Multiple payment options</p>
//                 </div>
//               </div>
//               <div className="trust-info-row">
//                 <i className="ti ti-rotate"></i>
//                 <div>
//                   <p className="trust-title">Easy Returns</p>
//                   <p className="trust-subtitle">Hassle free returns</p>
//                 </div>
//               </div>
//             </div>

//             <div className="share-product">
//               <p>Share this product</p>
//               <div className="share-icons">
//                 <i className="ti ti-brand-whatsapp"></i>
//                 <i className="ti ti-brand-facebook"></i>
//                 <i className="ti ti-brand-twitter"></i>
//                 <i className="ti ti-mail"></i>
//                 <i className="ti ti-link"></i>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>

//       <div className="product-tabs-section">
//         <div className="product-tabs">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               className={`product-tab ${activeTab === tab ? 'product-tab-active' : ''}`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//         <div className="product-tab-content">{tabContent[activeTab]}</div>
//       </div>

//       {relatedProducts.length > 0 && (
//         <div className="related-products-section">
//           <div className="related-products-header">
//             <h3>Related Products</h3>
//             <span className="view-all-link" onClick={onBack}>View All</span>
//           </div>
//           <div className="related-products-grid">
//             {relatedProducts.map((rp) => (
//               <div
//                 key={rp.id}
//                 className="related-product-card"
//                 onClick={() => onProductClick && onProductClick(rp)}
//               >
//                 <img src={rp.image} alt={rp.name} className="related-product-img" />
//                 <p className="related-product-name">{rp.name}</p>
//                 <p className="related-product-size">{rp.form || 'Liquid'}</p>
//                 <p className="related-product-price">₹{rp.price}</p>
//                 <div className="related-product-rating">
//                   {renderStars(rp.rating)} <span className="rating-count">({rp.reviews})</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//     </div>
//   )
// }

// export default ProductDetails


import React, { useState } from 'react'
import { products } from './Products'

const renderStars = (rating) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (rating >= i)             stars.push(<i key={i} className="ti ti-star-filled"></i>)
    else if (rating >= i - 0.5) stars.push(<i key={i} className="ti ti-star-half-filled"></i>)
    else                         stars.push(<i key={i} className="ti ti-star"></i>)
  }
  return stars
}

const highlights = [
  { icon: 'ti-droplet',     title: '100%',            subtitle: 'Water Soluble' },
  { icon: 'ti-leaf',        title: 'For All',         subtitle: 'Crops'         },
  { icon: 'ti-chart-bar',   title: 'Improves Growth', subtitle: '& Yield'       },
  { icon: 'ti-shield-check',title: 'Safe &',          subtitle: 'Effective'     },
]

const ProductDetails = ({ product, onBack, onProductClick, onAddToCart }) => {
  const [activeThumb, setActiveThumb]   = useState(0)
  const [selectedPack, setSelectedPack] = useState(0)
  const [quantity, setQuantity]         = useState(1)
  const [activeTab, setActiveTab]       = useState('Description')

  if (!product) return null

  const currentPack = product.packSizes[selectedPack]
  const packPrice   = currentPack.price
  const packMrp     = Math.round(currentPack.price / (1 - product.off / 100))
  const offPercent  = product.off

  const specs = [
    { label: 'Brand',        value: product.brand                                        },
    { label: 'Category',     value: product.category                                     },
    { label: 'Form',         value: product.form        || 'Liquid'                      },
    { label: 'Pack Size',    value: product.packSizes.map(p => p.size).join(' / ')       },
    { label: 'Shelf Life',   value: product.shelfLife   || '24 Months'                   },
    { label: 'Suitable For', value: product.suitableFor || 'All Crops'                   },
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
  const thumbnails = [product.image, product.image, product.image, product.image]

  const relatedProducts = (() => {
    const sameCategory = products.filter(
      (p) => p.id !== product.id && p.category === product.category
    )
    if (sameCategory.length >= 4) return sameCategory
    const others = products.filter(
      (p) => p.id !== product.id && !sameCategory.includes(p)
    )
    return [...sameCategory, ...others]
  })()

  return (
    <div className="product-detail-page">

      <div className="breadcrumb">
        <span style={{ cursor: 'pointer', color: '#1d6b2e' }} onClick={onBack}>Home</span>
        <i className="ti ti-chevron-right"></i>
        <span style={{ cursor: 'pointer', color: '#1d6b2e' }} onClick={onBack}>Products</span>
        <i className="ti ti-chevron-right"></i>
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
            <i className="ti ti-circle-check-filled"></i> In Stock (50 available)
          </p>

          <p className="product-description">{product.description}</p>

          <div className="product-highlights">
            {highlights.map((h, i) => (
              <div className="product-highlight" key={i}>
                <i className={`ti ${h.icon}`}></i>
                <div>
                  <p className="highlight-title">{h.title}</p>
                  <p className="highlight-subtitle">{h.subtitle}</p>
                </div>
              </div>
            ))}
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
              <i className="ti ti-shopping-cart"></i> Add to Cart
            </button>
            <button className="buy-now-btn">
              <i className="ti ti-bolt"></i> Buy Now
            </button>

            <div className="delivery-info">
              <i className="ti ti-calendar"></i>
              <div>
                <p className="delivery-title">Estimated Delivery</p>
                <p className="delivery-date">Tomorrow</p>
                <p className="delivery-window">Order within 4h 30m</p>
              </div>
            </div>

            <div className="trust-info">
              <div className="trust-info-row">
                <i className="ti ti-lock"></i>
                <div>
                  <p className="trust-title">Secure Transaction</p>
                  <p className="trust-subtitle">Multiple payment options</p>
                </div>
              </div>
              <div className="trust-info-row">
                <i className="ti ti-rotate"></i>
                <div>
                  <p className="trust-title">Easy Returns</p>
                  <p className="trust-subtitle">Hassle free returns</p>
                </div>
              </div>
            </div>

            <div className="share-product">
              <p>Share this product</p>
              <div className="share-icons">
                <i className="ti ti-brand-whatsapp"></i>
                <i className="ti ti-brand-facebook"></i>
                <i className="ti ti-brand-twitter"></i>
                <i className="ti ti-mail"></i>
                <i className="ti ti-link"></i>
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
            <span className="view-all-link" onClick={onBack}>View All</span>
          </div>
          <div className="related-products-grid">
            {relatedProducts.map((rp) => (
              <div
                key={rp.id}
                className="related-product-card"
                onClick={() => onProductClick && onProductClick(rp)}
              >
                <img src={rp.image} alt={rp.name} className="related-product-img" />
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