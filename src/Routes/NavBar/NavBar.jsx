import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../Components/CartIcon/CartIconComponent";
import Cartdropdown from "../../Components/CartDropdown/CartdropdownComponent";


import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/User.context";

import { singOutUser } from "../../utils/firebase/firebase.utils";

import "./NavBar.scss";
import { CartContext } from "../../contexts/Cart.context";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
      <div className="Navigation">
        <Link className="LogoContainer" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="NavLinksContainer">
          <Link className="NavLink" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="NavLink" onClick={singOutUser}>
              SING OUT
            </span>
          ) : (
            <Link className="NavLink" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <Cartdropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
