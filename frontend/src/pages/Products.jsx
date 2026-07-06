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

// const Products = () => {
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

// export default Products



// import React, { useState } from 'react'
// import NpkImg from '../assets/NpkImg.jpeg'
// import bavistinImg from '../assets/bavistinImg.jpeg'
// import confidorImg from '../assets/confidorImg.jpeg'
// import zincImg from '../assets/zincImg.jpeg'
// import humicImg from '../assets/humicImg.jpeg'
// import gibberellicImg from '../assets/gibberellicImg.jpeg'
// import neemImg from '../assets/neemImg.jpeg'
// import monopotassiumImg from '../assets/monopotassiumImg.jpeg'
// import micronutrientMixImg from '../assets/micronutrientMixImg.jpeg'
// import seaweedImg from '../assets/seaweedImg.jpeg'
// import organicManureImg from '../assets/organicManureImg.jpeg'
// import mancozebImg from '../assets/mancozebImg.jpeg'

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

// const Products = () => {
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

// export default Products


// import React, { useState, useMemo } from 'react'
// import NpkImg from '../assets/NpkImg.jpeg'
// import bavistinImg from '../assets/bavistinImg.jpeg'
// import confidorImg from '../assets/confidorImg.jpeg'
// import zincImg from '../assets/zincImg.jpeg'
// import humicImg from '../assets/humicImg.jpeg'
// import gibberellicImg from '../assets/gibberellicImg.jpeg'
// import neemImg from '../assets/neemImg.jpeg'
// import monopotassiumImg from '../assets/monopotassiumImg.jpeg'
// import micronutrientMixImg from '../assets/micronutrientMixImg.jpeg'
// import seaweedImg from '../assets/seaweedImg.jpeg'
// import organicManureImg from '../assets/organicManureImg.jpeg'
// import mancozebImg from '../assets/mancozebImg.jpeg'

// const products = [
//   { id: 1, name: 'NPK 19:19:19', brand: 'Coromandel', category: 'Fertilizers', img: NpkImg, price: 1250, mrp: 1450, off: 14, rating: 5, reviews: 128 },
//   { id: 2, name: 'Bavistin Fungicide', brand: 'BASF', category: 'Fungicides', img: bavistinImg, price: 540, mrp: 620, off: 13, rating: 4.5, reviews: 96 },
//   { id: 3, name: 'Confidor Insecticide', brand: 'Bayer', category: 'Pesticides', img: confidorImg, price: 900, mrp: 1050, off: 14, rating: 4.5, reviews: 84 },
//   { id: 4, name: 'Zinc Sulphate', brand: 'UPL', category: 'Micronutrients', img: zincImg, price: 180, mrp: 210, off: 14, rating: 4.5, reviews: 60 },
//   { id: 5, name: 'Humic Acid', brand: 'IFFCO', category: 'Plant Growth Promoters', img: humicImg, price: 420, mrp: 500, off: 16, rating: 5, reviews: 78 },
//   { id: 6, name: 'Gibberellic Acid', brand: 'Coromandel', category: 'Plant Growth Promoters', img: gibberellicImg, price: 230, mrp: 270, off: 15, rating: 4.5, reviews: 45 },
//   { id: 7, name: 'Neem Oil', brand: 'IFFCO', category: 'Organic Products', img: neemImg, price: 310, mrp: 360, off: 14, rating: 5, reviews: 63 },
//   { id: 8, name: 'Monopotassium Phosphate', brand: 'UPL', category: 'Fertilizers', img: monopotassiumImg, price: 770, mrp: 900, off: 14, rating: 4.5, reviews: 54 },
//   { id: 9, name: 'Micronutrient Mix', brand: 'Coromandel', category: 'Micronutrients', img: micronutrientMixImg, price: 280, mrp: 320, off: 13, rating: 4.5, reviews: 42 },
//   { id: 10, name: 'Seaweed Extract', brand: 'IFFCO', category: 'Organic Products', img: seaweedImg, price: 360, mrp: 420, off: 14, rating: 4.5, reviews: 38 },
//   { id: 11, name: 'Organic Manure', brand: 'Indogulfbio', category: 'Organic Products', img: organicManureImg, price: 210, mrp: 250, off: 16, rating: 4.5, reviews: 31 },
//   { id: 12, name: 'Mancozeb 75% WP', brand: 'Syngenta', category: 'Fungicides', img: mancozebImg, price: 350, mrp: 410, off: 15, rating: 4.5, reviews: 29 },
// ]

// const categories = [
//   { name: 'Fertilizers', count: 28 },
//   { name: 'Pesticides', count: 24 },
//   { name: 'Fungicides', count: 18 },
//   { name: 'Micronutrients', count: 16 },
//   { name: 'Plant Growth Promoters', count: 12 },
//   { name: 'Organic Products', count: 30 },
// ]

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

// const Products = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All Categories')
//   const [priceRange, setPriceRange] = useState(5000)
//   const [selectedRating, setSelectedRating] = useState(null)
//   const [sortBy, setSortBy] = useState('Popularity')
//   const [currentPage, setCurrentPage] = useState(1)

//   const resetFilters = () => {
//     setSelectedCategory('All Categories')
//     setPriceRange(5000)
//     setSelectedRating(null)
//   }

//   const displayedProducts = useMemo(() => {
//     let result = [...products]

//     if (selectedCategory !== 'All Categories') {
//       result = result.filter((p) => p.category === selectedCategory)
//     }

//     result = result.filter((p) => p.price <= priceRange)

//     if (selectedRating) {
//       result = result.filter((p) => p.rating >= selectedRating)
//     }

//     switch (sortBy) {
//       case 'Price: Low to High':
//         result.sort((a, b) => a.price - b.price)
//         break
//       case 'Price: High to Low':
//         result.sort((a, b) => b.price - a.price)
//         break
//       case 'Rating':
//         result.sort((a, b) => b.rating - a.rating)
//         break
//       case 'Newest':
//         result.sort((a, b) => b.id - a.id)
//         break
//       default:
//         result.sort((a, b) => b.reviews - a.reviews)
//         break
//     }

//     return result
//   }, [selectedCategory, priceRange, selectedRating, sortBy])

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
//               <p className="products-count">Showing 1–{displayedProducts.length} of {displayedProducts.length} products</p>
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
//             {displayedProducts.map((p) => (
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

// export default Products

// import React, { useState, useMemo } from 'react'
// import shineStarImg from '../assets/shineStarImg.jpeg'
// import crownGoldImg from '../assets/crownGoldImg.jpeg'
// import rootwellImg from '../assets/rootwellImg.jpeg'
// import silcoatImg from '../assets/silcoatImg.jpeg'
// import cMakeImg from '../assets/cMakeImg.jpeg'
// import gNineImg from '../assets/gNineImg.jpeg'
// import expludosImg from '../assets/expludosImg.jpeg'
// import aSilamImg from '../assets/aSilamImg.jpeg'
// import tonsImg from '../assets/tonsImg.jpeg'
// import kStartImg from '../assets/kStartImg.jpeg'
// import blueStarImg from '../assets/blueStarImg.jpeg'
// import aBacteryNanImg from '../assets/aBacteryNanImg.jpeg'
// import agroAmezaImg from '../assets/agroAmezaImg.jpeg'
// import allStarPowderImg from '../assets/allStarPowderImg.jpeg'
// import lorvillockImg from '../assets/lorvillockImg.jpeg'
// import aBossImg from '../assets/aBossImg.jpeg'
// import advaltImg from '../assets/advaltImg.jpeg'
// import apex80Img from '../assets/apex80Img.jpeg'
// import greenStarImg from '../assets/greenStarImg.jpeg'
// import ultimateKStartImg from '../assets/ultimateKStartImg.jpeg'
// import asset47Img from '../assets/asset47Img.jpeg'
// import againstImg from '../assets/againstImg.jpeg'
// import bio60Img from '../assets/bio60Img.jpeg'
// import superOnionImg from '../assets/superOnionImg.jpeg'
// import bordemarImg from '../assets/bordemarImg.jpeg'

// const products = [
//   { id: 1,  name: 'Shine Star',               brand: 'Bawiskar', category: 'Plant Growth Promoters', img: shineStarImg,      price: 320,  mrp: 380,  off: 16, rating: 5,   reviews: 112 },
//   { id: 2,  name: 'Crown Gold',               brand: 'Bawiskar', category: 'Plant Growth Promoters', img: crownGoldImg,      price: 450,  mrp: 520,  off: 13, rating: 4.5, reviews: 98  },
//   { id: 3,  name: 'Rootwell Powder',          brand: 'Bawiskar', category: 'Plant Growth Promoters', img: rootwellImg,       price: 280,  mrp: 330,  off: 15, rating: 4.5, reviews: 87  },
//   { id: 4,  name: 'Silcoat',                  brand: 'Bawiskar', category: 'Micronutrients',         img: silcoatImg,        price: 390,  mrp: 460,  off: 15, rating: 5,   reviews: 74  },
//   { id: 5,  name: 'C-Make',                   brand: 'Bawiskar', category: 'Plant Growth Promoters', img: cMakeImg,          price: 260,  mrp: 300,  off: 13, rating: 4.5, reviews: 65  },
//   { id: 6,  name: 'G-Nine',                   brand: 'Bawiskar', category: 'Organic Products',       img: gNineImg,          price: 850,  mrp: 1000, off: 15, rating: 4.5, reviews: 59  },
//   { id: 7,  name: 'Explodus',                 brand: 'Bawiskar', category: 'Pesticides',             img: expludosImg,       price: 480,  mrp: 560,  off: 14, rating: 5,   reviews: 103 },
//   { id: 8,  name: 'A-Silam',                  brand: 'Bawiskar', category: 'Micronutrients',         img: aSilamImg,         price: 310,  mrp: 370,  off: 16, rating: 4.5, reviews: 48  },
//   { id: 9,  name: 'Tons',                     brand: 'Bawiskar', category: 'Plant Growth Promoters', img: tonsImg,           price: 290,  mrp: 340,  off: 15, rating: 4.5, reviews: 56  },
//   { id: 10, name: 'K-Start',                  brand: 'Bawiskar', category: 'Fertilizers',            img: kStartImg,         price: 520,  mrp: 610,  off: 15, rating: 5,   reviews: 91  },
//   { id: 11, name: 'Blue Star',                brand: 'Bawiskar', category: 'Fungicides',             img: blueStarImg,       price: 430,  mrp: 500,  off: 14, rating: 4.5, reviews: 77  },
//   { id: 12, name: 'A Bactery Nan',            brand: 'Bawiskar', category: 'Pesticides',             img: aBacteryNanImg,    price: 380,  mrp: 450,  off: 16, rating: 4.5, reviews: 42  },
//   { id: 13, name: 'Agro Ameza',               brand: 'Bawiskar', category: 'Plant Growth Promoters', img: agroAmezaImg,      price: 350,  mrp: 410,  off: 15, rating: 5,   reviews: 68  },
//   { id: 14, name: 'All Star Powder',          brand: 'Bawiskar', category: 'Fungicides',             img: allStarPowderImg,  price: 410,  mrp: 480,  off: 15, rating: 4.5, reviews: 53  },
//   { id: 15, name: 'Lorvillock',               brand: 'Bawiskar', category: 'Pesticides',             img: lorvillockImg,     price: 460,  mrp: 540,  off: 15, rating: 4.5, reviews: 39  },
//   { id: 16, name: 'A Boss',                   brand: 'Bawiskar', category: 'Plant Growth Promoters', img: aBossImg,          price: 300,  mrp: 350,  off: 14, rating: 5,   reviews: 82  },
//   { id: 17, name: 'Advalt Onion Special',     brand: 'Bawiskar', category: 'Fertilizers',            img: advaltImg,         price: 490,  mrp: 580,  off: 16, rating: 4.5, reviews: 61  },
//   { id: 18, name: 'Apex 80',                  brand: 'Bawiskar', category: 'Organic Products',       img: apex80Img,         price: 270,  mrp: 320,  off: 16, rating: 4.5, reviews: 44  },
//   { id: 19, name: 'Green Star',               brand: 'Bawiskar', category: 'Fungicides',             img: greenStarImg,      price: 370,  mrp: 430,  off: 14, rating: 5,   reviews: 96  },
//   { id: 20, name: 'Ultimate Special K-Start', brand: 'Bawiskar', category: 'Fertilizers',            img: ultimateKStartImg, price: 1200, mrp: 1400, off: 14, rating: 4.5, reviews: 73  },
//   { id: 21, name: 'Asset 47',                 brand: 'Bawiskar', category: 'Pesticides',             img: asset47Img,        price: 440,  mrp: 520,  off: 15, rating: 4.5, reviews: 57  },
//   { id: 22, name: 'Against',                  brand: 'Bawiskar', category: 'Pesticides',             img: againstImg,        price: 390,  mrp: 460,  off: 15, rating: 4.5, reviews: 35  },
//   { id: 23, name: 'Bio 60',                   brand: 'Bawiskar', category: 'Plant Growth Promoters', img: bio60Img,          price: 330,  mrp: 390,  off: 15, rating: 5,   reviews: 88  },
//   { id: 24, name: 'Super Onion Potato Special', brand: 'Bawiskar', category: 'Fertilizers',          img: superOnionImg,     price: 560,  mrp: 650,  off: 14, rating: 4.5, reviews: 49  },
//   { id: 25, name: 'Bordemar',                 brand: 'Bawiskar', category: 'Fungicides',             img: bordemarImg,       price: 420,  mrp: 490,  off: 14, rating: 4.5, reviews: 66  },
// ]

