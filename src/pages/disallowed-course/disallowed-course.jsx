import styles from "./disallowed-course.module.css";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { ReactComponent as Banner } from "../../assets/img/yoga-banner.svg";
import Heading from "./components/heading/heading";
import Reason from "./components/reason/reason";

export function DisallowedCoursePage() {
  const reasons_text = [
    "Давно хотели попробовать йогу, но не решались начать.",
    "Хотите укрепить позвоночник, избавиться от болей в спине и суставах.",
    "Ищете активность, полезную для тела и души.",
  ];

  const reasons = reasons_text.map((reason, index) => {
    return <Reason number={index + 1} text={reason} />;
  });
  return (
    <div className={`${styles.wrapper} container`}>
      <Logo fill="black" />
      <div className={styles.banner}>
        <Banner className={styles.svg} />
      </div>
      <div>
        <Heading text={"Подойдет для вас, если:"} />
        <div className={styles["content-container"]}>{reasons}</div>
      </div>
      <div>
        <Heading text={"Направления:"} />
        <div className={styles["content-container"]}>
          <div className="small-text">
            <ul>
              <li>Йога для новичков</li>
              <li>Классическая йога</li>
              <li>Йогатерапия</li>
            </ul>
          </div>
          <div className="small-text">
            <ul>
              <li>Кундалини-йога</li>
              <li>Хатха-йога</li>
              <li>Аштанга-йога</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
