// import React, { useState } from 'react'
// import shineStarImg from '../assets/shineStarImg.jpeg'
// import crownGoldImg from '../assets/crownGoldImg.jpeg'
// import rootwellImg from '../assets/rootwellImg.jpeg'


// const menuItems = [
//   { icon: 'ti-user', label: 'My Profile', key: 'profile' },
//   { icon: 'ti-shopping-bag', label: 'My Orders', key: 'orders' },
//   { icon: 'ti-map-pin', label: 'My Addresses', key: 'addresses' },
//   { icon: 'ti-heart', label: 'Wishlist', key: 'wishlist' },
//   { icon: 'ti-star', label: 'My Reviews', key: 'reviews' },
//   { icon: 'ti-truck', label: 'Track Order', key: 'track' },
//   { icon: 'ti-credit-card', label: 'Payment Methods', key: 'payment' },
//   { icon: 'ti-bell', label: 'Notification Preferences', key: 'notifications' },
//   { icon: 'ti-settings', label: 'Account Settings', key: 'settings' },
// ]

// const recentOrders = [
//   { id: 'ORD12345', name: 'NPK 19:19:19', date: '25 May 2024', amount: 1250, status: 'Delivered', img: shineStarImg },
//   { id: 'ORD12310', name: 'Neem Oil', date: '18 May 2024', amount: 310, status: 'Delivered', img: crownGoldImg  },
//   { id: 'ORD12285', name: 'Zinc Sulphate', date: '10 May 2024', amount: 180, status: 'Shipped', img: rootwellImg },
// ]

// const indianStates = [
//   'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
//   'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
//   'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
//   'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
//   'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
// ]

// const statusColor = (status) => {
//   if (status === 'Delivered') return '#1d6b2e'
//   if (status === 'Shipped') return '#0077cc'
//   return '#f5a623'
// }

// const Profile = ({ onBack }) => {
//   const [activeMenu, setActiveMenu] = useState('profile')
//   const [editing, setEditing] = useState(false)
//   const [form, setForm] = useState({
//     fullName: 'Rohan Kumar',
//     mobile: '+91 98765 43210',
//     email: 'rohan.kumar@email.com',
//     address: 'House No. 123, Near Agriculture College, Main Road',
//     village: 'Green Valley',
//     taluka: 'Baramati',
//     district: 'Pune',
//     state: 'Maharashtra',
//     pinCode: '413102',
//   })

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

//   return (
//     <div className="profile-page">
//       <div className="breadcrumb">
//         <span onClick={onBack} style={{ cursor: 'pointer', color: '#1d6b2e' }}>Home</span>
//         <i className="ti ti-chevron-right"></i>
//         <span style={{ color: '#1d6b2e', cursor: 'pointer' }}>Account</span>
//         <i className="ti ti-chevron-right"></i>
//         <span className="breadcrumb-current">My Profile</span>
//       </div>

//       <div className="profile-layout">

//         {/* Left Sidebar */}
//         <aside className="profile-sidebar">
//           <div className="profile-avatar-block">
//             <div className="profile-avatar">
//               <i className="ti ti-user"></i>
//             </div>
//             <div>
//               <p className="profile-name">{form.fullName}</p>
//               <p className="profile-email">{form.email}</p>
//               <span className="premium-badge">
//                 <i className="ti ti-crown"></i> Premium Member
//               </span>
//             </div>
//           </div>

//           <p className="sidebar-section-label">MY ACCOUNT</p>
//           <nav className="profile-menu">
//             {menuItems.map((item) => (
//               <div
//                 key={item.key}
//                 className={`profile-menu-item ${activeMenu === item.key ? 'profile-menu-active' : ''}`}
//                 onClick={() => setActiveMenu(item.key)}
//               >
//                 <i className={`ti ${item.icon}`}></i>
//                 {item.label}
//               </div>
//             ))}
//             <div className="profile-menu-item profile-logout" onClick={onBack}>
//               <i className="ti ti-logout"></i> Logout
//             </div>
//           </nav>
//         </aside>

//         {/* Center: Profile Form */}
//         <main className="profile-main">
//           <div className="profile-form-card">
//             <div className="profile-form-header">
//               <div>
//                 <h2>My Profile</h2>
//                 <p className="profile-form-subtitle">Manage your personal information</p>
//               </div>
//               <button
//                 className="profile-edit-btn"
//                 onClick={() => setEditing(!editing)}
//               >
//                 <i className="ti ti-edit"></i> {editing ? 'Save' : 'Edit'}
//               </button>
//             </div>

//             <div className="profile-form">
//               <div className="form-row-2">
//                 <div className="form-group">
//                   <label>Full Name</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={form.fullName}
//                     onChange={handleChange}
//                     disabled={!editing}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Mobile Number</label>
//                   <input
//                     type="text"
//                     name="mobile"
//                     value={form.mobile}
//                     onChange={handleChange}
//                     disabled={!editing}
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   disabled={!editing}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={form.address}
//                   onChange={handleChange}
//                   disabled={!editing}
//                 />
//               </div>

