import { useCart } from '../context/useCart'

export default function ProductCard({ plant }) {
  const { addToCart, cart } = useCart()
  const inCart = cart.find((item) => item.id === plant.id)

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={plant.image} alt={plant.name} className="product-image" />
        {inCart && <span className="in-cart-badge">In cart · {inCart.quantity}</span>}
      </div>
      <div className="product-info">
        <div>
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
        </div>
        <div className="product-footer">
          <strong>${plant.price.toFixed(2)}</strong>
          <button type="button" className="add-button" onClick={() => addToCart(plant)}>
            <span aria-hidden="true">+</span>
            {inCart ? 'Add another' : 'Add to cart'}
          </button>
        </div>
      </div>
    </article>
  )
}
