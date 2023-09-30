/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import Button from "../button/button";
import Input from "../input/input";
import Logo from "../logo/logo";
import styles from "./password-editing.module.css";

const PasswordEditing = ({ show, setShow }) => {
  const closeModal = () => {
    setShow(false);
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

  if (show) {
    return (
      <div ref={modalRefPassword} className={styles.wrapper}>
        <div className={styles.modal}>
          <Logo fill="black" />
          <div className={styles["inputs_container"]}>
            <Input type={"text"} placeholder={"Пароль"} />
            <Input type={"password"} placeholder={"Повторите пароль"} />
          </div>
          <div className={styles["buttons_container"]}>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
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