//               <div className="form-row-3">
//                 <div className="form-group">
//                   <label>Village / Town</label>
//                   <input
//                     type="text"
//                     name="village"
//                     value={form.village}
//                     onChange={handleChange}
//                     disabled={!editing}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Taluka</label>
//                   <input
//                     type="text"
//                     name="taluka"
//                     value={form.taluka}
//                     onChange={handleChange}
//                     disabled={!editing}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>District</label>
//                   <input
//                     type="text"
//                     name="district"
//                     value={form.district}
//                     onChange={handleChange}
//                     disabled={!editing}
//                   />
//                 </div>
//               </div>

//               <div className="form-row-2">
//                 <div className="form-group">
//                   <label>State</label>
//                   <select
//                     name="state"
//                     value={form.state}
//                     onChange={handleChange}
//                     disabled={!editing}
//                   >
//                     {indianStates.map((s) => (
//                       <option key={s} value={s}>{s}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label>Pin Code</label>
//                   <input
//                     type="text"
//                     name="pinCode"
//                     value={form.pinCode}
//                     onChange={handleChange}
//                     disabled={!editing}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Profile Summary */}
//             <div className="profile-summary">
//               <p className="profile-summary-title">Profile Summary</p>
//               <div className="profile-summary-grid">
//                 <div className="summary-stat">
//                   <i className="ti ti-shopping-bag"></i>
//                   <p className="stat-value">12</p>
//                   <p className="stat-label">Orders Placed</p>
//                 </div>
//                 <div className="summary-stat">
//                   <i className="ti ti-map-pin"></i>
//                   <p className="stat-value">2</p>
//                   <p className="stat-label">Addresses Saved</p>
//                 </div>
//                 <div className="summary-stat">
//                   <i className="ti ti-heart"></i>
//                   <p className="stat-value">8</p>
//                   <p className="stat-label">Wishlist Items</p>
//                 </div>
//                 <div className="summary-stat premium-stat">
//                   <i className="ti ti-crown"></i>
//                   <p className="stat-value">Premium</p>
//                   <p className="stat-label">Member</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>

//         {/* Right Panel */}
//         <aside className="profile-right">

//           {/* Recent Orders */}
//           <div className="profile-right-card">
//             <div className="profile-right-header">
//               <h4>Recent Orders</h4>
//               <span className="view-all-link">View All Orders</span>
//             </div>
//             {recentOrders.map((order) => (
//               <div className="recent-order-row" key={order.id}>
//                 <img src={order.img} alt={order.name} className="recent-order-img" />
//                 <div className="recent-order-info">
//                   <p className="recent-order-name">{order.name}</p>
//                   <p className="recent-order-id">Order #{order.id}</p>
//                   <p className="recent-order-date">{order.date}</p>
//                 </div>
//                 <div className="recent-order-right">
//                   <p className="recent-order-amount">₹{order.amount}</p>
//                   <p className="recent-order-status" style={{ color: statusColor(order.status) }}>
//                     {order.status}
//                   </p>
//                 </div>
//               </div>
//             ))}
//             <div className="view-all-orders-link">
//               View All Orders <i className="ti ti-arrow-right"></i>
//             </div>
//           </div>

//           {/* Saved Addresses */}
//           <div className="profile-right-card">
//             <div className="profile-right-header">
//               <h4>Saved Addresses</h4>
//               <span className="view-all-link">Manage Addresses</span>
//             </div>
//             <div className="saved-address-row">
//               <i className="ti ti-map-pin" style={{ color: '#1d6b2e', fontSize: 18 }}></i>
//               <div className="saved-address-info">
//                 <div className="saved-address-top">
//                   <span className="address-label">Home</span>
//                   <span className="address-default-badge">Default</span>
//                   <i className="ti ti-dots-vertical" style={{ marginLeft: 'auto', color: '#999' }}></i>
//                 </div>
//                 <p className="address-text">House No. 123, Near Agriculture College, Main Road, Green Valley, Baramati, Pune, Maharashtra - 413 102</p>
//               </div>
//             </div>
//             <div className="saved-address-row">
//               <i className="ti ti-map-pin" style={{ color: '#1d6b2e', fontSize: 18 }}></i>
//               <div className="saved-address-info">
//                 <div className="saved-address-top">
//                   <span className="address-label">Farm Address</span>
//                   <i className="ti ti-dots-vertical" style={{ marginLeft: 'auto', color: '#999' }}></i>
//                 </div>
//                 <p className="address-text">Survey No. 45, Village Khed, Taluka Indapur, Pune, Maharashtra - 413 106</p>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="profile-right-card">
//             <h4 style={{ marginBottom: 14 }}>Quick Links</h4>
//             <div className="quick-links-grid">
//               <div className="quick-link-item">
//                 <i className="ti ti-truck"></i>
//                 <p>Track Order</p>
//               </div>
//               <div className="quick-link-item">
//                 <i className="ti ti-heart"></i>
//                 <p>Wishlist</p>
//               </div>
//               <div className="quick-link-item">
//                 <i className="ti ti-credit-card"></i>
//                 <p>Payment Methods</p>
//               </div>
//               <div className="quick-link-item">
//                 <i className="ti ti-help"></i>
//                 <p>Help Center</p>
//               </div>
//             </div>
//           </div>

//         </aside>
//       </div>
//     </div>
//   )
// }

