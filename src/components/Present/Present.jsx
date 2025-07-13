import styles from "./Present.module.scss";
import emblema from "../../assets/images/png/emblema.png";
import { Line } from "../../ui/Line";

export function Present() {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <img className={styles.emblema} src={emblema} alt="emblema" />
        <p className={styles.firstText}>Урматтуу коноктор!</p>
        <p className={styles.secondText}>Сиздерди балдарыбыз</p>
        <p className={styles.thirdText}>Tariel & Tattybubu</p>
        <p className={styles.fourthText}>
          үйлөнүү үлпөт тоюна арналган салтанатка келип, кадырлуу коногубуз
          болуп, дасторкон үстүндө ак батаңызды берип кетүүгө чакырабыз!
        </p>
      </div>
      <Line />
    </div>
  );
}
