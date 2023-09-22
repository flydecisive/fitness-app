import styles from "./authorization.module.css";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import Button from "../../components/button/button";

function AuthorizationPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <Logo fill="black" />
        {/* inputs */}
        <Button text={"Войти"} color={"purple"} />
        <Button text={"Зарегистрироваться"} color={"light"} />
      </div>
    </div>
  );
}

export default AuthorizationPage;
