import { Fragment , useContext} from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/User.context";

import "./NavBar.scss";


const NavBar = () => {
  const {currentUser} = useContext(UserContext);
  console.log(currentUser,'NavBar');

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
