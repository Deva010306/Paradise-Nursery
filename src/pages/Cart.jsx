import { useState } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'
import { useCart } from '../context/useCart'

export default function Cart() {
  const { cart, clearCart } = useCart()
  const [confirmed, setConfirmed] = useState(false)

  const handleCheckout = () => {
    setConfirmed(true)
    clearCart()
  }

  if (confirmed) {
    return (
      <main className="cart-page">
        <section className="confirmation">
          <div className="confirmation-icon">✓</div>
          <p className="eyebrow dark">Order confirmed</p>
          <h1>Thank you for your order!</h1>
          <p>Your plants are getting ready for their journey to a happy new home.</p>
          <Link className="primary-button" to="/shop">Continue shopping</Link>
        </section>
      </main>
    )
  }

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <section className="empty-cart">
          <div className="empty-illustration" aria-hidden="true">
            <svg viewBox="0 0 180 180">
              <path d="M48 145h84l-9-44H57z" />
              <path d="M90 101V49M90 75C62 75 52 62 52 43c27 0 38 12 38 32ZM90 62c0-23 12-34 38-34 0 23-13 34-38 34Z" />
            </svg>
          </div>
          <p className="eyebrow dark">Your cart is empty</p>
          <h1>Let’s find you a plant</h1>
          <p>Explore our collection and bring a little nature home.</p>
          <Link className="primary-button" to="/shop">Continue shopping</Link>
        </section>
      </main>
    )
  }

  return (
    <main className="cart-page">
      <div className="cart-heading">
        <div>
          <p className="eyebrow dark">Shopping bag</p>
          <h1>Your cart</h1>
        </div>
        <Link to="/shop" className="continue-link">← Continue shopping</Link>
      </div>
      <div className="cart-layout">
        <section className="cart-items" aria-label="Cart items">
          {cart.map((item) => <CartItem key={item.id} item={item} />)}
        </section>
        <CartSummary onCheckout={handleCheckout} />
      </div>
    </main>
  )
}
