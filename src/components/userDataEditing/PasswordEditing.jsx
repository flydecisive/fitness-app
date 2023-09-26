import Button from "../button/button";
import Input from "../input/input";
import Logo from "../logo/logo";
import styles from "./PasswordEditing.module.css";

const PasswordEditing = ({ setModalPasswordOpen }) => {
  const closeModal = () => {
    setModalPasswordOpen(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <Logo fill="black" />
        <div className={styles["inputs_container"]}>
          <Input type={"text"} placeholder={"Пароль"} />
          <Input type={"password"} placeholder={"Повторите пароль"} />
        </div>
        <div className={styles["buttons_container"]}>
          <Button onClick={closeModal} text={"Сохранить"} color={"purple"} />
        </div>
      </div>
    </div>
  );
};
export default PasswordEditing;
