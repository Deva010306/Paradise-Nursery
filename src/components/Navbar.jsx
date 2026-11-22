import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/useCart'

export default function Navbar() {
  const { cartCount } = useCart()

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link className="brand" to="/" aria-label="Paradise Nursery home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48">
              <path d="M24 40V20" />
              <path d="M24 28C13 28 8 22 8 12c10 0 16 5 16 16Z" />
              <path d="M24 22c0-9 6-14 16-14 0 10-5 16-16 16" />
            </svg>
          </span>
          <span>
            <strong>Paradise</strong>
            <small>NURSERY</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <Link className="cart-link" to="/cart" aria-label={`Shopping cart with ${cartCount} items`}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
            <circle cx="10" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>
          <span className="cart-label">Cart</span>
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </header>
  )
}
