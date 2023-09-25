import styles from "./congrat.module.css";
import { ReactComponent as CongratImg } from "../../assets/img/congrat.svg";

function Congrat() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Ваш прогресс засчитан!</p>
      <CongratImg />
    </div>
  );
}

export default Congrat;
