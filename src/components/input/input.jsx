import styles from "./input.module.css";

function Input({ type, placeholder, onInput, onChange, id }) {
  return (
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
      onInput={onInput}
      onChange={onChange}
      id={id}
    />
  );
}

export default Input;
