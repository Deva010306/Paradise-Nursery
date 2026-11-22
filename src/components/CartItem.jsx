import { useCart } from '../context/useCart'

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart()

  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)} each</p>
      </div>
      <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
        <button
          type="button"
          onClick={() => decreaseQuantity(item.id)}
          aria-label={`Decrease ${item.name} quantity`}
        >
          −
        </button>
        <span aria-live="polite">{item.quantity}</span>
        <button
          type="button"
          onClick={() => increaseQuantity(item.id)}
          aria-label={`Increase ${item.name} quantity`}
        >
          +
        </button>
      </div>
      <strong className="item-subtotal">${(item.price * item.quantity).toFixed(2)}</strong>
      <button
        type="button"
        className="remove-button"
        onClick={() => removeFromCart(item.id)}
        aria-label={`Remove ${item.name} from cart`}
      >
        ×
      </button>
    </article>
  )
}
