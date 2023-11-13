import { useContext } from "react";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./CartIcon.styles.jsx";
import { CartContext } from "../../contexts/Cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const onCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  // const totalCartItems = cartItems.reduce((acc, cv) => acc + cv.quantity, 0);

  return (
    <CartIconContainer onClick={onCartClick}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
