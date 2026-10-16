import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-hero">
      <div className="home-content">
        <p className="home-tag">WELCOME TO FRESH MART</p>

        <h1>
          Fresh Groceries,<br />
          <span>Fresh Living!</span>
        </h1>

        <p className="home-description">
          Discover fresh fruits, vegetables and everyday
          essentials at affordable prices.
          Your daily shopping, made easy!
        </p>

        <button onClick={() => navigate('/products')}>
          Explore Products 
        </button>

        <div className="home-features">
          <span>🌿 Fresh Products</span>
          <span>🛒 Easy Shopping</span>
          <span>💚 Quality You Trust</span>
        </div>
      </div>

      <div className="home-image">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85"
          alt="Fresh fruits and vegetables"
        />
        <div className="fresh-badge">
          <span>🍃</span>
          <p>Eat Fresh</p>
          <small>Live Healthy</small>
        </div>
      </div>
    </div>
  )
}

export default Home