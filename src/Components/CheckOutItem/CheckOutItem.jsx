
import { useContext } from "react";

import { CartContext } from "../../contexts/Cart.context";

import "./CheckOutItem.scss";


const CheckOutItem = ({ product }) => {
  const { imageUrl, name, price, quantity } = product;
  const {decrementItemFromCart, addItemToCart ,deleteItemFromCart} = useContext(CartContext)

  const onDeleteClick = ()=>{

    const confresponse = window.confirm("Are you sure you want to proceed?");
    if (confresponse) {
      deleteItemFromCart(product)
    } else {
      return 0;
    }
  }

  console.log(product, "coItem");
  return (
    <div className="checkout-item-container">
      <img className="checkout-item imgCheckout" src={imageUrl} alt={name} />
      <span className="checkout-item">{name}</span>
      <div className="checkout-item">
        <span onClick={()=>decrementItemFromCart(product)}>&lt;</span>
        <span>{quantity}</span>
        <span onClick={()=>addItemToCart(product)}>&gt;</span>
      </div>
      <span className="checkout-item">{price}</span>
      <span onClick={onDeleteClick} className="checkout-item">X</span>
    </div>
  );
};

export default CheckOutItem;
