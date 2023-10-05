import styles from "./push-notice.module.css";

function PushNotice({ text, setShowNotice }) {
  return (
    <div className={styles.alert}>
      <div className={styles.alertText}>{text}</div>
      <button
        onClick={() => {
          setShowNotice(false);
        }}
        className={styles.alertClose}
      >
        ОК
      </button>
    </div>
  );
}

export default PushNotice;
