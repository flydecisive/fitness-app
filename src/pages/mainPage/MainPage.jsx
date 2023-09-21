import Header from "../../components/Header/Header";
import Button from "../../components/button/button";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <section className={styles.main}>
      <div className="container">
        <Header />
        <div className={styles.main_content}>
          <p className={styles.main_title}>
            Онлайн-тренировки для занятий дома
          </p>
          <p className={styles.main_subtitle}>
            Начните заниматься спортом и улучшите качество жизни
          </p>          
        </div>
      </div>
    </section>
  );
};

export default MainPage;
