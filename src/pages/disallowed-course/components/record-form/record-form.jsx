import styles from "./record-form.module.css";
import Button from "../../../../components/button/button";
import { ReactComponent as Call } from "../../../../assets/img/call.svg";

function RecordForm() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.text}>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </p>
        <Button color={"purple"} text={"Записаться на тренировку"} />
      </div>
      <div>
        <Call />
      </div>
    </div>
  );
}

export default RecordForm;
