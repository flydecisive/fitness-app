import { useEffect, useRef } from "react";
import Button from "../button/button";
import Input from "../input/input";
import Logo from "../logo/logo";
import styles from "./PasswordEditing.module.css";

const PasswordEditing = ({ setModalPasswordOpen, show, setShow }) => {
  const closeModal = () => {
    setModalPasswordOpen(false);
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
  console.log(show);
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
