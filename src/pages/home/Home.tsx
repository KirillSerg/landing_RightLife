import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.hero}>
        <div className={styles.title}>
          <h1>Find your home in Italy</h1>
          <p>Search over 40,000 properties for sale</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
