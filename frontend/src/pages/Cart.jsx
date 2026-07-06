import React, { useMemo } from 'react'

const FREE_SHIPPING_THRESHOLD = 4500
const SHIPPING_FEE = 60

const Cart = ({ cartItems, onIncrease, onDecrease, onRemove, onContinueShopping, onCheckout }) => {

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [cartItems]
  )

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  )

  const qualifiesForFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD
  const shipping = cartItems.length === 0 ? 0 : (qualifiesForFreeShipping ? 0 : SHIPPING_FEE)
  const totalAmount = subtotal + shipping
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const shippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100))

  return (
    <div className="cart-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span style={{ cursor: 'pointer', color: '#1d6b2e' }} onClick={onContinueShopping}>Home</span>
        <i className="ti ti-chevron-right"></i>
        <span className="breadcrumb-current">Cart</span>
      </div>

      {/* Header */}
      <div className="cart-header">
        <h1>Your Cart <span className="cart-item-count">({totalItems} Items)</span></h1>
        <button className="continue-shopping-btn" onClick={onContinueShopping}>
          <i className="ti ti-arrow-left"></i> Continue Shopping
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <i className="ti ti-shopping-cart-off"></i>
          <p>Your cart is empty.</p>
          <button className="continue-shopping-btn" onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-layout">

          {/* Left: cart table + coupon + shipping */}
          <div className="cart-main">
            <div className="cart-table">
              <div className="cart-table-head">
                <span className="col-product">Product</span>
                <span className="col-price">Price</span>
                <span className="col-qty">Quantity</span>
                <span className="col-total">Total</span>
                <span className="col-action">Action</span>
              </div>

              {cartItems.map((item) => {
                const { product, quantity } = item
                const lineTotal = product.price * quantity
                return (
                  <div className="cart-row" key={product.id}>
                    <div className="col-product cart-product-cell">
                      {/* <img src={product.img} alt={product.name} className="cart-product-img" /> */}
                      <img src={product.image} alt={product.name} className="cart-product-img" />
                      <div>
                        <p className="cart-product-name">{product.name}</p>
                        <p className="cart-product-size">{product.packSize || '1 kg'}</p>
                        <span className="stock-badge">In Stock</span>
                      </div>
                    </div>

                    <div className="col-price cart-price">
                      ₹{product.price.toLocaleString('en-IN')}
                    </div>

                    <div className="col-qty">
                      <div className="qty-control">
                        <button
                          className="qty-btn"
                          onClick={() => onDecrease(product.id)}
                        >
                          −
                        </button>
                        <span className="qty-value">{quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => onIncrease(product.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="col-total cart-total">
                      ₹{lineTotal.toLocaleString('en-IN')}
                    </div>

                    <div className="col-action">
                      <button className="remove-btn" onClick={() => onRemove(product.id)}>
                        <i className="ti ti-trash"></i> Remove
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="cart-bottom-row">
              <div className="coupon-box">
                <i className="ti ti-ticket"></i>
                <div>
                  <p className="coupon-title">Have a coupon code?</p>
                  <p className="coupon-subtitle">Apply coupon code to get extra discount</p>
                </div>
                <input type="text" className="coupon-input" placeholder="Enter coupon code" />
                <button className="coupon-apply-btn">Apply</button>
              </div>

              <div className="shipping-box">
                <i className="ti ti-truck"></i>
                <div className="shipping-box-content">
                  <p className="shipping-title">
                    {qualifiesForFreeShipping ? 'Free Shipping!' : 'Free Shipping!'}
                  </p>
                  <p className="shipping-subtitle">
                    {qualifiesForFreeShipping
                      ? "You've unlocked free shipping."
                      : `Add ₹${amountToFreeShipping.toLocaleString('en-IN')} more to get free shipping.`}
                  </p>
                  <div className="shipping-progress-bar">
                    <div
                      className="shipping-progress-fill"
                      style={{ width: `${shippingProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cart-trust-strip">
              <div className="bottom-badge">
                <i className="ti ti-shield-check"></i>
                <div>
                  <p className="bottom-badge-title">100% Genuine Products</p>
                  <p className="bottom-badge-subtitle">Original &amp; Trusted</p>
                </div>
              </div>
              <div className="bottom-badge">
                <i className="ti ti-truck"></i>
                <div>
                  <p className="bottom-badge-title">Fast Delivery</p>
                  <p className="bottom-badge-subtitle">On time, every time</p>
                </div>
              </div>
              <div className="bottom-badge">
                <i className="ti ti-lock"></i>
                <div>
                  <p className="bottom-badge-title">Secure Payments</p>
                  <p className="bottom-badge-subtitle">Multiple safe payment options</p>
                </div>
              </div>
              <div className="bottom-badge">
                <i className="ti ti-headset"></i>
                <div>
                  <p className="bottom-badge-title">Expert Support</p>
                  <p className="bottom-badge-subtitle">24/7 customer support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: order summary */}
          <aside className="order-summary-card">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal ({totalItems} Items)</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
            </div>

            <div className="summary-total-row">
              <div>
                <p className="summary-total-label">Total Amount</p>
                <p className="summary-total-note">(Incl. of all taxes)</p>
              </div>
              <p className="summary-total-value">₹{totalAmount.toLocaleString('en-IN')}</p>
            </div>

            <button className="checkout-btn" onClick={onCheckout}>
              <i className="ti ti-lock"></i> Proceed to Checkout
            </button>

            <div className="summary-perks">
              <div className="perk-row">
                <i className="ti ti-shield-check"></i>
                <div>
                  <p className="perk-title">100% Secure Checkout</p>
                  <p className="perk-subtitle">Your data is safe with us</p>
                </div>
              </div>
              <div className="perk-row">
                <i className="ti ti-rotate"></i>
                <div>
                  <p className="perk-title">Easy Returns</p>
                  <p className="perk-subtitle">Hassle free returns</p>
                </div>
              </div>
              <div className="perk-row">
                <i className="ti ti-truck"></i>
                <div>
                  <p className="perk-title">Fast Delivery</p>
                  <p className="perk-subtitle">On time, every time</p>
                </div>
              </div>
              <div className="perk-row">
                <i className="ti ti-headset"></i>
                <div>
                  <p className="perk-title">Best Support</p>
                  <p className="perk-subtitle">24/7 customer support</p>
                </div>
              </div>
            </div>
          </aside>

        </div>
      )}
    </div>
  )
}

export default Cart