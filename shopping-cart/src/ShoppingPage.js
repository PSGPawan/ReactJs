import React, { useState } from 'react';
import items from '../data/items.json';

const ShoppingPage = () => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div>
      <h1>Shopping Page</h1>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <button onClick={addToCart}>Add To Cart</button>
          </div>
        ))}
      </div>
