// import React from 'react'
// import Navbar from './components/Navbar/Navbar'
// // import Home from './pages/Home/Home'
// import './App.css'

// function App() {
//   return (
//     <div className="app">
//       <Navbar />
//       {/* <Home /> */}
//     </div>
//   )
// }

// export default App

// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import './App.css'

// function App() {
//   return (
//     <div className="app">
//       <Navbar />
//       <Hero/>
//       <TrustBadges />
//         <CategoryGrid />
//           <Footer />
//           <Products/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')

//   return (
//     <div className="app">
//       <Navbar active={page} setActive={setPage} />

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//           < ProductDetails/>
//         </>
//       )}

//       {page === 'Product' && <Products />}

//       <Footer />
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')
//   const [selectedProduct, setSelectedProduct] = useState(null)

//   // Called when a product card (on Products page OR Related Products) is clicked
//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setPage('ProductDetails')
//   }

//   // Called from ProductDetails "Home / Products" breadcrumb
//   const handleBack = () => {
//     setSelectedProduct(null)
//     setPage('Product')
//   }

//   return (
//     <div className="app">
//       <Navbar active={page} setActive={setPage} />

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//         </>
//       )}

//       {page === 'Product' && (
//         <Products onProductClick={handleProductClick} />
//       )}

//       {page === 'ProductDetails' && selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={handleBack}
//           onProductClick={handleProductClick}
//         />
//       )}

//       <Footer />
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [cartItems, setCartItems] = useState([]) // [{ product, quantity }]

//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setPage('ProductDetails')
//   }

//   const handleBack = () => {
//     setSelectedProduct(null)
//     setPage('Product')
//   }

//   const addToCart = (product, qty = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.product.id === product.id)
//       if (existing) {
//         return prev.map((i) =>
//           i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
//         )
//       }
//       return [...prev, { product, quantity: qty }]
//     })
//   }

//   const increaseQty = (id) =>
//     setCartItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i)))

//   const decreaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) => (i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
//     )

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((i) => i.product.id !== id))

//   return (
//     <div className="app">
//       <Navbar active={page} setActive={setPage} cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)} />

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//         </>
//       )}

//       {page === 'Product' && (
//         <Products onProductClick={handleProductClick} onAddToCart={addToCart} />
//       )}

//       {page === 'ProductDetails' && selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={handleBack}
//           onProductClick={handleProductClick}
//           onAddToCart={addToCart}
//         />
//       )}

//       {page === 'Cart' && (
//         <Cart
//           cartItems={cartItems}
//           onIncrease={increaseQty}
//           onDecrease={decreaseQty}
//           onRemove={removeFromCart}
//           onContinueShopping={() => setPage('Product')}
//           onCheckout={() => alert('Checkout flow goes here')}
//         />
//       )}

//       <Footer />
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [cartItems, setCartItems] = useState([])

//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setPage('ProductDetails')
//   }

//   const handleBack = () => {
//     setSelectedProduct(null)
//     setPage('Product')
//   }

//   const addToCart = (product, qty = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.product.id === product.id)
//       if (existing) {
//         return prev.map((i) =>
//           i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
//         )
//       }
//       return [...prev, { product, quantity: qty }]
//     })
//   }

//   const increaseQty = (id) =>
//     setCartItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i)))

//   const decreaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) => (i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
//     )

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((i) => i.product.id !== id))

//   const handleOrderPlaced = (form, payment) => {
//     setCartItems([])
//     alert(`Order placed successfully! Payment: ${payment}`)
//     setPage('Home')
//   }

//   return (
//     <div className="app">
//       <Navbar active={page} setActive={setPage} cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)} />

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//         </>
//       )}

//       {page === 'Product' && (
//         <Products onProductClick={handleProductClick} onAddToCart={addToCart} />
//       )}

//       {page === 'ProductDetails' && selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={handleBack}
//           onProductClick={handleProductClick}
//           onAddToCart={addToCart}
//         />
//       )}

//       {page === 'Cart' && (
//         <Cart
//           cartItems={cartItems}
//           onIncrease={increaseQty}
//           onDecrease={decreaseQty}
//           onRemove={removeFromCart}
//           onContinueShopping={() => setPage('Product')}
//           onCheckout={() => setPage('Checkout')}
//         />
//       )}

//       {page === 'Checkout' && (
//         <Checkout
//           cartItems={cartItems}
//           onBack={() => setPage('Cart')}
//           onOrderPlaced={handleOrderPlaced}
//         />
//       )}

//       <Footer />
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import Profile from './pages/Profile'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [cartItems, setCartItems] = useState([])

//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setPage('ProductDetails')
//   }

//   const handleBack = () => {
//     setSelectedProduct(null)
//     setPage('Product')
//   }

//   const addToCart = (product, qty = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.product.id === product.id)
//       if (existing) {
//         return prev.map((i) =>
//           i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
//         )
//       }
//       return [...prev, { product, quantity: qty }]
//     })
//   }

//   const increaseQty = (id) =>
//     setCartItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i)))

//   const decreaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) => (i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
//     )

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((i) => i.product.id !== id))

//   const handleOrderPlaced = (form, payment) => {
//     setCartItems([])
//     alert(`Order placed successfully! Payment: ${payment}`)
//     setPage('Home')
//   }

//   return (
//     <div className="app">
//       <Navbar active={page} setActive={setPage} cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)} />

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//         </>
//       )}

//       {page === 'Product' && (
//         <Products onProductClick={handleProductClick} onAddToCart={addToCart} />
//       )}

//       {page === 'ProductDetails' && selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={handleBack}
//           onProductClick={handleProductClick}
//           onAddToCart={addToCart}
//         />
//       )}

//       {page === 'Cart' && (
//         <Cart
//           cartItems={cartItems}
//           onIncrease={increaseQty}
//           onDecrease={decreaseQty}
//           onRemove={removeFromCart}
//           onContinueShopping={() => setPage('Product')}
//           onCheckout={() => setPage('Checkout')}
//         />
//       )}

