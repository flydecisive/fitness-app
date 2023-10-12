/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import Button from "../../button/button";
import Input from "../../input/input";
import Logo from "../../logo/logo";
import styles from "./password-editing.module.css";
import { changePassword } from "../../../firebase";
import { useAllowedContext } from "../../../contexts/allowed";
import { useEmailContext, useUidContext } from "../../../contexts/user";

const PasswordEditing = ({ show, setShow }) => {
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

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
    if (password?.length === 0) {
      setError("Введите пароль");
    } else if (repeatPassword?.length === 0) {
      setError("Введите повторный пароль");
    } else if (repeatPassword !== password) {
      setError("Введенные пароли отличаются");
    } else {
      changePassword(password)
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
          alert("пароль изменен");
        });
    }
  };

  const modalRefPassword = useRef();

  const closeModalOnClickOut = (e) => {
    if (
      show &&
      e.target &&
      modalRefPassword.current &&
      !modalRefPassword.current.contains(e.target)
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

  useEffect(() => {
    setError(null);
  }, [password, repeatPassword]);

  if (show) {
    return (
      <div ref={modalRefPassword} className={styles.wrapper}>
        <div className={styles.modal}>
          <Logo fill="black" />
          <div className={styles["inputs_container"]}>
            <Input
              name="password"
              value={password}
              type="text"
              placeholder={"Пароль"}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <Input
              name="repeat-password"
              value={repeatPassword}
              type="text"
              placeholder={"Повторите пароль"}
              onChange={(event) => setRepeatPassword(event.target.value)}
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
export default PasswordEditing;
