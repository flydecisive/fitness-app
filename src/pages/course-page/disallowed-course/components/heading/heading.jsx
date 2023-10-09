import styles from "./heading.module.css";

function Heading({ text }) {
  return <h2 className={styles.heading}>{text}</h2>;
}

export default Heading;