//       {page === 'Checkout' && (
//         <Checkout
//           cartItems={cartItems}
//           onBack={() => setPage('Cart')}
//           onOrderPlaced={handleOrderPlaced}
//         />
//       )}

//       {page === 'Profile' && (
//         <Profile onBack={() => setPage('Home')} />
//       )}

//       <Footer />
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import Profile from './pages/Profile'
// import MyOrders from './pages/MyOrders'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [cartItems, setCartItems] = useState([])

//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setPage('ProductDetails')
//   }

//   const handleBack = () => {
//     setSelectedProduct(null)
//     setPage('Product')
//   }

//   const addToCart = (product, qty = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.product.id === product.id)
//       if (existing) {
//         return prev.map((i) =>
//           i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
//         )
//       }
//       return [...prev, { product, quantity: qty }]
//     })
//   }

//   const increaseQty = (id) =>
//     setCartItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i)))

//   const decreaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) => (i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
//     )

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((i) => i.product.id !== id))

//   const handleOrderPlaced = (form, payment) => {
//     setCartItems([])
//     alert(`Order placed successfully! Payment: ${payment}`)
//     setPage('Home')
//   }

//   return (
//     <div className="app">
//       <Navbar active={page} setActive={setPage} cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)} />

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//         </>
//       )}

//       {page === 'Product' && (
//         <Products onProductClick={handleProductClick} onAddToCart={addToCart} />
//       )}

//       {page === 'ProductDetails' && selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={handleBack}
//           onProductClick={handleProductClick}
//           onAddToCart={addToCart}
//         />
//       )}

//       {page === 'Cart' && (
//         <Cart
//           cartItems={cartItems}
//           onIncrease={increaseQty}
//           onDecrease={decreaseQty}
//           onRemove={removeFromCart}
//           onContinueShopping={() => setPage('Product')}
//           onCheckout={() => setPage('Checkout')}
//         />
//       )}

//       {page === 'Checkout' && (
//         <Checkout
//           cartItems={cartItems}
//           onBack={() => setPage('Cart')}
//           onOrderPlaced={handleOrderPlaced}
//         />
//       )}

//       {page === 'Profile' && (
//         <Profile onBack={() => setPage('Home')} />
//       )}

//       {page === 'MyOrders' && (
//         <MyOrders />
//       )}

//       <Footer />
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import Profile from './pages/Profile'
// import MyOrders from './pages/MyOrders'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [cartItems, setCartItems] = useState([])

//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setPage('ProductDetails')
//   }

//   const handleBack = () => {
//     setSelectedProduct(null)
//     setPage('Product')
//   }

//   const addToCart = (product, qty = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.product.id === product.id)
//       if (existing) {
//         return prev.map((i) =>
//           i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
//         )
//       }
//       return [...prev, { product, quantity: qty }]
//     })
//   }

//   const increaseQty = (id) =>
//     setCartItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i)))

//   const decreaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) => (i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
//     )

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((i) => i.product.id !== id))

//   const handleOrderPlaced = (form, payment) => {
//     setCartItems([])
//     alert(`Order placed successfully! Payment: ${payment}`)
//     setPage('Home')
//   }

//   return (
//     <div className="app">
//       <Navbar active={page} setActive={setPage} cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)} />

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//         </>
//       )}

//       {page === 'Product' && (
//         <Products onProductClick={handleProductClick} onAddToCart={addToCart} />
//       )}

//       {page === 'ProductDetails' && selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={handleBack}
//           onProductClick={handleProductClick}
//           onAddToCart={addToCart}
//         />
//       )}

//       {page === 'Cart' && (
//         <Cart
//           cartItems={cartItems}
//           onIncrease={increaseQty}
//           onDecrease={decreaseQty}
//           onRemove={removeFromCart}
//           onContinueShopping={() => setPage('Product')}
//           onCheckout={() => setPage('Checkout')}
//         />
//       )}

//       {page === 'Checkout' && (
//         <Checkout
//           cartItems={cartItems}
//           onBack={() => setPage('Cart')}
//           onOrderPlaced={handleOrderPlaced}
//         />
//       )}

//       {page === 'Profile' && (
//         <Profile
//           onBack={() => setPage('Home')}
//           onNavigate={setPage}
//         />
//       )}

//       {page === 'MyOrders' && (
//         <MyOrders
//           onBack={() => setPage('Home')}
//           onNavigate={setPage}
//         />
//       )}

//       {page === 'About Us' && (
//   <About onBack={() => setPage('Home')} />
// )}


// <Route path="/contact" element={<ContactUs onBack={() => navigate('/')} />}/>
//       <Footer />
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import Profile from './pages/Profile'
// import MyOrders from './pages/MyOrders'
// import About from './pages/About'
// import ContactUs from './pages/ContactUs'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [cartItems, setCartItems] = useState([])

//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setPage('ProductDetails')
//   }

//   const handleBack = () => {
//     setSelectedProduct(null)
//     setPage('Product')
//   }

//   const addToCart = (product, qty = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.product.id === product.id)
//       if (existing) {
//         return prev.map((i) =>
//           i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
//         )
//       }
//       return [...prev, { product, quantity: qty }]
//     })
//   }

//   const increaseQty = (id) =>
//     setCartItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i)))

//   const decreaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) => (i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
//     )

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((i) => i.product.id !== id))

//   const handleOrderPlaced = (form, payment) => {
//     setCartItems([])
//     alert(`Order placed successfully! Payment: ${payment}`)
//     setPage('Home')
//   }

//   return (
//     <div className="app">
//       <Navbar active={page} setActive={setPage} cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)} />

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//         </>
//       )}

//       {page === 'Product' && (
//         <Products onProductClick={handleProductClick} onAddToCart={addToCart} />
//       )}

