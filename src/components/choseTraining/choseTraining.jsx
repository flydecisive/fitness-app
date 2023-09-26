import { useState } from "react";
import Input from "../input/input";
import styles from "./choseTraining.module.css";
import activeItem from "../../assets/img/active_item.svg";

const ChoseTraining = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };
  console.log(active);

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <p className={styles.title}>Выберите тренировку</p>
        <div className={styles["inputs_container"]}>
          <div className={styles.item_box}>
            {active ? (
              <div className={styles.item_box_svg}>
                <img src={activeItem} alt="active_item" />
              </div>
            ) : (
              ""
            )}
            <div
              onClick={handleActive}
              className={active ? styles.item_active : styles.item}
            >
              <p className={styles.item_title}>Утренняя практика</p>
              <p className={styles.item_subtitle}>
                Йога на каждый день / 1 день
              </p>
            </div>
          </div>

          <div className={styles.item_box}>
            <div
              onClick={handleActive}
              className={active ? styles.item_active : styles.item}
            >
              <p className={styles.item_title}>Утренняя практика</p>
              <p className={styles.item_subtitle}>
                Йога на каждый день / 1 день
              </p>
            </div>
          </div>
          <div className={styles.item_box}>
            <div
              onClick={handleActive}
              className={active ? styles.item_active : styles.item}
            >
              <p className={styles.item_title}>Утренняя практика</p>
              <p className={styles.item_subtitle}>
                Йога на каждый день / 1 день
              </p>
            </div>
          </div>
          <div className={styles.item_box}>
            <div
              onClick={handleActive}
              className={active ? styles.item_active : styles.item}
            >
              <p className={styles.item_title}>Утренняя практика</p>
              <p className={styles.item_subtitle}>
                Йога на каждый день / 1 день
              </p>
            </div>
          </div>
          <div className={styles.item_box}>
            <div
              onClick={handleActive}
              className={active ? styles.item_active : styles.item}
            >
              <p className={styles.item_title}>Утренняя практика</p>
              <p className={styles.item_subtitle}>
                Йога на каждый день / 1 день
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseTraining;
