// import React from 'react'
// import fertilizerImg from '../assets/fertilizer.jpeg'
// import insecticideImg from '../assets/insecticide.jpeg'
// // import fungicideImg from '../assets/fungicide.jpeg'
// import micronutrientImg from '../assets/micronutrient.jpeg'
// import growthPromoterImg from '../assets/growth_promoter.jpeg'
// import organicImg from '../assets/organic.jpeg'

// const categories = [
//   { name: 'Fertilizers', img: fertilizerImg },
//   { name: 'Insecticides', img: insecticideImg },
//   // { name: 'Fungicides', img: fungicideImg },
//   { name: 'Micronutrients', img: micronutrientImg },
//   { name: 'Plant Growth Promoters', img: growthPromoterImg },
//   { name: 'Organic Products', img: organicImg },
// ]

// const CategoryGrid = () => {
//   return (
//     <section className="category-section">
//       <div className="category-header">
//         <h2>Shop by Category</h2>
//         <span className="view-all">View All</span>
//       </div>
//       <div className="category-grid">
//         {categories.map((cat) => (
//           <div className="category-card" key={cat.name}>
//             <img src={cat.img} alt={cat.name} className="category-img" />
//             <p>{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default CategoryGrid


// import React from 'react'
// import fertilizerImg from '../assets/fertilizer.jpeg'
// import insecticideImg from '../assets/insecticide.jpeg'
// import fungicideImg from '../assets/fungicide.jpeg'
// import micronutrientImg from '../assets/micronutrient.jpeg'
// import growthPromoterImg from '../assets/growth_promoter.jpeg'
// import organicImg from '../assets/organic.jpeg'

// const categories = [
//   { name: 'Fertilizers', img: fertilizerImg },
//   { name: 'Insecticides', img: insecticideImg },
//   { name: 'Fungicides', img: fungicideImg },
//   { name: 'Micronutrients', img: micronutrientImg },
//   { name: 'Plant Growth Promoters', img: growthPromoterImg },
//   { name: 'Organic Products', img: organicImg },
// ]

// const CategoryGrid = () => {
//   return (
//     <section className="category-section">
//       <div className="category-header">
//         <h2>Shop by Category</h2>
//         <span className="view-all">View All</span>
//       </div>
//       <div className="category-grid">
//         {categories.map((cat) => (
//           <div className="category-card" key={cat.name}>
//             <img src={cat.img} alt={cat.name} className="category-img" />
//             <p>{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default CategoryGrid


import React, { useState } from 'react'
import fertilizerImg from '../assets/fertilizer.jpeg'
import insecticideImg from '../assets/insecticide.jpeg'
import fungicideImg from '../assets/fungicide.jpeg'
import micronutrientImg from '../assets/micronutrient.jpeg'
import growthPromoterImg from '../assets/growth_promoter.jpeg'
import organicImg from '../assets/organic.jpeg'

const categories = [
  { name: 'Fertilizers', img: fertilizerImg },
  { name: 'Insecticides', img: insecticideImg },
  { name: 'Fungicides', img: fungicideImg },
  { name: 'Micronutrients', img: micronutrientImg },
  { name: 'Plant Growth Promoters', img: growthPromoterImg },
  { name: 'Organic Products', img: organicImg },
]

const CategoryGrid = () => {
  const [showAll, setShowAll] = useState(false)

  return (
    <section className="category-section">
      <div className="category-header">
        <h2>Shop by Category</h2>
        <span className="view-all" onClick={() => setShowAll(!showAll)}>View All</span>
      </div>
      <div className="category-grid">
        {(showAll ? categories : categories.slice(0, 5)).map((cat) => (
          <div className="category-card" key={cat.name}>
            <img src={cat.img} alt={cat.name} className="category-img" />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategoryGrid