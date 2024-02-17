import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.wrap}>
      <h2>Ooops!</h2>
      <p>This page not found.</p>
    </div>
  );
};

export default NotFound;
