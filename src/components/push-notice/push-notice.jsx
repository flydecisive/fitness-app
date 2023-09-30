import styles from "./push-notice.module.css";

function PushNotice({ text, setShowNotice }) {
  return (
    <div className={`${styles.alert} ${styles.error}`}>
      <button
        onClick={() => {
          setShowNotice(false);
        }}
        className={styles.alertClose}
      >
        X
      </button>
      <div className={styles.alertText}>{text}</div>
    </div>
  );
}

export default PushNotice;
