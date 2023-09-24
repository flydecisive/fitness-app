import styles from "./exit-button.module.css";
import { ReactComponent as Exit } from "../../assets/img/exit.svg";

function ExitButton({ userName }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.user}>{userName}</p>
      <button className={styles.button}>
        <Exit className={styles.svg} />
      </button>
    </div>
  );
}

export default ExitButton;
