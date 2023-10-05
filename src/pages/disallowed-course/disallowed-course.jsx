import styles from "./disallowed-course.module.css";
import Heading from "./components/heading/heading";
import Reason from "./components/reason/reason";
import { reasonsText } from "../../consts";
import RecordForm from "./components/record-form/record-form";
import Header from "../../components/header/header";
import CourseBanner from "../../components/course-banner/course-banner";

export function DisallowedCoursePage() {
  const reasons = reasonsText.map((reason, index) => {
    return <Reason number={index + 1} text={reason} key={index} />;
  });
  return (
    <div className={`${styles.wrapper} container`}>
      <Header color="black" />
      {/* <div className={styles.banner}></div> */}
      <CourseBanner />
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
