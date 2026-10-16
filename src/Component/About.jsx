import React from 'react'

const About = () => {
  return (
    <div className="page about-page">
      <h1>About Fresh Mart</h1>

      <p className="about-intro">
        Welcome to Fresh Mart! We make everyday grocery
        shopping simple, convenient and enjoyable.
        Discover fruits, vegetables, dairy products and
        daily essentials in one place.
      </p>

      <h2>Why Choose Fresh Mart?</h2>

      <div className="about-features">
        <div className="about-card">
          <div className="feature-icon">🍎</div>
          <h2>Fresh Products</h2>
          <p>
            Find a variety of everyday grocery products
            for your home.
          </p>
        </div>

        <div className="about-card">
          <div className="feature-icon">💚</div>
          <h2>Affordable Prices</h2>
          <p>
            Shop for your daily needs with convenient
            product choices.
          </p>
        </div>

        <div className="about-card">
          <div className="feature-icon">🛒</div>
          <h2>Easy Shopping</h2>
          <p>
            Explore our product collection with a
            simple and user-friendly experience.
          </p>
        </div>
      </div>

      <h2>Our Mission</h2>

      <p className="about-intro">
        Our mission is to make grocery shopping easier
        by offering a convenient way to explore daily
        essentials online.
      </p>
    </div>
  )
}

export default About