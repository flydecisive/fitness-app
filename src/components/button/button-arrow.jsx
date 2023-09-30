import styles from "./button-arrow.module.css";

const ButtonArrow = ({ text, reverse }) => {
  return (
    <div className={styles.box}>
      <button className={styles.button}>{text}</button>
    </div>
  );
};

export default ButtonArrow;
