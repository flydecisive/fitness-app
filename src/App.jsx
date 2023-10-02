import styles from "./App.module.css";
import AppRoutes from "./routes/routes";
import { UserContext } from "./contexts/user";
import { useEffect, useState } from "react";

function App() {
  const [uid, setUid] = useState(localStorage.getItem("uid"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  let isAllowed;

  useEffect(() => {
    console.log(email);
  }, [email]);

  useEffect(() => {
    if ((uid !== undefined) & (uid !== "undefined") & (uid !== null)) {
      isAllowed = true;
    } else {
      isAllowed = false;
    }
  }, [uid]);
  return (
    <div className={styles.App}>
      <UserContext.Provider value={{ uid, setUid, email, setEmail }}>
        <AppRoutes isAllowed={isAllowed} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
