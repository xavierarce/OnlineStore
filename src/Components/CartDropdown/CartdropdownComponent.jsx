import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./Cartdropdown.scss";

const Cartdropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <ButtonComponent> Go to CheckOut</ButtonComponent>
    </div>
  );
};

export default Cartdropdown;
