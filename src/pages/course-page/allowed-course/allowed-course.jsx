import styles from "./allowed-course.module.css";
import Button from "../../../components/button/button";
import ProgressForm from "../../../components/progress-form/progress-form";
import Header from "../../../components/header/header";
import { useEffect, useState } from "react";
import ExerciseProgress from "../../../components/exercise-progress/exercise-progress";
import { getWorkouts } from "../../../api";
import ChoseTraining from "../../../components/modals/chose-training/chose-training";

function AllowedCourse({ course }) {
  const [progress, setProgress] = useState(0);
  const [choosedWorkout, setChoosedWorkout] = useState(false);
  const [show, setShow] = useState(!choosedWorkout);
  const [currentWorkouts, setCurrentWorkouts] = useState();

  const courseWorkouts = course?.workouts;

  useEffect(() => {
    getWorkouts().then((responseData) => {
      const keys = Object.keys(responseData);
      const workouts = [];
      for (let i = 0; i < courseWorkouts?.length; i++) {
        for (let j = 0; j < keys?.length; j++) {
          if (keys[j] === courseWorkouts[i]) {
            workouts.push(responseData[keys[j]]);
          }
        }
      }
      setCurrentWorkouts(workouts);
    });
  }, [courseWorkouts]);

  return choosedWorkout ? (
    <div className={`container`}>
      <Header color="black" />
      <h2 className={styles.heading}>{course?.name}</h2>
      <div className={styles.path}>
        Красота и здоровье / Йога на каждый день / 2 день
      </div>
      <div className={styles.video}>
        <video controls>
          <source src="" type="video/mp4" />
          <source src="" type="video/webm" />
        </video>
      </div>
      <div className={styles.content}>
        <div className={styles.exercices}>
          <h3 className={styles.title}>Упражнения</h3>
          <ul className={`${styles.list} small-text`}>
            <li>Наклон вперед (10 повторений)</li>
            <li>Наклон назад (10 повторений)</li>
            <li>Поднятие ног, согнутых в коленях (5 повторений)</li>
          </ul>
          <Button
            text={"Заполнить свой прогресс"}
            color={"purple"}
            onClick={() => setShow(true)}
          />
          <ProgressForm
            show={show}
            setShow={setShow}
            setProgress={setProgress}
          />
          {/* <Congrat /> */}
        </div>
        <div className={styles.progress}>
          <h3 className={`${styles.title} ${styles["title-margin"]}`}>
            Мой прогресс по тренировке 2:
          </h3>
          <div className={`${styles["progress-container"]} small-text`}>
            <p>Наклон вперед</p>
            <ExerciseProgress
              id="1"
              color={"#565eef"}
              value={progress[1]}
              max={10}
              bgColor={"#edecff"}
            />
            <p>Наклон назад</p>
            <ExerciseProgress
              id="2"
              color={"#ff6d00"}
              value={progress[2]}
              max={10}
              bgColor={"#fff2e0"}
            />
            <p>Поднятие ног, согнутых в коленях</p>
            <ExerciseProgress
              id="3"
              color={"#9a48f1"}
              value={progress[3]}
              max={5}
              bgColor={"#f9ebff"}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <ChoseTraining
      data={currentWorkouts}
      show={show}
      setShow={setShow}
      setChoosedWorkout={setChoosedWorkout}
    />
  );
}

export default AllowedCourse;