//       {page === 'ProductDetails' && selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={handleBack}
//           onProductClick={handleProductClick}
//           onAddToCart={addToCart}
//         />
//       )}

//       {page === 'Cart' && (
//         <Cart
//           cartItems={cartItems}
//           onIncrease={increaseQty}
//           onDecrease={decreaseQty}
//           onRemove={removeFromCart}
//           onContinueShopping={() => setPage('Product')}
//           onCheckout={() => setPage('Checkout')}
//         />
//       )}

//       {page === 'Checkout' && (
//         <Checkout
//           cartItems={cartItems}
//           onBack={() => setPage('Cart')}
//           onOrderPlaced={handleOrderPlaced}
//         />
//       )}

//       {page === 'Profile' && (
//         <Profile
//           onBack={() => setPage('Home')}
//           onNavigate={setPage}
//         />
//       )}

//       {page === 'MyOrders' && (
//         <MyOrders
//           onContinueShopping={() => setPage('Home')}
//           onProductClick={handleProductClick}
//         />
//       )}

//       {page === 'About Us' && (
//         <About onBack={() => setPage('Home')} />
//       )}

//       {page === 'ContactUs' && (
//         <ContactUs onBack={() => setPage('Home')} />
//       )}

//       <Footer />
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import Profile from './pages/Profile'
// import MyOrders from './pages/MyOrders'
// import About from './pages/About'
// import ContactUs from './pages/ContactUs'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [cartItems, setCartItems] = useState([])

//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setPage('ProductDetails')
//   }

//   const handleBack = () => {
//     setSelectedProduct(null)
//     setPage('Product')
//   }

//   const addToCart = (product, qty = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.product.id === product.id)
//       if (existing) {
//         return prev.map((i) =>
//           i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
//         )
//       }
//       return [...prev, { product, quantity: qty }]
//     })
//   }

//   const increaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i))
//     )

//   const decreaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) =>
//         i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
//       )
//     )

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((i) => i.product.id !== id))

//   const handleOrderPlaced = (form, payment) => {
//     setCartItems([])
//     alert(`Order placed successfully! Payment: ${payment}`)
//     setPage('Home')
//   }

//   return (
//     <div className="app">
//       <Navbar
//         active={page}
//         setActive={setPage}
//         cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
//       />

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//         </>
//       )}

//       {page === 'Product' && (
//         <Products onProductClick={handleProductClick} onAddToCart={addToCart} />
//       )}

//       {page === 'ProductDetails' && selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={handleBack}
//           onProductClick={handleProductClick}
//           onAddToCart={addToCart}
//         />
//       )}

//       {page === 'Cart' && (
//         <Cart
//           cartItems={cartItems}
//           onIncrease={increaseQty}
//           onDecrease={decreaseQty}
//           onRemove={removeFromCart}
//           onContinueShopping={() => setPage('Product')}
//           onCheckout={() => setPage('Checkout')}
//         />
//       )}

//       {page === 'Checkout' && (
//         <Checkout
//           cartItems={cartItems}
//           onBack={() => setPage('Cart')}
//           onOrderPlaced={handleOrderPlaced}
//         />
//       )}

//       {page === 'Profile' && (
//         <Profile
//           onBack={() => setPage('Home')}
//           onNavigate={setPage}
//         />
//       )}

//       {page === 'MyOrders' && (
//         <MyOrders
//           onContinueShopping={() => setPage('Home')}
//           onProductClick={handleProductClick}
//         />
//       )}

//       {page === 'About' && (
//         <About onBack={() => setPage('Home')} />
//       )}

//       {page === 'Contact' && (
//         <ContactUs onBack={() => setPage('Home')} />
//       )}

//       <Footer />
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import Profile from './pages/Profile'
// import MyOrders from './pages/MyOrders'
// import About from './pages/About'
// import ContactUs from './pages/ContactUs'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [cartItems, setCartItems] = useState([])

//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setPage('ProductDetails')
//   }

//   const handleBack = () => {
//     setSelectedProduct(null)
//     setPage('Product')
//   }

//   const addToCart = (product, qty = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.product.id === product.id)
//       if (existing) {
//         return prev.map((i) =>
//           i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
//         )
//       }
//       return [...prev, { product, quantity: qty }]
//     })
//   }

//   const increaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i))
//     )

//   const decreaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) =>
//         i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
//       )
//     )

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((i) => i.product.id !== id))

//   const handleOrderPlaced = (form, payment) => {
//     setCartItems([])
//     alert(`Order placed successfully! Payment: ${payment}`)
//     setPage('Home')
//   }

//   return (
//     <div className="app">
//       <Navbar
//         active={page}
//         setActive={setPage}
//         cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
//       />

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//         </>
//       )}

//       {page === 'Product' && (
//         <Products onProductClick={handleProductClick} onAddToCart={addToCart} />
//       )}

//       {page === 'ProductDetails' && selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={handleBack}
//           onProductClick={handleProductClick}
//           onAddToCart={addToCart}
//         />
//       )}

//       {page === 'Cart' && (
//         <Cart
//           cartItems={cartItems}
//           onIncrease={increaseQty}
//           onDecrease={decreaseQty}
//           onRemove={removeFromCart}
//           onContinueShopping={() => setPage('Product')}
//           onCheckout={() => setPage('Checkout')}
//         />
//       )}

//       {page === 'Checkout' && (
//         <Checkout
//           cartItems={cartItems}
//           onBack={() => setPage('Cart')}
//           onOrderPlaced={handleOrderPlaced}
//         />
//       )}

//       {page === 'Profile' && (
//         <Profile
//           onBack={() => setPage('Home')}
//           onNavigate={setPage}
//         />
//       )}

//       {page === 'MyOrders' && (
//         <MyOrders
//           onContinueShopping={() => setPage('Home')}
//           onProductClick={handleProductClick}
//         />
//       )}

