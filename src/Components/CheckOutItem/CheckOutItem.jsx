import { useContext } from "react";

import { CartContext } from "../../contexts/Cart.context";

import "./CheckOutItem.scss";

const CheckOutItem = ({ product }) => {
  const { imageUrl, name, price, quantity } = product;
  const { decrementItemFromCart, addItemToCart, deleteItemFromCart } =
    useContext(CartContext);

  const onDeleteClick = () => {
    const confresponse = window.confirm("Are you sure you want to delete?");
    if (confresponse) {
      deleteItemFromCart(product);
    } else {
      return 0;
    }
  };

  const handleDecrement = () => decrementItemFromCart(product);

  const handleIncrement = () => addItemToCart(product);

  console.log(product, "coItem");
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecrement}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleIncrement}>
          &#10095;
        </div>
        <span className="value">{`x ${price}`}</span>
      </span>
      <span className="price">{price* quantity}</span>
      <div onClick={onDeleteClick} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