// const categories = [
//   { name: 'Fertilizers', count: 4 },
//   { name: 'Pesticides', count: 5 },
//   { name: 'Fungicides', count: 5 },
//   { name: 'Micronutrients', count: 2 },
//   { name: 'Plant Growth Promoters', count: 8 },
//   { name: 'Organic Products', count: 2 },
// ]

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

// const Products = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All Categories')
//   const [priceRange, setPriceRange] = useState(5000)
//   const [selectedRating, setSelectedRating] = useState(null)
//   const [sortBy, setSortBy] = useState('Popularity')
//   const [currentPage, setCurrentPage] = useState(1)

//   const resetFilters = () => {
//     setSelectedCategory('All Categories')
//     setPriceRange(5000)
//     setSelectedRating(null)
//   }

//   const displayedProducts = useMemo(() => {
//     let result = [...products]

//     if (selectedCategory !== 'All Categories') {
//       result = result.filter((p) => p.category === selectedCategory)
//     }

//     result = result.filter((p) => p.price <= priceRange)

//     if (selectedRating) {
//       result = result.filter((p) => p.rating >= selectedRating)
//     }

//     switch (sortBy) {
//       case 'Price: Low to High':
//         result.sort((a, b) => a.price - b.price)
//         break
//       case 'Price: High to Low':
//         result.sort((a, b) => b.price - a.price)
//         break
//       case 'Rating':
//         result.sort((a, b) => b.rating - a.rating)
//         break
//       case 'Newest':
//         result.sort((a, b) => b.id - a.id)
//         break
//       default:
//         result.sort((a, b) => b.reviews - a.reviews)
//         break
//     }

//     return result
//   }, [selectedCategory, priceRange, selectedRating, sortBy])

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
//               <p className="products-count">Showing 1–{displayedProducts.length} of {displayedProducts.length} products</p>
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
//             {displayedProducts.map((p) => (
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

// export default Products

// import React, { useState, useMemo } from 'react'
// import shineStarImg from '../assets/shineStarImg.jpeg'
// import crownGoldImg from '../assets/crownGoldImg.jpeg'
// import rootwellImg from '../assets/rootwellImg.jpeg'
// import silcoatImg from '../assets/silcoatImg.jpeg'
// import cMakeImg from '../assets/cMakeImg.jpeg'
// import gNineImg from '../assets/gNineImg.jpeg'
// import expludosImg from '../assets/expludosImg.jpeg'
// import aSilamImg from '../assets/aSilamImg.jpeg'
// import tonsImg from '../assets/tonsImg.jpeg'
// import kStartImg from '../assets/kStartImg.jpeg'
// import blueStarImg from '../assets/blueStarImg.jpeg'
// import aBacteryNanImg from '../assets/aBacteryNanImg.jpeg'
// import agroAmezaImg from '../assets/agroAmezaImg.jpeg'
// import allStarPowderImg from '../assets/allStarPowderImg.jpeg'
// import lorvillockImg from '../assets/lorvillockImg.jpeg'
// import aBossImg from '../assets/aBossImg.jpeg'
// import advaltImg from '../assets/advaltImg.jpeg'
// import apex80Img from '../assets/apex80Img.jpeg'
// import greenStarImg from '../assets/greenStarImg.jpeg'
// import ultimateKStartImg from '../assets/ultimateKStartImg.jpeg'
// import asset47Img from '../assets/asset47Img.jpeg'
// import againstImg from '../assets/againstImg.jpeg'
// import bio60Img from '../assets/bio60Img.jpeg'
// import superOnionImg from '../assets/superOnionImg.jpeg'
// import bordemarImg from '../assets/bordemarImg.jpeg'

// const products = [
//   { id: 1,  name: 'Shine Star',               brand: 'Bawiskar', category: 'Plant Growth Promoters', img: shineStarImg,      price: 320,  mrp: 380,  off: 16, rating: 5,   reviews: 112 },
//   { id: 2,  name: 'Crown Gold',               brand: 'Bawiskar', category: 'Plant Growth Promoters', img: crownGoldImg,      price: 450,  mrp: 520,  off: 13, rating: 4.5, reviews: 98  },
//   { id: 3,  name: 'Rootwell Powder',          brand: 'Bawiskar', category: 'Plant Growth Promoters', img: rootwellImg,       price: 280,  mrp: 330,  off: 15, rating: 4.5, reviews: 87  },
//   { id: 4,  name: 'Silcoat',                  brand: 'Bawiskar', category: 'Micronutrients',         img: silcoatImg,        price: 390,  mrp: 460,  off: 15, rating: 5,   reviews: 74  },
//   { id: 5,  name: 'C-Make',                   brand: 'Bawiskar', category: 'Plant Growth Promoters', img: cMakeImg,          price: 260,  mrp: 300,  off: 13, rating: 4.5, reviews: 65  },
//   { id: 6,  name: 'G-Nine',                   brand: 'Bawiskar', category: 'Organic Products',       img: gNineImg,          price: 850,  mrp: 1000, off: 15, rating: 4.5, reviews: 59  },
//   { id: 7,  name: 'Explodus',                 brand: 'Bawiskar', category: 'Pesticides',             img: expludosImg,       price: 480,  mrp: 560,  off: 14, rating: 5,   reviews: 103 },
//   { id: 8,  name: 'A-Silam',                  brand: 'Bawiskar', category: 'Micronutrients',         img: aSilamImg,         price: 310,  mrp: 370,  off: 16, rating: 4.5, reviews: 48  },
//   { id: 9,  name: 'Tons',                     brand: 'Bawiskar', category: 'Plant Growth Promoters', img: tonsImg,           price: 290,  mrp: 340,  off: 15, rating: 4.5, reviews: 56  },
//   { id: 10, name: 'K-Start',                  brand: 'Bawiskar', category: 'Fertilizers',            img: kStartImg,         price: 520,  mrp: 610,  off: 15, rating: 5,   reviews: 91  },
//   { id: 11, name: 'Blue Star',                brand: 'Bawiskar', category: 'Fungicides',             img: blueStarImg,       price: 430,  mrp: 500,  off: 14, rating: 4.5, reviews: 77  },
//   { id: 12, name: 'A Bactery Nan',            brand: 'Bawiskar', category: 'Pesticides',             img: aBacteryNanImg,    price: 380,  mrp: 450,  off: 16, rating: 4.5, reviews: 42  },
//   { id: 13, name: 'Agro Ameza',               brand: 'Bawiskar', category: 'Plant Growth Promoters', img: agroAmezaImg,      price: 350,  mrp: 410,  off: 15, rating: 5,   reviews: 68  },
//   { id: 14, name: 'All Star Powder',          brand: 'Bawiskar', category: 'Fungicides',             img: allStarPowderImg,  price: 410,  mrp: 480,  off: 15, rating: 4.5, reviews: 53  },
//   { id: 15, name: 'Lorvillock',               brand: 'Bawiskar', category: 'Pesticides',             img: lorvillockImg,     price: 460,  mrp: 540,  off: 15, rating: 4.5, reviews: 39  },
//   { id: 16, name: 'A Boss',                   brand: 'Bawiskar', category: 'Plant Growth Promoters', img: aBossImg,          price: 300,  mrp: 350,  off: 14, rating: 5,   reviews: 82  },
//   { id: 17, name: 'Advalt Onion Special',     brand: 'Bawiskar', category: 'Fertilizers',            img: advaltImg,         price: 490,  mrp: 580,  off: 16, rating: 4.5, reviews: 61  },
//   { id: 18, name: 'Apex 80',                  brand: 'Bawiskar', category: 'Organic Products',       img: apex80Img,         price: 270,  mrp: 320,  off: 16, rating: 4.5, reviews: 44  },
//   { id: 19, name: 'Green Star',               brand: 'Bawiskar', category: 'Fungicides',             img: greenStarImg,      price: 370,  mrp: 430,  off: 14, rating: 5,   reviews: 96  },
//   { id: 20, name: 'Ultimate Special K-Start', brand: 'Bawiskar', category: 'Fertilizers',            img: ultimateKStartImg, price: 1200, mrp: 1400, off: 14, rating: 4.5, reviews: 73  },
//   { id: 21, name: 'Asset 47',                 brand: 'Bawiskar', category: 'Pesticides',             img: asset47Img,        price: 440,  mrp: 520,  off: 15, rating: 4.5, reviews: 57  },
//   { id: 22, name: 'Against',                  brand: 'Bawiskar', category: 'Pesticides',             img: againstImg,        price: 390,  mrp: 460,  off: 15, rating: 4.5, reviews: 35  },
//   { id: 23, name: 'Bio 60',                   brand: 'Bawiskar', category: 'Plant Growth Promoters', img: bio60Img,          price: 330,  mrp: 390,  off: 15, rating: 5,   reviews: 88  },
//   { id: 24, name: 'Super Onion Potato Special', brand: 'Bawiskar', category: 'Fertilizers',          img: superOnionImg,     price: 560,  mrp: 650,  off: 14, rating: 4.5, reviews: 49  },
//   { id: 25, name: 'Bordemar',                 brand: 'Bawiskar', category: 'Fungicides',             img: bordemarImg,       price: 420,  mrp: 490,  off: 14, rating: 4.5, reviews: 66  },
// ]

// const categories = [
//   { name: 'Fertilizers', count: 4 },
//   { name: 'Pesticides', count: 5 },
//   { name: 'Fungicides', count: 5 },
//   { name: 'Micronutrients', count: 2 },
//   { name: 'Plant Growth Promoters', count: 8 },
//   { name: 'Organic Products', count: 2 },
// ]

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

// // ── CHANGE 1: accept onProductClick prop ──
// const Products = ({ onProductClick }) => {
//   const [selectedCategory, setSelectedCategory] = useState('All Categories')
//   const [priceRange, setPriceRange] = useState(5000)
//   const [selectedRating, setSelectedRating] = useState(null)
//   const [sortBy, setSortBy] = useState('Popularity')
//   const [currentPage, setCurrentPage] = useState(1)

//   const resetFilters = () => {
//     setSelectedCategory('All Categories')
//     setPriceRange(5000)
//     setSelectedRating(null)
//   }

//   const displayedProducts = useMemo(() => {
//     let result = [...products]

//     if (selectedCategory !== 'All Categories') {
//       result = result.filter((p) => p.category === selectedCategory)
//     }

//     result = result.filter((p) => p.price <= priceRange)

//     if (selectedRating) {
//       result = result.filter((p) => p.rating >= selectedRating)
//     }

//     switch (sortBy) {
//       case 'Price: Low to High':
//         result.sort((a, b) => a.price - b.price)
//         break
//       case 'Price: High to Low':
//         result.sort((a, b) => b.price - a.price)
//         break
//       case 'Rating':
//         result.sort((a, b) => b.rating - a.rating)
//         break
//       case 'Newest':
//         result.sort((a, b) => b.id - a.id)
//         break
//       default:
//         result.sort((a, b) => b.reviews - a.reviews)
//         break
//     }