// export default Profile


// import React, { useState } from 'react'
// import shineStarImg from '../assets/shineStarImg.jpeg'
// import crownGoldImg from '../assets/crownGoldImg.jpeg'
// import rootwellImg from '../assets/rootwellImg.jpeg'

// // const menuItems = [
// //   { icon: 'ti-user', label: 'My Profile', key: 'Profile' },
// //   { icon: 'ti-shopping-bag', label: 'My Orders', key: 'MyOrders' },
// //   { icon: 'ti-map-pin', label: 'My Addresses', key: 'Profile' },
// //   { icon: 'ti-heart', label: 'Wishlist', key: 'Profile' },
// //   { icon: 'ti-star', label: 'My Reviews', key: 'Profile' },
// //   { icon: 'ti-truck', label: 'Track Order', key: 'Profile' },
// //   { icon: 'ti-credit-card', label: 'Payment Methods', key: 'Profile' },
// //   { icon: 'ti-bell', label: 'Notification Preferences', key: 'Profile' },
// //   { icon: 'ti-settings', label: 'Account Settings', key: 'Profile' },
// // ]

// const menuItems = [
//   { icon: 'ti-user',        label: 'My Profile',               key: 'Profile',  navigate: false },
//   { icon: 'ti-shopping-bag',label: 'My Orders',                key: 'MyOrders', navigate: true  },
//   { icon: 'ti-map-pin',     label: 'My Addresses',             key: 'Profile',  navigate: false },
//   { icon: 'ti-heart',       label: 'Wishlist',                 key: 'Profile',  navigate: false },
//   { icon: 'ti-star',        label: 'My Reviews',               key: 'Profile',  navigate: false },
//   { icon: 'ti-truck',       label: 'Track Order',              key: 'Profile',  navigate: false },
//   { icon: 'ti-credit-card', label: 'Payment Methods',          key: 'Profile',  navigate: false },
//   { icon: 'ti-bell',        label: 'Notification Preferences', key: 'Profile',  navigate: false },
//   { icon: 'ti-settings',    label: 'Account Settings',         key: 'Profile',  navigate: false },
// ]

// // const recentOrders = [
//   // { id: 'ORD12345', name: 'NPK 19:19:19', date: '25 May 2024', amount: 1250, status: 'Delivered', image: shineStarImg },
//   // { id: 'ORD12310', name: 'Neem Oil', date: '18 May 2024', amount: 310, status: 'Delivered', image: crownGoldImg },
//   // { id: 'ORD12285', name: 'Zinc Sulphate', date: '10 May 2024', amount: 180, status: 'Shipped', image: rootwellImg },

//   const recentOrders = [
//   { id: 'ORD12345', name: 'Shine Star', date: '25 May 2024', amount: 1250, status: 'Delivered', image: shineStarImg },
//   { id: 'ORD12310', name: 'Crown Gold', date: '18 May 2024', amount: 310, status: 'Delivered', image: crownGoldImg },
//   { id: 'ORD12285', name: 'Rootwell Powder', date: '10 May 2024', amount: 180, status: 'Shipped', image: rootwellImg },
// ]
// // ]

// const indianStates = [
//   'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
//   'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
//   'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
//   'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
//   'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
// ]

// const statusColor = (status) => {
//   if (status === 'Delivered') return '#1d6b2e'
//   if (status === 'Shipped') return '#0077cc'
//   return '#f5a623'
// }

// const Profile = ({ onBack, onNavigate }) => {
//   const [activeMenu, setActiveMenu] = useState('Profile')
//   const [editing, setEditing] = useState(false)
//   const [form, setForm] = useState({
//     fullName: 'Rohan Kumar',
//     mobile: '+91 98765 43210',
//     email: 'rohan.kumar@email.com',
//     address: 'House No. 123, Near Agriculture College, Main Road',
//     village: 'Green Valley',
//     taluka: 'Baramati',
//     district: 'Pune',
//     state: 'Maharashtra',
//     pinCode: '413102',
//   })

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

//   return (
//     <div className="profile-page">
//       <div className="breadcrumb">
//         <span onClick={onBack} style={{ cursor: 'pointer', color: '#1d6b2e' }}>Home</span>
//         <i className="ti ti-chevron-right"></i>
//         <span style={{ color: '#1d6b2e', cursor: 'pointer' }}>Account</span>
//         <i className="ti ti-chevron-right"></i>
//         <span className="breadcrumb-current">My Profile</span>
//       </div>

//       <div className="profile-layout">

//         <aside className="profile-sidebar">
//           <div className="profile-avatar-block">
//             <div className="profile-avatar">
//               <i className="ti ti-user"></i>
//             </div>
//             <div>
//               <p className="profile-name">{form.fullName}</p>
//               <p className="profile-email">{form.email}</p>
//               <span className="premium-badge">
//                 <i className="ti ti-crown"></i> Premium Member
//               </span>
//             </div>
//           </div>

//           <p className="sidebar-section-label">MY ACCOUNT</p>
//           <nav className="profile-menu">
//             {/* {menuItems.map((item) => (
//               <div
//                 key={item.label}
//                 className={`profile-menu-item ${activeMenu === item.key ? 'profile-menu-active' : ''}`}
//                 onClick={() => {
//                   setActiveMenu(item.key)
//                   if (onNavigate) onNavigate(item.key)
//                 }} */}
                
