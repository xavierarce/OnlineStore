import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";
import { CartContext } from "../../contexts/Cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const onCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  // const totalCartItems = cartItems.reduce((acc, cv) => acc + cv.quantity, 0);

  return (
    <div onClick={onCartClick} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
