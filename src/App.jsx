import styles from "./App.module.css";
import AppRoutes from "./routes/routes";

function App() {
  const isAllowed = true;
  return (
    <div className={styles.App}>
      <AppRoutes isAllowed={isAllowed} />
    </div>
  );
}

export default App;