// ]
//               {menuItems.map((item) => (
//   <div
//     key={item.label}
//     className={`profile-menu-item ${activeMenu === item.label ? 'profile-menu-active' : ''}`}
//     onClick={() => {
//       setActiveMenu(item.label)
//       if (item.navigate && onNavigate) onNavigate(item.key)
//     }}
//   >
//     <i className={`ti ${item.icon}`}></i>
//     {item.label}
//   </div>
// ))}
//                 <i className={`ti ${item.icon}`}></i>
//                 {item.label}
//               </div>
//             ))}
//             <div className="profile-menu-item profile-logout" onClick={onBack}>
//               <i className="ti ti-logout"></i> Logout
//             </div>
//           </nav>
//         </aside>

//         <main className="profile-main">
//           <div className="profile-form-card">
//             <div className="profile-form-header">
//               <div>
//                 <h2>My Profile</h2>
//                 <p className="profile-form-subtitle">Manage your personal information</p>
//               </div>
//               <button
//                 className="profile-edit-btn"
//                 onClick={() => setEditing(!editing)}
//               >
//                 <i className="ti ti-edit"></i> {editing ? 'Save' : 'Edit'}
//               </button>
//             </div>

//             <div className="profile-form">
//               <div className="form-row-2">
//                 <div className="form-group">
//                   <label>Full Name</label>
//                   <input type="text" name="fullName" value={form.fullName} onChange={handleChange} disabled={!editing} />
//                 </div>
//                 <div className="form-group">
//                   <label>Mobile Number</label>
//                   <input type="text" name="mobile" value={form.mobile} onChange={handleChange} disabled={!editing} />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Email Address</label>
//                 <input type="email" name="email" value={form.email} onChange={handleChange} disabled={!editing} />
//               </div>

//               <div className="form-group">
//                 <label>Address</label>
//                 <input type="text" name="address" value={form.address} onChange={handleChange} disabled={!editing} />
//               </div>

//               <div className="form-row-3">
//                 <div className="form-group">
//                   <label>Village / Town</label>
//                   <input type="text" name="village" value={form.village} onChange={handleChange} disabled={!editing} />
//                 </div>
//                 <div className="form-group">
//                   <label>Taluka</label>
//                   <input type="text" name="taluka" value={form.taluka} onChange={handleChange} disabled={!editing} />
//                 </div>
//                 <div className="form-group">
//                   <label>District</label>
//                   <input type="text" name="district" value={form.district} onChange={handleChange} disabled={!editing} />
//                 </div>
//               </div>

//               <div className="form-row-2">
//                 <div className="form-group">
//                   <label>State</label>
//                   <select name="state" value={form.state} onChange={handleChange} disabled={!editing}>
//                     {indianStates.map((s) => (
//                       <option key={s} value={s}>{s}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label>Pin Code</label>
//                   <input type="text" name="pinCode" value={form.pinCode} onChange={handleChange} disabled={!editing} />
//                 </div>
//               </div>
//             </div>

//             <div className="profile-summary">
//               <p className="profile-summary-title">Profile Summary</p>
//               <div className="profile-summary-grid">
//                 <div className="summary-stat">
//                   <i className="ti ti-shopping-bag"></i>
//                   <p className="stat-value">12</p>
//                   <p className="stat-label">Orders Placed</p>
//                 </div>
//                 <div className="summary-stat">
//                   <i className="ti ti-map-pin"></i>
//                   <p className="stat-value">2</p>
//                   <p className="stat-label">Addresses Saved</p>
//                 </div>
//                 <div className="summary-stat">
//                   <i className="ti ti-heart"></i>
//                   <p className="stat-value">8</p>
//                   <p className="stat-label">Wishlist Items</p>
//                 </div>
//                 <div className="summary-stat premium-stat">
//                   <i className="ti ti-crown"></i>
//                   <p className="stat-value">Premium</p>
//                   <p className="stat-label">Member</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>

//         <aside className="profile-right">
//           <div className="profile-right-card">
//             <div className="profile-right-header">
//               <h4>Recent Orders</h4>
//               <span
//                 className="view-all-link"
//                 onClick={() => onNavigate && onNavigate('MyOrders')}
//                 style={{ cursor: 'pointer' }}
//               >
//                 View All Orders
//               </span>
//             </div>
//             {recentOrders.map((order) => (
//               <div className="recent-order-row" key={order.id}>
//                 {/* <img src={order.img} alt={order.name} className="recent-order-img" /> */}
//                 <img src={order.image} alt={order.name} className="recent-order-img" />
//                 <div className="recent-order-info">
//                   <p className="recent-order-name">{order.name}</p>
//                   <p className="recent-order-id">Order #{order.id}</p>
//                   <p className="recent-order-date">{order.date}</p>
//                 </div>
//                 <div className="recent-order-right">
//                   <p className="recent-order-amount">₹{order.amount}</p>
//                   <p className="recent-order-status" style={{ color: statusColor(order.status) }}>
//                     {order.status}
//                   </p>
//                 </div>
//               </div>
//             ))}
//             <div
//               className="view-all-orders-link"
//               onClick={() => onNavigate && onNavigate('MyOrders')}
//               style={{ cursor: 'pointer' }}
//             >
//               View All Orders <i className="ti ti-arrow-right"></i>
//             </div>
//           </div>

