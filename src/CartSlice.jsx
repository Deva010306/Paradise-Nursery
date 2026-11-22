import { configureStore, createSlice } from '@reduxjs/toolkit'

const loadCart = () => {
  try {
    return JSON.parse(localStorage.getItem('paradise-nursery-cart')) || []
  } catch {
    return []
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCart(),
  reducers: {
    addItem(state, action) {
      const existing = state.find((item) => item.id === action.payload.id)
      if (existing) existing.quantity += 1
      else state.push({ ...action.payload, quantity: 1 })
    },
    removeItem(state, action) {
      return state.filter((item) => item.id !== action.payload)
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload
      const item = state.find((plant) => plant.id === id)
      if (item) item.quantity = quantity
    },
    addToCart(state, action) {
      const existing = state.find((item) => item.id === action.payload.id)
      if (existing) existing.quantity += 1
      else state.push({ ...action.payload, quantity: 1 })
    },
    increaseQuantity(state, action) {
      const item = state.find((plant) => plant.id === action.payload)
      if (item) item.quantity += 1
    },
    decreaseQuantity(state, action) {
      const index = state.findIndex((plant) => plant.id === action.payload)
      if (index !== -1) {
        state[index].quantity -= 1
        if (state[index].quantity <= 0) state.splice(index, 1)
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload)
    },
    clearCart() {
      return []
    },
  },
})

export const {
  addItem,
  removeItem,
  updateQuantity,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions

export const CartSlice = cartSlice
export default cartSlice.reducer

export const store = configureStore({
  reducer: { cart: cartSlice.reducer },
})
