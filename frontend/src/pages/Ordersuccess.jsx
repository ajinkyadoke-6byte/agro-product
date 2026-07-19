import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ProductContext } from '../context/ProductContext'
import {
  Check, Calendar, CreditCard, MapPin, Package, Truck, X, Undo2
} from 'lucide-react'

const paymentLabels = {
  COD: 'Cash on Delivery',
  cod: 'Cash on Delivery',
  upi: 'UPI',
  online: 'Online Payment',
  razorpay: 'Razorpay',
}

const statusStyles = {
  'Order Placed': { bg: '#eef6f0', color: '#1d6b2e' },
  'Packed': { bg: '#eef2fb', color: '#3b5fd9' },
  'Shipped': { bg: '#fef6e7', color: '#c8860a' },
  'Delivered': { bg: '#eef6f0', color: '#1d6b2e' },
  'Cancelled': { bg: '#fdecec', color: '#c0392b' },
  'Refund Requested': { bg: '#fdf1e6', color: '#c8720a' },
}

const formatOrderDate = (timestamp) => {
  const date = new Date(timestamp)
  return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
}

const formatDeliveryRange = (timestamp) => {
  const start = new Date(timestamp)
  start.setDate(start.getDate() + 5)
  const end = new Date(timestamp)
  end.setDate(end.getDate() + 7)
  const opts = { day: '2-digit', month: 'short' }
  return `${start.toLocaleDateString('en-IN', opts)} - ${end.toLocaleDateString('en-IN', opts)}`
}

const OrderSuccess = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { token, backendUrl } = useContext(ProductContext)

  const [order, setOrder] = useState(location.state?.order || null)
  const [loading, setLoading] = useState(!location.state?.order)

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

  const handleCancelOrder = async () => {
    if (!window.confirm('Are you sure you want to cancel this order?')) return
    try {
      const response = await axios.post(
        backendUrl + '/api/order/cancel',
        { orderId: order._id },
        { headers: { token } }
      )
      if (response.data.success) {
        toast.success('Order cancelled successfully')
        setOrder(response.data.order)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Failed to cancel order')
    }
  }

  const handleRequestRefund = async () => {
    const reason = window.prompt('Please tell us why you want a refund (optional):') || ''
    try {
      const response = await axios.post(
        backendUrl + '/api/order/refund-request',
        { orderId: order._id, reason },
        { headers: { token } }
      )
      if (response.data.success) {
        toast.success('Refund request submitted')
        setOrder(response.data.order)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Failed to request refund')
    }
  }

  if (loading) {
    return <div className="order-success-page"><p style={{ padding: 40 }}>Loading order details...</p></div>
  }

  if (!order) return null

  const { _id, date, address, paymentMethod, items, amount, status, payment } = order
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const paymentLabel = paymentLabels[paymentMethod] || 'Online Payment'
  const badge = statusStyles[status] || statusStyles['Order Placed']

  const totalLabel = payment
    ? 'Total Paid'
    : paymentMethod?.toUpperCase() === 'COD'
      ? 'Amount Due on Delivery'
      : 'Total Amount'

  return (
    <div className="order-success-page">
      <div className="order-success-hero">
        <div className="order-success-check-circle">
          <Check size={32} color="#fff" strokeWidth={3} />
        </div>
        <h1 className="order-success-title">Order Placed Successfully</h1>
        <p className="order-success-subtitle">
          Thanks for your order! We'll send a confirmation to your email shortly.
        </p>

        <div className="order-success-meta-row">
          <span className="order-success-orderid">Order #{_id}</span>
          <span
            className="order-status-badge"
            style={{ background: badge.bg, color: badge.color }}
          >
            {status}
          </span>
        </div>

        <div className="order-success-actions">
          <button className="btn-primary-action" onClick={() => navigate('/orders')}>
            View Order
          </button>
          <button className="btn-secondary-action" onClick={() => navigate('/products')}>
            Continue Shopping
          </button>
          {status === 'Order Placed' && (
            <button className="btn-danger-action" onClick={handleCancelOrder}>
              <X size={15} />
              Cancel Order
            </button>
          )}
          {(status === 'Shipped' || status === 'Delivered') && (
            <button className="btn-warning-action" onClick={handleRequestRefund}>
              <Undo2 size={15} />
              Request Refund
            </button>
          )}
        </div>
      </div>

      <div className="order-success-summary-row">
        <div className="summary-pill">
          <Calendar size={18} />
          <div>
            <p className="summary-pill-label">Order Date</p>
            <p className="summary-pill-value">{formatOrderDate(date)}</p>
          </div>
        </div>
        <div className="summary-pill">
          <CreditCard size={18} />
          <div>
            <p className="summary-pill-label">Payment</p>
            <p className="summary-pill-value">{paymentLabel}</p>
          </div>
        </div>
        <div className="summary-pill">
          <Truck size={18} />
          <div>
            <p className="summary-pill-label">Arrives</p>
            <p className="summary-pill-value">{formatDeliveryRange(date)}</p>
          </div>
        </div>
        <div className="summary-pill summary-pill-total">
          <div>
            <p className="summary-pill-label">{totalLabel}</p>
            <p className="summary-pill-value-total">₹{amount.toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>

      <div className="order-success-body">

        <div className="order-success-card">
          <div className="order-success-card-header">
            <Package size={18} />
            <h3>Items ({totalItems})</h3>
          </div>
          {items.map((item, i) => (
            <div className="order-success-item-row" key={i}>
              <img src={item.image} alt={item.name} className="order-success-item-img" />
              <div className="order-success-item-info">
                <p className="order-success-item-name">{item.name}</p>
                <p className="order-success-item-qty">Qty: {item.quantity}</p>
              </div>
              <p className="order-success-item-price">
                ₹{item.price.toLocaleString('en-IN')}
              </p>
            </div>
          ))}
        </div>

        <div className="order-success-card">
          <div className="order-success-card-header">
            <MapPin size={18} />
            <h3>Delivering To</h3>
          </div>
          <p className="order-success-address">
            <strong>{address.fullName}</strong><br />
            {address.address}<br />
            {address.village}, {address.taluka}, {address.district}<br />
            {address.state} - {address.pinCode}<br />
            {address.mobile}
          </p>
        </div>

      </div>
    </div>
  )
}

export default OrderSuccess