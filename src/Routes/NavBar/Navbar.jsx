import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo} from "../../assets/crown.svg";

import './Navbar.styles.scss'

const NavBar = () => {
  return (
    <Fragment>
      <div className="Navigation">
        <Link className="LogoContainer" to='/'>
          <CrwnLogo className="logo"/>
        </Link>
        <div className="NavLinksContainer">
          <Link className="NavLink" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
