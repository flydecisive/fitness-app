import Header from "../../components/Header/Header";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <section className={styles.mainPage}>
      <div className="container">
        <Header />
      </div>
    </section>
  );
};

export default MainPage;
