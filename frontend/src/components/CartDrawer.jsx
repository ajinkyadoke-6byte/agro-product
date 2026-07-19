import React from 'react'
import { useNavigate } from 'react-router-dom'
import { X, ShoppingBag, ArrowLeft } from 'lucide-react'

const CartDrawer = ({ isOpen, onClose, cartItems, onIncrease, onDecrease, onRemove }) => {
  const navigate = useNavigate()

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const goToCart = () => {
    onClose()
    navigate('/cart')
  }

  const goToCheckout = () => {
    onClose()
    navigate('/checkout')
  }

  return (
    <>
      <div className={`cart-drawer-backdrop ${isOpen ? 'cart-drawer-backdrop-open' : ''}`} onClick={onClose} />

      <div className={`cart-drawer ${isOpen ? 'cart-drawer-open' : ''}`}>
        <div className="cart-drawer-header">
          <h3><ShoppingBag size={20} /> Your Cart ({totalItems})</h3>
          <button className="cart-drawer-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-drawer-empty">
              <ShoppingBag size={48} color="#c8d5cc" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-drawer-item" key={item.product._id}>
                <img src={item.product.image?.[0]} alt={item.product.name} className="cart-drawer-item-img" />
                <div className="cart-drawer-item-info">
                  <p className="cart-drawer-item-name">{item.product.name}</p>
                  <p className="cart-drawer-item-price">₹{item.product.price.toLocaleString('en-IN')}</p>
                  <div className="cart-drawer-qty-control">
                    <button onClick={() => onDecrease(item.product._id)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onIncrease(item.product._id)}>+</button>
                  </div>
                </div>
                <button className="cart-drawer-remove" onClick={() => onRemove(item.product._id)}>
                  <X size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-drawer-subtotal-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <button className="cart-drawer-checkout-btn" onClick={goToCheckout}>
              Proceed to Checkout
            </button>
            <button className="cart-drawer-view-cart-btn" onClick={goToCart}>
              View Full Cart
            </button>
          </div>
        )}

        <div className="cart-drawer-continue" onClick={onClose}>
          <ArrowLeft size={16} /> Continue Shopping
        </div>
      </div>
    </>
  )
}

export default CartDrawer