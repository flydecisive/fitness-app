import styles from "./authorization.module.css";
// import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import Logo from "../../components/logo/logo";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { useLocation } from "react-router";

function AuthorizationPage() {
  const location = useLocation().pathname;

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <Logo fill="black" />
        <div className={styles["inputs_container"]}>
          {location === "/login" ? (
            <>
              <Input type={"text"} placeholder={"Логин"} />
              <Input type={"password"} placeholder={"Пароль"} />
            </>
          ) : (
            <>
              <Input type={"text"} placeholder={"Логин"} />
              <Input type={"password"} placeholder={"Пароль"} />
              <Input type={"password"} placeholder={"Повторите пароль"} />
            </>
          )}
        </div>
        <div className={styles["buttons_container"]}>
          {location === "/login" ? (
            <>
              <Button text={"Войти"} color={"purple"} />
              <Button text={"Зарегистрироваться"} color={"light"} />
            </>
          ) : (
            <>
              <Button text={"Зарегистрироваться"} color={"purple"} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthorizationPage;
