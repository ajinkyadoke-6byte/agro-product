// import React, { useState } from 'react'

// const SHIPPING_FEE = 60
// const FREE_SHIPPING_THRESHOLD = 4500

// const indianStates = [
//   'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
//   'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
//   'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
//   'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
//   'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
// ]

// const paymentMethods = [
//   { id: 'cod', label: 'Cash on Delivery', subtitle: 'Pay when you receive your order', icon: 'ti-cash' },
//   { id: 'upi', label: 'UPI Payment', subtitle: 'Pay using any UPI app', icon: 'ti-brand-google-pay' },
//   { id: 'online', label: 'Online Payment', subtitle: 'Debit/Credit Card, Net Banking, Wallets', icon: 'ti-credit-card' },
//   { id: 'razorpay', label: 'Razorpay', subtitle: 'Secure payments via Razorpay', icon: 'ti-bolt' },
// ]

// const Checkout = ({ cartItems, onBack, onOrderPlaced }) => {
//   const [form, setForm] = useState({
//     fullName: '', mobile: '', address: '',
//     village: '', taluka: '', district: '',
//     state: '', pinCode: '',
//   })
//   const [selectedPayment, setSelectedPayment] = useState('cod')
//   const [errors, setErrors] = useState({})

//   const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
//   const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE
//   const total = subtotal + shipping

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//     setErrors({ ...errors, [e.target.name]: '' })
//   }

//   const validate = () => {
//     const newErrors = {}
//     if (!form.fullName.trim()) newErrors.fullName = 'Full name is required'
//     if (!form.mobile.trim()) newErrors.mobile = 'Mobile number is required'
//     if (!form.address.trim()) newErrors.address = 'Address is required'
//     if (!form.village.trim()) newErrors.village = 'Village/Town is required'
//     if (!form.taluka.trim()) newErrors.taluka = 'Taluka is required'
//     if (!form.district.trim()) newErrors.district = 'District is required'
//     if (!form.state) newErrors.state = 'State is required'
//     if (!form.pinCode.trim()) newErrors.pinCode = 'Pin code is required'
//     return newErrors
//   }

//   const handlePlaceOrder = () => {
//     const newErrors = validate()
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       return
//     }
//     if (onOrderPlaced) onOrderPlaced(form, selectedPayment)
//   }

//   return (
//     <div className="checkout-page">
//       <div className="breadcrumb">
//         <span onClick={onBack} style={{ cursor: 'pointer', color: '#1d6b2e' }}>Home</span>
//         <i className="ti ti-chevron-right"></i>
//         <span onClick={onBack} style={{ cursor: 'pointer', color: '#1d6b2e' }}>Cart</span>
//         <i className="ti ti-chevron-right"></i>
//         <span className="breadcrumb-current">Checkout</span>
//       </div>

//       <h1 className="checkout-title">Checkout</h1>

//       <div className="checkout-stepper">
//         <div className="checkout-step active">
//           <span className="step-number">1</span>
//           <span className="step-label">Customer Details</span>
//         </div>
//         <div className="step-line"></div>
//         <div className="checkout-step">
//           <span className="step-number">2</span>
//           <span className="step-label">Payment Method</span>
//         </div>
//         <div className="step-line"></div>
//         <div className="checkout-step">
//           <span className="step-number">3</span>
//           <span className="step-label">Place Order</span>
//         </div>
//       </div>

//       <div className="checkout-layout">
//         <div className="checkout-main">

//           <div className="checkout-section">
//             <h2 className="checkout-section-title">
//               <span className="section-num">1</span> Customer Details
//             </h2>

//             <div className="checkout-form">
//               <div className="form-row-2">
//                 <div className="form-group">
//                   <label>Full Name *</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     placeholder="Enter your full name"
//                     value={form.fullName}
//                     onChange={handleChange}
//                     className={errors.fullName ? 'input-error' : ''}
//                   />
//                   {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
//                 </div>
//                 <div className="form-group">
//                   <label>Mobile Number *</label>
//                   <input
//                     type="tel"
//                     name="mobile"
//                     placeholder="Enter mobile number"
//                     value={form.mobile}
//                     onChange={handleChange}
//                     className={errors.mobile ? 'input-error' : ''}
//                   />
//                   {errors.mobile && <span className="error-msg">{errors.mobile}</span>}
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Address *</label>
//                 <textarea
//                   name="address"
//                   placeholder="House No., Street, Landmark"
//                   value={form.address}
//                   onChange={handleChange}
//                   rows={3}
//                   className={errors.address ? 'input-error' : ''}
//                 />
//                 {errors.address && <span className="error-msg">{errors.address}</span>}
//               </div>

