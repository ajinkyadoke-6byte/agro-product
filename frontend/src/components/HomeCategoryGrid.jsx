import React from 'react'
import { useNavigate } from 'react-router-dom'
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

const HomeCategoryGrid = () => {
  const navigate = useNavigate()

  const goToCategory = (name) => {
    navigate(`/products?category=${encodeURIComponent(name)}`)
  }

  return (
    <section className="category-section">
      <div className="category-header">
        <h2>Shop by Category</h2>
      </div>

      <div className="category-grid">
        {categories.map((cat) => (
          <div key={cat.name} className="category-card" onClick={() => goToCategory(cat.name)}>
            <div className="category-img-wrap">
              <img src={cat.img} alt={cat.name} className="category-img" />
            </div>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomeCategoryGrid