import { plants } from '../data/plants'
import ProductCard from './ProductCard'

export default function ProductCatalog({ compact = false }) {
  return (
    <section className={compact ? 'catalog-section compact' : 'catalog-section'} id="catalog">
      <div className="catalog-heading">
        <div>
          <p className="eyebrow dark">Our collection</p>
          <h2>{compact ? 'Popular plants' : 'Find your perfect plant'}</h2>
        </div>
        {!compact && <p className="catalog-count">{plants.length} plants available</p>}
      </div>
      <div className="product-grid">
        {(compact ? plants.slice(0, 4) : plants).map((plant) => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>
    </section>
  )
}
