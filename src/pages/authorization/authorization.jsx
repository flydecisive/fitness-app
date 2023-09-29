import styles from "./authorization.module.css";
// import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import Logo from "../../components/logo/logo";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";
import { signInUser, createUser } from "../../firebase";

function AuthorizationPage() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const loginHandler = (e) => {
    setLogin(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Авторизация
  const loginButtonHandler = (login, password) => {
    if (login?.length === 0) {
      console.log("Введите логин/пароль");
    }

    if (password?.length === 0) {
      console.log("Введите логин/пароль");
    }

    if (login && password) {
      signInUser(login, password)
        .then((response) => {
          return response.user;
        })
        .catch((err) => {
          if (err.message.includes("auth/invalid-login-credentials")) {
            console.log("Не верный логин/пароль");
          }
        })
        .then((responseData) => {
          console.log(responseData.email);
        });
    }
  };

  // Регистрация
  const registerButtonHandler = (login, password) => {
    if (!login) {
      console.log("Введите логин/пароль");
      return;
    } else if (login.length < 3) {
      console.log("Введенный логин слишком короткий");
      return;
    }

    if (!password) {
      console.log("Введите логин/пароль");
      return;
    } else if (password.length < 6) {
      console.log("Введенный пароль слишком короткий");
      return;
    }

    if (!confirmPassword) {
      console.log("Введите подтверждающий пароль");
      return;
    } else if (confirmPassword.length < 6) {
      console.log("Введенный пароль слишком короткий");
      return;
    }

    if (login && password && confirmPassword) {
      if (password === confirmPassword) {
        createUser(login, password)
          .then((response) => {
            return response.user;
          })
          .catch((err) => {
            if (err.message.includes("auth/invalid-email")) {
              console.log("Введен невалидный email");
              return;
            } else if (err.message.includes("auth/email-already-in-use")) {
              console.log("Пользователь с таким email уже существует");
              return;
            }

            console.log(err.message);
          })
          .then((responseData) => {
            console.log(responseData?.email);
          });
      } else {
        console.log("Введенные пароли не совпадают");
        return;
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <Logo fill="black" />
        <div className={styles["inputs_container"]}>
          {location === "/login" ? (
            <>
              <Input
                type={"text"}
                placeholder={"Логин"}
                onInput={(e) => {
                  loginHandler(e);
                }}
              />
              <Input
                type={"password"}
                placeholder={"Пароль"}
                onInput={(e) => {
                  passwordHandler(e);
                }}
              />
            </>
          ) : (
            <>
              <Input
                type={"text"}
                placeholder={"Логин"}
                onInput={(e) => {
                  loginHandler(e);
                }}
              />
              <Input
                type={"password"}
                placeholder={"Пароль"}
                onInput={(e) => {
                  passwordHandler(e);
                }}
              />
              <Input
                type={"password"}
                placeholder={"Повторите пароль"}
                onInput={(e) => {
                  confirmPasswordHandler(e);
                }}
              />
            </>
          )}
        </div>
        <div className={styles["buttons_container"]}>
          {location === "/login" ? (
            <>
              <Button
                text={"Войти"}
                color={"purple"}
                onClick={() => {
                  loginButtonHandler(login, password);
                }}
              />
              <Button
                text={"Зарегистрироваться"}
                color={"light"}
                onClick={() => {
                  navigate("/registration");
                }}
              />
            </>
          ) : (
            <>
              <Button
                text={"Зарегистрироваться"}
                color={"purple"}
                onClick={() => {
                  registerButtonHandler(login, password);
                }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthorizationPage;
