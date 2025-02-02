"use client";
import Modal from "../Modal/Modal";
import { useCart } from "@/context/CartContext";

export default function Minicart({ onClose }) {
  const { cartItems, removeFromCart } = useCart();

  return (
    <Modal onClose={onClose}>
      <div>
        <h2>Minicart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.price} EUR</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
}

