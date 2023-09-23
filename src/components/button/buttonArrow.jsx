import styles from "./buttonArrow.module.css";

const ButtonArrow = ({ text, reverse }) => {
  return (
    <div className={styles.box}>
      <button className={styles.button}>{text}</button>;
    </div>
  );
};

export default ButtonArrow;
