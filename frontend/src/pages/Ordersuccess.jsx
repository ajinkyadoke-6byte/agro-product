import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ProductContext } from '../context/ProductContext'
import {
  Check, Mail, FileText, Calendar, CreditCard, IndianRupee, MapPin,
  Phone, Package, Truck
} from 'lucide-react'

const paymentLabels = {
  COD: 'Cash on Delivery',
  cod: 'Cash on Delivery',
  upi: 'UPI',
  online: 'Online Payment',
  razorpay: 'Razorpay',
}

const formatOrderDate = (timestamp) => {
  const date = new Date(timestamp)
  const options = { day: '2-digit', month: 'short', year: 'numeric' }
  const datePart = date.toLocaleDateString('en-IN', options)
  const timePart = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
  return `${datePart}, ${timePart}`
}

const formatDeliveryRange = (timestamp) => {
  const start = new Date(timestamp)
  start.setDate(start.getDate() + 5)
  const end = new Date(timestamp)
  end.setDate(end.getDate() + 7)
  const opts = { day: '2-digit', month: 'short', year: 'numeric' }
  return `${start.toLocaleDateString('en-IN', opts)} - ${end.toLocaleDateString('en-IN', opts)}`
}

const OrderSuccess = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { token, backendUrl } = useContext(ProductContext)

  const [order, setOrder] = useState(location.state?.order || null)
  const [loading, setLoading] = useState(!location.state?.order)

  // Fallback: if the page was refreshed and state was lost, fetch the most recent order
  useEffect(() => {
    if (order) return

    if (!token) {
      navigate('/')
      return
    }

    const fetchLatestOrder = async () => {
      try {
        const response = await axios.post(
          backendUrl + '/api/order/userorders',
          {},
          { headers: { token } }
        )
        if (response.data.success && response.data.orders.length > 0) {
          setOrder(response.data.orders[0])
        } else {
          navigate('/')
        }
      } catch (error) {
        console.log(error)
        navigate('/')
      } finally {
        setLoading(false)
      }
    }

    fetchLatestOrder()
  }, [order, token])

  if (loading) {
    return <div className="order-success-page"><p style={{ padding: 40 }}>Loading order details...</p></div>
  }

  if (!order) return null

  const { _id, date, address, paymentMethod, items, amount } = order
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const paymentLabel = paymentLabels[paymentMethod] || 'Online Payment'
  const email = `${(address.fullName || 'customer').split(' ')[0].toLowerCase()}@gmail.com`

  const trackingSteps = [
    { key: 'confirmed', label: 'Order Confirmed', note: formatOrderDate(date), done: true },
    { key: 'packed',    label: 'Packed',          note: 'Processing',          done: false },
    { key: 'shipped',   label: 'Shipped',         note: 'Soon',                done: false },
    { key: 'delivered', label: 'Delivered',       note: 'To be delivered',     done: false },
  ]

  return (
    <div className="order-success-page">
      <div className="order-success-layout">

        <div className="order-success-left">
          <div className="order-success-check-wrap">
            <span className="order-success-sparkle sparkle-1">✦</span>
            <span className="order-success-sparkle sparkle-2">✦</span>
            <span className="order-success-sparkle sparkle-3">✦</span>
            <span className="order-success-sparkle sparkle-4">✦</span>
            <div className="order-success-check-circle">
              <Check size={28} />
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
            <Mail size={18} />
            <div>
              <p className="order-success-email-label">Order confirmation sent to</p>
              <p className="order-success-email-value">{email}</p>
            </div>
          </div>

          <div className="order-success-actions">
            <button className="order-success-view-btn" onClick={() => navigate('/orders')}>
              View Order Details
            </button>
            <button className="order-success-continue-btn" onClick={() => navigate('/products')}>
              Continue Shopping
            </button>
          </div>
        </div>

        <div className="order-success-middle">
          <div className="order-success-card">
            <div className="order-success-card-header">
              <FileText size={18} />
              <h3>Order Details</h3>
              <span className="order-success-order-id">#{_id}</span>
            </div>

            <div className="order-success-detail-row">
              <span className="order-success-detail-label"><Calendar size={14} /> Order Date</span>
              <span className="order-success-detail-value">{formatOrderDate(date)}</span>
            </div>
            <div className="order-success-detail-row">
              <span className="order-success-detail-label"><CreditCard size={14} /> Payment Method</span>
              <span className="order-success-detail-value">{paymentLabel}</span>
            </div>
            <div className="order-success-detail-row">
              <span className="order-success-detail-label"><IndianRupee size={14} /> Total Amount</span>
              <span className="order-success-detail-value order-success-total-amount">
                ₹{amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="order-success-detail-row">
              <span className="order-success-detail-label"><MapPin size={14} /> Shipping Address</span>
              <span className="order-success-detail-value order-success-address">
                {address.fullName}<br />
                {address.address},<br />
                {address.village}, {address.taluka} ({address.district}),<br />
                {address.state} - {address.pinCode}
              </span>
            </div>
            <div className="order-success-detail-row">
              <span className="order-success-detail-label"><Phone size={14} /> Phone Number</span>
              <span className="order-success-detail-value">{address.mobile}</span>
            </div>
          </div>

          <div className="order-success-card">
            <div className="order-success-card-header">
              <Package size={18} />
              <h3>Order Items ({totalItems})</h3>
            </div>

            {items.map((item, i) => (
              <div className="order-success-item-row" key={i}>
                <img src={item.image} alt={item.name} className="order-success-item-img" />
                <div className="order-success-item-info">
                  <p className="order-success-item-name">{item.name}</p>
                </div>
                <div className="order-success-item-right">
                  <p className="order-success-item-price">
                    ₹{item.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </p>
                  <p className="order-success-item-qty">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-success-right">
          <div className="order-success-card order-success-delivery-card">
            <div className="order-success-card-header">
              <Truck size={18} />
              <h3>Estimated Delivery</h3>
            </div>
            <p className="order-success-delivery-range">{formatDeliveryRange(date)}</p>
            <p className="order-success-delivery-type">Standard Delivery</p>
            <p className="order-success-delivery-note">We will notify you once your order is shipped.</p>
          </div>

          <div className="order-success-card">
            <div className="order-success-card-header">
              <MapPin size={18} />
              <h3>Order Tracking</h3>
            </div>

            <div className="order-tracking-list">
              {trackingSteps.map((step, i) => (
                <div className="order-tracking-step" key={step.key}>
                  <div className="order-tracking-marker-col">
                    <span className={`order-tracking-dot ${step.done ? 'order-tracking-dot-done' : ''}`}>
                      {step.done && <Check size={12} />}
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

            <button className="order-tracking-btn" onClick={() => navigate('/orders')}>
              <MapPin size={16} /> Track Your Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess