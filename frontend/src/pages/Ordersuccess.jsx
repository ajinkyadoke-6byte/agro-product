import React from 'react'

const paymentLabels = {
  cod: 'Cash on Delivery',
  upi: 'UPI',
  card: 'Online Payment',
  razorpay: 'Razorpay',
}

const formatOrderDate = (date) => {
  const options = { day: '2-digit', month: 'short', year: 'numeric' }
  const datePart = date.toLocaleDateString('en-IN', options)
  const timePart = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
  return `${datePart}, ${timePart}`
}

const formatDeliveryRange = (placedDate) => {
  const start = new Date(placedDate)
  start.setDate(start.getDate() + 5)
  const end = new Date(placedDate)
  end.setDate(end.getDate() + 7)
  const opts = { day: '2-digit', month: 'short', year: 'numeric' }
  return `${start.toLocaleDateString('en-IN', opts)} - ${end.toLocaleDateString('en-IN', opts)}`
}

const OrderSuccess = ({ order, onViewOrder, onContinueShopping }) => {
  if (!order) return null

  const { orderId, placedAt, customer, paymentMethod, items, totalAmount } = order

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const paymentLabel = paymentLabels[paymentMethod] || 'Online Payment'
  const email = customer.email || `${(customer.fullName || 'customer').split(' ')[0].toLowerCase()}@gmail.com`

  const trackingSteps = [
    { key: 'confirmed', label: 'Order Confirmed', note: formatOrderDate(placedAt), done: true },
    { key: 'packed',    label: 'Packed',          note: 'Processing',             done: false },
    { key: 'shipped',   label: 'Shipped',         note: 'Soon',                   done: false },
    { key: 'delivered', label: 'Delivered',       note: 'To be delivered',        done: false },
  ]

  return (
    <div className="order-success-page">
      <div className="order-success-layout">

        {/* Left: thank you panel */}
        <div className="order-success-left">
          <div className="order-success-check-wrap">
            <span className="order-success-sparkle sparkle-1">✦</span>
            <span className="order-success-sparkle sparkle-2">✦</span>
            <span className="order-success-sparkle sparkle-3">✦</span>
            <span className="order-success-sparkle sparkle-4">✦</span>
            <div className="order-success-check-circle">
              <i className="ti ti-check"></i>
            </div>
          </div>

          <h1 className="order-success-title">
            Thank You! Your Order is Placed Successfully <span>🌱</span>
          </h1>
          <p className="order-success-subtitle">
            We've received your order and it is being processed.
            You will receive an order confirmation email shortly.
          </p>

          <div className="order-success-email-box">
            <i className="ti ti-mail"></i>
            <div>
              <p className="order-success-email-label">Order confirmation sent to</p>
              <p className="order-success-email-value">{email}</p>
            </div>
          </div>

          <div className="order-success-actions">
            <button className="order-success-view-btn" onClick={onViewOrder}>
              View Order Details
            </button>
            <button className="order-success-continue-btn" onClick={onContinueShopping}>
              <i className="ti ti-lock"></i> Continue Shopping
            </button>
          </div>
        </div>

        {/* Middle: order details + items */}
        <div className="order-success-middle">
          <div className="order-success-card">
            <div className="order-success-card-header">
              <i className="ti ti-file-text"></i>
              <h3>Order Details</h3>
              <span className="order-success-order-id">#{orderId}</span>
            </div>

            <div className="order-success-detail-row">
              <span className="order-success-detail-label"><i className="ti ti-calendar"></i> Order Date</span>
              <span className="order-success-detail-value">{formatOrderDate(placedAt)}</span>
            </div>
            <div className="order-success-detail-row">
              <span className="order-success-detail-label"><i className="ti ti-credit-card"></i> Payment Method</span>
              <span className="order-success-detail-value">{paymentLabel}</span>
            </div>
            <div className="order-success-detail-row">
              <span className="order-success-detail-label"><i className="ti ti-currency-rupee"></i> Total Amount</span>
              <span className="order-success-detail-value order-success-total-amount">
                ₹{totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="order-success-detail-row">
              <span className="order-success-detail-label"><i className="ti ti-map-pin"></i> Shipping Address</span>
              <span className="order-success-detail-value order-success-address">
                {customer.fullName}<br />
                {customer.address},<br />
                {customer.village}, {customer.taluka} ({customer.district}),<br />
                {customer.state} - {customer.pinCode}
              </span>
            </div>
            <div className="order-success-detail-row">
              <span className="order-success-detail-label"><i className="ti ti-phone"></i> Phone Number</span>
              <span className="order-success-detail-value">{customer.mobile}</span>
            </div>
          </div>

          <div className="order-success-card">
            <div className="order-success-card-header">
              <i className="ti ti-package"></i>
              <h3>Order Items ({totalItems})</h3>
            </div>

            {items.map((item) => (
              <div className="order-success-item-row" key={item.product.id}>
                <img src={item.product.img} alt={item.product.name} className="order-success-item-img" />
                <div className="order-success-item-info">
                  <p className="order-success-item-name">{item.product.name}</p>
                  <p className="order-success-item-size">{item.product.form || 'Liquid'}</p>
                </div>
                <div className="order-success-item-right">
                  <p className="order-success-item-price">
                    ₹{item.product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </p>
                  <p className="order-success-item-qty">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: delivery + tracking */}
        <div className="order-success-right">
          <div className="order-success-card order-success-delivery-card">
            <div className="order-success-card-header">
              <i className="ti ti-truck"></i>
              <h3>Estimated Delivery</h3>
            </div>
            <p className="order-success-delivery-range">{formatDeliveryRange(placedAt)}</p>
            <p className="order-success-delivery-type">Standard Delivery</p>
            <p className="order-success-delivery-note">We will notify you once your order is shipped.</p>
          </div>

          <div className="order-success-card">
            <div className="order-success-card-header">
              <i className="ti ti-map-pin"></i>
              <h3>Order Tracking</h3>
            </div>

            <div className="order-tracking-list">
              {trackingSteps.map((step, i) => (
                <div className="order-tracking-step" key={step.key}>
                  <div className="order-tracking-marker-col">
                    <span className={`order-tracking-dot ${step.done ? 'order-tracking-dot-done' : ''}`}>
                      {step.done && <i className="ti ti-check"></i>}
                    </span>
                    {i < trackingSteps.length - 1 && <span className="order-tracking-line"></span>}
                  </div>
                  <div className="order-tracking-text">
                    <p className={`order-tracking-label ${step.done ? 'order-tracking-label-done' : ''}`}>
                      {step.label}
                    </p>
                    <p className="order-tracking-note">{step.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="order-tracking-btn" onClick={onViewOrder}>
              <i className="ti ti-map-pin"></i> Track Your Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess