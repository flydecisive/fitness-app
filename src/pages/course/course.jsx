import styles from "./course.module.css";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

export function CoursePage() {
  return (
    <div className={styles.wrapper}>
      <Logo fill="black" />
    </div>
  );
}
