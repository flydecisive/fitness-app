import styles from "./header.module.css";
import Logo from "../logo/logo";
import { useLocation } from "react-router";
import UserItem from "../user-item/user-item";
import { NavLink } from "react-router-dom";
import { useEmailContext } from "../../contexts/user";
import { useAllowedContext } from "../../contexts/allowed";

const Header = ({ color }) => {
  const { email } = useEmailContext();
  const { isAllowed } = useAllowedContext();

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

      {isAllowed ? (
        <UserItem userName={getUserName(email)} color={color} />
      ) : (
        <NavLink className="link" to="/login">
          <button className={styles.button}>Войти</button>
        </NavLink>
      )}
    </div>
  );
};

export default Header;