//           <div className="profile-right-card">
//             <div className="profile-right-header">
//               <h4>Saved Addresses</h4>
//               <span className="view-all-link">Manage Addresses</span>
//             </div>
//             <div className="saved-address-row">
//               <i className="ti ti-map-pin" style={{ color: '#1d6b2e', fontSize: 18 }}></i>
//               <div className="saved-address-info">
//                 <div className="saved-address-top">
//                   <span className="address-label">Home</span>
//                   <span className="address-default-badge">Default</span>
//                   <i className="ti ti-dots-vertical" style={{ marginLeft: 'auto', color: '#999' }}></i>
//                 </div>
//                 <p className="address-text">House No. 123, Near Agriculture College, Main Road, Green Valley, Baramati, Pune, Maharashtra - 413 102</p>
//               </div>
//             </div>
//             <div className="saved-address-row">
//               <i className="ti ti-map-pin" style={{ color: '#1d6b2e', fontSize: 18 }}></i>
//               <div className="saved-address-info">
//                 <div className="saved-address-top">
//                   <span className="address-label">Farm Address</span>
//                   <i className="ti ti-dots-vertical" style={{ marginLeft: 'auto', color: '#999' }}></i>
//                 </div>
//                 <p className="address-text">Survey No. 45, Village Khed, Taluka Indapur, Pune, Maharashtra - 413 106</p>
//               </div>
//             </div>
//           </div>

//           <div className="profile-right-card">
//             <h4 style={{ marginBottom: 14 }}>Quick Links</h4>
//             <div className="quick-links-grid">
//               <div className="quick-link-item">
//                 <i className="ti ti-truck"></i>
//                 <p>Track Order</p>
//               </div>
//               <div className="quick-link-item">
//                 <i className="ti ti-heart"></i>
//                 <p>Wishlist</p>
//               </div>
//               <div className="quick-link-item">
//                 <i className="ti ti-credit-card"></i>
//                 <p>Payment Methods</p>
//               </div>
//               <div className="quick-link-item">
//                 <i className="ti ti-help"></i>
//                 <p>Help Center</p>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </div>
//   )
// }

// export default Profile



// import React, { useState } from 'react'
// import shineStarImg from '../assets/shineStarImg.jpeg'
// import crownGoldImg from '../assets/crownGoldImg.jpeg'
// import rootwellImg from '../assets/rootwellImg.jpeg'

// const menuItems = [
//   { icon: 'ti-user',        label: 'My Profile',               key: 'Profile',  navigate: false },
//   { icon: 'ti-shopping-bag',label: 'My Orders',                key: 'MyOrders', navigate: true  },
//   { icon: 'ti-map-pin',     label: 'My Addresses',             key: 'Profile',  navigate: false },
//   { icon: 'ti-heart',       label: 'Wishlist',                 key: 'Profile',  navigate: false },
//   { icon: 'ti-star',        label: 'My Reviews',               key: 'Profile',  navigate: false },
//   { icon: 'ti-truck',       label: 'Track Order',              key: 'Profile',  navigate: false },
//   { icon: 'ti-credit-card', label: 'Payment Methods',          key: 'Profile',  navigate: false },
//   { icon: 'ti-bell',        label: 'Notification Preferences', key: 'Profile',  navigate: false },
//   { icon: 'ti-settings',    label: 'Account Settings',         key: 'Profile',  navigate: false },
// ]

// const recentOrders = [
//   { id: 'ORD12345', name: 'Shine Star',      date: '25 May 2024', amount: 1250, status: 'Delivered', image: shineStarImg },
//   { id: 'ORD12310', name: 'Crown Gold',      date: '18 May 2024', amount: 310,  status: 'Delivered', image: crownGoldImg },
//   { id: 'ORD12285', name: 'Rootwell Powder', date: '10 May 2024', amount: 180,  status: 'Shipped',   image: rootwellImg  },
// ]

// const indianStates = [
//   'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
//   'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
//   'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
//   'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
//   'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
// ]

// const statusColor = (status) => {
//   if (status === 'Delivered') return '#1d6b2e'
//   if (status === 'Shipped')   return '#0077cc'
//   return '#f5a623'
// }

// const Profile = ({ onBack, onNavigate }) => {
//   const [activeMenu, setActiveMenu] = useState('My Profile')
//   const [editing, setEditing]       = useState(false)
//   const [form, setForm] = useState({
//     fullName: 'Rohan Kumar',
//     mobile:   '+91 98765 43210',
//     email:    'rohan.kumar@email.com',
//     address:  'House No. 123, Near Agriculture College, Main Road',
//     village:  'Green Valley',
//     taluka:   'Baramati',
//     district: 'Pune',
//     state:    'Maharashtra',
//     pinCode:  '413102',
//   })

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

