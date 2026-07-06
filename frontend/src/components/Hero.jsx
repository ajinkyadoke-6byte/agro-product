// import React from 'react'
// import heroImg from '../../assets/hero.png'

// const Hero = () => {
//   return (
//     <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
//       <div className="hero-content">
//         <h1>Quality Agricultural Solutions for Better Crop Yield</h1>
//         <p>Trusted by thousands of farmers. Genuine products, Best results.</p>
//         <div className="hero-buttons">
//           <button className="btn-primary">Shop Now</button>
//           <button className="btn-secondary">Explore Products</button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero


// import React from 'react'
// import agriculture from '../assets/agriculture.jpeg'

// const Hero = () => {
//   return (
//     <section className="hero" style={{ backgroundImage: `url(${agriculture})` }}>
//       <div className="hero-content">
//         <h1>Quality Agricultural Solutions for Better Crop Yield</h1>
//         <p>Trusted by thousands of farmers. Genuine products, Best results.</p>
//         <div className="hero-buttons">
//           <button className="btn-primary">Shop Now</button>
//           <button className="btn-secondary">Explore Products</button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero

import React from 'react'
import agriculture from '../assets/agriculture.jpeg'

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${agriculture})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Quality Agricultural Solutions for Better Crop Yield</h1>
        <p>Trusted by thousands of farmers. Genuine products, Best results.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-secondary">Explore Products</button>
        </div>
      </div>
    </section>
  )
}

export default Hero