import { useEffect, useRef } from "react";
import Button from "../button/button";
import Input from "../input/input";
import Logo from "../logo/logo";
import styles from "./LoginEditing.module.css";

const LoginEditing = ({ setModalLoginOpen, show, setShow }) => {
  const closeModal = () => {
    setModalLoginOpen(false);
    setShow(false);
  };

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

  if (show) {
    return (
      <div ref={modalRefLogin} className={styles.wrapper}>
        <div className={styles.modal}>
          <Logo fill="black" />
          <div className={styles["inputs_container"]}>
            <Input type={"text"} placeholder={"Логин"} />
            <Input type={"password"} placeholder={"Повторите логин"} />
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
export default LoginEditing;
