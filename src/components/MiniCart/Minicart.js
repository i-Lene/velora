"use client";
import Modal from "../Modal/Modal";
import { useCart } from "@/context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Minicart({ onClose }) {
  const { cartItems, removeFromCart } = useCart();

  return (
    <Modal onClose={onClose}>
      <div className="modal-inner-wrapper">
        <h2>Minicart</h2>
        <button className="btn-close" onClick={onClose}>
          <FontAwesomeIcon icon={faX} />
        </button>
        {cartItems.length === 0 ? (
          <p className="emptyCart">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="minicart-item">
              <div className="item-pic">
                <img src={item.image} />
              </div>
              <div className="minicart-item-details">
                <h3>{item.title}</h3>
                <p>{item.price} EUR</p>
                <p>Quantity: {item.quantity}</p>
                <button
                  className="remove-prod-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <button className="btn btn-primary primary goTo">Go To Checkout</button>
    </Modal>
  );
}
