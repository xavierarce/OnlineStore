import "./ProductCard.styles.scss";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const onAddToCartClick = () => addItemToCart(product);

  // console.log(cartItems);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent buttonType="inverted" onClick={onAddToCartClick}>
        Add to Cart
      </ButtonComponent>
    </div>
  );
};

export default ProductCard;
