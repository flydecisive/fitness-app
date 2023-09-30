import styles from "./Header.module.css";
import Logo from "../logo/logo";
import { useLocation } from "react-router";
import UserItem from "../user-item/user-item";
import { NavLink } from "react-router-dom";

const Header = ({ color }) => {
  const location = useLocation().pathname;

  // Когда будет готова авторизация поменять логику показа кнопок
  return (
    <div className={styles.header}>
      <Logo color={color} />
      {location === "/profile" || location === "/course" ? (
        <UserItem userName={"Сергей"} />
      ) : (
        <NavLink className="link" to="/login">
          <button className={styles.button}>Войти</button>
        </NavLink>
      )}
    </div>
  );
};

export default Header;
