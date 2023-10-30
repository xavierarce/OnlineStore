import "./CheckOut.scss";

import { useContext } from "react";

import { CartContext } from "../../contexts/Cart.context";

import CheckOutItem from "../../Components/CheckOutItem/CheckOutItem";

const CheckOut = () => {
  const { cartItems, setCartItems , totalCartValue} = useContext(CartContext);


  console.log(cartItems, "checkout");
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <CheckOutItem product={cartItem} setCartItems={setCartItems} />
        ))
      ) : (
        <h2 className="emptyCard">Your Cart Is Empty</h2>
      )}
      <div className="total">Total = ${totalCartValue} </div>
    </div>
  );
};

export default CheckOut;