//     return result
//   }, [selectedCategory, priceRange, selectedRating, sortBy])

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
//               <p className="products-count">Showing 1–{displayedProducts.length} of {displayedProducts.length} products</p>
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
//             {displayedProducts.map((p) => (
//               // ── CHANGE 2: onClick on card opens product detail ──
//               <div
//                 className="product-card"
//                 key={p.id}
//                 onClick={() => onProductClick(p)}
//                 style={{ cursor: 'pointer' }}
//               >
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
//                 {/* ── CHANGE 3: stopPropagation so cart click doesn't open detail ── */}
//                 <button
//                   className="add-to-cart-btn"
//                   onClick={(e) => e.stopPropagation()}
//                 >
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

// export default Products


// import React, { useState, useMemo } from 'react'
// import shineStarImg from '../assets/shineStarImg.jpeg'
// import crownGoldImg from '../assets/crownGoldImg.jpeg'
// import rootwellImg from '../assets/rootwellImg.jpeg'
// import silcoatImg from '../assets/silcoatImg.jpeg'
// import cMakeImg from '../assets/cMakeImg.jpeg'
// import gNineImg from '../assets/gNineImg.jpeg'
// import expludosImg from '../assets/expludosImg.jpeg'
// import aSilamImg from '../assets/aSilamImg.jpeg'
// import tonsImg from '../assets/tonsImg.jpeg'
// import kStartImg from '../assets/kStartImg.jpeg'
// import blueStarImg from '../assets/blueStarImg.jpeg'
// import aBacteryNanImg from '../assets/aBacteryNanImg.jpeg'
// import agroAmezaImg from '../assets/agroAmezaImg.jpeg'
// import allStarPowderImg from '../assets/allStarPowderImg.jpeg'
// import lorvillockImg from '../assets/lorvillockImg.jpeg'
// import aBossImg from '../assets/aBossImg.jpeg'
// import advaltImg from '../assets/advaltImg.jpeg'
// import apex80Img from '../assets/apex80Img.jpeg'
// import greenStarImg from '../assets/greenStarImg.jpeg'
// import ultimateKStartImg from '../assets/ultimateKStartImg.jpeg'
// import asset47Img from '../assets/asset47Img.jpeg'
// import againstImg from '../assets/againstImg.jpeg'
// import bio60Img from '../assets/bio60Img.jpeg'
// import superOnionImg from '../assets/superOnionImg.jpeg'
// import bordemarImg from '../assets/bordemarImg.jpeg'

// const products = [
//   {
//     id: 1, name: 'Shine Star', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     img: shineStarImg, price: 320, mrp: 380, off: 16, rating: 5, reviews: 112,
//     description: 'Shine Star improves flowering and enhances the shape and size of fruits. It is useful for tomato, cabbage, fenugreek, kohlrabi and grasses. Dose: 4 g per 50 litres of water. Also useful for foliar spray at 200 g per 200 litres per acre.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'Tomato, Cabbage, Fenugreek, Kohlrabi, Grasses',
//   },
//   {
//     id: 2, name: 'Crown Gold', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     img: crownGoldImg, price: 450, mrp: 520, off: 13, rating: 4.5, reviews: 98,
//     description: 'Crown Gold promotes new shoot growth and controls downy mildew effectively. It improves fruit setting and weight, making it ideal for all leafy and fruit vegetables.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'All Vegetables & Fruit Crops',
//   },
//   {
//     id: 3, name: 'Rootwell Powder', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     img: rootwellImg, price: 280, mrp: 330, off: 15, rating: 4.5, reviews: 87,
//     description: 'Rootwell Powder promotes rapid and healthy root development. It improves soil microorganism activity, accelerates seed germination and helps new transplants establish quickly. Suitable for all newly planted crops via drip or spray.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'All New Plantings & Transplants',
//   },
//   {
//     id: 4, name: 'Silcoat', brand: 'Bawiskar', category: 'Micronutrients',
//     img: silcoatImg, price: 390, mrp: 460, off: 15, rating: 5, reviews: 74,
//     description: 'Silcoat reduces pesticide usage by enhancing nutrient absorption through silicon technology. It provides natural shine to leaves and fruits and improves stress tolerance. Dose: 3 g per 1 litre for foliar spray / 2 kg per acre for soil application.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'Tomato, Onion, Potato, Grapes, Mirchi, Flowers',
//   },
//   {
//     id: 5, name: 'C-Make', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     img: cMakeImg, price: 260, mrp: 300, off: 13, rating: 4.5, reviews: 65,
//     description: 'C-Make improves crop color and enhances central vein growth. It speeds up root development and increases production by 20–25%. Dose: 1 g per 1 litre of water for foliar spray / 200 g per 200 litre per acre.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'All Leafy & Fruit Vegetables',
//   },
//   {
//     id: 6, name: 'G-Nine', brand: 'Bawiskar', category: 'Organic Products',
//     img: gNineImg, price: 850, mrp: 1000, off: 15, rating: 4.5, reviews: 59,
//     description: 'G-Nine Organic Granules improve crop color and hasten root development. Applied at 10 kg per acre, it increases production by 20–25% and enhances soil microbial activity for long-term fertility.',
//     form: 'Granules', shelfLife: '36 Months', suitableFor: 'All Crops – Soil Application',
//   },
//   {
//     id: 7, name: 'Explodus', brand: 'Bawiskar', category: 'Pesticides',
//     img: expludosImg, price: 480, mrp: 560, off: 14, rating: 5, reviews: 103,
//     description: 'Explodus controls red mites rapidly and is highly effective against aphids, thrips, whitefly and leaf-eating caterpillars. It also eliminates juice-sucking insects. Dose: 2 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Grapes, Tomato, Onion, Cabbage, Flowers',
//   },
//   {
//     id: 8, name: 'A-Silam', brand: 'Bawiskar', category: 'Micronutrients',
//     img: aSilamImg, price: 310, mrp: 370, off: 16, rating: 4.5, reviews: 48,
//     description: 'A-Silam is a blend of silicon and amino acids. Silicon improves crop strength and boosts natural immunity while amino acids enhance soil nutrient availability and crop growth. Dose: 2 g per litre of water for foliar application.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'All Crops',
//   },
//   {
//     id: 9, name: 'Tons', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     img: tonsImg, price: 290, mrp: 340, off: 15, rating: 4.5, reviews: 56,
//     description: 'Tons promotes new shoot growth and controls downy mildew effectively. It improves fruit setting, weight and overall crop quality. Dose: 1 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Leafy Vegetables & Fruit Crops',
//   },
//   {
//     id: 10, name: 'K-Start', brand: 'Bawiskar', category: 'Fertilizers',
//     img: kStartImg, price: 520, mrp: 610, off: 15, rating: 5, reviews: 91,
//     description: 'K-Start feeds soil microorganisms and improves root function. It boosts fruit color, size and overall yield. Suitable for foliar spray at 1 litre per acre / 2 ml per litre of water for spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Fruit Crops, Vegetables & Flowers',
//   },
//   {
//     id: 11, name: 'Blue Star', brand: 'Bawiskar', category: 'Fungicides',
//     img: blueStarImg, price: 430, mrp: 500, off: 14, rating: 4.5, reviews: 77,
//     description: 'Blue Star controls fungal infections and prevents flower drop. It protects crops from harsh weather stress. Dose: 2–3 ml per 1 litre of water for foliar spray / 5 ml per litre of water for soil drench.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Tomato, Onion, Grapes, All Fruit Crops, Flowers',
//   },
//   {
//     id: 12, name: 'A Bactery Nan', brand: 'Bawiskar', category: 'Pesticides',
//     img: aBacteryNanImg, price: 380, mrp: 450, off: 16, rating: 4.5, reviews: 42,
//     description: 'A Bactery Nan is a broad-spectrum bactericide. Mix 20 g per 60 litres of water and spray on crops. It controls bacterial diseases on rice, bhaji, mirchi, chilli and leafy vegetables. Also protects skin — wash hands thoroughly after use.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'Rice, Bhaji, Mirchi, Chilli, Leafy Vegetables',
//   },
//   {
//     id: 13, name: 'Agro Ameza', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     img: agroAmezaImg, price: 350, mrp: 410, off: 15, rating: 5, reviews: 68,
//     description: 'Agro Ameza promotes new shoot growth in grapevines and other fruit crops. Controls downy mildew and helps with fruit sizing. Dose: 2 ml per 1 litre of water for foliar spray. Suitable for all leafy vegetables and fruit crops.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Grapes, Pineapple, Kalo, All Vegetables & Flowers',
//   },
//   {
//     id: 14, name: 'All Star Powder', brand: 'Bawiskar', category: 'Fungicides',
//     img: allStarPowderImg, price: 410, mrp: 480, off: 15, rating: 4.5, reviews: 53,
//     description: 'All Star Powder controls fungal crop rot and is effective against downy mildew and other fungal diseases on grapevines. It improves fruit setting and general crop health. Dose: 2 ml per 1 litre of water for foliar spray.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'Grapes, Tomato, Mirchi, Chilli, All Leafy Vegetables',
//   },
//   {
//     id: 15, name: 'Lorvillock', brand: 'Bawiskar', category: 'Pesticides',
//     img: lorvillockImg, price: 460, mrp: 540, off: 15, rating: 4.5, reviews: 39,
//     description: 'Lorvillock controls mealybug on tomato, onion, cabbage and cauliflower. It is effective against leaf-curling pests and destroys fruit popping insects. Dose: 1 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Tomato, Onion, Cabbage, Cauliflower',
//   },
//   {
//     id: 16, name: 'A Boss', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     img: aBossImg, price: 300, mrp: 350, off: 14, rating: 5, reviews: 82,
//     description: 'A Boss promotes new shoots and controls downy mildew. It improves fruit quality and overall weight of the crop. Dose: 1 ml per 1 litre of water for foliar spray. Suitable for all leafy vegetables and fruit crops.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Leafy Vegetables & Fruit Crops',
//   },
//   {
//     id: 17, name: 'Advalt Onion Special', brand: 'Bawiskar', category: 'Fertilizers',
//     img: advaltImg, price: 490, mrp: 580, off: 16, rating: 4.5, reviews: 61,
//     description: 'Advalt Onion Special is formulated specifically for onion bulb development. It stops root rot, strengthens stems and improves bulb size. Dose: 5 ml per 1 litre of water for foliar spray / 2 ml per 1 litre for soil drench.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Onion, Garlic & Root Crops',
//   },
//   {
//     id: 18, name: 'Apex 80', brand: 'Bawiskar', category: 'Organic Products',
//     img: apex80Img, price: 270, mrp: 320, off: 16, rating: 4.5, reviews: 44,
//     description: 'Apex 80 is a systemic product with silicon technology that enhances sticking and spreading of all spray chemicals. It improves the effectiveness of insecticides and fungicides when added to the spray tank. Dose: 0.8 ml per litre / 500 ml per acre with soil drenching.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Crops – Use with Other Sprays',
//   },
//   {
//     id: 19, name: 'Green Star', brand: 'Bawiskar', category: 'Fungicides',
//     img: greenStarImg, price: 370, mrp: 430, off: 14, rating: 5, reviews: 96,
//     description: 'Green Star controls cotton boll worm, downy mildew, black spots, copper deficiency and fruit cracking in one spray. Dose: 1 g per 1 litre of water for foliar spray. Suitable for tomato, mirchi, onion, grapes, fruit crops and flowers.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'Tomato, Mirchi, Onion, Grapes, Fruit Crops, Flowers',
//   },
//   {
//     id: 20, name: 'Ultimate Special K-Start', brand: 'Bawiskar', category: 'Fertilizers',
//     img: ultimateKStartImg, price: 1200, mrp: 1400, off: 14, rating: 4.5, reviews: 73,
//     description: 'Ultimate Special K-Start improves color and maturity of onion, potato, sugarcane and vegetable crops. It helps change onion leaf color, increases bulb size and boosts production by 20–25%. Dose: 5 litres per acre dissolved in water for soil application.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Onion, Potato, Sugarcane, All Vegetables',
//   },
//   {
//     id: 21, name: 'Asset 47', brand: 'Bawiskar', category: 'Pesticides',
//     img: asset47Img, price: 440, mrp: 520, off: 15, rating: 4.5, reviews: 57,
//     description: 'Asset 47 controls red mites quickly and effectively. It is also effective against aphids, thrips, whitefly and leaf-eating caterpillars. Dose: 1 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Grapes, Tomato, Mirchi, Flowers, All Fruit Crops',
//   },
//   {
//     id: 22, name: 'Against', brand: 'Bawiskar', category: 'Pesticides',
//     img: againstImg, price: 390, mrp: 460, off: 15, rating: 4.5, reviews: 35,
//     description: 'Against is a plant-extract-based product that controls viral infections in crops. It improves stem thickness, strengthens root health and protects against sucking pests. Dose: 2 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Papaya, Tomato, Mirchi, All Fruit Crops',
//   },
//   {
//     id: 23, name: 'Bio 60', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     img: bio60Img, price: 330, mrp: 390, off: 15, rating: 5, reviews: 88,
//     description: 'Bio 60 promotes new shoot growth and improves flowering. It enhances fruit setting, size and weight across all crop types. Dose: 2 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Leafy Vegetables, Fruit Crops & Flowers',
//   },
//   {
//     id: 24, name: 'Super Onion Potato Special', brand: 'Bawiskar', category: 'Fertilizers',
//     img: superOnionImg, price: 560, mrp: 650, off: 14, rating: 4.5, reviews: 49,
//     description: 'Super Onion Potato Special improves bulb growth and ensures uniformity in onion and potato crops. It boosts healthy growth and increases overall production by 20–25%. Dose: 3/4 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Onion, Potato & Root Vegetables',
//   },
//   {
//     id: 25, name: 'Bordemar', brand: 'Bawiskar', category: 'Fungicides',
//     img: bordemarImg, price: 420, mrp: 490, off: 14, rating: 4.5, reviews: 66,
//     description: 'Bordemar controls root rot and bacterial crop diseases. It is effective against downy mildew and fungal infections. Dose: 2 ml per 1 litre for foliar spray / 5 ml per litre for soil drench.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Crops – Soil & Foliar Application',
//   },
// ]

