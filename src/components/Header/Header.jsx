import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo fill="white" />
      <button className={styles.button}>Войти</button>
    </div>
  );
};

export default Header;