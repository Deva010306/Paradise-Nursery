import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-mark small" aria-hidden="true">
            <svg viewBox="0 0 48 48"><path d="M24 40V20" /><path d="M24 28C13 28 8 22 8 12c10 0 16 5 16 16Z" /><path d="M24 22c0-9 6-14 16-14 0 10-5 16-16 16" /></svg>
          </span>
          <strong>Paradise Nursery</strong>
        </div>
        <p>Plants for happier spaces.</p>
        <Link to="/shop">Explore the collection →</Link>
      </div>
    </footer>
  )
}