//       {page === 'About' && (
//         <About onBack={() => setPage('Home')} />
//       )}

//       {page === 'Contact' && (
//         <ContactUs onBack={() => setPage('Home')} />
//       )}

//       <Footer />
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import Profile from './pages/Profile'
// import MyOrders from './pages/MyOrders'
// import About from './pages/About'
// import ContactUs from './pages/ContactUs'
// import Login from './pages/Login'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [cartItems, setCartItems] = useState([])
//   const [isLoggedIn, setIsLoggedIn] = useState(false)

//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setPage('ProductDetails')
//   }

//   const handleBack = () => {
//     setSelectedProduct(null)
//     setPage('Product')
//   }

//   const addToCart = (product, qty = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.product.id === product.id)
//       if (existing) {
//         return prev.map((i) =>
//           i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
//         )
//       }
//       return [...prev, { product, quantity: qty }]
//     })
//   }

//   const increaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i))
//     )

//   const decreaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) =>
//         i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
//       )
//     )

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((i) => i.product.id !== id))

//   const handleOrderPlaced = (form, payment) => {
//     setCartItems([])
//     alert(`Order placed successfully! Payment: ${payment}`)
//     setPage('Home')
//   }

//   const handleProfileClick = () => {
//     if (isLoggedIn) {
//       setPage('Profile')
//     } else {
//       setPage('Login')
//     }
//   }

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true)
//     setPage('Profile')
//   }

//   const handleLogout = () => {
//     setIsLoggedIn(false)
//     setPage('Home')
//   }

//   return (
//     <div className="app">
//       <Navbar
//         active={page}
//         setActive={setPage}
//         cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
//         onProfileClick={handleProfileClick}
//         isLoggedIn={isLoggedIn}
//       />

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//         </>
//       )}

//       {page === 'Login' && (
//         <Login
//           onLoginSuccess={handleLoginSuccess}
//           onRegister={() => setPage('Home')}
//         />
//       )}

//       {page === 'Product' && (
//         <Products onProductClick={handleProductClick} onAddToCart={addToCart} />
//       )}

//       {page === 'ProductDetails' && selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={handleBack}
//           onProductClick={handleProductClick}
//           onAddToCart={addToCart}
//         />
//       )}

//       {page === 'Cart' && (
//         <Cart
//           cartItems={cartItems}
//           onIncrease={increaseQty}
//           onDecrease={decreaseQty}
//           onRemove={removeFromCart}
//           onContinueShopping={() => setPage('Product')}
//           onCheckout={() => setPage('Checkout')}
//         />
//       )}

//       {page === 'Checkout' && (
//         <Checkout
//           cartItems={cartItems}
//           onBack={() => setPage('Cart')}
//           onOrderPlaced={handleOrderPlaced}
//         />
//       )}

//       {page === 'Profile' && (
//         <Profile
//           onBack={() => setPage('Home')}
//           onNavigate={setPage}
//           onLogout={handleLogout}
//         />
//       )}

//       {page === 'MyOrders' && (
//         <MyOrders
//           onContinueShopping={() => setPage('Home')}
//           onProductClick={handleProductClick}
//           onProfileClick={() => setPage('Profile')}
//         />
//       )}

//       {page === 'About' && (
//         <About onBack={() => setPage('Home')} />
//       )}

//       {page === 'Contact' && (
//         <ContactUs onBack={() => setPage('Home')} />
//       )}

//       <Footer />
//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import Login from './pages/Login'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [cartItems, setCartItems] = useState([])

//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setPage('ProductDetails')
//   }

//   const handleBack = () => {
//     setSelectedProduct(null)
//     setPage('Product')
//   }

//   const addToCart = (product, qty = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.product.id === product.id)
//       if (existing) {
//         return prev.map((i) =>
//           i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
//         )
//       }
//       return [...prev, { product, quantity: qty }]
//     })
//   }

//   const increaseQty = (id) =>
//     setCartItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i)))

//   const decreaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) => (i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
//     )

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((i) => i.product.id !== id))

//   const handlePlaceOrder = (orderDetails) => {
//     console.log('Order placed:', orderDetails)
//     setCartItems([])
//     setPage('Home')
//     alert('Order placed successfully!')
//   }

//   const isAuthPage = page === 'Login'

//   return (
//     <div className="app">
//       {/* Navbar hidden on the Login page */}
//       {!isAuthPage && (
//         <Navbar
//           active={page}
//           setActive={setPage}
//           cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
//         />
//       )}

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//         </>
//       )}

//       {page === 'Product' && (
//         <Products onProductClick={handleProductClick} onAddToCart={addToCart} />
//       )}

//       {page === 'ProductDetails' && selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={handleBack}
//           onProductClick={handleProductClick}
//           onAddToCart={addToCart}
//         />
//       )}

//       {page === 'Cart' && (
//         <Cart
//           cartItems={cartItems}
//           onIncrease={increaseQty}
//           onDecrease={decreaseQty}
//           onRemove={removeFromCart}
//           onContinueShopping={() => setPage('Product')}
//           onCheckout={() => setPage('Checkout')}
//         />
//       )}

//       {page === 'Checkout' && (
//         <Checkout
//           cartItems={cartItems}
//           onEditCart={() => setPage('Cart')}
//           onPlaceOrder={handlePlaceOrder}
//         />
//       )}

//       {page === 'Login' && (
//         <Login
//           onLoginSuccess={() => setPage('Home')}
//           onRegister={() => setPage('Register')}
//         />
//       )}

//       {/* Footer hidden on the Login page */}
//       {!isAuthPage && <Footer />}
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import Login from './pages/Login'
// import Profile from './pages/Profile'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [cartItems, setCartItems] = useState([])

//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setPage('ProductDetails')
//   }

//   const handleBack = () => {
//     setSelectedProduct(null)
//     setPage('Product')
//   }

