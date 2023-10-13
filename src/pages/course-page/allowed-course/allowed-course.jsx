/* eslint-disable react-hooks/exhaustive-deps */
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
  const [choosedWorkout, setChoosedWorkout] = useState();
  const [currentWorkouts, setCurrentWorkouts] = useState();
  const [show, setShow] = useState(!choosedWorkout);
  const [workoutIndex, setWorkoutIndex] = useState();
  const [exercisesForProgress, setExercisesForProgress] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [exercisesNames, setExercisesNames] = useState();

  const courseWorkouts = course?.workouts;

  useEffect(() => {
    console.log("changed");
    console.log(progress);
  }, [progress]);

  useEffect(() => {
    if (choosedWorkout?.exercises) {
      const keys = Object.keys(choosedWorkout.exercises);
      setExercisesNames(keys);
      const exercisesForProgressData = keys.map((elem, index) => {
        return (
          <div key={index + 10} className={styles["progress-item-wrapper"]}>
            <p>{elem.slice(0, elem.indexOf("("))}</p>
            <ExerciseProgress
              id={index + 1}
              color={"#565eef"}
              value={progress[index + 1]}
              max={choosedWorkout.exercises[elem]}
              bgColor={"#edecff"}
            />
          </div>
        );
      });

      const exercisesData = keys.map((elem, index) => {
        return <li key={index}>{elem}</li>;
      });

      setExercisesForProgress(exercisesForProgressData);
      setExercises(exercisesData);
    }
  }, [choosedWorkout, progress]);

  useEffect(() => {
    for (let i = 0; i < currentWorkouts?.length; i++) {
      if (currentWorkouts[i]._id === choosedWorkout?._id) {
        setWorkoutIndex(i);
      }
    }
  }, [choosedWorkout]);

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

  function createValidVideoUrl(url) {
    const lastPath = url?.slice(url.lastIndexOf("/"));

    return `https://www.youtube.com/embed${lastPath}`;
  }

  return choosedWorkout ? (
    <div className={`container`}>
      <Header color="black" />
      <h2 className={styles.heading}>{course?.name}</h2>
      <div className={styles.path}>
        {choosedWorkout?.name?.includes("/")
          ? choosedWorkout?.name.slice(0, choosedWorkout?.name.lastIndexOf("/"))
          : choosedWorkout?.name}
      </div>
      <div className={styles.video}>
        <iframe
          width="100%"
          height="100%"
          src={createValidVideoUrl(choosedWorkout?.video_url)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder={0}
        ></iframe>
      </div>
      <div className={styles.content}>
        <div className={styles.exercices}>
          <h3 className={styles.title}>Упражнения</h3>
          {choosedWorkout?.exercises ? (
            <>
              <ul className={`${styles.list} small-text`}>{exercises}</ul>
              <Button
                text={"Заполнить свой прогресс"}
                color={"purple"}
                onClick={() => setShow(true)}
              />
            </>
          ) : (
            <p>Нет доступных упражнений</p>
          )}
          <ProgressForm
            show={show}
            setShow={setShow}
            setProgress={setProgress}
            exercisesNames={exercisesNames}
          />
          {/* <Congrat /> */}
        </div>
        <div className={styles.progress}>
          <h3 className={`${styles.title} ${styles["title-margin"]}`}>
            Мой прогресс по тренировке {workoutIndex + 1}:
          </h3>
          {choosedWorkout?.exercises ? (
            <div className={`${styles["progress-container"]} small-text`}>
              {exercisesForProgress}
            </div>
          ) : (
            <p>Нет доступных упражнений</p>
          )}
          {/* <p>Наклон вперед</p>
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
            /> */}
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
