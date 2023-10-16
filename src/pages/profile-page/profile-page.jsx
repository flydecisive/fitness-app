/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import styles from "./profile-page.module.css";
import ButtonArrow from "../../components/button/button-arrow";
import { useEffect, useState } from "react";
import PasswordEditing from "../../components/modals/user-data-editing/password-editing";
import LoginEditing from "../../components/modals/user-data-editing/login-editing";
// import ChoseTraining from "../../components/modals/chose-training/chose-training";
import { useEmailContext } from "../../contexts/user";
import { useSelector } from "react-redux";
import { getUsersWorkouts } from "../../api";
import { handleImg } from "../../helpers";
import { useNavigate } from "react-router";

const ProfilePage = () => {
  const { email } = useEmailContext();
  const uid = localStorage.getItem("uid");
  const allCourses = useSelector((store) => store.courses.allCourses);
  const [usersCoursesFromApi, setUsersCoursesFromApi] = useState();
  const [usersCourses, setUsersCourses] = useState();
  const [modalPasswordOpen, setModalPasswordOpen] = useState(false);
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  // const [modalTrainingsOpen, setModalTrainingsOpen] = useState(false);
  // const [itemTrain, setItemTrain] = useState();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getUsersWorkouts().then((responseData) => {
      const keys = Object.keys(responseData);
      let data;
      for (let i = 0; i < keys.length; i++) {
        if (responseData[keys[i]]._id === uid) {
          data = responseData[keys[i]];
        }
      }
      setUsersCoursesFromApi(data?.courses);
    });
  }, []);

  useEffect(() => {
    if (allCourses && usersCoursesFromApi) {
      const courses = [];
      for (let i = 0; i < allCourses.length; i++) {
        for (let j = 0; j < usersCoursesFromApi.length; j++) {
          if (allCourses[i]._id === usersCoursesFromApi[j]) {
            courses.push(allCourses[i]);
          }
        }
      }
      setUsersCourses(courses);
    }
  }, [usersCoursesFromApi]);

  const handleOpenLogin = () => {
    setModalLoginOpen(true);
    setShow(true);
  };
  const handleOpenPassword = () => {
    setModalPasswordOpen(true);
    setShow(true);
  };
  // const handleOpenTrainings = (i) => {
  //   setModalTrainingsOpen(true);
  //   setItemTrain(usersCourses[i]);
  //   setShow(true);
  // };

  useEffect(() => {
    if (show === false) {
      setModalLoginOpen(false);
      setModalPasswordOpen(false);
      // setModalTrainingsOpen(false);
    }
  }, [show]);

  function showModalContent() {
    if (modalPasswordOpen) {
      return <PasswordEditing show={show} setShow={setShow} />;
    } else if (modalLoginOpen) {
      return <LoginEditing show={show} setShow={setShow} />;
    }
    // else if (modalTrainingsOpen) {
    //   return <ChoseTraining data={itemTrain} setShow={setShow} show={show} />;
    // }
    else {
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
            {usersCourses ? (
              usersCourses?.map((item, i) => (
                <div className={styles.img_box} key={i}>
                  <p className={styles.img_title}>{item.name}</p>
                  <img
                    className={styles.img}
                    src={handleImg(item)}
                    alt="fitness_img"
                  />
                  <div
                    onClick={() => {
                      navigate(`/course/${item._id}`);
                    }}
                    className={styles.button}
                  >
                    <ButtonArrow text="Перейти →" />
                  </div>
                </div>
              ))
            ) : (
              <p className="small-text">Курсы еще не были добавлены</p>
            )}
          </div>
        </div>
      </div>
      <div>{showModalContent()}</div>
    </div>
  );
};

export default ProfilePage;
