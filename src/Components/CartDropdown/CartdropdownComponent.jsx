import { useContext } from "react";

import ButtonComponent from "../ButtonComponent/ButtonComponent";

import "./Cartdropdown.scss";

import { CartContext } from "../../contexts/Cart.context";
import CartItemComponent from "../CartItem/CartItemComponent";

const Cartdropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item, i) => (
          <CartItemComponent key={i} cartItem={item}/>
        ))}
      </div>
      <ButtonComponent>Go to CheckOut</ButtonComponent>
    </div>
  );
};

export default Cartdropdown;
