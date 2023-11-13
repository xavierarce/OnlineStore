import { useContext } from "react";

import ButtonComponent from "../ButtonComponent/ButtonComponent";

import { CartDropdownContainer , EmptyMessage, CartItems} from "./Cartdropdown.jsx";

import { CartContext } from "../../contexts/Cart.context";
import CartItemComponent from "../CartItem/CartItemComponent";
import { useNavigate } from "react-router-dom";

const Cartdropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOut = ()=>{
    navigate('checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length? (
            cartItems.map((item, i) => (
          <CartItemComponent key={i} cartItem={item}/>
        ))
        ):(
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )
          
        }
        
      </CartItems>
      <ButtonComponent onClick={goToCheckOut}>Go to CheckOut</ButtonComponent>
    </CartDropdownContainer>
  );
};

export default Cartdropdown;
