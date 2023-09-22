import Header from "../../components/Header/Header";
import { ReactComponent as Sticker } from "../../assets/img/sale_sticker_1.svg";
import styles from "./MainPage.module.css";
import yoga from "../../assets/img/yoga.png";
import stratching from "../../assets/img/stratching.png";
import dance from "../../assets/img/dance.png";
import stap from "../../assets/img/stap.png";
import bodyflex from "../../assets/img/bodyflex.png";
import Button from "../../components/button/button";
import ButtonArrow from "../../components/button/buttonArrow";

const MainPage = () => {
  return (
    <section className={styles.main}>
      <div className="container">
        <Header />
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
              <img className={styles.img} src={yoga} alt="yoga" />
            </div>
            <div className={styles.img_box}>
              <p className={styles.img_title}>Стретчинг</p>
              <img className={styles.img} src={stratching} alt="stratching" />
            </div>
            <div className={styles.img_box}>
              <p className={styles.img_title}>Танцевальный фитнес</p>
              <img className={styles.img} src={dance} alt="dance" />
            </div>
            <div className={styles.img_box}>
              <p className={styles.img_title}>Степ-аэробика</p>
              <img className={styles.img} src={stap} alt="stap" />
            </div>
            <div className={styles.img_box}>
              <p className={styles.img_title}>Бодифлекс</p>
              <img className={styles.img} src={bodyflex} alt="bodyflex" />
            </div>
          </div>
          <ButtonArrow text="Наверх" />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
