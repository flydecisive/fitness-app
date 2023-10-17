import styles from "./record-form.module.css";
import Button from "../../../../../components/button/button";
import { ReactComponent as Call } from "../../../../../assets/img/call.svg";
import { useNavigate } from "react-router";
import { useAllowedContext } from "../../../../../contexts/allowed";
import { addUserCourses } from "../../../../../api";
import { updateUserCourses } from "../../../../../api";

function RecordForm({ courseId, uid, nameInDB, usersCoursesFromApi }) {
  const navigate = useNavigate();
  const { isAllowed } = useAllowedContext();
  const courses = usersCoursesFromApi;

  const addCourseAndNavigate = (courseId, uid, nameInDB, courses) => {
    if (nameInDB) {
      courses.push(courseId);
      updateUserCourses(nameInDB, courses).then((response) => {
        if (response) {
          navigate("/profile");
        }
      });
    } else {
      addUserCourses(uid, courseId).then((response) => {
        if (response) {
          navigate("/profile");
        }
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.text}>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </p>
        <Button
          color={"purple"}
          text={"Записаться на тренировку"}
          onClick={() => {
            isAllowed
              ? addCourseAndNavigate(courseId, uid, nameInDB, courses)
              : navigate("/login");
          }}
        />
      </div>
      <div>
        <Call />
      </div>
    </div>
  );
}

export default RecordForm;
