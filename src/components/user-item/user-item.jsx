import styles from "./user-item.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Exit } from "../../assets/img/exit.svg";
import { useNavigate } from "react-router-dom";
import { useAllowedContext } from "../../contexts/allowed";

function UserItem({ userName, color }) {
  const navigate = useNavigate();
  const { setIsAllowed } = useAllowedContext();

  return (
    <div className={styles.wrapper}>
      <NavLink className="link" to="/profile">
        <p className={`${styles.user} ${styles[color]}`}>{userName}</p>
      </NavLink>

      <button
        className={styles.button}
        onClick={() => {
          localStorage.clear();
          navigate("/");
          setIsAllowed(false);
        }}
      >
        <Exit className={`${styles.svg} ${styles[color]}`} />
      </button>
    </div>
  );
}

export default UserItem;