//   return (
//     <div className="profile-page">
//       <div className="breadcrumb">
//         <span onClick={onBack} style={{ cursor: 'pointer', color: '#1d6b2e' }}>Home</span>
//         <i className="ti ti-chevron-right"></i>
//         <span style={{ color: '#1d6b2e', cursor: 'pointer' }}>Account</span>
//         <i className="ti ti-chevron-right"></i>
//         <span className="breadcrumb-current">My Profile</span>
//       </div>

//       <div className="profile-layout">

//         {/* Sidebar */}
//         <aside className="profile-sidebar">
//           <div className="profile-avatar-block">
//             <div className="profile-avatar">
//               <i className="ti ti-user"></i>
//             </div>
//             <div>
//               <p className="profile-name">{form.fullName}</p>
//               <p className="profile-email">{form.email}</p>
//               <span className="premium-badge">
//                 <i className="ti ti-crown"></i> Premium Member
//               </span>
//             </div>
//           </div>

//           <p className="sidebar-section-label">MY ACCOUNT</p>
//           <nav className="profile-menu">
//             {menuItems.map((item) => (
//               <div
//                 key={item.label}
//                 className={`profile-menu-item ${activeMenu === item.label ? 'profile-menu-active' : ''}`}
//                 onClick={() => {
//                   setActiveMenu(item.label)
//                   if (item.navigate && onNavigate) onNavigate(item.key)
//                 }}
//               >
//                 <i className={`ti ${item.icon}`}></i>
//                 {item.label}
//               </div>
//             ))}
//             <div className="profile-menu-item profile-logout" onClick={onBack}>
//               <i className="ti ti-logout"></i> Logout
//             </div>
//           </nav>
//         </aside>

//         {/* Main */}
//         <main className="profile-main">
//           <div className="profile-form-card">
//             <div className="profile-form-header">
//               <div>
//                 <h2>My Profile</h2>
//                 <p className="profile-form-subtitle">Manage your personal information</p>
//               </div>
//               <button className="profile-edit-btn" onClick={() => setEditing(!editing)}>
//                 <i className="ti ti-edit"></i> {editing ? 'Save' : 'Edit'}
//               </button>
//             </div>

//             <div className="profile-form">
//               <div className="form-row-2">
//                 <div className="form-group">
//                   <label>Full Name</label>
//                   <input type="text" name="fullName" value={form.fullName} onChange={handleChange} disabled={!editing} />
//                 </div>
//                 <div className="form-group">
//                   <label>Mobile Number</label>
//                   <input type="text" name="mobile" value={form.mobile} onChange={handleChange} disabled={!editing} />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Email Address</label>
//                 <input type="email" name="email" value={form.email} onChange={handleChange} disabled={!editing} />
//               </div>

//               <div className="form-group">
//                 <label>Address</label>
//                 <input type="text" name="address" value={form.address} onChange={handleChange} disabled={!editing} />
//               </div>

//               <div className="form-row-3">
//                 <div className="form-group">
//                   <label>Village / Town</label>
//                   <input type="text" name="village" value={form.village} onChange={handleChange} disabled={!editing} />
//                 </div>
//                 <div className="form-group">
//                   <label>Taluka</label>
//                   <input type="text" name="taluka" value={form.taluka} onChange={handleChange} disabled={!editing} />
//                 </div>
//                 <div className="form-group">
//                   <label>District</label>
//                   <input type="text" name="district" value={form.district} onChange={handleChange} disabled={!editing} />
//                 </div>
//               </div>

//               <div className="form-row-2">
//                 <div className="form-group">
//                   <label>State</label>
//                   <select name="state" value={form.state} onChange={handleChange} disabled={!editing}>
//                     {indianStates.map((s) => (
//                       <option key={s} value={s}>{s}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label>Pin Code</label>
//                   <input type="text" name="pinCode" value={form.pinCode} onChange={handleChange} disabled={!editing} />
//                 </div>
//               </div>
//             </div>

//             <div className="profile-summary">
//               <p className="profile-summary-title">Profile Summary</p>
//               <div className="profile-summary-grid">
//                 <div className="summary-stat">
//                   <i className="ti ti-shopping-bag"></i>
//                   <p className="stat-value">12</p>
//                   <p className="stat-label">Orders Placed</p>
//                 </div>
//                 <div className="summary-stat">
//                   <i className="ti ti-map-pin"></i>
//                   <p className="stat-value">2</p>
//                   <p className="stat-label">Addresses Saved</p>
//                 </div>
//                 <div className="summary-stat">
//                   <i className="ti ti-heart"></i>
//                   <p className="stat-value">8</p>
//                   <p className="stat-label">Wishlist Items</p>
//                 </div>
//                 <div className="summary-stat premium-stat">
//                   <i className="ti ti-crown"></i>
//                   <p className="stat-value">Premium</p>
//                   <p className="stat-label">Member</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>

