import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-card">
        <p className="eyebrow dark">Our story</p>
        <h1>Plants, thoughtfully chosen.</h1>
        <p>
          Paradise Nursery connects plant lovers with healthy, characterful houseplants
          selected for beauty, resilience, and everyday living.
        </p>
        <Link className="primary-button" to="/shop">Explore plants</Link>
      </section>
    </main>
  )
}
