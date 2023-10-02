import Header from "../../components/header/header";
import Button from "../../components/button/button";
import styles from "./profile-page.module.css";
import ButtonArrow from "../../components/button/button-arrow";
import { useEffect, useState } from "react";
import PasswordEditing from "../../components/user-data-editing/password-editing";
import LoginEditing from "../../components/user-data-editing/login-editing";
import ChoseTraining from "../../components/chose-training/chose-training";
import { useEmailContext } from "../../contexts/user";

const ProfilePage = () => {
  const { email } = useEmailContext();
  const data = [
    {
      title: "Йога",
      img: "/img/yoga.png",
      exercises: [
        {
          title: "Утренняя практика",
          subtitle: "Йога на каждый день / 1 день",
        },
        {
          title: "Красота и здоровье",
          subtitle: "Йога на каждый день / 2 день",
        },
        {
          title: "Асаны стоя",
          subtitle: "Йога на каждый день / 3 день",
        },
        {
          title: "Асаны стоя",
          subtitle: "Йога на каждый день / 4 день",
        },
        {
          title: "Асаны стоя",
          subtitle: "Йога на каждый день / 5 день",
        },
        {
          title: "Асаны стоя",
          subtitle: "Йога на каждый день / 6 день",
        },
        {
          title: "Асаны стоя",
          subtitle: "Йога на каждый день / 7 день",
        },
      ],
    },
    {
      title: "Стретчинг",
      img: "/img/stratching.png",
      exercises: [
        {
          title: "Утренняя практика",
          subtitle: "Стретчинг на каждый день / 1 день",
        },
        {
          title: "Красота и здоровье",
          subtitle: "Стретчинг на каждый день / 2 день",
        },
        {
          title: "Асаны стоя",
          subtitle: "Стретчинг на каждый день / 3 день",
        },
      ],
    },
    {
      title: "Танцевальный фитнес",
      img: "/img/dance.png",
      exercises: [
        {
          title: "Утренняя практика",
          subtitle: "Фитнес на каждый день / 1 день",
        },
        {
          title: "Красота и здоровье",
          subtitle: "Фитнес на каждый день / 2 день",
        },
        {
          title: "Асаны стоя",
          subtitle: "Фитнес на каждый день / 3 день",
        },
      ],
    },
  ];

  const [modalPasswordOpen, setModalPasswordOpen] = useState(false);
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  const [modalTrainingsOpen, setModalTrainingsOpen] = useState(false);
  const [itemTrain, setItemTrain] = useState();
  const [show, setShow] = useState(false);

  const handleOpenLogin = () => {
    setModalLoginOpen(true);
    setShow(true);
  };
  const handleOpenPassword = () => {
    setModalPasswordOpen(true);
    setShow(true);
  };
  const handleOpenTrainings = (i) => {
    setModalTrainingsOpen(true);
    setItemTrain(data[i]);
    setShow(true);
  };

  useEffect(() => {
    if (show === false) {
      setModalLoginOpen(false);
      setModalPasswordOpen(false);
      setModalTrainingsOpen(false);
    }
  }, [show]);

  function showModalContent() {
    if (modalPasswordOpen) {
      return <PasswordEditing show={show} setShow={setShow} />;
    } else if (modalLoginOpen) {
      return <LoginEditing show={show} setShow={setShow} />;
    } else if (modalTrainingsOpen) {
      return <ChoseTraining data={itemTrain} setShow={setShow} show={show} />;
    } else {
      return "";
    }
  }

  return (
    <div className="container">
      <div className={show ? "container-opacity" : ""}>
        <Header color="black" />
        <div className={styles.content_profile}>
          <p className={styles.content_title}>Мой профиль</p>
          <div className={styles.content_user}>
            <p className={styles.content_user_item}>Логин: {email}</p>
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
            {data.map((item, i) => (
              <div className={styles.img_box} key={i}>
                <p className={styles.img_title}>{item.title}</p>
                <img className={styles.img} src={item.img} alt="fitness_img" />
                <div
                  onClick={() => handleOpenTrainings(i)}
                  className={styles.button}
                >
                  <ButtonArrow text="Перейти →" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>{showModalContent()}</div>
    </div>
  );
};

export default ProfilePage;
