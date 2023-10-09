import Header from "../../components/header/header";
import { ReactComponent as Sticker } from "../../assets/img/sale_sticker_1.svg";
import styles from "./main-page.module.css";
import ButtonArrow from "../../components/button/button-arrow";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import data from "../../data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MainPage = () => {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();
  const allCourses = useSelector((store) => store.courses.allCourses);

  const handleImg = (item) => {
    switch (item.name) {
      case "Стретчинг":
        return "/img/stratching.png";
      case "Бодифлекс":
        return "/img/bodyflex.png";
      case "Йога":
        return "/img/yoga.png";
      case "Танцевальный фитнес ":
        return "/img/dance.png";
      case "Степ-аэробика":
        return "/img/stap.png";
      default:
        return "/img/stap.png";
    }
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
            {allCourses?.map((item, index) => (
              <div
                className={styles.img_box}
                onClick={() => {
                  navigate(`/course/${item._id}`);
                }}
                key={index}
              >
                <p className={styles.img_title}>{item.name}</p>
                <img
                  className={styles.img}
                  src={handleImg(item)}
                  alt="fitness"
                />
              </div>
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
