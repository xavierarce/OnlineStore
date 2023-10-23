import "./ProductCard.styles.scss";

import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductCard = ({product}) => {
  const {name, price, imageUrl} = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`}/>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent buttonType="inverted"> Add to Card</ButtonComponent>
    </div>
  );
};

export default ProductCard;
