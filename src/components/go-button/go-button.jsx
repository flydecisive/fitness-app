import styles from "./go-button.module.css";
import { ReactComponent as Arrow } from "../../assets/img/right-arrow.svg";

function GoButton() {
  return (
    <button className={styles.button}>
      Перейти <Arrow className={styles.svg} />
    </button>
  );
}

export default GoButton;
