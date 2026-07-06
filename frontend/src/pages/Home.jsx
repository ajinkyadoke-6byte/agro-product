import React from 'react'
import Hero from '../../components/Hero/Hero'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

const categories = [
  { name: 'Fertilizers', icon: 'ti-bottle' },
  { name: 'Insecticides', icon: 'ti-bug' },
  { name: 'Fungicides', icon: 'ti-flask' },
  { name: 'Micronutrients', icon: 'ti-droplet' },
  { name: 'Plant Growth Promoters', icon: 'ti-seeding' },
  { name: 'Organic Products', icon: 'ti-leaf' },
]

const Home = () => {
  return (
    <div>
      <Hero />

      <div className="trust-badges">
        <div className="badge">
          <i className="ti ti-certificate"></i>
          <div>
            <p className="badge-title">Genuine Products</p>
            <p className="badge-subtitle">100% Original</p>
          </div>
        </div>
        <div className="badge">
          <i className="ti ti-truck"></i>
          <div>
            <p className="badge-title">Fast Delivery</p>
            <p className="badge-subtitle">On Time</p>
          </div>
        </div>
        <div className="badge">
          <i className="ti ti-lock"></i>
          <div>
            <p className="badge-title">Secure Payments</p>
            <p className="badge-subtitle">100% Safe</p>
          </div>
        </div>
        <div className="badge">
          <i className="ti ti-headset"></i>
          <div>
            <p className="badge-title">Expert Support</p>
            <p className="badge-subtitle">24/7 Assistance</p>
          </div>
        </div>
      </div>

      <section className="category-section">
        <div className="category-header">
          <h2>Shop by Category</h2>
          <span className="view-all">View All</span>
        </div>
        <div className="category-grid">
          {categories.map((cat) => (
            <CategoryCard key={cat.name} name={cat.name} icon={cat.icon} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home