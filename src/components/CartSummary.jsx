import { useCart } from '../context/useCart'

export default function CartSummary({ onCheckout }) {
  const { cartTotal } = useCart()

  return (
    <aside className="cart-summary">
      <h2>Order summary</h2>
      <div className="summary-row">
        <span>Subtotal</span>
        <strong>${cartTotal.toFixed(2)}</strong>
      </div>
      <div className="summary-row">
        <span>Delivery</span>
        <strong>{cartTotal >= 50 ? 'Free' : '$5.00'}</strong>
      </div>
      <div className="summary-divider" />
      <div className="summary-total">
        <span>Total</span>
        <strong>${(cartTotal + (cartTotal >= 50 ? 0 : 5)).toFixed(2)}</strong>
      </div>
      <button type="button" className="checkout-button" onClick={onCheckout}>
        Checkout
      </button>
      <p className="secure-note">
        <span aria-hidden="true">◆</span> Secure checkout
      </p>
    </aside>
  )
}
