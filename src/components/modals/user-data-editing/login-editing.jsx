/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import Button from "../../button/button";
import Input from "../../input/input";
import Logo from "../../logo/logo";
import styles from "./login-editing.module.css";
import { getAuth } from "firebase/auth";
import { useAllowedContext } from "../../../contexts/allowed";
import { useEmailContext, useUidContext } from "../../../contexts/user";
import { changeLogin } from "../../../firebase";

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
  const { setIsAllowed } = useAllowedContext();
  const { setUid } = useUidContext();
  const { setEmail } = useEmailContext();
  const setData = (data) => {
    localStorage.setItem("uid", data?.uid);
    localStorage.setItem("email", data?.email);
    setUid(data?.uid);
    setEmail(data?.email);

    if (data) {
      setIsAllowed(true);
    }
  };
  const saveData = () => {
    console.log(login);
    if (login?.length === 0) {
      setError("Введите логин");
    } else if (repeatLogin?.length === 0) {
      setError("Введите повторный логин");
    } else if (repeatLogin !== login) {
      setError("Введенные логины отличаются");
    } else {
      changeLogin(login)
        .then((response) => {
          console.log(response);
          return response.user;
        })
        .catch((err) => {
          console.log(error);
        })
        .then((responseData) => {
          setData(responseData);
          setShow(false);
          alert("логин изменен");
        });
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
              type="text"
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
