import styles from "./App.module.css";
import AppRoutes from "./routes/routes";

function App() {
  const isAllowed = localStorage.getItem("uid") ? true : false;
  console.log(isAllowed);
  return (
    <div className={styles.App}>
      <AppRoutes isAllowed={isAllowed} />
    </div>
  );
}

export default App;
