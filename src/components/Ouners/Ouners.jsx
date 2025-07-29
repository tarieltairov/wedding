import styles from "./Ouners.module.scss";
import emblema from "../../assets/images/png/emblema.png";

export function Ouners() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.desk}>Терен урматтоо менен той ээлери: </p>
      <h2 className={styles.names}>Калдарбек & Айгүл</h2>

      <img src={emblema} alt="emblema" className={styles.emblema} />
    </div>
  );
}
