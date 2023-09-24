import styles from "./course-page.module.css";
import Header from "../../components/Header/Header";
import Button from "../../components/button/button";

function CoursePage() {
  return (
    <div className={`${styles.wrapper} container`}>
      <Header />
      <h2 className={styles.heading}>Йога</h2>
      <div className={styles.path}>
        Красота и здоровье / Йога на каждый день / 2 день
      </div>
      <div className={styles.video}>
        {/* <img src="../../assets/img/video.png" alt="video" /> */}
        <video controls>
          <source src="" type="video/mp4" />
          <source src="" type="video/webm" />
        </video>
      </div>
      <div className={styles.content}>
        <div className={styles.exercices}>
          <h3 className={styles.title}>Упражнения</h3>
          <ul className={`${styles.list} small-text`}>
            <li>Наклон вперед (10 повторений)</li>
            <li>Наклон назад (10 повторений)</li>
            <li>Поднятие ног, согнутых в коленях (5 повторений)</li>
          </ul>
          <Button text={"Заполнить свой прогресс"} color={"purple"} />
        </div>
        <div className={styles.progress}>
          <h3 className={`${styles.title} ${styles["title-margin"]}`}>
            Мой прогресс по тренировке 2:
          </h3>
          <div className={`${styles["progress-container"]} small-text`}>
            <p>Наклон вперед</p>
            <div className={`${styles["progress-bar"]} ${styles.blue}`}></div>
            <p>Наклон назад</p>
            <div className={`${styles["progress-bar"]} ${styles.orange}`}></div>
            <p>Поднятие ног, согнутых в коленях</p>
            <div className={`${styles["progress-bar"]} ${styles.purple}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
