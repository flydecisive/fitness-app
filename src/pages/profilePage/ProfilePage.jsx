import Header from "../../components/Header/Header";
import Button from "../../components/button/button";
import styles from "./ProfilePage.module.css";
import yoga from "../../assets/img/yoga.png";
import stratching from "../../assets/img/stratching.png";
import dance from "../../assets/img/dance.png";
import ButtonArrow from "../../components/button/buttonArrow";
import { useState } from "react";
import PasswordEditing from "../../components/userDataEditing/PasswordEditing";
import LoginEditing from "../../components/userDataEditing/LoginEditing";
import ChoseTraining from "../../components/choseTraining/choseTraining";

const ProfilePage = () => {
  const [modalPasswordOpen, setModalPasswordOpen] = useState(false);
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  const [modalTrainingsOpen, setModalTrainingsOpen] = useState(false);

  const handleOpenLogin = () => {
    setModalLoginOpen(true);
  };
  const handleOpenPassword = () => {
    setModalPasswordOpen(true);
  };
  const handleOpenTrainings = () => {
    setModalTrainingsOpen(true);
  };
  console.log(modalTrainingsOpen);

  return (
    <div className="container">
      <div
        className={
          modalPasswordOpen || modalLoginOpen || modalTrainingsOpen
            ? "container-opacity"
            : ""
        }
      >
        <Header color="black" />
        <div className={styles.content_profile}>
          <p className={styles.content_title}>Мой профиль</p>
          <div className={styles.content_user}>
            <p className={styles.content_user_item}>Логин: sergey.petrov96</p>
            <p className={styles.content_user_item}>Пароль: ********</p>
          </div>
          <div className={styles.content_buttons}>
            <Button
              onClick={handleOpenLogin}
              text="Редактировать логин"
              color={"purple"}
            />
            <Button
              onClick={handleOpenPassword}
              text="Редактировать пароль"
              color={"purple"}
            />
          </div>
        </div>
        <div className={styles.content_profile}>
          <p className={styles.content_title}>Мои курсы</p>
          <div className={styles.content_main}>
            <div onClick={handleOpenTrainings} className={styles.img_box}>
              <p className={styles.img_title}>Йога</p>
              <img className={styles.img} src={yoga} alt="yoga" />
              <div className={styles.button}>
                <ButtonArrow onClick={handleOpenTrainings} text="Перейти →" />
              </div>
            </div>
            <div className={styles.img_box}>
              <p className={styles.img_title}>Стретчинг</p>
              <img className={styles.img} src={stratching} alt="stratching" />
              <div className={styles.button}>
                <ButtonArrow onClick={handleOpenTrainings} text="Перейти →" />
              </div>
            </div>
            <div className={styles.img_box}>
              <p className={styles.img_title}>Танцевальный фитнес</p>
              <img className={styles.img} src={dance} alt="dance" />
              <div className={styles.button}>
                <ButtonArrow onClick={handleOpenTrainings} text="Перейти →" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {modalPasswordOpen ? (
          <PasswordEditing setModalPasswordOpen={setModalPasswordOpen} />
        ) : (
          ""
        )}
        {modalLoginOpen ? (
          <LoginEditing setModalLoginOpen={setModalLoginOpen} />
        ) : (
          ""
        )}
        {modalTrainingsOpen ? <ChoseTraining /> : ""}
      </div>
    </div>
  );
};

export default ProfilePage;
