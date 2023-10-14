import styles from "./record-form.module.css";
import Button from "../../../../../components/button/button";
import { ReactComponent as Call } from "../../../../../assets/img/call.svg";
import { useNavigate } from "react-router";
import { useAllowedContext } from "../../../../../contexts/allowed";
// import database from "../../../../../firebase";

function RecordForm({ courseId }) {
  const navigate = useNavigate();
  const { isAllowed } = useAllowedContext();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.text}>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </p>
        <Button
          color={"purple"}
          text={"Записаться на тренировку"}
          onClick={() => {
            isAllowed ? navigate(`/profile`) : navigate("/login");
          }}
        />
      </div>
      <div>
        <Call />
      </div>
    </div>
  );
}

export default RecordForm;
