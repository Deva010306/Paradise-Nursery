import { useEffect, useMemo } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import {
  addItem,
  removeItem,
  addToCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  store,
} from '../CartSlice'

import { CartContext } from './cartContext'

function CartStateProvider({ children }) {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    localStorage.setItem('paradise-nursery-cart', JSON.stringify(cart))
  }, [cart])

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  )
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  )

  const value = {
    cart,
    cartCount,
    cartTotal,
    addItem: (plant) => dispatch(addItem(plant)),
    addToCart: (plant) => dispatch(addToCart(plant)),
    removeItem: (id) => dispatch(removeItem(id)),
    increaseQuantity: (id) => dispatch(increaseQuantity(id)),
    decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    clearCart: () => dispatch(clearCart()),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function CartProvider({ children }) {
  return (
    <Provider store={store}>
      <CartStateProvider>{children}</CartStateProvider>
    </Provider>
  )
}

