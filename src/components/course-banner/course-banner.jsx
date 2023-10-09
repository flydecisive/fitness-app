import styles from "./course-banner.module.css";

function CourseBanner({ name }) {
  return (
    <div className={styles.banner}>
      <div className={styles.text}>{name}</div>
    </div>
  );
}

export default CourseBanner;
