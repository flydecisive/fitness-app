import styles from "./header.module.css";
import Logo from "../logo/logo";
import { useLocation } from "react-router";
import UserItem from "../user-item/user-item";
import { NavLink } from "react-router-dom";
import { useEmailContext } from "../../contexts/user";

const Header = ({ color }) => {
  const { email } = useEmailContext();
  const location = useLocation().pathname;

  const getUserName = (email) => {
    if (email) {
      const atIndex = email.lastIndexOf("@");
      const userName = email.substr(0, atIndex);

      return userName;
    }
  };

  // Когда будет готова авторизация поменять логику показа кнопок
  return (
    <div className={styles.header}>
      <Logo color={color} />
      {location === "/profile" || location === "/course" ? (
        <UserItem userName={getUserName(email)} />
      ) : (
        <NavLink className="link" to="/login">
          <button className={styles.button}>Войти</button>
        </NavLink>
      )}
    </div>
  );
};

export default Header;