//         {/* Right */}
//         <aside className="profile-right">
//           <div className="profile-right-card">
//             <div className="profile-right-header">
//               <h4>Recent Orders</h4>
//               <span className="view-all-link" onClick={() => onNavigate && onNavigate('MyOrders')} style={{ cursor: 'pointer' }}>
//                 View All Orders
//               </span>
//             </div>
//             {recentOrders.map((order) => (
//               <div className="recent-order-row" key={order.id}>
//                 <img src={order.image} alt={order.name} className="recent-order-img" />
//                 <div className="recent-order-info">
//                   <p className="recent-order-name">{order.name}</p>
//                   <p className="recent-order-id">Order #{order.id}</p>
//                   <p className="recent-order-date">{order.date}</p>
//                 </div>
//                 <div className="recent-order-right">
//                   <p className="recent-order-amount">₹{order.amount}</p>
//                   <p className="recent-order-status" style={{ color: statusColor(order.status) }}>{order.status}</p>
//                 </div>
//               </div>
//             ))}
//             <div className="view-all-orders-link" onClick={() => onNavigate && onNavigate('MyOrders')} style={{ cursor: 'pointer' }}>
//               View All Orders <i className="ti ti-arrow-right"></i>
//             </div>
//           </div>

//           <div className="profile-right-card">
//             <div className="profile-right-header">
//               <h4>Saved Addresses</h4>
//               <span className="view-all-link">Manage Addresses</span>
//             </div>
//             <div className="saved-address-row">
//               <i className="ti ti-map-pin" style={{ color: '#1d6b2e', fontSize: 18 }}></i>
//               <div className="saved-address-info">
//                 <div className="saved-address-top">
//                   <span className="address-label">Home</span>
//                   <span className="address-default-badge">Default</span>
//                   <i className="ti ti-dots-vertical" style={{ marginLeft: 'auto', color: '#999' }}></i>
//                 </div>
//                 <p className="address-text">House No. 123, Near Agriculture College, Main Road, Green Valley, Baramati, Pune, Maharashtra - 413 102</p>
//               </div>
//             </div>
//             <div className="saved-address-row">
//               <i className="ti ti-map-pin" style={{ color: '#1d6b2e', fontSize: 18 }}></i>
//               <div className="saved-address-info">
//                 <div className="saved-address-top">
//                   <span className="address-label">Farm Address</span>
//                   <i className="ti ti-dots-vertical" style={{ marginLeft: 'auto', color: '#999' }}></i>
//                 </div>
//                 <p className="address-text">Survey No. 45, Village Khed, Taluka Indapur, Pune, Maharashtra - 413 106</p>
//               </div>
//             </div>
//           </div>

//           <div className="profile-right-card">
//             <h4 style={{ marginBottom: 14 }}>Quick Links</h4>
//             <div className="quick-links-grid">
//               <div className="quick-link-item"><i className="ti ti-truck"></i><p>Track Order</p></div>
//               <div className="quick-link-item"><i className="ti ti-heart"></i><p>Wishlist</p></div>
//               <div className="quick-link-item"><i className="ti ti-credit-card"></i><p>Payment Methods</p></div>
//               <div className="quick-link-item"><i className="ti ti-help"></i><p>Help Center</p></div>
//             </div>
//           </div>
//         </aside>

//       </div>
//     </div>
//   )
// }

// export default Profile
import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ProductContext } from '../context/ProductContext'
import {
  User, ShoppingBag, MapPin, Heart, Star, Truck, CreditCard, Bell, Settings,
  LogOut, Edit, ChevronRight
} from 'lucide-react'

const menuItems = [
  { icon: User,        label: 'My Profile' },
  { icon: ShoppingBag, label: 'My Orders',  path: '/orders' },
  { icon: MapPin,      label: 'My Addresses' },
  { icon: Heart,       label: 'Wishlist' },
  { icon: Star,        label: 'My Reviews' },
  { icon: Truck,       label: 'Track Order' },
  { icon: CreditCard,  label: 'Payment Methods' },
  { icon: Bell,        label: 'Notification Preferences' },
  { icon: Settings,    label: 'Account Settings' },
]

const indianStates = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
]

