import React from 'react';

function Cart(props) {
  const { cartItems, onRemove } = props;

  const totalPrice = cartItems.reduce((accumulator, current) => accumulator + current.price * current.qty, 0);

  return (
    <div>
      <h1>Cart Items</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
              <td>
                <button onClick={() => onRemove(item)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">
              Total Price: {totalPrice}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Cart;
