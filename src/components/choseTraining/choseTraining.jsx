/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import styles from "./choseTraining.module.css";
import activeItem from "../../assets/img/active_item.svg";

const ChoseTraining = ({ data, setShow, show }) => {
  const [indexArray, setIndexArray] = useState([]);

  const modalRef = useRef();
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

  useEffect(() => {
    document.body.addEventListener("mousedown", closeModalOnClickOut);

    return () => {
      document.body.removeEventListener("mousedown", closeModalOnClickOut);
    };
  }, [show]);

  const handleActive = (i) => {
    if (indexArray.includes(i)) {
      setIndexArray((indexArray) => indexArray.filter((el) => el !== i));
    } else {
      setIndexArray([...indexArray, i]);
    }
  };

  if (show) {
    return (
      <div ref={modalRef} className={styles.wrapper}>
        <div className={styles.modal}>
          <p className={styles.title}>Выберите тренировку</p>
          <div className={styles["inputs_container"]}>
            {data.exercises.map((item, i) => (
              <div className={styles.item_box} key={i}>
                {indexArray.includes(i) ? (
                  <div className={styles.item_box_svg}>
                    <img src={activeItem} alt="active_item" />
                  </div>
                ) : (
                  ""
                )}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleActive(i);
                  }}
                  className={
                    indexArray.includes(i) ? styles.item_active : styles.item
                  }
                >
                  <p className={styles.item_title}>{item.title}</p>
                  <p className={styles.item_subtitle}>{item.subtitle}</p>
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
