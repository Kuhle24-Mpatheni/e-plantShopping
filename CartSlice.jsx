// CartSlice.jsx - Required reducers: addItem, removeItem, updateQuantity
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    // REQUIRED: addItem reducer
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.quantity += newItem.quantity || 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.items.push({
          ...newItem,
          quantity: newItem.quantity || 1,
          totalPrice: newItem.price * (newItem.quantity || 1)
        });
      }
      
      // Update totals
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0);
    },
    
    // REQUIRED: removeItem reducer
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      
      // Update totals
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0);
    },
    
    // REQUIRED: updateQuantity reducer
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item && quantity > 0) {
        item.quantity = quantity;
        item.totalPrice = item.price * quantity;
      } else if (item && quantity <= 0) {
        // Remove if quantity is 0 or negative
        state.items = state.items.filter(item => item.id !== id);
      }
      
      // Update totals
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0);
    },
    
    // Optional: clear cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    }
  }
});

// Export the actions
export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