//               <div className="form-row-3">
//                 <div className="form-group">
//                   <label>Village / Town *</label>
//                   <input
//                     type="text"
//                     name="village"
//                     placeholder="Enter village / town"
//                     value={form.village}
//                     onChange={handleChange}
//                     className={errors.village ? 'input-error' : ''}
//                   />
//                   {errors.village && <span className="error-msg">{errors.village}</span>}
//                 </div>
//                 <div className="form-group">
//                   <label>Taluka *</label>
//                   <input
//                     type="text"
//                     name="taluka"
//                     placeholder="Enter taluka"
//                     value={form.taluka}
//                     onChange={handleChange}
//                     className={errors.taluka ? 'input-error' : ''}
//                   />
//                   {errors.taluka && <span className="error-msg">{errors.taluka}</span>}
//                 </div>
//                 <div className="form-group">
//                   <label>District *</label>
//                   <input
//                     type="text"
//                     name="district"
//                     placeholder="Enter district"
//                     value={form.district}
//                     onChange={handleChange}
//                     className={errors.district ? 'input-error' : ''}
//                   />
//                   {errors.district && <span className="error-msg">{errors.district}</span>}
//                 </div>
//               </div>

//               <div className="form-row-2">
//                 <div className="form-group">
//                   <label>State *</label>
//                   <select
//                     name="state"
//                     value={form.state}
//                     onChange={handleChange}
//                     className={errors.state ? 'input-error' : ''}
//                   >
//                     <option value="">Select state</option>
//                     {indianStates.map((s) => (
//                       <option key={s} value={s}>{s}</option>
//                     ))}
//                   </select>
//                   {errors.state && <span className="error-msg">{errors.state}</span>}
//                 </div>
//                 <div className="form-group">
//                   <label>Pin Code *</label>
//                   <input
//                     type="text"
//                     name="pinCode"
//                     placeholder="Enter pin code"
//                     value={form.pinCode}
//                     onChange={handleChange}
//                     className={errors.pinCode ? 'input-error' : ''}
//                   />
//                   {errors.pinCode && <span className="error-msg">{errors.pinCode}</span>}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="checkout-section">
//             <h2 className="checkout-section-title">
//               <span className="section-num">2</span> Payment Method
//               <span className="section-subtitle">Choose a payment method</span>
//             </h2>
//             <div className="payment-grid">
//               {paymentMethods.map((pm) => (
//                 <label
//                   key={pm.id}
//                   className={`payment-option ${selectedPayment === pm.id ? 'payment-active' : ''}`}
//                   onClick={() => setSelectedPayment(pm.id)}
//                 >
//                   <i className={`ti ${pm.icon}`}></i>
//                   <p className="payment-label">{pm.label}</p>
//                   <p className="payment-subtitle">{pm.subtitle}</p>
//                   <input
//                     type="radio"
//                     name="payment"
//                     checked={selectedPayment === pm.id}
//                     onChange={() => setSelectedPayment(pm.id)}
//                   />
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="checkout-trust-strip">
//             <div className="bottom-badge">
//               <i className="ti ti-shield-check"></i>
//               <div>
//                 <p className="bottom-badge-title">100% Genuine Products</p>
//                 <p className="bottom-badge-subtitle">Original &amp; Trusted</p>
//               </div>
//             </div>
//             <div className="bottom-badge">
//               <i className="ti ti-truck"></i>
//               <div>
//                 <p className="bottom-badge-title">Fast Delivery</p>
//                 <p className="bottom-badge-subtitle">On time, every time</p>
//               </div>
//             </div>
//             <div className="bottom-badge">
//               <i className="ti ti-lock"></i>
//               <div>
//                 <p className="bottom-badge-title">Secure Payments</p>
//                 <p className="bottom-badge-subtitle">Multiple safe payment options</p>
//               </div>
//             </div>
//             <div className="bottom-badge">
//               <i className="ti ti-headset"></i>
//               <div>
//                 <p className="bottom-badge-title">Support 24/7</p>
//                 <p className="bottom-badge-subtitle">We are here to help you</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <aside className="checkout-summary">
//           <h3>Order Summary <span className="summary-item-count">({totalItems} Items)</span>
//             <span className="edit-cart-link" onClick={onBack}>Edit Cart</span>
//           </h3>

