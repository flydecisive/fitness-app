import styles from "./reason.module.css";

function Reason({ number, text }) {
  return (
    <div>
      {number} {text}
    </div>
  );
}

export default Reason;
