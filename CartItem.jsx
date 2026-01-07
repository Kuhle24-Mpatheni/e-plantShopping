// CartItem.jsx - Complete implementation with ALL required functions
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/CartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // REQUIRED FUNCTION 1: Calculate total cost for each item
  const calculateTotalCost = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  // REQUIRED: Display total cost for this item
  const itemTotal = calculateTotalCost(item);

  // REQUIRED FUNCTION 2: Handle quantity increase
  const handleIncrement = () => {
    dispatch(updateQuantity({
      id: item.id,
      quantity: item.quantity + 1
    }));
  };

  // REQUIRED FUNCTION 3: Handle quantity decrease
  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      }));
    } else {
      // REQUIRED: Remove item when quantity reaches zero
      handleRemoveItem();
    }
  };

  // REQUIRED FUNCTION 4: Remove item completely
  const handleRemoveItem = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item" data-testid="cart-item-component">
      
      {/* Product Image */}
      <div className="item-image">
        <img 
          src={item.image || '/images/plant-placeholder.jpg'} 
          alt={item.name} 
          className="product-img"
        />
      </div>

      {/* Product Details */}
      <div className="item-info">
        <h3 className="product-name">{item.name}</h3>
        <p className="unit-price">Unit Price: <span>${item.price.toFixed(2)}</span></p>
        
        {/* REQUIRED: Quantity Controls */}
        <div className="quantity-section">
          <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
          <div className="quantity-controls">
            <button 
              onClick={handleDecrement}
              className="qty-btn qty-decrease"
              aria-label="Decrease quantity"
            >
              −
            </button>
            
            <input
              id={`quantity-${item.id}`}
              type="text"
              value={item.quantity}
              readOnly
              className="quantity-input"
            />
            
            <button 
              onClick={handleIncrement}
              className="qty-btn qty-increase"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* REQUIRED: Total Cost Display */}
      <div className="item-total-section">
        <h4 className="total-label">Item Total</h4>
        
        {/* REQUIRED: Dynamically calculated total */}
        <p className="total-amount" id={`total-${item.id}`}>
          ${itemTotal}
        </p>
        
        <small className="calculation">
          (${item.price.toFixed(2)} × {item.quantity})
        </small>
      </div>

      {/* REQUIRED: Remove Button */}
      <div className="item-actions">
        <button 
          onClick={handleRemoveItem}
          className="remove-item-btn"
          aria-label={`Remove ${item.name} from cart`}
          data-testid="remove-button"
        >
          Remove Item
        </button>
      </div>

    </div>
  );
};

// REQUIRED FUNCTION 5: Calculate total cart amount
// This can be used in the parent Cart component
export const calculateTotalAmount = (cartItems) => {
  if (!cartItems || cartItems.length === 0) return "0.00";
  
  const total = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + (currentItem.price * currentItem.quantity);
  }, 0);
  
  return total.toFixed(2);
};

// REQUIRED FUNCTION 6: Calculate total cost for a specific item
export const calculateItemTotal = (item) => {
  if (!item) return "0.00";
  return (item.price * item.quantity).toFixed(2);
};

export default CartItem;