//   const addToCart = (product, qty = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.product.id === product.id)
//       if (existing) {
//         return prev.map((i) =>
//           i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
//         )
//       }
//       return [...prev, { product, quantity: qty }]
//     })
//   }

//   const increaseQty = (id) =>
//     setCartItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i)))

//   const decreaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) => (i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
//     )

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((i) => i.product.id !== id))

//   const handlePlaceOrder = (orderDetails) => {
//     console.log('Order placed:', orderDetails)
//     setCartItems([])
//     setPage('Home')
//     alert('Order placed successfully!')
//   }

//   const isAuthPage = page === 'Login'

//   return (
//     <div className="app">
//       {!isAuthPage && (
//         <Navbar
//           active={page}
//           setActive={setPage}
//           cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
//         />
//       )}

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//         </>
//       )}

//       {page === 'Product' && (
//         <Products onProductClick={handleProductClick} onAddToCart={addToCart} />
//       )}

//       {page === 'ProductDetails' && selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={handleBack}
//           onProductClick={handleProductClick}
//           onAddToCart={addToCart}
//         />
//       )}

//       {page === 'Cart' && (
//         <Cart
//           cartItems={cartItems}
//           onIncrease={increaseQty}
//           onDecrease={decreaseQty}
//           onRemove={removeFromCart}
//           onContinueShopping={() => setPage('Product')}
//           onCheckout={() => setPage('Checkout')}
//         />
//       )}

//       {page === 'Checkout' && (
//         <Checkout
//           cartItems={cartItems}
//           onEditCart={() => setPage('Cart')}
//           onPlaceOrder={handlePlaceOrder}
//         />
//       )}

//       {page === 'Login' && (
//         <Login
//           onLoginSuccess={() => setPage('Profile')}
//           onRegister={() => setPage('Register')}
//         />
//       )}

//       {page === 'Profile' && (
//         <Profile
//           onBack={() => setPage('Home')}
//           onNavigate={(key) => setPage(key)}
//         />
//       )}

//       {!isAuthPage && <Footer />}
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import Login from './pages/Login'
// import Profile from './pages/Profile'
// import MyOrders from './pages/MyOrders'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [cartItems, setCartItems] = useState([])

//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setPage('ProductDetails')
//   }

//   const handleBack = () => {
//     setSelectedProduct(null)
//     setPage('Product')
//   }

//   const addToCart = (product, qty = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.product.id === product.id)
//       if (existing) {
//         return prev.map((i) =>
//           i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
//         )
//       }
//       return [...prev, { product, quantity: qty }]
//     })
//   }

//   const increaseQty = (id) =>
//     setCartItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i)))

//   const decreaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) => (i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
//     )

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((i) => i.product.id !== id))

//   const handlePlaceOrder = (orderDetails) => {
//     console.log('Order placed:', orderDetails)
//     setCartItems([])
//     setPage('Home')
//     alert('Order placed successfully!')
//   }

//   const isAuthPage = page === 'Login'

//   return (
//     <div className="app">
//       {!isAuthPage && (
//         <Navbar
//           active={page}
//           setActive={setPage}
//           cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
//         />
//       )}

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//         </>
//       )}

//       {page === 'Product' && (
//         <Products onProductClick={handleProductClick} onAddToCart={addToCart} />
//       )}

//       {page === 'ProductDetails' && selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={handleBack}
//           onProductClick={handleProductClick}
//           onAddToCart={addToCart}
//         />
//       )}

//       {page === 'Cart' && (
//         <Cart
//           cartItems={cartItems}
//           onIncrease={increaseQty}
//           onDecrease={decreaseQty}
//           onRemove={removeFromCart}
//           onContinueShopping={() => setPage('Product')}
//           onCheckout={() => setPage('Checkout')}
//         />
//       )}

//       {page === 'Checkout' && (
//         <Checkout
//           cartItems={cartItems}
//           onEditCart={() => setPage('Cart')}
//           onPlaceOrder={handlePlaceOrder}
//         />
//       )}

//       {page === 'Login' && (
//         <Login
//           onLoginSuccess={() => setPage('Profile')}
//           onRegister={() => setPage('Register')}
//         />
//       )}

//       {page === 'Profile' && (
//         <Profile
//           onBack={() => setPage('Home')}
//           onNavigate={(key) => setPage(key)}
//         />
//       )}

//       {page === 'MyOrders' && (
//         <MyOrders
//           onBack={() => setPage('Home')}
//           onNavigate={(key) => setPage(key)}
//         />
//       )}

//       {!isAuthPage && <Footer />}
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import Login from './pages/Login'
// import Profile from './pages/Profile'
// import MyOrders from './pages/MyOrders'
// import About from './pages/About'
// import ContactUs from './pages/ContactUs'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [cartItems, setCartItems] = useState([])

//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setPage('ProductDetails')
//   }

//   const handleBack = () => {
//     setSelectedProduct(null)
//     setPage('Product')
//   }

//   const addToCart = (product, qty = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.product.id === product.id)
//       if (existing) {
//         return prev.map((i) =>
//           i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
//         )
//       }
//       return [...prev, { product, quantity: qty }]
//     })
//   }

//   const increaseQty = (id) =>
//     setCartItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i)))

//   const decreaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) => (i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
//     )

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((i) => i.product.id !== id))

//   const handlePlaceOrder = (orderDetails) => {
//     console.log('Order placed:', orderDetails)
//     setCartItems([])
//     setPage('Home')
//     alert('Order placed successfully!')
//   }

//   const isAuthPage = page === 'Login'

//   return (
//     <div className="app">
//       {!isAuthPage && (
//         <Navbar
//           active={page}
//           setActive={setPage}
//           cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
//         />
//       )}

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//         </>
//       )}

//       {page === 'Product' && (
//         <Products onProductClick={handleProductClick} onAddToCart={addToCart} />
//       )}

//       {page === 'ProductDetails' && selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={handleBack}
//           onProductClick={handleProductClick}
//           onAddToCart={addToCart}
//         />
//       )}

