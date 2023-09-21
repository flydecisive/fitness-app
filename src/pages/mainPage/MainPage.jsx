import Header from "../../components/Header/Header";
import { ReactComponent as Sticker } from "../../assets/img/sale_sticker_1.svg";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <section className={styles.main}>
      <div className="container">
        <Header />
        <div className={styles.content}>
          <div className={styles.content_header}>
            <div>
              <p className={styles.title}>
                Онлайн-тренировки для занятий дома
              </p>
              <p className={styles.subtitle}>
                Начните заниматься спортом и улучшите качество жизни
              </p>
            </div>
            <Sticker />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
