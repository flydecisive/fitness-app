import styles from "./input.module.css";

function Input({ type, placeholder, onInput, id }) {
  return (
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
      onInput={onInput}
      id={id}
    />
  );
}

export default Input;