// const categories = [
//   { name: 'Fertilizers', count: 4 },
//   { name: 'Pesticides', count: 5 },
//   { name: 'Fungicides', count: 5 },
//   { name: 'Micronutrients', count: 2 },
//   { name: 'Plant Growth Promoters', count: 8 },
//   { name: 'Organic Products', count: 2 },
// ]

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

// const Products = ({ onProductClick }) => {
//   const [selectedCategory, setSelectedCategory] = useState('All Categories')
//   const [priceRange, setPriceRange] = useState(5000)
//   const [selectedRating, setSelectedRating] = useState(null)
//   const [sortBy, setSortBy] = useState('Popularity')
//   const [currentPage, setCurrentPage] = useState(1)

//   const resetFilters = () => {
//     setSelectedCategory('All Categories')
//     setPriceRange(5000)
//     setSelectedRating(null)
//   }

//   const displayedProducts = useMemo(() => {
//     let result = [...products]

//     if (selectedCategory !== 'All Categories') {
//       result = result.filter((p) => p.category === selectedCategory)
//     }

//     result = result.filter((p) => p.price <= priceRange)

//     if (selectedRating) {
//       result = result.filter((p) => p.rating >= selectedRating)
//     }

//     switch (sortBy) {
//       case 'Price: Low to High':
//         result.sort((a, b) => a.price - b.price)
//         break
//       case 'Price: High to Low':
//         result.sort((a, b) => b.price - a.price)
//         break
//       case 'Rating':
//         result.sort((a, b) => b.rating - a.rating)
//         break
//       case 'Newest':
//         result.sort((a, b) => b.id - a.id)
//         break
//       default:
//         result.sort((a, b) => b.reviews - a.reviews)
//         break
//     }

//     return result
//   }, [selectedCategory, priceRange, selectedRating, sortBy])

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
//               <p className="products-count">Showing 1–{displayedProducts.length} of {displayedProducts.length} products</p>
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
//             {displayedProducts.map((p) => (
//               <div
//                 className="product-card"
//                 key={p.id}
//                 onClick={() => onProductClick(p)}
//                 style={{ cursor: 'pointer' }}
//               >
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
//                 <button
//                   className="add-to-cart-btn"
//                   onClick={(e) => e.stopPropagation()}
//                 >
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

// export default Products


// import React, { useState, useMemo } from 'react'
// import shineStarImg from '../assets/shineStarImg.jpeg'
// import crownGoldImg from '../assets/crownGoldImg.jpeg'
// import rootwellImg from '../assets/rootwellImg.jpeg'
// import silcoatImg from '../assets/silcoatImg.jpeg'
// import cMakeImg from '../assets/cMakeImg.jpeg'
// import gNineImg from '../assets/gNineImg.jpeg'
// import expludosImg from '../assets/expludosImg.jpeg'
// import aSilamImg from '../assets/aSilamImg.jpeg'
// import tonsImg from '../assets/tonsImg.jpeg'
// import kStartImg from '../assets/kStartImg.jpeg'
// import blueStarImg from '../assets/blueStarImg.jpeg'
// import aBacteryNanImg from '../assets/aBacteryNanImg.jpeg'
// import agroAmezaImg from '../assets/agroAmezaImg.jpeg'
// import allStarPowderImg from '../assets/allStarPowderImg.jpeg'
// import lorvillockImg from '../assets/lorvillockImg.jpeg'
// import aBossImg from '../assets/aBossImg.jpeg'
// import advaltImg from '../assets/advaltImg.jpeg'
// import apex80Img from '../assets/apex80Img.jpeg'
// import greenStarImg from '../assets/greenStarImg.jpeg'
// import ultimateKStartImg from '../assets/ultimateKStartImg.jpeg'
// import asset47Img from '../assets/asset47Img.jpeg'
// import againstImg from '../assets/againstImg.jpeg'
// import bio60Img from '../assets/bio60Img.jpeg'
// import superOnionImg from '../assets/superOnionImg.jpeg'
// import bordemarImg from '../assets/bordemarImg.jpeg'

// const products = [
//   {
//     id: 1, name: 'Shine Star', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     img: shineStarImg, price: 320, mrp: 380, off: 16, rating: 5, reviews: 112,
//     description: 'Shine Star improves flowering and enhances the shape and size of fruits. It is useful for tomato, cabbage, fenugreek, kohlrabi and grasses. Dose: 4 g per 50 litres of water. Also useful for foliar spray at 200 g per 200 litres per acre.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'Tomato, Cabbage, Fenugreek, Kohlrabi, Grasses',
//   },
//   {
//     id: 2, name: 'Crown Gold', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     img: crownGoldImg, price: 450, mrp: 520, off: 13, rating: 4.5, reviews: 98,
//     description: 'Crown Gold promotes new shoot growth and controls downy mildew effectively. It improves fruit setting and weight, making it ideal for all leafy and fruit vegetables.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'All Vegetables & Fruit Crops',
//   },
//   {
//     id: 3, name: 'Rootwell Powder', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     img: rootwellImg, price: 280, mrp: 330, off: 15, rating: 4.5, reviews: 87,
//     description: 'Rootwell Powder promotes rapid and healthy root development. It improves soil microorganism activity, accelerates seed germination and helps new transplants establish quickly. Suitable for all newly planted crops via drip or spray.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'All New Plantings & Transplants',
//   },
//   {
//     id: 4, name: 'Silcoat', brand: 'Bawiskar', category: 'Micronutrients',
//     img: silcoatImg, price: 390, mrp: 460, off: 15, rating: 5, reviews: 74,
//     description: 'Silcoat reduces pesticide usage by enhancing nutrient absorption through silicon technology. It provides natural shine to leaves and fruits and improves stress tolerance. Dose: 3 g per 1 litre for foliar spray / 2 kg per acre for soil application.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'Tomato, Onion, Potato, Grapes, Mirchi, Flowers',
//   },
//   {
//     id: 5, name: 'C-Make', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     img: cMakeImg, price: 260, mrp: 300, off: 13, rating: 4.5, reviews: 65,
//     description: 'C-Make improves crop color and enhances central vein growth. It speeds up root development and increases production by 20–25%. Dose: 1 g per 1 litre of water for foliar spray / 200 g per 200 litre per acre.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'All Leafy & Fruit Vegetables',
//   },
//   {
//     id: 6, name: 'G-Nine', brand: 'Bawiskar', category: 'Organic Products',
//     img: gNineImg, price: 850, mrp: 1000, off: 15, rating: 4.5, reviews: 59,
//     description: 'G-Nine Organic Granules improve crop color and hasten root development. Applied at 10 kg per acre, it increases production by 20–25% and enhances soil microbial activity for long-term fertility.',
//     form: 'Granules', shelfLife: '36 Months', suitableFor: 'All Crops – Soil Application',
//   },
//   {
//     id: 7, name: 'Explodus', brand: 'Bawiskar', category: 'Pesticides',
//     img: expludosImg, price: 480, mrp: 560, off: 14, rating: 5, reviews: 103,
//     description: 'Explodus controls red mites rapidly and is highly effective against aphids, thrips, whitefly and leaf-eating caterpillars. It also eliminates juice-sucking insects. Dose: 2 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Grapes, Tomato, Onion, Cabbage, Flowers',
//   },
//   {
//     id: 8, name: 'A-Silam', brand: 'Bawiskar', category: 'Micronutrients',
//     img: aSilamImg, price: 310, mrp: 370, off: 16, rating: 4.5, reviews: 48,
//     description: 'A-Silam is a blend of silicon and amino acids. Silicon improves crop strength and boosts natural immunity while amino acids enhance soil nutrient availability and crop growth. Dose: 2 g per litre of water for foliar application.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'All Crops',
//   },
//   {
//     id: 9, name: 'Tons', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     img: tonsImg, price: 290, mrp: 340, off: 15, rating: 4.5, reviews: 56,
//     description: 'Tons promotes new shoot growth and controls downy mildew effectively. It improves fruit setting, weight and overall crop quality. Dose: 1 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Leafy Vegetables & Fruit Crops',
//   },
//   {
//     id: 10, name: 'K-Start', brand: 'Bawiskar', category: 'Fertilizers',
//     img: kStartImg, price: 520, mrp: 610, off: 15, rating: 5, reviews: 91,
//     description: 'K-Start feeds soil microorganisms and improves root function. It boosts fruit color, size and overall yield. Suitable for foliar spray at 1 litre per acre / 2 ml per litre of water for spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Fruit Crops, Vegetables & Flowers',
//   },
//   {
//     id: 11, name: 'Blue Star', brand: 'Bawiskar', category: 'Fungicides',
//     img: blueStarImg, price: 430, mrp: 500, off: 14, rating: 4.5, reviews: 77,
//     description: 'Blue Star controls fungal infections and prevents flower drop. It protects crops from harsh weather stress. Dose: 2–3 ml per 1 litre of water for foliar spray / 5 ml per litre of water for soil drench.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Tomato, Onion, Grapes, All Fruit Crops, Flowers',
//   },
//   {
//     id: 12, name: 'A Bactery Nan', brand: 'Bawiskar', category: 'Pesticides',
//     img: aBacteryNanImg, price: 380, mrp: 450, off: 16, rating: 4.5, reviews: 42,
//     description: 'A Bactery Nan is a broad-spectrum bactericide. Mix 20 g per 60 litres of water and spray on crops. It controls bacterial diseases on rice, bhaji, mirchi, chilli and leafy vegetables. Also protects skin — wash hands thoroughly after use.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'Rice, Bhaji, Mirchi, Chilli, Leafy Vegetables',
//   },
//   {
//     id: 13, name: 'Agro Ameza', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     img: agroAmezaImg, price: 350, mrp: 410, off: 15, rating: 5, reviews: 68,
//     description: 'Agro Ameza promotes new shoot growth in grapevines and other fruit crops. Controls downy mildew and helps with fruit sizing. Dose: 2 ml per 1 litre of water for foliar spray. Suitable for all leafy vegetables and fruit crops.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Grapes, Pineapple, Kalo, All Vegetables & Flowers',
//   },
//   {
//     id: 14, name: 'All Star Powder', brand: 'Bawiskar', category: 'Fungicides',
//     img: allStarPowderImg, price: 410, mrp: 480, off: 15, rating: 4.5, reviews: 53,
//     description: 'All Star Powder controls fungal crop rot and is effective against downy mildew and other fungal diseases on grapevines. It improves fruit setting and general crop health. Dose: 2 ml per 1 litre of water for foliar spray.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'Grapes, Tomato, Mirchi, Chilli, All Leafy Vegetables',
//   },
//   {
//     id: 15, name: 'Lorvillock', brand: 'Bawiskar', category: 'Pesticides',
//     img: lorvillockImg, price: 460, mrp: 540, off: 15, rating: 4.5, reviews: 39,
//     description: 'Lorvillock controls mealybug on tomato, onion, cabbage and cauliflower. It is effective against leaf-curling pests and destroys fruit popping insects. Dose: 1 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Tomato, Onion, Cabbage, Cauliflower',
//   },
//   {
//     id: 16, name: 'A Boss', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     img: aBossImg, price: 300, mrp: 350, off: 14, rating: 5, reviews: 82,
//     description: 'A Boss promotes new shoots and controls downy mildew. It improves fruit quality and overall weight of the crop. Dose: 1 ml per 1 litre of water for foliar spray. Suitable for all leafy vegetables and fruit crops.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Leafy Vegetables & Fruit Crops',
//   },
//   {
//     id: 17, name: 'Advalt Onion Special', brand: 'Bawiskar', category: 'Fertilizers',
//     img: advaltImg, price: 490, mrp: 580, off: 16, rating: 4.5, reviews: 61,
//     description: 'Advalt Onion Special is formulated specifically for onion bulb development. It stops root rot, strengthens stems and improves bulb size. Dose: 5 ml per 1 litre of water for foliar spray / 2 ml per 1 litre for soil drench.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Onion, Garlic & Root Crops',
//   },
//   {
//     id: 18, name: 'Apex 80', brand: 'Bawiskar', category: 'Organic Products',
//     img: apex80Img, price: 270, mrp: 320, off: 16, rating: 4.5, reviews: 44,
//     description: 'Apex 80 is a systemic product with silicon technology that enhances sticking and spreading of all spray chemicals. It improves the effectiveness of insecticides and fungicides when added to the spray tank. Dose: 0.8 ml per litre / 500 ml per acre with soil drenching.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Crops – Use with Other Sprays',
//   },
//   {
//     id: 19, name: 'Green Star', brand: 'Bawiskar', category: 'Fungicides',
//     img: greenStarImg, price: 370, mrp: 430, off: 14, rating: 5, reviews: 96,
//     description: 'Green Star controls cotton boll worm, downy mildew, black spots, copper deficiency and fruit cracking in one spray. Dose: 1 g per 1 litre of water for foliar spray. Suitable for tomato, mirchi, onion, grapes, fruit crops and flowers.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'Tomato, Mirchi, Onion, Grapes, Fruit Crops, Flowers',
//   },
//   {
//     id: 20, name: 'Ultimate Special K-Start', brand: 'Bawiskar', category: 'Fertilizers',
//     img: ultimateKStartImg, price: 1200, mrp: 1400, off: 14, rating: 4.5, reviews: 73,
//     description: 'Ultimate Special K-Start improves color and maturity of onion, potato, sugarcane and vegetable crops. It helps change onion leaf color, increases bulb size and boosts production by 20–25%. Dose: 5 litres per acre dissolved in water for soil application.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Onion, Potato, Sugarcane, All Vegetables',
//   },
//   {
//     id: 21, name: 'Asset 47', brand: 'Bawiskar', category: 'Pesticides',
//     img: asset47Img, price: 440, mrp: 520, off: 15, rating: 4.5, reviews: 57,
//     description: 'Asset 47 controls red mites quickly and effectively. It is also effective against aphids, thrips, whitefly and leaf-eating caterpillars. Dose: 1 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Grapes, Tomato, Mirchi, Flowers, All Fruit Crops',
//   },
//   {
//     id: 22, name: 'Against', brand: 'Bawiskar', category: 'Pesticides',
//     img: againstImg, price: 390, mrp: 460, off: 15, rating: 4.5, reviews: 35,
//     description: 'Against is a plant-extract-based product that controls viral infections in crops. It improves stem thickness, strengthens root health and protects against sucking pests. Dose: 2 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Papaya, Tomato, Mirchi, All Fruit Crops',
//   },
//   {
//     id: 23, name: 'Bio 60', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     img: bio60Img, price: 330, mrp: 390, off: 15, rating: 5, reviews: 88,
//     description: 'Bio 60 promotes new shoot growth and improves flowering. It enhances fruit setting, size and weight across all crop types. Dose: 2 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Leafy Vegetables, Fruit Crops & Flowers',
//   },
//   {
//     id: 24, name: 'Super Onion Potato Special', brand: 'Bawiskar', category: 'Fertilizers',
//     img: superOnionImg, price: 560, mrp: 650, off: 14, rating: 4.5, reviews: 49,
//     description: 'Super Onion Potato Special improves bulb growth and ensures uniformity in onion and potato crops. It boosts healthy growth and increases overall production by 20–25%. Dose: 3/4 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Onion, Potato & Root Vegetables',
//   },
//   {
//     id: 25, name: 'Bordemar', brand: 'Bawiskar', category: 'Fungicides',
//     img: bordemarImg, price: 420, mrp: 490, off: 14, rating: 4.5, reviews: 66,
//     description: 'Bordemar controls root rot and bacterial crop diseases. It is effective against downy mildew and fungal infections. Dose: 2 ml per 1 litre for foliar spray / 5 ml per litre for soil drench.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Crops – Soil & Foliar Application',
//   },
// ]

