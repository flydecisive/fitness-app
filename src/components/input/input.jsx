import styles from "./input.module.css";

function Input({ type, placeholder }) {
  return (
    <input type={type} className={styles.input} placeholder={placeholder} />
  );
}

export default Input;
