import styles from "./reason.module.css";

function Reason({ number, text }) {
  return (
    <div className={styles.reason}>
      <div className={styles.number}>{number}</div>
      <div className={`${styles.text} small-text`}>{text}</div>
    </div>
  );
}

export default Reason;
