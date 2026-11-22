import ProductCatalog from '../components/ProductCatalog'

export default function Shop() {
  return (
    <main className="shop-page">
      <div className="page-banner">
        <p className="eyebrow dark">Paradise collection</p>
        <h1>Shop indoor plants</h1>
      </div>
      <ProductCatalog />
    </main>
  )
}
