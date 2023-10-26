import "./CheckOut.scss";

import { useContext } from "react";

import { CartContext } from "../../contexts/Cart.context";

import CheckOutItem from "../../Components/CheckOutItem/CheckOutItem";

const CheckOut = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const totalValue = cartItems.reduce((acc, object) => {
    return acc + object.price;
  }, 0);

  console.log(cartItems, "checkout");
  return (
    <div>
      <div className="checkout-titles">
        <div className="checkout-title">
          <h2>Product</h2>
        </div>
        <div className="checkout-title">
          <h2>Description</h2>
        </div>
        <div className="checkout-title">
          <h2>Quantity</h2>
        </div>
        <div className="checkout-title">
          <h2>Price</h2>
        </div>
        <div className="checkout-title">
          <h2>Remove</h2>
        </div>
      </div>
      <div className="eachcartItem">
        {cartItems.map((cartItem) => (
          <CheckOutItem product={cartItem} setCartItems={setCartItems} />
        ))}
      </div>
      <h3>Total = ${totalValue} </h3>
    </div>
  );
};

export default CheckOut;
