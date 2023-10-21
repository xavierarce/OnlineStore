import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { Link, Outlet } from "react-router-dom";

import "./NavBar.scss";


const NavBar = () => {
  return (
    <Fragment>
      <div className="Navigation">
        <Link className="LogoContainer" to='/'>
          <CrownLogo className="logo"/>
        </Link>
        <div className="NavLinksContainer">
          <Link className="NavLink" to="/shop">
            SHOP
          </Link>
          <Link className="NavLink" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  );
};

export default NavBar;
