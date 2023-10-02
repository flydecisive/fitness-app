import styles from "./App.module.css";
import AppRoutes from "./routes/routes";
import { UidContext } from "./contexts/uid-context";
import { useEffect, useState } from "react";

function App() {
  const [uid, setUid] = useState(localStorage.getItem("uid"));
  let isAllowed;

  useEffect(() => {
    console.log("uid", uid);
    if ((uid !== undefined) & (uid !== "undefined") & (uid !== null)) {
      isAllowed = true;
    } else {
      isAllowed = false;
    }
    console.log("allowed", isAllowed);
  }, [uid]);
  return (
    <div className={styles.App}>
      <UidContext.Provider value={{ uid, setUid }}>
        <AppRoutes isAllowed={isAllowed} />
      </UidContext.Provider>
    </div>
  );
}

export default App;
