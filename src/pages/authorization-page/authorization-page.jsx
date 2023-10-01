import styles from "./authorization-page.module.css";
// import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import Logo from "../../components/logo/logo";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";
import { signInUser, createUser } from "../../firebase";
import PushNotice from "../../components/push-notice/push-notice";

function AuthorizationPage() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [showNotice, setShowNotice] = useState(false);
  const [noticeText, setNoticeText] = useState("");
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
    if (!login) {
      setNoticeText("Введите E-mail/пароль");
      setShowNotice(true);
      return;
    }

    if (!password) {
      setNoticeText("Введите E-mail/пароль");
      setShowNotice(true);
      return;
    }

    if (login && password) {
      signInUser(login, password)
        .then((response) => {
          return response.user;
        })
        .catch((err) => {
          if (err.message.includes("auth/invalid-login-credentials")) {
            setNoticeText("Не верный E-mail/пароль");
            setShowNotice(true);
          }
        })
        .then((responseData) => {
          localStorage.setItem("uid", responseData?.uid);
          navigate("/profile");
        });
    }
  };

  // Регистрация
  const registerButtonHandler = (login, password) => {
    if (!login) {
      setNoticeText("Введите E-mail/пароль");
      setShowNotice(true);
      return;
    } else if (login.length < 3) {
      setNoticeText("Введенный E-mail слишком короткий");
      setShowNotice(true);
      return;
    }

    if (!password) {
      setNoticeText("Введите E-mail/пароль");
      setShowNotice(true);
      return;
    } else if (password.length < 6) {
      setNoticeText("Введенный пароль слишком короткий");
      setShowNotice(true);
      return;
    }

    if (!confirmPassword) {
      setNoticeText("Введите подтверждающий пароль");
      setShowNotice(true);
      return;
    } else if (confirmPassword.length < 6) {
      setNoticeText("Введенный пароль слишком короткий");
      setShowNotice(true);
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
              setNoticeText("Введен невалидный email");
              setShowNotice(true);
              return;
            } else if (err.message.includes("auth/email-already-in-use")) {
              setNoticeText("Пользователь с таким email уже существует");
              setShowNotice(true);
              return;
            }
          })
          .then((responseData) => {
            localStorage.setItem("uid", responseData?.uid);
            navigate("/profile");
          });
      } else {
        setNoticeText("Введенные пароли не совпадают");
        setShowNotice(true);
        return;
      }
    }
  };

  return (
    <>
      {showNotice ? (
        <PushNotice text={noticeText} setShowNotice={setShowNotice} />
      ) : (
        ""
      )}
      <div className={styles.wrapper}>
        <div className={styles.modal}>
          <Logo fill="black" />
          <div className={styles["inputs_container"]}>
            {location === "/login" ? (
              <>
                <Input
                  type={"text"}
                  placeholder={"E-mail"}
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
                  placeholder={"E-mail"}
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
    </>
  );
}

export default AuthorizationPage;