//       {page === 'Cart' && (
//         <Cart
//           cartItems={cartItems}
//           onIncrease={increaseQty}
//           onDecrease={decreaseQty}
//           onRemove={removeFromCart}
//           onContinueShopping={() => setPage('Product')}
//           onCheckout={() => setPage('Checkout')}
//         />
//       )}

//       {page === 'Checkout' && (
//         <Checkout
//           cartItems={cartItems}
//           onEditCart={() => setPage('Cart')}
//           onPlaceOrder={handlePlaceOrder}
//         />
//       )}

//       {page === 'Login' && (
//         <Login
//           onLoginSuccess={() => setPage('Profile')}
//           onRegister={() => setPage('Register')}
//         />
//       )}

//       {page === 'Profile' && (
//         <Profile
//           onBack={() => setPage('Home')}
//           onNavigate={(key) => setPage(key)}
//         />
//       )}

//       {page === 'MyOrders' && (
//         <MyOrders
//           onBack={() => setPage('Home')}
//           onNavigate={(key) => setPage(key)}
//         />
//       )}

//       {page === 'About Us' && (
//         <About onBack={() => setPage('Home')} />
//       )}

//       {page === 'Contact Us' && (
//         <ContactUs onBack={() => setPage('Home')} />
//       )}

//       {!isAuthPage && <Footer />}
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import Profile from './pages/Profile'
// import MyOrders from './pages/MyOrders'
// import About from './pages/About'
// import ContactUs from './pages/ContactUs'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [cartItems, setCartItems] = useState([])

//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setPage('ProductDetails')
//   }

//   const handleBack = () => {
//     setSelectedProduct(null)
//     setPage('Product')
//   }

//   const addToCart = (product, qty = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.product.id === product.id)
//       if (existing) {
//         return prev.map((i) =>
//           i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
//         )
//       }
//       return [...prev, { product, quantity: qty }]
//     })
//   }

//   const increaseQty = (id) =>
//     setCartItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i)))

//   const decreaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) => (i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
//     )

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((i) => i.product.id !== id))

//   const handlePlaceOrder = (orderDetails) => {
//     console.log('Order placed:', orderDetails)
//     setCartItems([])
//     setPage('Home')
//     alert('Order placed successfully!')
//   }

//   const isAuthPage = page === 'Login' || page === 'Register'

//   return (
//     <div className="app">
//       {!isAuthPage && (
//         <Navbar
//           active={page}
//           setActive={setPage}
//           cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
//         />
//       )}

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//         </>
//       )}

//       {page === 'Product' && (
//         <Products onProductClick={handleProductClick} onAddToCart={addToCart} />
//       )}

//       {page === 'ProductDetails' && selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={handleBack}
//           onProductClick={handleProductClick}
//           onAddToCart={addToCart}
//         />
//       )}

//       {page === 'Cart' && (
//         <Cart
//           cartItems={cartItems}
//           onIncrease={increaseQty}
//           onDecrease={decreaseQty}
//           onRemove={removeFromCart}
//           onContinueShopping={() => setPage('Product')}
//           onCheckout={() => setPage('Checkout')}
//         />
//       )}

//       {page === 'Checkout' && (
//         <Checkout
//           cartItems={cartItems}
//           onEditCart={() => setPage('Cart')}
//           onPlaceOrder={handlePlaceOrder}
//         />
//       )}

//       {page === 'Login' && (
//         <Login
//           onLoginSuccess={() => setPage('Profile')}
//           onRegister={() => setPage('Register')}
//         />
//       )}

//       {page === 'Register' && (
//         <Register
//           onRegisterSuccess={() => setPage('Profile')}
//           onLogin={() => setPage('Login')}
//         />
//       )}

//       {page === 'Profile' && (
//         <Profile
//           onBack={() => setPage('Home')}
//           onNavigate={(key) => setPage(key)}
//         />
//       )}

//       {page === 'MyOrders' && (
//         <MyOrders
//           onBack={() => setPage('Home')}
//           onNavigate={(key) => setPage(key)}
//         />
//       )}

//       {page === 'About Us' && (
//         <About onBack={() => setPage('Home')} />
//       )}

//       {page === 'Contact Us' && (
//         <ContactUs onBack={() => setPage('Home')} />
//       )}

//       {!isAuthPage && <Footer />}
//     </div>
//   )
// }

// export default App



import React, { useState } from 'react'
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
import './App.css'

function App() {
  const [page, setPage] = useState('Home')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartItems, setCartItems] = useState([])

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setPage('ProductDetails')
  }

  const handleBack = () => {
    setSelectedProduct(null)
    setPage('Product')
  }

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
    setPage('Home')
    alert('Order placed successfully!')
  }

  const isAuthPage = page === 'Login' || page === 'Register'

  return (
    <div className="app">
      {!isAuthPage && (
        <Navbar
          active={page}
          setActive={setPage}
          cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
        />
      )}

      {page === 'Home' && (
        <>
          <Hero />
          <TrustBadges />
          <CategoryGrid />
        </>
      )}

      {page === 'Product' && (
        <Products onProductClick={handleProductClick} onAddToCart={addToCart} />
      )}

      {page === 'ProductDetails' && selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onBack={handleBack}
          onProductClick={handleProductClick}
          onAddToCart={addToCart}
        />
      )}

      {page === 'Cart' && (
        <Cart
          cartItems={cartItems}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
          onRemove={removeFromCart}
          onContinueShopping={() => setPage('Product')}
          onCheckout={() => setPage('Checkout')}
        />
      )}

      {page === 'Checkout' && (
        <Checkout
          cartItems={cartItems}
          onEditCart={() => setPage('Cart')}
          onPlaceOrder={handlePlaceOrder}
        />
      )}

      {page === 'Login' && (
        <Login
          onLoginSuccess={() => setPage('Profile')}
          onRegister={() => setPage('Register')}
        />
      )}

      {page === 'Register' && (
        <Register
          onRegisterSuccess={() => setPage('Profile')}
          onLogin={() => setPage('Login')}
        />
      )}

      {page === 'Profile' && (
        <Profile
          onBack={() => setPage('Home')}
          onNavigate={(key) => setPage(key)}
        />
      )}

      {page === 'MyOrders' && (
        <MyOrders
          onBack={() => setPage('Home')}
          onNavigate={(key) => setPage(key)}
        />
      )}

      {page === 'About Us' && (
        <About onBack={() => setPage('Home')} />
      )}

      {page === 'Contact Us' && (
        <ContactUs onBack={() => setPage('Home')} />
      )}

      {!isAuthPage && <Footer />}
    </div>
  )
}

