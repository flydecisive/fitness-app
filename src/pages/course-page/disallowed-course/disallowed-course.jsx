/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./disallowed-course.module.css";
import Heading from "./components/heading/heading";
import Reason from "./components/reason/reason";
import RecordForm from "./components/record-form/record-form";
import Header from "../../../components/header/header";
import CourseBanner from "../../../components/course-banner/course-banner";
import DirectionColumn from "./components/direction-column/direction-column";

export function DisallowedCourse({ course }) {
  const reasonsData = course?.reasons;
  let reasons;
  if (reasonsData) {
    reasons = reasonsData.map((reason, index) => {
      return <Reason number={index + 1} text={reason} key={index} />;
    });
  }

  function separateData(data) {
    const separatedData = [];
    const size = 3;
    for (let i = 0; i < data.length / size; i++) {
      separatedData[i] = data.slice(i * size, i * size + size);
    }

    return separatedData;
  }

  const directionsData = course?.directions;
  let directions;

  if (directionsData) {
    directions = separateData(directionsData);
  }

  const directionsElems = directions?.map((direction, index) => (
    <DirectionColumn key={index} elements={direction} />
  ));

  return (
    <div className={`${styles.wrapper} container`}>
      <Header color="black" />
      <CourseBanner name={course?.name} />
      <div>
        <Heading text={"Подойдет для вас, если:"} />
        <div className={`${styles["content-container"]} ${styles.reasons}`}>
          {reasons}
        </div>
      </div>
      <div>
        <Heading text={"Направления:"} />
        <div className={`${styles.directions} small-text`}>
          {directionsElems}
        </div>
      </div>
      <p className={`${styles.text} small-text`}>{course?.description}</p>
      <RecordForm courseId={course?._id} />
    </div>
  );
}
