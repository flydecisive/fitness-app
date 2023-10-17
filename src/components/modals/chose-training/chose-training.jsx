/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import styles from "./chose-training.module.css";

const ChoseTraining = ({
  data,
  setShow,
  show,
  setChoosedWorkout,
  userCompletedWorkouts,
}) => {
  const modalRef = useRef();
  // Закрытие окна
  const closeModalOnClickOut = (e) => {
    if (
      show &&
      e.target &&
      modalRef.current &&
      !modalRef.current.contains(e.target)
    ) {
      setShow(false);
    }
  };

  // событие закрытия окна
  useEffect(() => {
    document.body.addEventListener("mousedown", closeModalOnClickOut);

    return () => {
      document.body.removeEventListener("mousedown", closeModalOnClickOut);
    };
  }, [show]);

  if (show) {
    return (
      <div ref={modalRef} className={styles.wrapper}>
        <div className={styles.modal}>
          <p className={styles.title}>Выберите тренировку</p>
          <div className={styles["inputs_container"]}>
            {data?.map((item, i) => (
              <div className={styles.item_box} key={i}>
                {userCompletedWorkouts?.includes(item._id) ? (
                  <div className={styles.item_box_svg}>
                    <img src="/img/active_item.svg" alt="active_item" />
                  </div>
                ) : (
                  ""
                )}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setChoosedWorkout(item);
                    setShow(false);
                  }}
                  className={
                    userCompletedWorkouts?.includes(item._id)
                      ? styles.item_active
                      : styles.item
                  }
                >
                  <p className={styles.item_title}>
                    {item.name.includes("/")
                      ? item.name.slice(0, item.name.indexOf("/"))
                      : item.name}
                  </p>
                  <p className={styles.item_subtitle}>
                    {item.name.includes("/")
                      ? item.name.slice(
                          item.name.indexOf("/") + 2,
                          item.name.lastIndexOf("/")
                        )
                      : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default ChoseTraining;
