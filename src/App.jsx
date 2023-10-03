import styles from "./App.module.css";
import AppRoutes from "./routes/routes";
import { UserContext } from "./contexts/user";
import { AllowedContext } from "./contexts/allowed";
import { useState } from "react";

function App() {
  const [uid, setUid] = useState(localStorage.getItem("uid"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [isAllowed, setIsAllowed] = useState(false);

  return (
    <div className={styles.App}>
      <UserContext.Provider value={{ uid, setUid, email, setEmail }}>
        <AllowedContext.Provider value={{ isAllowed, setIsAllowed }}>
          <AppRoutes />
        </AllowedContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
