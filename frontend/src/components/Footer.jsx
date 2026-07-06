import React from 'react'
import logo from '../assets/AgroMartlogo.jpeg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="AgroMart" />
            <span>AgroMart</span>
          </div>
          <p className="footer-tagline">Grow Better, Live Better</p>
          <p className="footer-desc">
            Providing top quality agricultural products to help farmers grow better and live better.
          </p>
          <div className="footer-socials">
            <i className="ti ti-brand-facebook"></i>
            <i className="ti ti-brand-instagram"></i>
            <i className="ti ti-brand-youtube"></i>
            <i className="ti ti-brand-whatsapp"></i>
          </div>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li>All Products</li>
            <li>Fertilizers</li>
            <li>Pesticides</li>
            <li>Micronutrients</li>
            <li>Organic Products</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Information</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>My Account</h4>
          <ul>
            <li>My Orders</li>
            <li>Wishlist</li>
            <li>Track Order</li>
            <li>Account Details</li>
            <li>Logout</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li><i className="ti ti-phone"></i> +91 98765 43210</li>
            <li><i className="ti ti-mail"></i> support@agromart.com</li>
            <li><i className="ti ti-map-pin"></i> 123, Krishi Nagar, Pune, Maharashtra - 411001</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          <p className="footer-newsletter-text">Subscribe to get updates on new products and offers</p>
          <input type="email" placeholder="Enter your email" className="footer-input" />
          <button className="footer-subscribe">Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 AgroMart. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

// import React from 'react'
// import logo from '../assets/AgroMartlogo.jpeg'

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-columns">
//         <div className="footer-brand">
//           <div className="footer-logo">
//             <img src={logo} alt="AgroMart" />
//             <span>AgroMart</span>
//           </div>
//           <p className="footer-tagline">Grow Better, Live Better</p>
//           <p className="footer-desc">
//             Providing top quality agricultural products to help farmers grow better and live better.
//           </p>
//           <div className="footer-socials">
//             <i className="ti ti-brand-facebook"></i>
//             <i className="ti ti-brand-instagram"></i>
//             <i className="ti ti-brand-youtube"></i>
//             <i className="ti ti-brand-whatsapp"></i>
//           </div>
//         </div>

//         <div className="footer-col">
//           <h4>Shop</h4>
//           <ul>
//             <li>All Products</li>
//             <li>Fertilizers</li>
//             <li>Pesticides</li>
//             <li>Micronutrients</li>
//             <li>Organic Products</li>
//           </ul>
//         </div>

//         <div className="footer-col">
//           <h4>Information</h4>
//           <ul>
//             <li>About Us</li>
//             <li>Contact Us</li>
//             <li>Shipping Policy</li>
//             <li>Return Policy</li>
//             <li>Terms and Conditions</li>
//           </ul>
//         </div>

//         <div className="footer-col">
//           <h4>My Account</h4>
//           <ul>
//             <li>My Orders</li>
//             <li>Wishlist</li>
//             <li>Track Order</li>
//             <li>Account Details</li>
//             <li>Logout</li>
//           </ul>
//         </div>

//         <div className="footer-col">
//           <h4>Contact Us</h4>
//           <ul className="footer-contact">
//             <li><i className="ti ti-phone"></i> +91 98765 43210</li>
//             <li><i className="ti ti-mail"></i> support@agromart.com</li>
//             <li><i className="ti ti-map-pin"></i> 123, Krishi Nagar, Pune, Maharashtra - 411001</li>
//           </ul>
//         </div>

//         <div className="footer-col">
//           <h4>Newsletter</h4>
//           <p className="footer-newsletter-text">Subscribe to get updates on new products and offers</p>
//           <input type="email" placeholder="Enter your email" className="footer-input" />
//           <button className="footer-subscribe">Subscribe</button>
//         </div>
//       </div>

//       <div className="footer-reviews">
//         <h4>What Our Customers Say</h4>
//         <div className="footer-reviews-list">
//           <div className="footer-review-card">
//             <div className="footer-review-stars">
//               <i className="ti ti-star-filled"></i>
//               <i className="ti ti-star-filled"></i>
//               <i className="ti ti-star-filled"></i>
//               <i className="ti ti-star-filled"></i>
//               <i className="ti ti-star-filled"></i>
//             </div>
//             <p className="footer-review-text">
//               "Great quality fertilizers and fast delivery. My crop yield improved noticeably this season."
//             </p>
//             <span className="footer-review-author">- Ramesh Patil, Nashik</span>
//           </div>

//           <div className="footer-review-card">
//             <div className="footer-review-stars">
//               <i className="ti ti-star-filled"></i>
//               <i className="ti ti-star-filled"></i>
//               <i className="ti ti-star-filled"></i>
//               <i className="ti ti-star-filled"></i>
//               <i className="ti ti-star-filled"></i>
//             </div>
//             <p className="footer-review-text">
//               "AgroMart has genuine organic products at reasonable prices. Highly recommended for every farmer."
//             </p>
//             <span className="footer-review-author">- Sunita Jadhav, Pune</span>
//           </div>

//           <div className="footer-review-card">
//             <div className="footer-review-stars">
//               <i className="ti ti-star-filled"></i>
//               <i className="ti ti-star-filled"></i>
//               <i className="ti ti-star-filled"></i>
//               <i className="ti ti-star-filled"></i>
//               <i className="ti ti-star-half-filled"></i>
//             </div>
//             <p className="footer-review-text">
//               "Customer support helped me choose the right pesticide for my farm. Very satisfied with the service."
//             </p>
//             <span className="footer-review-author">- Vikram Shinde, Kolhapur</span>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>© 2024 AgroMart. All Rights Reserved.</p>
//       </div>
//     </footer>
//   )
// }

// export default Footer