// export { products }

// const categories = [
//   { name: 'Fertilizers', count: 4 },
//   { name: 'Pesticides', count: 5 },
//   { name: 'Fungicides', count: 5 },
//   { name: 'Micronutrients', count: 2 },
//   { name: 'Plant Growth Promoters', count: 8 },
//   { name: 'Organic Products', count: 2 },
// ]

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

// const Products = ({ onProductClick }) => {
//   const [selectedCategory, setSelectedCategory] = useState('All Categories')
//   const [priceRange, setPriceRange] = useState(5000)
//   const [selectedRating, setSelectedRating] = useState(null)
//   const [sortBy, setSortBy] = useState('Popularity')
//   const [currentPage, setCurrentPage] = useState(1)

//   const resetFilters = () => {
//     setSelectedCategory('All Categories')
//     setPriceRange(5000)
//     setSelectedRating(null)
//   }

//   const displayedProducts = useMemo(() => {
//     let result = [...products]

//     if (selectedCategory !== 'All Categories') {
//       result = result.filter((p) => p.category === selectedCategory)
//     }

//     result = result.filter((p) => p.price <= priceRange)

//     if (selectedRating) {
//       result = result.filter((p) => p.rating >= selectedRating)
//     }

//     switch (sortBy) {
//       case 'Price: Low to High':
//         result.sort((a, b) => a.price - b.price)
//         break
//       case 'Price: High to Low':
//         result.sort((a, b) => b.price - a.price)
//         break
//       case 'Rating':
//         result.sort((a, b) => b.rating - a.rating)
//         break
//       case 'Newest':
//         result.sort((a, b) => b.id - a.id)
//         break
//       default:
//         result.sort((a, b) => b.reviews - a.reviews)
//         break
//     }

//     return result
//   }, [selectedCategory, priceRange, selectedRating, sortBy])

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
//               <p className="products-count">Showing 1–{displayedProducts.length} of {displayedProducts.length} products</p>
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
//             {displayedProducts.map((p) => (
//               <div
//                 className="product-card"
//                 key={p.id}
//                 onClick={() => onProductClick(p)}
//                 style={{ cursor: 'pointer' }}
//               >
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
//                 <button
//                   className="add-to-cart-btn"
//                   onClick={(e) => e.stopPropagation()}
//                 >
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

// export default Products


// import React, { useState, useMemo } from 'react'
// import shineStarImg from '../assets/shineStarImg.jpeg'
// import crownGoldImg from '../assets/crownGoldImg.jpeg'
// import rootwellImg from '../assets/rootwellImg.jpeg'
// import silcoatImg from '../assets/silcoatImg.jpeg'
// import cMakeImg from '../assets/cMakeImg.jpeg'
// import gNineImg from '../assets/gNineImg.jpeg'
// import expludosImg from '../assets/expludosImg.jpeg'
// import aSilamImg from '../assets/aSilamImg.jpeg'
// import tonsImg from '../assets/tonsImg.jpeg'
// import kStartImg from '../assets/kStartImg.jpeg'
// import blueStarImg from '../assets/blueStarImg.jpeg'
// import aBacteryNanImg from '../assets/aBacteryNanImg.jpeg'
// import agroAmezaImg from '../assets/agroAmezaImg.jpeg'
// import allStarPowderImg from '../assets/allStarPowderImg.jpeg'
// import lorvillockImg from '../assets/lorvillockImg.jpeg'
// import aBossImg from '../assets/aBossImg.jpeg'
// import advaltImg from '../assets/advaltImg.jpeg'
// import apex80Img from '../assets/apex80Img.jpeg'
// import greenStarImg from '../assets/greenStarImg.jpeg'
// import ultimateKStartImg from '../assets/ultimateKStartImg.jpeg'
// import asset47Img from '../assets/asset47Img.jpeg'
// import againstImg from '../assets/againstImg.jpeg'
// import bio60Img from '../assets/bio60Img.jpeg'
// import superOnionImg from '../assets/superOnionImg.jpeg'
// import bordemarImg from '../assets/bordemarImg.jpeg'

