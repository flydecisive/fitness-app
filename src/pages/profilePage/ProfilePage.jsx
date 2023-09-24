import Header from "../../components/Header/Header";
import Button from "../../components/button/button";
import styles from "./ProfilePage.module.css";
import yoga from "../../assets/img/yoga.png";
import stratching from "../../assets/img/stratching.png";
import dance from "../../assets/img/dance.png";
import ButtonArrow from "../../components/button/buttonArrow";

const ProfilePage = () => {
  return (
    <div className="container">
      <Header color="black" />
      <div className={styles.content_profile}>
        <p className={styles.content_title}>Мой профиль</p>
        <div className={styles.content_user}>
          <p className={styles.content_user_item}>Логин: sergey.petrov96</p>
          <p className={styles.content_user_item}>Пароль: 4fkhdj880d</p>
        </div>
        <div className={styles.content_buttons}>
          <Button text="Редактировать профиль" color={"purple"} />
          <Button text="Редактировать пароль" color={"purple"} />
        </div>
      </div>
      <div className={styles.content_profile}>
        <p className={styles.content_title}>Мои курсы</p>
        <div className={styles.content_main}>
          <div className={styles.img_box}>
            <p className={styles.img_title}>Йога</p>
            <img className={styles.img} src={yoga} alt="yoga" />
            <div className={styles.button}>
              <ButtonArrow text="Перейти →" />
            </div>
          </div>
          <div className={styles.img_box}>
            <p className={styles.img_title}>Стретчинг</p>
            <img className={styles.img} src={stratching} alt="stratching" />
            <div className={styles.button}>
              <ButtonArrow text="Перейти →" />
            </div>
          </div>
          <div className={styles.img_box}>
            <p className={styles.img_title}>Танцевальный фитнес</p>
            <img className={styles.img} src={dance} alt="dance" />
            <div className={styles.button}>
              <ButtonArrow text="Перейти →" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
