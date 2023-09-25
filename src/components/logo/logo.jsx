import { ReactComponent as MainLogo } from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

function Logo({ color }) {
  return (
    <NavLink to="/">
      <MainLogo fill={color} />
    </NavLink>
  );
}

export default Logo;