//           <div className="checkout-items-list">
//             {cartItems.map((item) => (
//               <div className="checkout-item-row" key={item.product.id}>
//                 <img src={item.product.image} alt={item.product.name} className="checkout-item-image" />
//                 <div className="checkout-item-info">
//                   <p className="checkout-item-name">{item.product.name}</p>
//                   <p className="checkout-item-size">1 kg</p>
//                   <p className="checkout-item-qty">Qty: {item.quantity}</p>
//                 </div>
//                 <span className="checkout-item-price">
//                   ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="summary-divider"></div>

//           <div className="summary-row">
//             <span>Subtotal ({totalItems} Items)</span>
//             <span>₹{subtotal.toLocaleString('en-IN')}</span>
//           </div>
//           <div className="summary-row">
//             <span>Shipping Charges</span>
//             <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
//           </div>

//           <div className="summary-divider"></div>

//           <div className="summary-total-block">
//             <div>
//               <p className="summary-total-label">Total Amount</p>
//               <p className="summary-total-note">(Incl. of all taxes)</p>
//             </div>
//             <p className="summary-total-value">₹{total.toLocaleString('en-IN')}</p>
//           </div>

//           <button className="place-order-btn" onClick={handlePlaceOrder}>
//             <i className="ti ti-lock"></i> Place Order
//           </button>
//           <p className="checkout-terms">
//             By placing an order, you agree to our{' '}
//             <span className="terms-link">Terms &amp; Conditions</span>
//           </p>

//           <div className="summary-perks">
//             <div className="perk-row">
//               <i className="ti ti-shield-check"></i>
//               <div>
//                 <p className="perk-title">Secure Checkout</p>
//                 <p className="perk-subtitle">Your data is 100% safe and secure</p>
//               </div>
//             </div>
//             <div className="perk-row">
//               <i className="ti ti-rotate"></i>
//               <div>
//                 <p className="perk-title">Easy Returns</p>
//                 <p className="perk-subtitle">Hassle free returns within 7 days</p>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </div>
//   )
// }

// export default Checkout

import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ProductContext } from '../context/ProductContext'
import {
  ChevronRight, Banknote, Smartphone, CreditCard, Zap, ShieldCheck,
  Truck, Lock, Headset, RotateCcw
} from 'lucide-react'

const SHIPPING_FEE = 60
const FREE_SHIPPING_THRESHOLD = 4500

const indianStates = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
]

const paymentMethods = [
  { id: 'cod',      label: 'Cash on Delivery', subtitle: 'Pay when you receive your order',           icon: Banknote },
  { id: 'upi',      label: 'UPI Payment',      subtitle: 'Pay using any UPI app',                      icon: Smartphone },
  { id: 'online',   label: 'Online Payment',   subtitle: 'Debit/Credit Card, Net Banking, Wallets',    icon: CreditCard },
  { id: 'razorpay', label: 'Razorpay',         subtitle: 'Secure payments via Razorpay',                icon: Zap },
]