const Profile = () => {
  const navigate = useNavigate()
  const { token, setToken, backendUrl } = useContext(ProductContext)

  const [activeMenu, setActiveMenu] = useState('My Profile')
  const [editing, setEditing] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [recentOrders, setRecentOrders] = useState([])

  const [form, setForm] = useState({
    fullName: '', mobile: '', email: '',
    address: '', village: '', taluka: '', district: '', state: 'Maharashtra', pinCode: '',
  })

  const fetchProfile = async () => {
    try {
      const response = await axios.post(
        backendUrl + '/api/user/profile',
        {},
        { headers: { token } }
      )

      console.log('profile response:', response.data)

      if (response.data.success) {
        const u = response.data.user
        setForm({
          fullName: u.name || '',
          mobile: u.mobile || '',
          email: u.email || '',
          address: u.address?.line || '',
          village: u.address?.village || '',
          taluka: u.address?.taluka || '',
          district: u.address?.district || '',
          state: u.address?.state || 'Maharashtra',
          pinCode: u.address?.pinCode || '',
        })
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Failed to load profile')
    } finally {
      setLoading(false)
    }
  }

  const fetchRecentOrders = async () => {
    try {
      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        { headers: { token } }
      )
      if (response.data.success) {
        const sorted = [...response.data.orders].sort((a, b) => b.date - a.date)
        setRecentOrders(sorted.slice(0, 3))
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!token) {
      navigate('/login')
      return
    }
    fetchProfile()
    fetchRecentOrders()
  }, [token])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSave = async () => {
    setSaving(true)
    try {
      const response = await axios.post(
        backendUrl + '/api/user/update-profile',
        {
          name: form.fullName,
          mobile: form.mobile,
          address: {
            line: form.address,
            village: form.village,
            taluka: form.taluka,
            district: form.district,
            state: form.state,
            pinCode: form.pinCode,
          },
        },
        { headers: { token } }
      )

      if (response.data.success) {
        toast.success('Profile updated')
        setEditing(false)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Failed to update profile')
    } finally {
      setSaving(false)
    }
  }

  const handleLogout = () => {
    setToken('')
    navigate('/login')
  }

  if (loading) {
    return <div className="profile-page"><p style={{ padding: 40 }}>Loading profile...</p></div>
  }

  return (
    <div className="profile-page">
      <div className="breadcrumb">
        <span onClick={() => navigate('/')} style={{ cursor: 'pointer', color: '#1d6b2e' }}>Home</span>
        <ChevronRight size={14} />
        <span style={{ color: '#1d6b2e', cursor: 'pointer' }}>Account</span>
        <ChevronRight size={14} />
        <span className="breadcrumb-current">My Profile</span>
      </div>

      <div className="profile-layout">

        <aside className="profile-sidebar">
          <div className="profile-avatar-block">
            <div className="profile-avatar">
              <User size={28} />
            </div>
            <div>
              <p className="profile-name">{form.fullName || 'Your Name'}</p>
              <p className="profile-email">{form.email}</p>
            </div>
          </div>

          <p className="sidebar-section-label">MY ACCOUNT</p>
          <nav className="profile-menu">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className={`profile-menu-item ${activeMenu === item.label ? 'profile-menu-active' : ''}`}
                  onClick={() => {
                    setActiveMenu(item.label)
                    if (item.path) navigate(item.path)
                  }}
                >
                  <Icon size={17} />
                  {item.label}
                </div>
              )
            })}
            <div className="profile-menu-item profile-logout" onClick={handleLogout}>
              <LogOut size={17} /> Logout
            </div>
          </nav>
        </aside>

        <main className="profile-main">
          <div className="profile-form-card">
            <div className="profile-form-header">
              <div>
                <h2>My Profile</h2>
                <p className="profile-form-subtitle">Manage your personal information</p>
              </div>
              <button
                className="profile-edit-btn"
                onClick={() => (editing ? handleSave() : setEditing(true))}
                disabled={saving}
              >
                <Edit size={15} /> {editing ? (saving ? 'Saving...' : 'Save') : 'Edit'}
              </button>
            </div>

            <div className="profile-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="fullName" value={form.fullName} onChange={handleChange} disabled={!editing} />
                </div>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input type="text" name="mobile" value={form.mobile} onChange={handleChange} disabled={!editing} />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" value={form.email} disabled />
              </div>

              <div className="form-group">
                <label>Address</label>
                <input type="text" name="address" value={form.address} onChange={handleChange} disabled={!editing} />
              </div>

              <div className="form-row-3">
                <div className="form-group">
                  <label>Village / Town</label>
                  <input type="text" name="village" value={form.village} onChange={handleChange} disabled={!editing} />
                </div>
                <div className="form-group">
                  <label>Taluka</label>
                  <input type="text" name="taluka" value={form.taluka} onChange={handleChange} disabled={!editing} />
                </div>
                <div className="form-group">
                  <label>District</label>
                  <input type="text" name="district" value={form.district} onChange={handleChange} disabled={!editing} />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>State</label>
                  <select name="state" value={form.state} onChange={handleChange} disabled={!editing}>
                    {indianStates.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Pin Code</label>
                  <input type="text" name="pinCode" value={form.pinCode} onChange={handleChange} disabled={!editing} />
                </div>
              </div>
            </div>
          </div>
        </main>

        <aside className="profile-right">
          <div className="profile-right-card">
            <div className="profile-right-header">
              <h4>Recent Orders</h4>
              <span className="view-all-link" onClick={() => navigate('/orders')} style={{ cursor: 'pointer' }}>
                View All Orders
              </span>
            </div>

            {recentOrders.length === 0 ? (
              <p style={{ fontSize: 13, color: '#888', padding: '12px 0' }}>
                No orders yet.
              </p>
            ) : (
              <div className="recent-orders-list">
                {recentOrders.map((order) => (
                  <div
                    key={order._id}
                    className="recent-order-item"
                    onClick={() => navigate('/order-success', { state: { order } })}
                  >
                    <img src={order.items?.[0]?.image} alt="product" className="recent-order-img" />
                    <div className="recent-order-info">
                      <p className="recent-order-name">
                        {order.items?.[0]?.name}
                        {order.items?.length > 1 ? ` +${order.items.length - 1} more` : ''}
                      </p>
                      <p className="recent-order-date">{new Date(order.date).toLocaleDateString()}</p>
                    </div>
                    <div className="recent-order-right">
                      <p className="recent-order-amount">₹{order.amount?.toLocaleString('en-IN')}</p>
                      <span className="recent-order-status" style={{ color: '#7c4dff' }}>{order.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>

      </div>
    </div>
  )
}

export default Profile