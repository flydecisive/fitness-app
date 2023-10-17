/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./allowed-course.module.css";
import Button from "../../../components/button/button";
import ProgressForm from "../../../components/progress-form/progress-form";
import Header from "../../../components/header/header";
import { useEffect, useState } from "react";
import ExerciseProgress from "../../../components/exercise-progress/exercise-progress";
import { getWorkouts } from "../../../api";
import ChoseTraining from "../../../components/modals/chose-training/chose-training";
import Congrat from "../../../components/congrat/congrat";
import { createValidVideoUrl } from "../../../helpers";
import { getCompletedWorkouts, setCompletedWorkouts } from "../../../api";

function AllowedCourse({ course, nameInDB }) {
  const [progress, setProgress] = useState(0);
  const [choosedWorkout, setChoosedWorkout] = useState();
  const [currentWorkouts, setCurrentWorkouts] = useState();
  const [show, setShow] = useState(!choosedWorkout);
  const [workoutIndex, setWorkoutIndex] = useState();
  const [exercisesForProgress, setExercisesForProgress] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [exercisesNames, setExercisesNames] = useState();
  const [showCongrat, setShowCongrat] = useState(false);
  const [userCompletedWorkouts, setUserCompletedWorkouts] = useState();

  const courseWorkouts = course?.workouts;

  useEffect(() => {
    getCompletedWorkouts().then((responseData) => {
      setUserCompletedWorkouts(responseData[nameInDB]?.completed_workouts);
    });
  }, []);

  useEffect(() => {
    if (choosedWorkout?.exercises) {
      const keys = Object.keys(choosedWorkout.exercises);
      setExercisesNames(keys);
      const exercisesForProgressData = keys?.map((elem, index) => {
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

      const exercisesData = keys?.map((elem, index) => {
        return <li key={index}>{elem}</li>;
      });

      setExercisesForProgress(exercisesForProgressData);
      setExercises(exercisesData);
    }
  }, [choosedWorkout, progress]);

  useEffect(() => {
    let keys;
    if (choosedWorkout) {
      if (!choosedWorkout?.exercises) {
        getCompletedWorkouts().then((responseData) => {
          const allCompletedWorkouts =
            responseData[nameInDB]?.completed_workouts;

          if (allCompletedWorkouts) {
            if (!allCompletedWorkouts.includes(choosedWorkout?._id)) {
              allCompletedWorkouts.push(choosedWorkout?._id);
              setCompletedWorkouts(nameInDB, allCompletedWorkouts);
            }
          } else {
            setCompletedWorkouts(nameInDB, [choosedWorkout?._id]);
          }
        });
      }
    }
    if (progress && choosedWorkout) {
      const progressData = progress?.filter(function (el) {
        return el !== "";
      });

      const completedData = [];

      keys = Object.keys(choosedWorkout?.exercises);
      for (let i = 0; i < keys.length; i++) {
        if (choosedWorkout?.exercises[keys[i]] <= progressData[i]) {
          completedData.push(true);
        } else {
          completedData.push(false);
        }
      }

      let count = 0;
      completedData.forEach((el) => {
        if (el === true) {
          count += 1;
        }
      });

      const isCompletedWorkout = count === completedData.length ? true : false;

      if (isCompletedWorkout) {
        getCompletedWorkouts().then((responseData) => {
          const allCompletedWorkouts =
            responseData[nameInDB]?.completed_workouts;

          if (allCompletedWorkouts) {
            if (!allCompletedWorkouts.includes(choosedWorkout?._id)) {
              allCompletedWorkouts.push(choosedWorkout?._id);
              setCompletedWorkouts(nameInDB, allCompletedWorkouts);
            }
          } else {
            setCompletedWorkouts(nameInDB, [choosedWorkout?._id]);
          }
        });
      }
    }
  }, [progress, choosedWorkout]);

  useEffect(() => {
    for (let i = 0; i < currentWorkouts?.length; i++) {
      if (currentWorkouts[i]?._id === choosedWorkout?._id) {
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

  const toggleCongratMessage = () => {
    setTimeout(() => {
      setShowCongrat(false);
    }, 1500);

    return <Congrat />;
  };

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
        <div className={styles.exercises}>
          <h3 className={styles.title}>Упражнения</h3>
          {choosedWorkout?.exercises ? (
            <div className={styles["exercises-wrapper"]}>
              <ul className={`${styles.list} small-text`}>{exercises}</ul>
              <Button
                text={"Заполнить свой прогресс"}
                color={"purple"}
                onClick={() => setShow(true)}
              />
            </div>
          ) : (
            <p className="small-text">Нет доступных упражнений</p>
          )}
          <ProgressForm
            show={show}
            setShow={setShow}
            setProgress={setProgress}
            setShowCongrat={setShowCongrat}
            exercisesNames={exercisesNames}
          />
          {showCongrat ? toggleCongratMessage() : ""}
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
            <p className="small-text">Нет доступных упражнений</p>
          )}
        </div>
      </div>
    </div>
  ) : (
    <ChoseTraining
      data={currentWorkouts}
      show={show}
      setShow={setShow}
      setChoosedWorkout={setChoosedWorkout}
      userCompletedWorkouts={userCompletedWorkouts}
    />
  );
}

export default AllowedCourse;