const Checkout = ({ cartItems, onEditCart, onPlaceOrder }) => {
  const navigate = useNavigate()
  const { token, backendUrl } = useContext(ProductContext)

  const [form, setForm] = useState({
    fullName: '', mobile: '', address: '',
    village: '', taluka: '', district: '',
    state: '', pinCode: '',
  })
  const [selectedPayment, setSelectedPayment] = useState('cod')
  const [errors, setErrors] = useState({})
  const [placing, setPlacing] = useState(false)

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE
  const total = subtotal + shipping

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!form.mobile.trim()) newErrors.mobile = 'Mobile number is required'
    if (!form.address.trim()) newErrors.address = 'Address is required'
    if (!form.village.trim()) newErrors.village = 'Village/Town is required'
    if (!form.taluka.trim()) newErrors.taluka = 'Taluka is required'
    if (!form.district.trim()) newErrors.district = 'District is required'
    if (!form.state) newErrors.state = 'State is required'
    if (!form.pinCode.trim()) newErrors.pinCode = 'Pin code is required'
    return newErrors
  }

  const handlePlaceOrder = async () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    if (!token) {
      toast.error('Please login to place an order')
      navigate('/login')
      return
    }

    if (selectedPayment !== 'cod') {
      toast.error('This payment method is coming soon. Please select Cash on Delivery for now.')
      return
    }

    setPlacing(true)
    try {
      const items = cartItems.map((item) => ({
        productId: item.product._id,
        name: item.product.name,
        image: item.product.image?.[0],
        price: item.product.price,
        quantity: item.quantity,
      }))

      const response = await axios.post(
        backendUrl + '/api/order/place',
        {
          items,
          amount: total,
          address: form,
        },
        { headers: { token } }
      )

      if (response.data.success) {
        toast.success('Order placed successfully!')
        if (onPlaceOrder) onPlaceOrder()
        navigate('/order-success')
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Failed to place order')
    } finally {
      setPlacing(false)
    }
  }

  return (
    <div className="checkout-page">
      <div className="breadcrumb">
        <span onClick={() => navigate('/')} style={{ cursor: 'pointer', color: '#1d6b2e' }}>Home</span>
        <ChevronRight size={14} />
        <span onClick={onEditCart} style={{ cursor: 'pointer', color: '#1d6b2e' }}>Cart</span>
        <ChevronRight size={14} />
        <span className="breadcrumb-current">Checkout</span>
      </div>

      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-stepper">
        <div className="checkout-step active">
          <span className="step-number">1</span>
          <span className="step-label">Customer Details</span>
        </div>
        <div className="step-line"></div>
        <div className="checkout-step">
          <span className="step-number">2</span>
          <span className="step-label">Payment Method</span>
        </div>
        <div className="step-line"></div>
        <div className="checkout-step">
          <span className="step-number">3</span>
          <span className="step-label">Place Order</span>
        </div>
      </div>

      <div className="checkout-layout">
        <div className="checkout-main">

          <div className="checkout-section">
            <h2 className="checkout-section-title">
              <span className="section-num">1</span> Customer Details
            </h2>

            <div className="checkout-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={form.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? 'input-error' : ''}
                  />
                  {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
                </div>
                <div className="form-group">
                  <label>Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Enter mobile number"
                    value={form.mobile}
                    onChange={handleChange}
                    className={errors.mobile ? 'input-error' : ''}
                  />
                  {errors.mobile && <span className="error-msg">{errors.mobile}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Address *</label>
                <textarea
                  name="address"
                  placeholder="House No., Street, Landmark"
                  value={form.address}
                  onChange={handleChange}
                  rows={3}
                  className={errors.address ? 'input-error' : ''}
                />
                {errors.address && <span className="error-msg">{errors.address}</span>}
              </div>

              <div className="form-row-3">
                <div className="form-group">
                  <label>Village / Town *</label>
                  <input
                    type="text"
                    name="village"
                    placeholder="Enter village / town"
                    value={form.village}
                    onChange={handleChange}
                    className={errors.village ? 'input-error' : ''}
                  />
                  {errors.village && <span className="error-msg">{errors.village}</span>}
                </div>
                <div className="form-group">
                  <label>Taluka *</label>
                  <input
                    type="text"
                    name="taluka"
                    placeholder="Enter taluka"
                    value={form.taluka}
                    onChange={handleChange}
                    className={errors.taluka ? 'input-error' : ''}
                  />
                  {errors.taluka && <span className="error-msg">{errors.taluka}</span>}
                </div>
                <div className="form-group">
                  <label>District *</label>
                  <input
                    type="text"
                    name="district"
                    placeholder="Enter district"
                    value={form.district}
                    onChange={handleChange}
                    className={errors.district ? 'input-error' : ''}
                  />
                  {errors.district && <span className="error-msg">{errors.district}</span>}
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>State *</label>
                  <select
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    className={errors.state ? 'input-error' : ''}
                  >
                    <option value="">Select state</option>
                    {indianStates.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.state && <span className="error-msg">{errors.state}</span>}
                </div>
                <div className="form-group">
                  <label>Pin Code *</label>
                  <input
                    type="text"
                    name="pinCode"
                    placeholder="Enter pin code"
                    value={form.pinCode}
                    onChange={handleChange}
                    className={errors.pinCode ? 'input-error' : ''}
                  />
                  {errors.pinCode && <span className="error-msg">{errors.pinCode}</span>}
                </div>
              </div>
            </div>
          </div>

          <div className="checkout-section">
            <h2 className="checkout-section-title">
              <span className="section-num">2</span> Payment Method
              <span className="section-subtitle">Choose a payment method</span>
            </h2>
            <div className="payment-grid">
              {paymentMethods.map((pm) => {
                const Icon = pm.icon
                return (
                  <label
                    key={pm.id}
                    className={`payment-option ${selectedPayment === pm.id ? 'payment-active' : ''}`}
                    onClick={() => setSelectedPayment(pm.id)}
                  >
                    <Icon size={20} />
                    <p className="payment-label">{pm.label}</p>
                    <p className="payment-subtitle">{pm.subtitle}</p>
                    <input
                      type="radio"
                      name="payment"
                      checked={selectedPayment === pm.id}
                      onChange={() => setSelectedPayment(pm.id)}
                    />
                  </label>
                )
              })}
            </div>
          </div>

          <div className="checkout-trust-strip">
            <div className="bottom-badge">
              <ShieldCheck size={22} color="#1d6b2e" />
              <div>
                <p className="bottom-badge-title">100% Genuine Products</p>
                <p className="bottom-badge-subtitle">Original &amp; Trusted</p>
              </div>
            </div>
            <div className="bottom-badge">
              <Truck size={22} color="#1d6b2e" />
              <div>
                <p className="bottom-badge-title">Fast Delivery</p>
                <p className="bottom-badge-subtitle">On time, every time</p>
              </div>
            </div>
            <div className="bottom-badge">
              <Lock size={22} color="#1d6b2e" />
              <div>
                <p className="bottom-badge-title">Secure Payments</p>
                <p className="bottom-badge-subtitle">Multiple safe payment options</p>
              </div>
            </div>
            <div className="bottom-badge">
              <Headset size={22} color="#1d6b2e" />
              <div>
                <p className="bottom-badge-title">Support 24/7</p>
                <p className="bottom-badge-subtitle">We are here to help you</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="checkout-summary">
          <h3>Order Summary <span className="summary-item-count">({totalItems} Items)</span>
            <span className="edit-cart-link" onClick={onEditCart}>Edit Cart</span>
          </h3>

          <div className="checkout-items-list">
            {cartItems.map((item) => (
              <div className="checkout-item-row" key={item.product._id}>
                <img src={item.product.image?.[0]} alt={item.product.name} className="checkout-item-image" />
                <div className="checkout-item-info">
                  <p className="checkout-item-name">{item.product.name}</p>
                  <p className="checkout-item-qty">Qty: {item.quantity}</p>
                </div>
                <span className="checkout-item-price">
                  ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row">
            <span>Subtotal ({totalItems} Items)</span>
            <span>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-row">
            <span>Shipping Charges</span>
            <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total-block">
            <div>
              <p className="summary-total-label">Total Amount</p>
              <p className="summary-total-note">(Incl. of all taxes)</p>
            </div>
            <p className="summary-total-value">₹{total.toLocaleString('en-IN')}</p>
          </div>

          <button className="place-order-btn" onClick={handlePlaceOrder} disabled={placing}>
            <Lock size={16} /> {placing ? 'Placing Order...' : 'Place Order'}
          </button>
          <p className="checkout-terms">
            By placing an order, you agree to our{' '}
            <span className="terms-link">Terms &amp; Conditions</span>
          </p>

          <div className="summary-perks">
            <div className="perk-row">
              <ShieldCheck size={18} />
              <div>
                <p className="perk-title">Secure Checkout</p>
                <p className="perk-subtitle">Your data is 100% safe and secure</p>
              </div>
            </div>
            <div className="perk-row">
              <RotateCcw size={18} />
              <div>
                <p className="perk-title">Easy Returns</p>
                <p className="perk-subtitle">Hassle free returns within 7 days</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Checkout






// import React, { useState, useEffect } from 'react'

// const SHIPPING_FEE = 60
// const FREE_SHIPPING_THRESHOLD = 4500

// const indianStates = [
//   'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
//   'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
//   'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
//   'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
//   'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
// ]

// const paymentMethods = [
//   { id: 'cod', label: 'Cash on Delivery', subtitle: 'Pay when you receive your order', icon: 'ti-cash' },
//   { id: 'upi', label: 'UPI Payment', subtitle: 'Pay using any UPI app', icon: 'ti-brand-google-pay' },
//   { id: 'online', label: 'Online Payment', subtitle: 'Debit/Credit Card, Net Banking, Wallets', icon: 'ti-credit-card' },
//   { id: 'razorpay', label: 'Razorpay', subtitle: 'Secure payments via Razorpay', icon: 'ti-bolt' },
// ]

// const requiredFields = ['fullName', 'mobile', 'address', 'village', 'taluka', 'district', 'state', 'pinCode']

// const Checkout = ({ cartItems, onBack, onOrderPlaced }) => {
//   const [form, setForm] = useState({
//     fullName: '', mobile: '', address: '',
//     village: '', taluka: '', district: '',
//     state: '', pinCode: '',
//   })
//   const [selectedPayment, setSelectedPayment] = useState('cod')
//   const [errors, setErrors] = useState({})
//   const [processing, setProcessing] = useState(false)

//   // Step 1 -> Step 2: automatically advances once every customer-detail field is filled.
//   // Step 2 -> Step 3: advances once "Place Order" is clicked and passes validation.
//   const [currentStep, setCurrentStep] = useState(1)

//   const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
//   const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE
//   const total = subtotal + shipping

//   const isCustomerDetailsComplete = requiredFields.every((field) => form[field].trim() !== '')

//   useEffect(() => {
//     if (isCustomerDetailsComplete && currentStep === 1) {
//       setCurrentStep(2)
//     } else if (!isCustomerDetailsComplete && currentStep === 2) {
//       setCurrentStep(1)
//     }
//   }, [isCustomerDetailsComplete, currentStep])

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//     setErrors({ ...errors, [e.target.name]: '' })
//   }

//   const validate = () => {
//     const newErrors = {}
//     if (!form.fullName.trim()) newErrors.fullName = 'Full name is required'
//     if (!form.mobile.trim()) newErrors.mobile = 'Mobile number is required'
//     if (!form.address.trim()) newErrors.address = 'Address is required'
//     if (!form.village.trim()) newErrors.village = 'Village/Town is required'
//     if (!form.taluka.trim()) newErrors.taluka = 'Taluka is required'
//     if (!form.district.trim()) newErrors.district = 'District is required'
//     if (!form.state) newErrors.state = 'State is required'
//     if (!form.pinCode.trim()) newErrors.pinCode = 'Pin code is required'
//     return newErrors
//   }

//   // Dummy payment flow:
//   // 1. Validate the customer details form — bail out with field errors if incomplete.
//   // 2. Move the stepper to step 3 ("Place Order") immediately for visual feedback.
//   // 3. Simulate a payment gateway round-trip with a short delay + button spinner
//   //    (skipped for Cash on Delivery, since there's nothing to "process" upfront).
//   // 4. Call onOrderPlaced(form, selectedPayment) so the parent (App.jsx) can build
//   //    the final order object and navigate to the Order Success page.
//   const handlePlaceOrder = () => {
//     const newErrors = validate()
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       return
//     }

//     setCurrentStep(3)

//     if (selectedPayment === 'cod') {
//       if (onOrderPlaced) onOrderPlaced(form, selectedPayment)
//       return
//     }

//     setProcessing(true)
//     setTimeout(() => {
//       setProcessing(false)
//       if (onOrderPlaced) onOrderPlaced(form, selectedPayment)
//     }, 1200)
//   }

//   return (
//     <div className="checkout-page">
//       <div className="breadcrumb">
//         <span onClick={onBack} style={{ cursor: 'pointer', color: '#1d6b2e' }}>Home</span>
//         <i className="ti ti-chevron-right"></i>
//         <span onClick={onBack} style={{ cursor: 'pointer', color: '#1d6b2e' }}>Cart</span>
//         <i className="ti ti-chevron-right"></i>
//         <span className="breadcrumb-current">Checkout</span>
//       </div>

//       <h1 className="checkout-title">Checkout</h1>

//       <div className="checkout-stepper">
//         <div className={`checkout-step ${currentStep >= 1 ? 'active' : ''}`}>
//           <span className="step-number">{currentStep > 1 ? <i className="ti ti-check"></i> : 1}</span>
//           <span className="step-label">Customer Details</span>
//         </div>
//         <div className={`step-line ${currentStep >= 2 ? 'step-line-done' : ''}`}></div>
//         <div className={`checkout-step ${currentStep >= 2 ? 'active' : ''}`}>
//           <span className="step-number">{currentStep > 2 ? <i className="ti ti-check"></i> : 2}</span>
//           <span className="step-label">Payment Method</span>
//         </div>
//         <div className={`step-line ${currentStep >= 3 ? 'step-line-done' : ''}`}></div>
//         <div className={`checkout-step ${currentStep >= 3 ? 'active' : ''}`}>
//           <span className="step-number">3</span>
//           <span className="step-label">Place Order</span>
//         </div>
//       </div>

//       <div className="checkout-layout">
//         <div className="checkout-main">

//           <div className="checkout-section">
//             <h2 className="checkout-section-title">
//               <span className="section-num">1</span> Customer Details
//             </h2>

//             <div className="checkout-form">
//               <div className="form-row-2">
//                 <div className="form-group">
//                   <label>Full Name *</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     placeholder="Enter your full name"
//                     value={form.fullName}
//                     onChange={handleChange}
//                     className={errors.fullName ? 'input-error' : ''}
//                   />
//                   {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
//                 </div>
//                 <div className="form-group">
//                   <label>Mobile Number *</label>
//                   <input
//                     type="tel"
//                     name="mobile"
//                     placeholder="Enter mobile number"
//                     value={form.mobile}
//                     onChange={handleChange}
//                     className={errors.mobile ? 'input-error' : ''}
//                   />
//                   {errors.mobile && <span className="error-msg">{errors.mobile}</span>}
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Address *</label>
//                 <textarea
//                   name="address"
//                   placeholder="House No., Street, Landmark"
//                   value={form.address}
//                   onChange={handleChange}
//                   rows={3}
//                   className={errors.address ? 'input-error' : ''}
//                 />
//                 {errors.address && <span className="error-msg">{errors.address}</span>}
//               </div>

//               <div className="form-row-3">
//                 <div className="form-group">
//                   <label>Village / Town *</label>
//                   <input
//                     type="text"
//                     name="village"
//                     placeholder="Enter village / town"
//                     value={form.village}
//                     onChange={handleChange}
//                     className={errors.village ? 'input-error' : ''}
//                   />
//                   {errors.village && <span className="error-msg">{errors.village}</span>}
//                 </div>
//                 <div className="form-group">
//                   <label>Taluka *</label>
//                   <input
//                     type="text"
//                     name="taluka"
//                     placeholder="Enter taluka"
//                     value={form.taluka}
//                     onChange={handleChange}
//                     className={errors.taluka ? 'input-error' : ''}
//                   />
//                   {errors.taluka && <span className="error-msg">{errors.taluka}</span>}
//                 </div>
//                 <div className="form-group">
//                   <label>District *</label>
//                   <input
//                     type="text"
//                     name="district"
//                     placeholder="Enter district"
//                     value={form.district}
//                     onChange={handleChange}
//                     className={errors.district ? 'input-error' : ''}
//                   />
//                   {errors.district && <span className="error-msg">{errors.district}</span>}
//                 </div>
//               </div>

//               <div className="form-row-2">
//                 <div className="form-group">
//                   <label>State *</label>
//                   <select
//                     name="state"
//                     value={form.state}
//                     onChange={handleChange}
//                     className={errors.state ? 'input-error' : ''}
//                   >
//                     <option value="">Select state</option>
//                     {indianStates.map((s) => (
//                       <option key={s} value={s}>{s}</option>
//                     ))}
//                   </select>
//                   {errors.state && <span className="error-msg">{errors.state}</span>}
//                 </div>
//                 <div className="form-group">
//                   <label>Pin Code *</label>
//                   <input
//                     type="text"
//                     name="pinCode"
//                     placeholder="Enter pin code"
//                     value={form.pinCode}
//                     onChange={handleChange}
//                     className={errors.pinCode ? 'input-error' : ''}
//                   />
//                   {errors.pinCode && <span className="error-msg">{errors.pinCode}</span>}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="checkout-section">
//             <h2 className="checkout-section-title">
//               <span className="section-num">2</span> Payment Method
//               <span className="section-subtitle">Choose a payment method</span>
//             </h2>
//             <div className="payment-grid">
//               {paymentMethods.map((pm) => (
//                 <label
//                   key={pm.id}
//                   className={`payment-option ${selectedPayment === pm.id ? 'payment-active' : ''}`}
//                   onClick={() => setSelectedPayment(pm.id)}
//                 >
//                   <i className={`ti ${pm.icon}`}></i>
//                   <p className="payment-label">{pm.label}</p>
//                   <p className="payment-subtitle">{pm.subtitle}</p>
//                   <input
//                     type="radio"
//                     name="payment"
//                     checked={selectedPayment === pm.id}
//                     onChange={() => setSelectedPayment(pm.id)}
//                   />
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="checkout-trust-strip">
//             <div className="bottom-badge">
//               <i className="ti ti-shield-check"></i>
//               <div>
//                 <p className="bottom-badge-title">100% Genuine Products</p>
//                 <p className="bottom-badge-subtitle">Original &amp; Trusted</p>
//               </div>
//             </div>
//             <div className="bottom-badge">
//               <i className="ti ti-truck"></i>
//               <div>
//                 <p className="bottom-badge-title">Fast Delivery</p>
//                 <p className="bottom-badge-subtitle">On time, every time</p>
//               </div>
//             </div>
//             <div className="bottom-badge">
//               <i className="ti ti-lock"></i>
//               <div>
//                 <p className="bottom-badge-title">Secure Payments</p>
//                 <p className="bottom-badge-subtitle">Multiple safe payment options</p>
//               </div>
//             </div>
//             <div className="bottom-badge">
//               <i className="ti ti-headset"></i>
//               <div>
//                 <p className="bottom-badge-title">Support 24/7</p>
//                 <p className="bottom-badge-subtitle">We are here to help you</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <aside className="checkout-summary">
//           <h3>Order Summary <span className="summary-item-count">({totalItems} Items)</span>
//             <span className="edit-cart-link" onClick={onBack}>Edit Cart</span>
//           </h3>

//           <div className="checkout-items-list">
//             {cartItems.map((item) => (
//               <div className="checkout-item-row" key={item.product.id}>
//                 <img src={item.product.image} alt={item.product.name} className="checkout-item-image" />
//                 <div className="checkout-item-info">
//                   <p className="checkout-item-name">{item.product.name}</p>
//                   <p className="checkout-item-size">{item.product.form || 'Liquid'}</p>
//                   <p className="checkout-item-qty">Qty: {item.quantity}</p>
//                 </div>
//                 <span className="checkout-item-price">
//                   ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="summary-divider"></div>

//           <div className="summary-row">
//             <span>Subtotal ({totalItems} Items)</span>
//             <span>₹{subtotal.toLocaleString('en-IN')}</span>
//           </div>
//           <div className="summary-row">
//             <span>Shipping Charges</span>
//             <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
//           </div>

//           <div className="summary-divider"></div>

//           <div className="summary-total-block">
//             <div>
//               <p className="summary-total-label">Total Amount</p>
//               <p className="summary-total-note">(Incl. of all taxes)</p>
//             </div>
//             <p className="summary-total-value">₹{total.toLocaleString('en-IN')}</p>
//           </div>

//           <button className="place-order-btn" onClick={handlePlaceOrder} disabled={processing}>
//             {processing ? (
//               <><i className="ti ti-loader-2 spin-icon"></i> Processing Payment...</>
//             ) : (
//               <><i className="ti ti-lock"></i> Place Order</>
//             )}
//           </button>
//           <p className="checkout-terms">
//             By placing an order, you agree to our{' '}
//             <span className="terms-link">Terms &amp; Conditions</span>
//           </p>

//           <div className="summary-perks">
//             <div className="perk-row">
//               <i className="ti ti-shield-check"></i>
//               <div>
//                 <p className="perk-title">Secure Checkout</p>
//                 <p className="perk-subtitle">Your data is 100% safe and secure</p>
//               </div>
//             </div>
//             <div className="perk-row">
//               <i className="ti ti-rotate"></i>
//               <div>
//                 <p className="perk-title">Easy Returns</p>
//                 <p className="perk-subtitle">Hassle free returns within 7 days</p>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </div>
//   )
// }

// export default Checkout