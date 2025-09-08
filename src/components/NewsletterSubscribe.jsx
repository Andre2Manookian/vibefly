import React, { useState } from 'react'

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    // NOTE: No backend provided. This demo simulates a successful subscribe.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="subscribe success">
        <h3>Thanks! You’re on the list.</h3>
        <p>We’ll send discounts and best prices to {email} in the future.</p>
      </div>
    )
  }

  return (
    <div className="subscribe">
      <h3>Sign up for discounts and best prices</h3>
      <p>Join our newsletter and never miss a great deal.</p>
      <form onSubmit={onSubmit} className="subscribe-form">
        <input
          type="email"
          placeholder="Enter your email"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn primary">Sign up</button>
      </form>
      <p className="disclaimer">We respect your privacy. Unsubscribe anytime.</p>
    </div>
  )
}