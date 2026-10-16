import React from 'react'

const Contact = () => {
  return (
    <div className="page contact-page">
      <h1>Contact Us</h1>
      <div className="contact-layout">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <h2>We Are Here to Help!</h2>

        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Send a Message</h2>

          <input type="text" placeholder="Your Name" required />
          <input type="text" placeholder="Your Emali" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Write your message here..." rows="5" required />

          <button type="submit">Send Message →</button>
        </form>
      </div>
    </div>
  )
}

export default Contact