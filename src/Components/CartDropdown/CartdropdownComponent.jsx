import { useContext } from "react";

import ButtonComponent from "../ButtonComponent/ButtonComponent";

import "./Cartdropdown.scss";

import { CartContext } from "../../contexts/Cart.context";
import CartItemComponent from "../CartItem/CartItemComponent";
import { Link } from "react-router-dom";

const Cartdropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {
          cartItems.length>0 ? (
            cartItems.map((item, i) => (
          <CartItemComponent key={i} cartItem={item}/>
        ))
        ):(
          <span className="empty-message ">Your cart is empty</span>
        )
          
        }
        
      </div>
      <ButtonComponent ><Link to={'checkout'}>Go to CheckOut</Link></ButtonComponent>
    </div>
  );
};

export default Cartdropdown;
