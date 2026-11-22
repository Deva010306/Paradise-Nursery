import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">Bring nature indoors</p>
        <h1>Make room for<br />a little more green.</h1>
        <p className="hero-copy">
          Thoughtfully grown houseplants, delivered to your door and ready to brighten your everyday.
        </p>
        <Link className="primary-button" to="/shop">
          Shop plants
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
