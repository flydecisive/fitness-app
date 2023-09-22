import styles from "./disallowed-course.module.css";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { ReactComponent as Banner } from "../../assets/img/yoga-banner.svg";
import Heading from "./components/heading/heading";
import Reason from "./components/reason/reason";
import { reasonsText } from "../../consts";
import RecordForm from "./components/record-form/record-form";

export function DisallowedCoursePage() {
  const reasons = reasonsText.map((reason, index) => {
    return <Reason number={index + 1} text={reason} key={index} />;
  });
  return (
    <div className={`${styles.wrapper} container`}>
      <Logo fill="black" />
      <div className={styles.banner}>
        <Banner className={styles.svg} />
      </div>
      <div>
        <Heading text={"Подойдет для вас, если:"} />
        <div className={`${styles["content-container"]} ${styles.reasons}`}>
          {reasons}
        </div>
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
      <p className={`${styles.text} small-text`}>
        Благодаря комплексному воздействию упражнений происходит проработка всех
        групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме
        того, упражнения дарят отличное настроение, заряжают бодростью и
        помогают противостоять стрессам.
      </p>
      <RecordForm />
    </div>
  );
}
