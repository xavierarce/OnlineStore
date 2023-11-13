import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../Components/CartIcon/CartIconComponent";
import Cartdropdown from "../../Components/CartDropdown/CartdropdownComponent";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/User.context";

import { singOutUser } from "../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./NavBar.styles.jsx";
import { CartContext } from "../../contexts/Cart.context";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink  to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' className="NavLink" onClick={singOutUser}>
              SING OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <Cartdropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
