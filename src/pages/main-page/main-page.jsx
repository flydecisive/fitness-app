import Header from "../../components/header/header";
import { ReactComponent as Sticker } from "../../assets/img/sale_sticker_1.svg";
import styles from "./main-page.module.css";
import ButtonArrow from "../../components/button/button-arrow";

const MainPage = () => {
  return (
    <section className={styles.main}>
      <div className="container">
        <Header color="white" />
        <div className={styles.content}>
          <div className={styles.content_header}>
            <div>
              <p className={styles.title}>Онлайн-тренировки для занятий дома</p>
              <p className={styles.subtitle}>
                Начните заниматься спортом и улучшите качество жизни
              </p>
            </div>
            <Sticker />
          </div>
          <div className={styles.content_main}>
            <div className={styles.img_box}>
              <p className={styles.img_title}>Йога</p>
              <img className={styles.img} src="/img/yoga.png" alt="yoga" />
            </div>
            <div className={styles.img_box}>
              <p className={styles.img_title}>Стретчинг</p>
              <img
                className={styles.img}
                src="/img/stratching.png"
                alt="stratching"
              />
            </div>
            <div className={styles.img_box}>
              <p className={styles.img_title}>Танцевальный фитнес</p>
              <img className={styles.img} src="/img/dance.png" alt="dance" />
            </div>
            <div className={styles.img_box}>
              <p className={styles.img_title}>Степ-аэробика</p>
              <img className={styles.img} src="/img/stap.png" alt="stap" />
            </div>
            <div className={styles.img_box}>
              <p className={styles.img_title}>Бодифлекс</p>
              <img
                className={styles.img}
                src="/img/bodyflex.png"
                alt="bodyflex"
              />
            </div>
          </div>
          <ButtonArrow text="Наверх ↑" />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
