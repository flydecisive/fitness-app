import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import ExitButton from "../exit-button/exit-button";
import { useLocation } from "react-router";

const Header = ({ color }) => {
  const location = useLocation().pathname;
  return (
    <div className={styles.header}>
      <Logo fill={color} />
      {location === "/profile" || location === "/course" ? (
        <ExitButton userName={"Сергей"} />
      ) : (
        <button className={styles.button}>Войти</button>
      )}
    </div>
  );
};

export default Header;
