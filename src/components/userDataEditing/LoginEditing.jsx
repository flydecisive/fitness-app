/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import Button from "../button/button";
import Input from "../input/input";
import Logo from "../logo/logo";
import styles from "./LoginEditing.module.css";

const LoginEditing = ({ show, setShow }) => {
  const [login, setLogin] = useState("");
  const [repeatLogin, setRepeatLogin] = useState("");
  const [error, setError] = useState(null);
  const modalRefLogin = useRef();

  const closeModalOnClickOut = (e) => {
    if (
      show &&
      e.target &&
      modalRefLogin.current &&
      !modalRefLogin.current.contains(e.target)
    ) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("mousedown", closeModalOnClickOut);

    return () => {
      document.body.removeEventListener("mousedown", closeModalOnClickOut);
    };
  }, [show]);

  //проверка логина

  const saveData = () => {
    console.log(login);
    if (login?.length === 0) {
      setError("Введите логин");
    } else if (repeatLogin?.length === 0) {
      setError("Введите повторный логин");
    } else if (repeatLogin !== login) {
      setError("Введенные логины отличаются");
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    setError(null);
  }, [login, repeatLogin]);

  if (show) {
    return (
      <div ref={modalRefLogin} className={styles.wrapper}>
        <div className={styles.modal}>
          <Logo fill="black" />
          <div className={styles["inputs_container"]}>
            <Input
              name="login"
              value={login}
              type="text"
              placeholder={"Логин"}
              onChange={(event) => {
                setLogin(event.target.value);
              }}
            />
            <Input
              name="repeat-login"
              value={repeatLogin}
              type="password"
              placeholder={"Повторите логин"}
              onChange={(event) => setRepeatLogin(event.target.value)}
            />
          </div>

          <div className={styles["buttons_container"]}>
            <p className={styles.error}>{error}</p>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                saveData();
              }}
              text={"Сохранить"}
              color={"purple"}
            />
          </div>
        </div>
      </div>
    );
  }
};
export default LoginEditing;
