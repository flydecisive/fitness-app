import styles from "./button.module.css";

function Button({ text, color }) {
  return (
    <button className={`${styles.button} ${styles[color]}`}>{text}</button>
  );
}

export default Button;
