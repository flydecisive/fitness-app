import styles from "./user-item.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Exit } from "../../assets/img/exit.svg";

function UserItem({ userName }) {
  return (
    <div className={styles.wrapper}>
      <NavLink className="link" to="/profile">
        <p className={styles.user}>{userName}</p>
      </NavLink>

      <button className={styles.button}>
        <Exit className={styles.svg} />
      </button>
    </div>
  );
}

export default UserItem;