export default App


// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import OrderSuccess from './pages/OrderSuccess'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import Profile from './pages/Profile'
// import MyOrders from './pages/MyOrders'
// import About from './pages/About'
// import ContactUs from './pages/ContactUs'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [cartItems, setCartItems] = useState([])
//   const [lastOrder, setLastOrder] = useState(null)

//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setPage('ProductDetails')
//   }

//   const handleBack = () => {
//     setSelectedProduct(null)
//     setPage('Product')
//   }

//   const addToCart = (product, qty = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.product.id === product.id)
//       if (existing) {
//         return prev.map((i) =>
//           i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
//         )
//       }
//       return [...prev, { product, quantity: qty }]
//     })
//   }

//   const increaseQty = (id) =>
//     setCartItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i)))

//   const decreaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) => (i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
//     )

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((i) => i.product.id !== id))

//   const handlePlaceOrder = (orderDetails) => {
//     const orderId = 'AM' + Math.floor(10000000 + Math.random() * 90000000)
//     setLastOrder({ ...orderDetails, orderId, placedAt: new Date() })
//     setCartItems([])
//     setPage('OrderSuccess')
//   }

//   const isAuthPage = page === 'Login' || page === 'Register'

//   return (
//     <div className="app">
//       {!isAuthPage && (
//         <Navbar
//           active={page}
//           setActive={setPage}
//           cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
//         />
//       )}

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//         </>
//       )}

//       {page === 'Product' && (
//         <Products onProductClick={handleProductClick} onAddToCart={addToCart} />
//       )}

//       {page === 'ProductDetails' && selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={handleBack}
//           onProductClick={handleProductClick}
//           onAddToCart={addToCart}
//         />
//       )}

//       {page === 'Cart' && (
//         <Cart
//           cartItems={cartItems}
//           onIncrease={increaseQty}
//           onDecrease={decreaseQty}
//           onRemove={removeFromCart}
//           onContinueShopping={() => setPage('Product')}
//           onCheckout={() => setPage('Checkout')}
//         />
//       )}

//       {page === 'Checkout' && (
//         <Checkout
//           cartItems={cartItems}
//           onEditCart={() => setPage('Cart')}
//           onPlaceOrder={handlePlaceOrder}
//         />
//       )}

//       {page === 'OrderSuccess' && lastOrder && (
//         <OrderSuccess
//           order={lastOrder}
//           onViewOrder={() => setPage('MyOrders')}
//           onContinueShopping={() => setPage('Product')}
//         />
//       )}

//       {page === 'Login' && (
//         <Login
//           onLoginSuccess={() => setPage('Profile')}
//           onRegister={() => setPage('Register')}
//         />
//       )}

//       {page === 'Register' && (
//         <Register
//           onRegisterSuccess={() => setPage('Profile')}
//           onLogin={() => setPage('Login')}
//         />
//       )}

//       {page === 'Profile' && (
//         <Profile
//           onBack={() => setPage('Home')}
//           onNavigate={(key) => setPage(key)}
//         />
//       )}

//       {page === 'MyOrders' && (
//         <MyOrders
//           onBack={() => setPage('Home')}
//           onNavigate={(key) => setPage(key)}
//         />
//       )}

//       {page === 'About Us' && (
//         <About onBack={() => setPage('Home')} />
//       )}

//       {page === 'Contact Us' && (
//         <ContactUs onBack={() => setPage('Home')} />
//       )}

//       {!isAuthPage && <Footer />}
//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TrustBadges from './components/TrustBadges'
// import CategoryGrid from './components/CategoryGrid'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import OrderSuccess from './pages/OrderSuccess'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import Profile from './pages/Profile'
// import MyOrders from './pages/MyOrders'
// import About from './pages/About'
// import ContactUs from './pages/ContactUs'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('Home')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [cartItems, setCartItems] = useState([])
//   const [lastOrder, setLastOrder] = useState(null)

//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setPage('ProductDetails')
//   }

//   const handleBack = () => {
//     setSelectedProduct(null)
//     setPage('Product')
//   }

//   const addToCart = (product, qty = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.product.id === product.id)
//       if (existing) {
//         return prev.map((i) =>
//           i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
//         )
//       }
//       return [...prev, { product, quantity: qty }]
//     })
//   }

//   const increaseQty = (id) =>
//     setCartItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i)))

//   const decreaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((i) => (i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
//     )

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((i) => i.product.id !== id))

//   const SHIPPING_FEE = 60
//   const FREE_SHIPPING_THRESHOLD = 4500

//   const handleOrderPlaced = (customerForm, paymentMethod) => {
//     const subtotal = cartItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0)
//     const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE
//     const totalAmount = subtotal + shipping
//     const orderId = 'AM' + Math.floor(10000000 + Math.random() * 90000000)

//     setLastOrder({
//       orderId,
//       placedAt: new Date(),
//       customer: customerForm,
//       paymentMethod,
//       items: cartItems,
//       totalAmount,
//     })
//     setCartItems([])
//     setPage('OrderSuccess')
//   }

//   const isAuthPage = page === 'Login' || page === 'Register'