// const products = [
//   {
//     id: 1, name: 'Shine Star', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     image: shineStarImg, price: 320, mrp: 380, off: 16, rating: 5, reviews: 112,
//     packSizes: [{ size: '250 ml', price: 320 }, { size: '500 ml', price: 600 }, { size: '1 L', price: 1100 }],
//     description: 'Shine Star improves flowering and enhances the shape and size of fruits. It is useful for tomato, cabbage, fenugreek, kohlrabi and grasses. Dose: 4 g per 50 litres of water. Also useful for foliar spray at 200 g per 200 litres per acre.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'Tomato, Cabbage, Fenugreek, Kohlrabi, Grasses',
//   },
//   {
//     id: 2, name: 'Crown Gold', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     image: crownGoldImg, price: 450, mrp: 520, off: 13, rating: 4.5, reviews: 98,
//     packSizes: [{ size: '250 ml', price: 450 }, { size: '500 ml', price: 850 }, { size: '1 L', price: 1600 }],
//     description: 'Crown Gold promotes new shoot growth and controls downy mildew effectively. It improves fruit setting and weight, making it ideal for all leafy and fruit vegetables.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'All Vegetables & Fruit Crops',
//   },
//   {
//     id: 3, name: 'Rootwell Powder', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     image: rootwellImg, price: 280, mrp: 330, off: 15, rating: 4.5, reviews: 87,
//     packSizes: [{ size: '250 g', price: 280 }, { size: '500 g', price: 530 }, { size: '1 kg', price: 980 }],
//     description: 'Rootwell Powder promotes rapid and healthy root development. It improves soil microorganism activity, accelerates seed germination and helps new transplants establish quickly. Suitable for all newly planted crops via drip or spray.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'All New Plantings & Transplants',
//   },
//   {
//     id: 4, name: 'Silcoat', brand: 'Bawiskar', category: 'Micronutrients',
//     image: silcoatImg, price: 390, mrp: 460, off: 15, rating: 5, reviews: 74,
//     packSizes: [{ size: '250 ml', price: 390 }, { size: '500 ml', price: 740 }, { size: '1 L', price: 1400 }],
//     description: 'Silcoat reduces pesticide usage by enhancing nutrient absorption through silicon technology. It provides natural shine to leaves and fruits and improves stress tolerance. Dose: 3 g per 1 litre for foliar spray / 2 kg per acre for soil application.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'Tomato, Onion, Potato, Grapes, Mirchi, Flowers',
//   },
//   {
//     id: 5, name: 'C-Make', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     image: cMakeImg, price: 260, mrp: 300, off: 13, rating: 4.5, reviews: 65,
//     packSizes: [{ size: '250 ml', price: 260 }, { size: '500 ml', price: 490 }, { size: '1 L', price: 900 }],
//     description: 'C-Make improves crop color and enhances central vein growth. It speeds up root development and increases production by 20–25%. Dose: 1 g per 1 litre of water for foliar spray / 200 g per 200 litre per acre.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'All Leafy & Fruit Vegetables',
//   },
//   {
//     id: 6, name: 'G-Nine', brand: 'Bawiskar', category: 'Organic Products',
//     image: gNineImg, price: 850, mrp: 1000, off: 15, rating: 4.5, reviews: 59,
//     packSizes: [{ size: '5 kg', price: 850 }, { size: '10 kg', price: 1600 }, { size: '25 kg', price: 3800 }],
//     description: 'G-Nine Organic Granules improve crop color and hasten root development. Applied at 10 kg per acre, it increases production by 20–25% and enhances soil microbial activity for long-term fertility.',
//     form: 'Granules', shelfLife: '36 Months', suitableFor: 'All Crops – Soil Application',
//   },
//   {
//     id: 7, name: 'Explodus', brand: 'Bawiskar', category: 'Pesticides',
//     image: expludosImg, price: 480, mrp: 560, off: 14, rating: 5, reviews: 103,
//     packSizes: [{ size: '100 ml', price: 480 }, { size: '250 ml', price: 1100 }, { size: '500 ml', price: 2000 }],
//     description: 'Explodus controls red mites rapidly and is highly effective against aphids, thrips, whitefly and leaf-eating caterpillars. It also eliminates juice-sucking insects. Dose: 2 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Grapes, Tomato, Onion, Cabbage, Flowers',
//   },
//   {
//     id: 8, name: 'A-Silam', brand: 'Bawiskar', category: 'Micronutrients',
//     image: aSilamImg, price: 310, mrp: 370, off: 16, rating: 4.5, reviews: 48,
//     packSizes: [{ size: '250 g', price: 310 }, { size: '500 g', price: 590 }, { size: '1 kg', price: 1100 }],
//     description: 'A-Silam is a blend of silicon and amino acids. Silicon improves crop strength and boosts natural immunity while amino acids enhance soil nutrient availability and crop growth. Dose: 2 g per litre of water for foliar application.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'All Crops',
//   },
//   {
//     id: 9, name: 'Tons', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     image: tonsImg, price: 290, mrp: 340, off: 15, rating: 4.5, reviews: 56,
//     packSizes: [{ size: '250 ml', price: 290 }, { size: '500 ml', price: 550 }, { size: '1 L', price: 1000 }],
//     description: 'Tons promotes new shoot growth and controls downy mildew effectively. It improves fruit setting, weight and overall crop quality. Dose: 1 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Leafy Vegetables & Fruit Crops',
//   },
//   {
//     id: 10, name: 'K-Start', brand: 'Bawiskar', category: 'Fertilizers',
//     image: kStartImg, price: 520, mrp: 610, off: 15, rating: 5, reviews: 91,
//     packSizes: [{ size: '500 ml', price: 520 }, { size: '1 L', price: 980 }, { size: '5 L', price: 4500 }],
//     description: 'K-Start feeds soil microorganisms and improves root function. It boosts fruit color, size and overall yield. Suitable for foliar spray at 1 litre per acre / 2 ml per litre of water for spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Fruit Crops, Vegetables & Flowers',
//   },
//   {
//     id: 11, name: 'Blue Star', brand: 'Bawiskar', category: 'Fungicides',
//     image: blueStarImg, price: 430, mrp: 500, off: 14, rating: 4.5, reviews: 77,
//     packSizes: [{ size: '100 ml', price: 430 }, { size: '250 ml', price: 980 }, { size: '500 ml', price: 1800 }],
//     description: 'Blue Star controls fungal infections and prevents flower drop. It protects crops from harsh weather stress. Dose: 2–3 ml per 1 litre of water for foliar spray / 5 ml per litre of water for soil drench.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Tomato, Onion, Grapes, All Fruit Crops, Flowers',
//   },
//   {
//     id: 12, name: 'A Bactery Nan', brand: 'Bawiskar', category: 'Pesticides',
//     image: aBacteryNanImg, price: 380, mrp: 450, off: 16, rating: 4.5, reviews: 42,
//     packSizes: [{ size: '100 g', price: 380 }, { size: '250 g', price: 880 }, { size: '500 g', price: 1600 }],
//     description: 'A Bactery Nan is a broad-spectrum bactericide. Mix 20 g per 60 litres of water and spray on crops. It controls bacterial diseases on rice, bhaji, mirchi, chilli and leafy vegetables. Also protects skin — wash hands thoroughly after use.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'Rice, Bhaji, Mirchi, Chilli, Leafy Vegetables',
//   },
//   {
//     id: 13, name: 'Agro Ameza', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     image: agroAmezaImg, price: 350, mrp: 410, off: 15, rating: 5, reviews: 68,
//     packSizes: [{ size: '250 ml', price: 350 }, { size: '500 ml', price: 660 }, { size: '1 L', price: 1200 }],
//     description: 'Agro Ameza promotes new shoot growth in grapevines and other fruit crops. Controls downy mildew and helps with fruit sizing. Dose: 2 ml per 1 litre of water for foliar spray. Suitable for all leafy vegetables and fruit crops.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Grapes, Pineapple, Kalo, All Vegetables & Flowers',
//   },
//   {
//     id: 14, name: 'All Star Powder', brand: 'Bawiskar', category: 'Fungicides',
//     image: allStarPowderImg, price: 410, mrp: 480, off: 15, rating: 4.5, reviews: 53,
//     packSizes: [{ size: '250 g', price: 410 }, { size: '500 g', price: 780 }, { size: '1 kg', price: 1450 }],
//     description: 'All Star Powder controls fungal crop rot and is effective against downy mildew and other fungal diseases on grapevines. It improves fruit setting and general crop health. Dose: 2 ml per 1 litre of water for foliar spray.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'Grapes, Tomato, Mirchi, Chilli, All Leafy Vegetables',
//   },
//   {
//     id: 15, name: 'Lorvillock', brand: 'Bawiskar', category: 'Pesticides',
//     image: lorvillockImg, price: 460, mrp: 540, off: 15, rating: 4.5, reviews: 39,
//     packSizes: [{ size: '100 ml', price: 460 }, { size: '250 ml', price: 1050 }, { size: '500 ml', price: 1900 }],
//     description: 'Lorvillock controls mealybug on tomato, onion, cabbage and cauliflower. It is effective against leaf-curling pests and destroys fruit popping insects. Dose: 1 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Tomato, Onion, Cabbage, Cauliflower',
//   },
//   {
//     id: 16, name: 'A Boss', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     image: aBossImg, price: 300, mrp: 350, off: 14, rating: 5, reviews: 82,
//     packSizes: [{ size: '250 ml', price: 300 }, { size: '500 ml', price: 570 }, { size: '1 L', price: 1050 }],
//     description: 'A Boss promotes new shoots and controls downy mildew. It improves fruit quality and overall weight of the crop. Dose: 1 ml per 1 litre of water for foliar spray. Suitable for all leafy vegetables and fruit crops.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Leafy Vegetables & Fruit Crops',
//   },
//   {
//     id: 17, name: 'Advalt Onion Special', brand: 'Bawiskar', category: 'Fertilizers',
//     image: advaltImg, price: 490, mrp: 580, off: 16, rating: 4.5, reviews: 61,
//     packSizes: [{ size: '250 ml', price: 490 }, { size: '500 ml', price: 930 }, { size: '1 L', price: 1750 }],
//     description: 'Advalt Onion Special is formulated specifically for onion bulb development. It stops root rot, strengthens stems and improves bulb size. Dose: 5 ml per 1 litre of water for foliar spray / 2 ml per 1 litre for soil drench.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Onion, Garlic & Root Crops',
//   },
//   {
//     id: 18, name: 'Apex 80', brand: 'Bawiskar', category: 'Organic Products',
//     image: apex80Img, price: 270, mrp: 320, off: 16, rating: 4.5, reviews: 44,
//     packSizes: [{ size: '100 ml', price: 270 }, { size: '250 ml', price: 620 }, { size: '500 ml', price: 1150 }],
//     description: 'Apex 80 is a systemic product with silicon technology that enhances sticking and spreading of all spray chemicals. It improves the effectiveness of insecticides and fungicides when added to the spray tank. Dose: 0.8 ml per litre / 500 ml per acre with soil drenching.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Crops – Use with Other Sprays',
//   },
//   {
//     id: 19, name: 'Green Star', brand: 'Bawiskar', category: 'Fungicides',
//     image: greenStarImg, price: 370, mrp: 430, off: 14, rating: 5, reviews: 96,
//     packSizes: [{ size: '100 g', price: 370 }, { size: '250 g', price: 850 }, { size: '500 g', price: 1580 }],
//     description: 'Green Star controls cotton boll worm, downy mildew, black spots, copper deficiency and fruit cracking in one spray. Dose: 1 g per 1 litre of water for foliar spray. Suitable for tomato, mirchi, onion, grapes, fruit crops and flowers.',
//     form: 'Powder', shelfLife: '24 Months', suitableFor: 'Tomato, Mirchi, Onion, Grapes, Fruit Crops, Flowers',
//   },
//   {
//     id: 20, name: 'Ultimate Special K-Start', brand: 'Bawiskar', category: 'Fertilizers',
//     image: ultimateKStartImg, price: 1200, mrp: 1400, off: 14, rating: 4.5, reviews: 73,
//     packSizes: [{ size: '1 L', price: 1200 }, { size: '5 L', price: 5500 }, { size: '10 L', price: 10500 }],
//     description: 'Ultimate Special K-Start improves color and maturity of onion, potato, sugarcane and vegetable crops. It helps change onion leaf color, increases bulb size and boosts production by 20–25%. Dose: 5 litres per acre dissolved in water for soil application.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Onion, Potato, Sugarcane, All Vegetables',
//   },
//   {
//     id: 21, name: 'Asset 47', brand: 'Bawiskar', category: 'Pesticides',
//     image: asset47Img, price: 440, mrp: 520, off: 15, rating: 4.5, reviews: 57,
//     packSizes: [{ size: '100 ml', price: 440 }, { size: '250 ml', price: 1000 }, { size: '500 ml', price: 1850 }],
//     description: 'Asset 47 controls red mites quickly and effectively. It is also effective against aphids, thrips, whitefly and leaf-eating caterpillars. Dose: 1 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Grapes, Tomato, Mirchi, Flowers, All Fruit Crops',
//   },
//   {
//     id: 22, name: 'Against', brand: 'Bawiskar', category: 'Pesticides',
//     image: againstImg, price: 390, mrp: 460, off: 15, rating: 4.5, reviews: 35,
//     packSizes: [{ size: '100 ml', price: 390 }, { size: '250 ml', price: 890 }, { size: '500 ml', price: 1650 }],
//     description: 'Against is a plant-extract-based product that controls viral infections in crops. It improves stem thickness, strengthens root health and protects against sucking pests. Dose: 2 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Papaya, Tomato, Mirchi, All Fruit Crops',
//   },
//   {
//     id: 23, name: 'Bio 60', brand: 'Bawiskar', category: 'Plant Growth Promoters',
//     image: bio60Img, price: 330, mrp: 390, off: 15, rating: 5, reviews: 88,
//     packSizes: [{ size: '250 ml', price: 330 }, { size: '500 ml', price: 620 }, { size: '1 L', price: 1150 }],
//     description: 'Bio 60 promotes new shoot growth and improves flowering. It enhances fruit setting, size and weight across all crop types. Dose: 2 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Leafy Vegetables, Fruit Crops & Flowers',
//   },
//   {
//     id: 24, name: 'Super Onion Potato Special', brand: 'Bawiskar', category: 'Fertilizers',
//     image: superOnionImg, price: 560, mrp: 650, off: 14, rating: 4.5, reviews: 49,
//     packSizes: [{ size: '500 ml', price: 560 }, { size: '1 L', price: 1050 }, { size: '5 L', price: 4800 }],
//     description: 'Super Onion Potato Special improves bulb growth and ensures uniformity in onion and potato crops. It boosts healthy growth and increases overall production by 20–25%. Dose: 3/4 ml per 1 litre of water for foliar spray.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Onion, Potato & Root Vegetables',
//   },
//   {
//     id: 25, name: 'Bordemar', brand: 'Bawiskar', category: 'Fungicides',
//     image: bordemarImg, price: 420, mrp: 490, off: 14, rating: 4.5, reviews: 66,
//     packSizes: [{ size: '100 ml', price: 420 }, { size: '250 ml', price: 960 }, { size: '500 ml', price: 1800 }],
//     description: 'Bordemar controls root rot and bacterial crop diseases. It is effective against downy mildew and fungal infections. Dose: 2 ml per 1 litre for foliar spray / 5 ml per litre for soil drench.',
//     form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Crops – Soil & Foliar Application',
//   },
// ]

// export { products }

// const categories = [
//   { name: 'Fertilizers', count: 4 },
//   { name: 'Pesticides', count: 5 },
//   { name: 'Fungicides', count: 5 },
//   { name: 'Micronutrients', count: 2 },
//   { name: 'Plant Growth Promoters', count: 8 },
//   { name: 'Organic Products', count: 2 },
// ]

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

// const Products = ({ onProductClick, onAddToCart }) => {
//   const [selectedCategory, setSelectedCategory] = useState('All Categories')
//   const [priceRange, setPriceRange] = useState(5000)
//   const [selectedRating, setSelectedRating] = useState(null)
//   const [sortBy, setSortBy] = useState('Popularity')
//   const [currentPage, setCurrentPage] = useState(1)

//   const resetFilters = () => {
//     setSelectedCategory('All Categories')
//     setPriceRange(5000)
//     setSelectedRating(null)
//   }

//   const displayedProducts = useMemo(() => {
//     let result = [...products]

//     if (selectedCategory !== 'All Categories') {
//       result = result.filter((p) => p.category === selectedCategory)
//     }

//     result = result.filter((p) => p.price <= priceRange)

//     if (selectedRating) {
//       result = result.filter((p) => p.rating >= selectedRating)
//     }

//     switch (sortBy) {
//       case 'Price: Low to High':
//         result.sort((a, b) => a.price - b.price)
//         break
//       case 'Price: High to Low':
//         result.sort((a, b) => b.price - a.price)
//         break
//       case 'Rating':
//         result.sort((a, b) => b.rating - a.rating)
//         break
//       case 'Newest':
//         result.sort((a, b) => b.id - a.id)
//         break
//       default:
//         result.sort((a, b) => b.reviews - a.reviews)
//         break
//     }

//     return result
//   }, [selectedCategory, priceRange, selectedRating, sortBy])

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
//               <p className="products-count">Showing 1–{displayedProducts.length} of {displayedProducts.length} products</p>
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
//             {displayedProducts.map((p) => (
//               <div
//                 className="product-card"
//                 key={p.id}
//                 onClick={() => onProductClick(p)}
//                 style={{ cursor: 'pointer' }}
//               >
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
//                 <button
//                   className="add-to-cart-btn"
//                   onClick={(e) => {
//                     e.stopPropagation()
//                     onAddToCart(p)
//                   }}
//                 >
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

// export default Products


import React, { useState, useMemo } from 'react'
import shineStarImg from '../assets/shineStarImg.jpeg'
import crownGoldImg from '../assets/crownGoldImg.jpeg'
import rootwellImg from '../assets/rootwellImg.jpeg'
import silcoatImg from '../assets/silcoatImg.jpeg'
import cMakeImg from '../assets/cMakeImg.jpeg'
import gNineImg from '../assets/gNineImg.jpeg'
import expludosImg from '../assets/expludosImg.jpeg'
import aSilamImg from '../assets/aSilamImg.jpeg'
import tonsImg from '../assets/tonsImg.jpeg'
import kStartImg from '../assets/kStartImg.jpeg'
import blueStarImg from '../assets/blueStarImg.jpeg'
import aBacteryNanImg from '../assets/aBacteryNanImg.jpeg'
import agroAmezaImg from '../assets/agroAmezaImg.jpeg'
import allStarPowderImg from '../assets/allStarPowderImg.jpeg'
import lorvillockImg from '../assets/lorvillockImg.jpeg'
import aBossImg from '../assets/aBossImg.jpeg'
import advaltImg from '../assets/advaltImg.jpeg'
import apex80Img from '../assets/apex80Img.jpeg'
import greenStarImg from '../assets/greenStarImg.jpeg'
import ultimateKStartImg from '../assets/ultimateKStartImg.jpeg'
import asset47Img from '../assets/asset47Img.jpeg'
import againstImg from '../assets/againstImg.jpeg'
import bio60Img from '../assets/bio60Img.jpeg'
import superOnionImg from '../assets/superOnionImg.jpeg'
import bordemarImg from '../assets/bordemarImg.jpeg'

