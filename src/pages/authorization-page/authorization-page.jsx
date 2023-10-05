import styles from "./authorization-page.module.css";
import Logo from "../../components/logo/logo";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { useUidContext, useEmailContext } from "../../contexts/user";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";
import { signInUser, createUser } from "../../firebase";
import PushNotice from "../../components/push-notice/push-notice";
import { useAllowedContext } from "../../contexts/allowed";

function AuthorizationPage() {
  const { setIsAllowed } = useAllowedContext();
  const { setUid } = useUidContext();
  const { setEmail } = useEmailContext();
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [showNotice, setShowNotice] = useState(false);
  const [noticeText, setNoticeText] = useState("");
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const toggleNotice = (text) => {
    setNoticeText(text);
    setShowNotice(true);
    setTimeout(hideNotice, 3000);
  };

  const setData = (data) => {
    localStorage.setItem("uid", data?.uid);
    localStorage.setItem("email", data?.email);
    setUid(data?.uid);
    setEmail(data?.email);

    if (data) {
      setIsAllowed(true);
    }
  };

  const hideNotice = () => {
    setShowNotice(false);
  };

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
      toggleNotice("Введите E-mail/пароль");

      return;
    }

    if (!password) {
      toggleNotice("Введите E-mail/пароль");

      return;
    }

    if (login && password) {
      signInUser(login, password)
        .then((response) => {
          return response.user;
        })
        .catch((err) => {
          if (err.message.includes("auth/invalid-login-credentials")) {
            toggleNotice("Не верный E-mail/пароль");
          }
        })
        .then((responseData) => {
          setData(responseData);

          if (responseData?.uid) {
            navigate("/profile");
          }
        });
    }
  };

  // Регистрация
  const registerButtonHandler = (login, password) => {
    if (!login) {
      toggleNotice("Введите E-mail/пароль");

      return;
    } else if (login.length < 3) {
      toggleNotice("Введенный E-mail слишком короткий");

      return;
    }

    if (!password) {
      toggleNotice("Введите E-mail/пароль");

      return;
    } else if (password.length < 6) {
      toggleNotice("Введенный пароль слишком короткий");

      return;
    }

    if (!confirmPassword) {
      toggleNotice("Введите подтверждающий пароль");

      return;
    } else if (confirmPassword.length < 6) {
      toggleNotice("Введенный пароль слишком короткий");

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
              toggleNotice("Введен невалидный email");

              return;
            } else if (err.message.includes("auth/email-already-in-use")) {
              toggleNotice("Пользователь с таким email уже существует");

              return;
            }
          })
          .then((responseData) => {
            setData(responseData);

            if (responseData?.uid) {
              navigate("/profile");
            }
          });
      } else {
        toggleNotice("Введенные пароли не совпадают");

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
