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


// import React, { useState } from 'react'
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
//   const [showAll, setShowAll] = useState(false)

//   return (
//     <section className="category-section">
//       <div className="category-header">
//         <h2>Shop by Category</h2>
//         <span className="view-all" onClick={() => setShowAll(!showAll)}>View All</span>
//       </div>
//       <div className="category-grid">
//         {(showAll ? categories : categories.slice(0, 5)).map((cat) => (
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

// import React from "react";

// import fertilizerImg from "../assets/fertilizer.jpeg";
// import insecticideImg from "../assets/insecticide.jpeg";
// import fungicideImg from "../assets/fungicide.jpeg";
// import micronutrientImg from "../assets/micronutrient.jpeg";
// import growthPromoterImg from "../assets/growth_promoter.jpeg";
// import organicImg from "../assets/organic.jpeg";

// const categories = [
//   {
//     name: "Fertilizers",
//     img: fertilizerImg,
//     desc: "Improve soil fertility and crop yield.",
//     products: 28,
//   },
//   {
//     name: "Insecticides",
//     img: insecticideImg,
//     desc: "Protect crops from harmful insects.",
//     products: 18,
//   },
//   {
//     name: "Fungicides",
//     img: fungicideImg,
//     desc: "Prevent fungal diseases effectively.",
//     products: 14,
//   },
//   {
//     name: "Micronutrients",
//     img: micronutrientImg,
//     desc: "Essential nutrients for healthy growth.",
//     products: 22,
//   },
//   {
//     name: "Plant Growth Promoters",
//     img: growthPromoterImg,
//     desc: "Boost plant development naturally.",
//     products: 12,
//   },
//   {
//     name: "Organic Products",
//     img: organicImg,
//     desc: "Eco-friendly solutions for farming.",
//     products: 15,
//   },
// ];

// const CategoryGrid = ({ onCategoryClick }) => {
//   return (
//     <div className="category-grid-page">
//       {categories.map((cat) => (
//         <div
//           key={cat.name}
//           className="category-big-card"
//           onClick={() => onCategoryClick(cat.name)}
//         >
//           <img src={cat.img} alt={cat.name} />

//           <div className="category-content">

//             <h3>{cat.name}</h3>

//             <p>{cat.desc}</p>

//             <span>{cat.products} Products</span>

//             <button>
//               Browse Products →
//             </button>

//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategoryGrid;


import React from "react";
import { useNavigate } from "react-router-dom";

import fertilizerImg from "../assets/fertilizer.jpeg";
import insecticideImg from "../assets/insecticide.jpeg";
import fungicideImg from "../assets/fungicide.jpeg";
import micronutrientImg from "../assets/micronutrient.jpeg";
import growthPromoterImg from "../assets/growth_promoter.jpeg";
import organicImg from "../assets/organic.jpeg";

const categories = [
  { name: "Fertilizers", img: fertilizerImg, desc: "Improve soil fertility and crop yield.", products: 28 },
  { name: "Insecticides", img: insecticideImg, desc: "Protect crops from harmful insects.", products: 18 },
  { name: "Fungicides", img: fungicideImg, desc: "Prevent fungal diseases effectively.", products: 14 },
  { name: "Micronutrients", img: micronutrientImg, desc: "Essential nutrients for healthy growth.", products: 22 },
  { name: "Plant Growth Promoters", img: growthPromoterImg, desc: "Boost plant development naturally.", products: 12 },
  { name: "Organic Products", img: organicImg, desc: "Eco-friendly solutions for farming.", products: 15 },
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (name) => {
    navigate(`/products?category=${encodeURIComponent(name)}`);
  };

  return (
    <div className="categories-page">
      <div className="categories-header-page">
        <h1>Explore Categories</h1>
        <p>Find the perfect agricultural products for every stage of your crop</p>
      </div>

      <div className="categories-grid">
        {categories.map((cat) => (
          <div
            className="category-large-card"
            key={cat.name}
            onClick={() => handleCategoryClick(cat.name)}
          >
            <img src={cat.img} alt={cat.name} />

            <div className="category-large-content">
              <h3>{cat.name}</h3>
              <p>{cat.desc}</p>
              <span>{cat.products} Products</span>
              <button onClick={(e) => { e.stopPropagation(); handleCategoryClick(cat.name); }}>
                Browse Products →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;