const products = [
  { id: 1, name: 'Shine Star', brand: 'Bawiskar', category: 'Plant Growth Promoters', image: shineStarImg, price: 320, mrp: 380, off: 16, rating: 5, reviews: 112, packSizes: [{ size: '250 ml', price: 320 }, { size: '500 ml', price: 600 }, { size: '1 L', price: 1100 }], description: 'Shine Star improves flowering and enhances the shape and size of fruits. It is useful for tomato, cabbage, fenugreek, kohlrabi and grasses. Dose: 4 g per 50 litres of water. Also useful for foliar spray at 200 g per 200 litres per acre.', form: 'Powder', shelfLife: '24 Months', suitableFor: 'Tomato, Cabbage, Fenugreek, Kohlrabi, Grasses' },
  { id: 2, name: 'Crown Gold', brand: 'Bawiskar', category: 'Plant Growth Promoters', image: crownGoldImg, price: 450, mrp: 520, off: 13, rating: 4.5, reviews: 98, packSizes: [{ size: '250 ml', price: 450 }, { size: '500 ml', price: 850 }, { size: '1 L', price: 1600 }], description: 'Crown Gold promotes new shoot growth and controls downy mildew effectively. It improves fruit setting and weight, making it ideal for all leafy and fruit vegetables.', form: 'Powder', shelfLife: '24 Months', suitableFor: 'All Vegetables & Fruit Crops' },
  { id: 3, name: 'Rootwell Powder', brand: 'Bawiskar', category: 'Plant Growth Promoters', image: rootwellImg, price: 280, mrp: 330, off: 15, rating: 4.5, reviews: 87, packSizes: [{ size: '250 g', price: 280 }, { size: '500 g', price: 530 }, { size: '1 kg', price: 980 }], description: 'Rootwell Powder promotes rapid and healthy root development. It improves soil microorganism activity, accelerates seed germination and helps new transplants establish quickly. Suitable for all newly planted crops via drip or spray.', form: 'Powder', shelfLife: '24 Months', suitableFor: 'All New Plantings & Transplants' },
  { id: 4, name: 'Silcoat', brand: 'Bawiskar', category: 'Micronutrients', image: silcoatImg, price: 390, mrp: 460, off: 15, rating: 5, reviews: 74, packSizes: [{ size: '250 ml', price: 390 }, { size: '500 ml', price: 740 }, { size: '1 L', price: 1400 }], description: 'Silcoat reduces pesticide usage by enhancing nutrient absorption through silicon technology. It provides natural shine to leaves and fruits and improves stress tolerance. Dose: 3 g per 1 litre for foliar spray / 2 kg per acre for soil application.', form: 'Powder', shelfLife: '24 Months', suitableFor: 'Tomato, Onion, Potato, Grapes, Mirchi, Flowers' },
  { id: 5, name: 'C-Make', brand: 'Bawiskar', category: 'Plant Growth Promoters', image: cMakeImg, price: 260, mrp: 300, off: 13, rating: 4.5, reviews: 65, packSizes: [{ size: '250 ml', price: 260 }, { size: '500 ml', price: 490 }, { size: '1 L', price: 900 }], description: 'C-Make improves crop color and enhances central vein growth. It speeds up root development and increases production by 20–25%. Dose: 1 g per 1 litre of water for foliar spray / 200 g per 200 litre per acre.', form: 'Powder', shelfLife: '24 Months', suitableFor: 'All Leafy & Fruit Vegetables' },
  { id: 6, name: 'G-Nine', brand: 'Bawiskar', category: 'Organic Products', image: gNineImg, price: 850, mrp: 1000, off: 15, rating: 4.5, reviews: 59, packSizes: [{ size: '5 kg', price: 850 }, { size: '10 kg', price: 1600 }, { size: '25 kg', price: 3800 }], description: 'G-Nine Organic Granules improve crop color and hasten root development. Applied at 10 kg per acre, it increases production by 20–25% and enhances soil microbial activity for long-term fertility.', form: 'Granules', shelfLife: '36 Months', suitableFor: 'All Crops – Soil Application' },
  { id: 7, name: 'Explodus', brand: 'Bawiskar', category: 'Pesticides', image: expludosImg, price: 480, mrp: 560, off: 14, rating: 5, reviews: 103, packSizes: [{ size: '100 ml', price: 480 }, { size: '250 ml', price: 1100 }, { size: '500 ml', price: 2000 }], description: 'Explodus controls red mites rapidly and is highly effective against aphids, thrips, whitefly and leaf-eating caterpillars. It also eliminates juice-sucking insects. Dose: 2 ml per 1 litre of water for foliar spray.', form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Grapes, Tomato, Onion, Cabbage, Flowers' },
  { id: 8, name: 'A-Silam', brand: 'Bawiskar', category: 'Micronutrients', image: aSilamImg, price: 310, mrp: 370, off: 16, rating: 4.5, reviews: 48, packSizes: [{ size: '250 g', price: 310 }, { size: '500 g', price: 590 }, { size: '1 kg', price: 1100 }], description: 'A-Silam is a blend of silicon and amino acids. Silicon improves crop strength and boosts natural immunity while amino acids enhance soil nutrient availability and crop growth. Dose: 2 g per litre of water for foliar application.', form: 'Powder', shelfLife: '24 Months', suitableFor: 'All Crops' },
  { id: 9, name: 'Tons', brand: 'Bawiskar', category: 'Plant Growth Promoters', image: tonsImg, price: 290, mrp: 340, off: 15, rating: 4.5, reviews: 56, packSizes: [{ size: '250 ml', price: 290 }, { size: '500 ml', price: 550 }, { size: '1 L', price: 1000 }], description: 'Tons promotes new shoot growth and controls downy mildew effectively. It improves fruit setting, weight and overall crop quality. Dose: 1 ml per 1 litre of water for foliar spray.', form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Leafy Vegetables & Fruit Crops' },
  { id: 10, name: 'K-Start', brand: 'Bawiskar', category: 'Fertilizers', image: kStartImg, price: 520, mrp: 610, off: 15, rating: 5, reviews: 91, packSizes: [{ size: '500 ml', price: 520 }, { size: '1 L', price: 980 }, { size: '5 L', price: 4500 }], description: 'K-Start feeds soil microorganisms and improves root function. It boosts fruit color, size and overall yield. Suitable for foliar spray at 1 litre per acre / 2 ml per litre of water for spray.', form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Fruit Crops, Vegetables & Flowers' },
  { id: 11, name: 'Blue Star', brand: 'Bawiskar', category: 'Fungicides', image: blueStarImg, price: 430, mrp: 500, off: 14, rating: 4.5, reviews: 77, packSizes: [{ size: '100 ml', price: 430 }, { size: '250 ml', price: 980 }, { size: '500 ml', price: 1800 }], description: 'Blue Star controls fungal infections and prevents flower drop. It protects crops from harsh weather stress. Dose: 2–3 ml per 1 litre of water for foliar spray / 5 ml per litre of water for soil drench.', form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Tomato, Onion, Grapes, All Fruit Crops, Flowers' },
  { id: 12, name: 'A Bactery Nan', brand: 'Bawiskar', category: 'Pesticides', image: aBacteryNanImg, price: 380, mrp: 450, off: 16, rating: 4.5, reviews: 42, packSizes: [{ size: '100 g', price: 380 }, { size: '250 g', price: 880 }, { size: '500 g', price: 1600 }], description: 'A Bactery Nan is a broad-spectrum bactericide. Mix 20 g per 60 litres of water and spray on crops. It controls bacterial diseases on rice, bhaji, mirchi, chilli and leafy vegetables. Also protects skin — wash hands thoroughly after use.', form: 'Powder', shelfLife: '24 Months', suitableFor: 'Rice, Bhaji, Mirchi, Chilli, Leafy Vegetables' },
  { id: 13, name: 'Agro Ameza', brand: 'Bawiskar', category: 'Plant Growth Promoters', image: agroAmezaImg, price: 350, mrp: 410, off: 15, rating: 5, reviews: 68, packSizes: [{ size: '250 ml', price: 350 }, { size: '500 ml', price: 660 }, { size: '1 L', price: 1200 }], description: 'Agro Ameza promotes new shoot growth in grapevines and other fruit crops. Controls downy mildew and helps with fruit sizing. Dose: 2 ml per 1 litre of water for foliar spray. Suitable for all leafy vegetables and fruit crops.', form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Grapes, Pineapple, Kalo, All Vegetables & Flowers' },
  { id: 14, name: 'All Star Powder', brand: 'Bawiskar', category: 'Fungicides', image: allStarPowderImg, price: 410, mrp: 480, off: 15, rating: 4.5, reviews: 53, packSizes: [{ size: '250 g', price: 410 }, { size: '500 g', price: 780 }, { size: '1 kg', price: 1450 }], description: 'All Star Powder controls fungal crop rot and is effective against downy mildew and other fungal diseases on grapevines. It improves fruit setting and general crop health. Dose: 2 ml per 1 litre of water for foliar spray.', form: 'Powder', shelfLife: '24 Months', suitableFor: 'Grapes, Tomato, Mirchi, Chilli, All Leafy Vegetables' },
  { id: 15, name: 'Lorvillock', brand: 'Bawiskar', category: 'Pesticides', image: lorvillockImg, price: 460, mrp: 540, off: 15, rating: 4.5, reviews: 39, packSizes: [{ size: '100 ml', price: 460 }, { size: '250 ml', price: 1050 }, { size: '500 ml', price: 1900 }], description: 'Lorvillock controls mealybug on tomato, onion, cabbage and cauliflower. It is effective against leaf-curling pests and destroys fruit popping insects. Dose: 1 ml per 1 litre of water for foliar spray.', form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Tomato, Onion, Cabbage, Cauliflower' },
  { id: 16, name: 'A Boss', brand: 'Bawiskar', category: 'Plant Growth Promoters', image: aBossImg, price: 300, mrp: 350, off: 14, rating: 5, reviews: 82, packSizes: [{ size: '250 ml', price: 300 }, { size: '500 ml', price: 570 }, { size: '1 L', price: 1050 }], description: 'A Boss promotes new shoots and controls downy mildew. It improves fruit quality and overall weight of the crop. Dose: 1 ml per 1 litre of water for foliar spray. Suitable for all leafy vegetables and fruit crops.', form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Leafy Vegetables & Fruit Crops' },
  { id: 17, name: 'Advalt Onion Special', brand: 'Bawiskar', category: 'Fertilizers', image: advaltImg, price: 490, mrp: 580, off: 16, rating: 4.5, reviews: 61, packSizes: [{ size: '250 ml', price: 490 }, { size: '500 ml', price: 930 }, { size: '1 L', price: 1750 }], description: 'Advalt Onion Special is formulated specifically for onion bulb development. It stops root rot, strengthens stems and improves bulb size. Dose: 5 ml per 1 litre of water for foliar spray / 2 ml per 1 litre for soil drench.', form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Onion, Garlic & Root Crops' },
  { id: 18, name: 'Apex 80', brand: 'Bawiskar', category: 'Organic Products', image: apex80Img, price: 270, mrp: 320, off: 16, rating: 4.5, reviews: 44, packSizes: [{ size: '100 ml', price: 270 }, { size: '250 ml', price: 620 }, { size: '500 ml', price: 1150 }], description: 'Apex 80 is a systemic product with silicon technology that enhances sticking and spreading of all spray chemicals. It improves the effectiveness of insecticides and fungicides when added to the spray tank. Dose: 0.8 ml per litre / 500 ml per acre with soil drenching.', form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Crops – Use with Other Sprays' },
  { id: 19, name: 'Green Star', brand: 'Bawiskar', category: 'Fungicides', image: greenStarImg, price: 370, mrp: 430, off: 14, rating: 5, reviews: 96, packSizes: [{ size: '100 g', price: 370 }, { size: '250 g', price: 850 }, { size: '500 g', price: 1580 }], description: 'Green Star controls cotton boll worm, downy mildew, black spots, copper deficiency and fruit cracking in one spray. Dose: 1 g per 1 litre of water for foliar spray. Suitable for tomato, mirchi, onion, grapes, fruit crops and flowers.', form: 'Powder', shelfLife: '24 Months', suitableFor: 'Tomato, Mirchi, Onion, Grapes, Fruit Crops, Flowers' },
  { id: 20, name: 'Ultimate Special K-Start', brand: 'Bawiskar', category: 'Fertilizers', image: ultimateKStartImg, price: 1200, mrp: 1400, off: 14, rating: 4.5, reviews: 73, packSizes: [{ size: '1 L', price: 1200 }, { size: '5 L', price: 5500 }, { size: '10 L', price: 10500 }], description: 'Ultimate Special K-Start improves color and maturity of onion, potato, sugarcane and vegetable crops. It helps change onion leaf color, increases bulb size and boosts production by 20–25%. Dose: 5 litres per acre dissolved in water for soil application.', form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Onion, Potato, Sugarcane, All Vegetables' },
  { id: 21, name: 'Asset 47', brand: 'Bawiskar', category: 'Pesticides', image: asset47Img, price: 440, mrp: 520, off: 15, rating: 4.5, reviews: 57, packSizes: [{ size: '100 ml', price: 440 }, { size: '250 ml', price: 1000 }, { size: '500 ml', price: 1850 }], description: 'Asset 47 controls red mites quickly and effectively. It is also effective against aphids, thrips, whitefly and leaf-eating caterpillars. Dose: 1 ml per 1 litre of water for foliar spray.', form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Grapes, Tomato, Mirchi, Flowers, All Fruit Crops' },
  { id: 22, name: 'Against', brand: 'Bawiskar', category: 'Pesticides', image: againstImg, price: 390, mrp: 460, off: 15, rating: 4.5, reviews: 35, packSizes: [{ size: '100 ml', price: 390 }, { size: '250 ml', price: 890 }, { size: '500 ml', price: 1650 }], description: 'Against is a plant-extract-based product that controls viral infections in crops. It improves stem thickness, strengthens root health and protects against sucking pests. Dose: 2 ml per 1 litre of water for foliar spray.', form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Papaya, Tomato, Mirchi, All Fruit Crops' },
  { id: 23, name: 'Bio 60', brand: 'Bawiskar', category: 'Plant Growth Promoters', image: bio60Img, price: 330, mrp: 390, off: 15, rating: 5, reviews: 88, packSizes: [{ size: '250 ml', price: 330 }, { size: '500 ml', price: 620 }, { size: '1 L', price: 1150 }], description: 'Bio 60 promotes new shoot growth and improves flowering. It enhances fruit setting, size and weight across all crop types. Dose: 2 ml per 1 litre of water for foliar spray.', form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Leafy Vegetables, Fruit Crops & Flowers' },
  { id: 24, name: 'Super Onion Potato Special', brand: 'Bawiskar', category: 'Fertilizers', image: superOnionImg, price: 560, mrp: 650, off: 14, rating: 4.5, reviews: 49, packSizes: [{ size: '500 ml', price: 560 }, { size: '1 L', price: 1050 }, { size: '5 L', price: 4800 }], description: 'Super Onion Potato Special improves bulb growth and ensures uniformity in onion and potato crops. It boosts healthy growth and increases overall production by 20–25%. Dose: 3/4 ml per 1 litre of water for foliar spray.', form: 'Liquid', shelfLife: '24 Months', suitableFor: 'Onion, Potato & Root Vegetables' },
  { id: 25, name: 'Bordemar', brand: 'Bawiskar', category: 'Fungicides', image: bordemarImg, price: 420, mrp: 490, off: 14, rating: 4.5, reviews: 66, packSizes: [{ size: '100 ml', price: 420 }, { size: '250 ml', price: 960 }, { size: '500 ml', price: 1800 }], description: 'Bordemar controls root rot and bacterial crop diseases. It is effective against downy mildew and fungal infections. Dose: 2 ml per 1 litre for foliar spray / 5 ml per litre for soil drench.', form: 'Liquid', shelfLife: '24 Months', suitableFor: 'All Crops – Soil & Foliar Application' },
]

export { products }

const categories = [
  { name: 'Fertilizers', count: 4 },
  { name: 'Pesticides', count: 5 },
  { name: 'Fungicides', count: 5 },
  { name: 'Micronutrients', count: 2 },
  { name: 'Plant Growth Promoters', count: 8 },
  { name: 'Organic Products', count: 2 },
]

const ratingFilters = [
  { stars: 4, label: '& above', count: 32 },
  { stars: 3, label: '& above', count: 60 },
  { stars: 2, label: '& above', count: 89 },
]

const renderStars = (rating) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<i key={i} className="ti ti-star-filled"></i>)
    else if (rating >= i - 0.5) stars.push(<i key={i} className="ti ti-star-half-filled"></i>)
    else stars.push(<i key={i} className="ti ti-star"></i>)
  }
  return stars
}

const Products = ({ onProductClick, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [priceRange, setPriceRange] = useState(5000)
  const [selectedRating, setSelectedRating] = useState(null)
  const [sortBy, setSortBy] = useState('Popularity')
  const [currentPage, setCurrentPage] = useState(1)

  const resetFilters = () => {
    setSelectedCategory('All Categories')
    setPriceRange(5000)
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
      case 'Price: Low to High': result.sort((a, b) => a.price - b.price); break
      case 'Price: High to Low': result.sort((a, b) => b.price - a.price); break
      case 'Rating': result.sort((a, b) => b.rating - a.rating); break
      case 'Newest': result.sort((a, b) => b.id - a.id); break
      default: result.sort((a, b) => b.reviews - a.reviews); break
    }
    return result
  }, [selectedCategory, priceRange, selectedRating, sortBy])

  return (
    <div className="products-page">
      <div className="breadcrumb">
        <span>Home</span> <i className="ti ti-chevron-right"></i> <span className="breadcrumb-current">Products</span>
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
              <input type="checkbox" checked={selectedCategory === 'All Categories'} onChange={() => setSelectedCategory('All Categories')} />
              All Categories
            </label>
            {categories.map((cat) => (
              <label className="filter-checkbox" key={cat.name}>
                <input type="checkbox" checked={selectedCategory === cat.name} onChange={() => setSelectedCategory(cat.name)} />
                {cat.name} <span className="filter-count">({cat.count})</span>
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>Price Range</h4>
            <div className="price-range-labels">
              <span>₹0</span>
              <span>₹{priceRange}</span>
            </div>
            <input type="range" min="0" max="5000" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} className="price-slider" />
          </div>

          <div className="filter-group">
            <h4>Rating</h4>
            {ratingFilters.map((r) => (
              <label className="filter-checkbox rating-checkbox" key={r.stars}>
                <input type="checkbox" checked={selectedRating === r.stars} onChange={() => setSelectedRating(selectedRating === r.stars ? null : r.stars)} />
                <span className="rating-stars">
                  {renderStars(r.stars)} <span className="rating-label">{r.label}</span>
                </span>
                <span className="filter-count">({r.count})</span>
              </label>
            ))}
          </div>
        </aside>

        <main className="products-main">
          <div className="products-toolbar">
            <div>
              <h1>All Products</h1>
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
              <div className="product-card" key={p.id} onClick={() => onProductClick(p)} style={{ cursor: 'pointer' }}>
                <img src={p.image} alt={p.name} className="product-img" />
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
                  <i className="ti ti-shopping-cart"></i> Add to Cart
                </button>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="page-arrow" onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}>
              <i className="ti ti-arrow-left"></i>
            </button>
            {[1, 2, 3].map((num) => (
              <button key={num} className={`page-num ${currentPage === num ? 'page-active' : ''}`} onClick={() => setCurrentPage(num)}>{num}</button>
            ))}
            <span className="page-dots">...</span>
            <button className={`page-num ${currentPage === 11 ? 'page-active' : ''}`} onClick={() => setCurrentPage(11)}>11</button>
            <button className="page-arrow" onClick={() => setCurrentPage((p) => Math.min(11, p + 1))}>
              <i className="ti ti-arrow-right"></i>
            </button>
          </div>
        </main>
      </div>

      <div className="products-bottom-strip">
        <div className="bottom-trust-badges">
          <div className="bottom-badge"><i className="ti ti-shield-check"></i><div><p className="bottom-badge-title">100% Genuine Products</p><p className="bottom-badge-subtitle">Original &amp; Trusted</p></div></div>
          <div className="bottom-badge"><i className="ti ti-truck"></i><div><p className="bottom-badge-title">Fast Delivery</p><p className="bottom-badge-subtitle">On time, every time</p></div></div>
          <div className="bottom-badge"><i className="ti ti-lock"></i><div><p className="bottom-badge-title">Secure Payments</p><p className="bottom-badge-subtitle">Multiple safe payment options</p></div></div>
          <div className="bottom-badge"><i className="ti ti-headset"></i><div><p className="bottom-badge-title">Expert Support</p><p className="bottom-badge-subtitle">24/7 customer support</p></div></div>
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