//   return (
//     <div className="app">
//       {!isAuthPage && (
//         <Navbar
//           active={page}
//           setActive={setPage}
//           cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
//         />
//       )}

//       {page === 'Home' && (
//         <>
//           <Hero />
//           <TrustBadges />
//           <CategoryGrid />
//         </>
//       )}

//       {page === 'Product' && (
//         <Products onProductClick={handleProductClick} onAddToCart={addToCart} />
//       )}

//       {page === 'ProductDetails' && selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           onBack={handleBack}
//           onProductClick={handleProductClick}
//           onAddToCart={addToCart}
//         />
//       )}

//       {page === 'Cart' && (
//         <Cart
//           cartItems={cartItems}
//           onIncrease={increaseQty}
//           onDecrease={decreaseQty}
//           onRemove={removeFromCart}
//           onContinueShopping={() => setPage('Product')}
//           onCheckout={() => setPage('Checkout')}
//         />
//       )}

//       {page === 'Checkout' && (
//         <Checkout
//           cartItems={cartItems}
//           onBack={() => setPage('Cart')}
//           onOrderPlaced={handleOrderPlaced}
//         />
//       )}

//       {page === 'OrderSuccess' && lastOrder && (
//         <OrderSuccess
//           order={lastOrder}
//           onViewOrder={() => setPage('MyOrders')}
//           onContinueShopping={() => setPage('Product')}
//         />
//       )}

//       {page === 'Login' && (
//         <Login
//           onLoginSuccess={() => setPage('Profile')}
//           onRegister={() => setPage('Register')}
//         />
//       )}

//       {page === 'Register' && (
//         <Register
//           onRegisterSuccess={() => setPage('Profile')}
//           onLogin={() => setPage('Login')}
//         />
//       )}

//       {page === 'Profile' && (
//         <Profile
//           onBack={() => setPage('Home')}
//           onNavigate={(key) => setPage(key)}
//         />
//       )}

//       {page === 'MyOrders' && (
//         <MyOrders
//           onBack={() => setPage('Home')}
//           onNavigate={(key) => setPage(key)}
//         />
//       )}

//       {page === 'About Us' && (
//         <About onBack={() => setPage('Home')} />
//       )}

//       {page === 'Contact Us' && (
//         <ContactUs onBack={() => setPage('Home')} />
//       )}

//       {!isAuthPage && <Footer />}
//     </div>
//   )
// }

// export default App

// import { useState } from "react";
// import MyOrders from "./MyOrders"; // Import your orders table component
// // Import your Profile component here too...

// export default function AccountDashboard() {
//   // 1. Create a state to keep track of which tab is clicked
//   const [activeTab, setActiveTab] = useState("My Profile");

//   return (
//     <div className="dashboard-container">
//       {/* SIDEBAR */}
//       <div className="sidebar">
//         <button 
//           className={`sidebar-link ${activeTab === "My Profile" ? "active" : ""}`}
//           onClick={() => setActiveTab("My Profile")}
//         >
//           My Profile
//         </button>

//         <button 
//           className={`sidebar-link ${activeTab === "My Orders" ? "active" : ""}`}
//           onClick={() => setActiveTab("My Orders")}
//         >
//           My Orders
//         </button>
//         {/* ...other links */}
//       </div>

//       {/* MAIN VIEW CONTENT AREA */}
//       <div className="main-content">
//         {activeTab === "My Profile" && <MyProfileComponent />}
//         {activeTab === "My Orders" && <MyOrders />}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Home from './pages/Home'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import './App.css'

// function App() {
//   const [page, setPage] = useState('home')
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [cartItems, setCartItems] = useState([])

//   const addToCart = (product, quantity = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((item) => item.product.id === product.id)
//       if (existing) {
//         return prev.map((item) =>
//           item.product.id === product.id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         )
//       }
//       return [...prev, { product, quantity }]
//     })
//   }

//   const increaseQty = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     )
//   }

//   const decreaseQty = (id) => {
//     setCartItems((prev) =>
//       prev
//         .map((item) =>
//           item.product.id === id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter((item) => item.quantity > 0)
//     )
//   }

//   const removeItem = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.product.id !== id))
//   }

//   const handleOrderPlaced = (form, payment) => {
//     setCartItems([])
//     alert(`Order placed successfully! Payment: ${payment}`)
//     setPage('home')
//   }

//   const renderPage = () => {
//     switch (page) {
//       case 'home':
//         return <Home />
//       case 'products':
//         return (
//           <Products
//             onProductClick={(product) => {
//               setSelectedProduct(product)
//               setPage('productDetail')
//             }}
//             onAddToCart={addToCart}
//           />
//         )
//       case 'productDetail':
//         return (
//           <ProductDetails
//             product={selectedProduct}
//             onBack={() => setPage('products')}
//             onProductClick={(product) => {
//               setSelectedProduct(product)
//               setPage('productDetail')
//               window.scrollTo(0, 0)
//             }}
//             onAddToCart={addToCart}
//           />
//         )
//       case 'cart':
//         return (
//           <Cart
//             cartItems={cartItems}
//             onIncrease={increaseQty}
//             onDecrease={decreaseQty}
//             onRemove={removeItem}
//             onContinueShopping={() => setPage('products')}
//             onCheckout={() => setPage('checkout')}
//           />
//         )
//       case 'checkout':
//         return (
//           <Checkout
//             cartItems={cartItems}
//             onBack={() => setPage('cart')}
//             onOrderPlaced={handleOrderPlaced}
//           />
//         )
//       default:
//         return <Home />
//     }
//   }

//   const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

//   return (
//     <div className="app">
//       <Navbar
//         cartCount={cartCount}
//         onCartClick={() => setPage('cart')}
//         onHomeClick={() => setPage('home')}
//         onProductsClick={() => setPage('products')}
//       />
//       {renderPage()}
//       <Footer />
//     </div>
//   )
// }

// export default App