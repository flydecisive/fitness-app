import Header from "../../components/header/header";
import { ReactComponent as Sticker } from "../../assets/img/sale_sticker_1.svg";
import styles from "./main-page.module.css";
import ButtonArrow from "../../components/button/button-arrow";
import data from "../../data";
import { Link } from "react-router-dom";

const MainPage = () => {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
            {data.map((item) => (
              <Link className={styles.img_box} to="/course/1">
                <p className={styles.img_title}>{item.title}</p>
                <img className={styles.img} src={item.img} alt="training" />
              </Link>
            ))}
          </div>
        </div>
        <footer>
          <div onClick={() => handleTop()}>
            <ButtonArrow text="Наверх ↑" />
          </div>
        </footer>
      </div>
    </section>
  );
};

export default MainPage;
