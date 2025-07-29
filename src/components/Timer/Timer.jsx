import { useEffect, useState } from "react";
import styles from "./Timer.module.scss";

const targetDate = new Date("2025-10-12T19:00:00");

const getTimeRemaining = (end) => {
  const total = end.getTime() - new Date().getTime();

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
};

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTimeRemaining(targetDate);
      if (remaining.total <= 0) {
        clearInterval(interval);
      }
      setTimeLeft(remaining);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (n) => String(n).padStart(2, "0");

  return (
    <div className={styles.container}>
      <p className={styles.label}>Үйлөнүү үлпөт тоюна чейин калды:</p>
      <div className={styles.timer}>
        <div>
          <span className={styles.num}>{format(timeLeft.days)}</span>
          <span className={styles.label}>күн</span>
        </div>

        <div>
          <span className={styles.num}>{format(timeLeft.hours)} </span>
          <span className={styles.label}>саат</span>
        </div>

        <div>
          <span className={styles.num}>{format(timeLeft.minutes)}</span>
          <span className={styles.label}>мүнөт</span>
        </div>

        <div>
          <span className={styles.num}>{format(timeLeft.seconds)}</span>
          <span className={styles.label}>секунд</span>
        </div>
      </div>
    </div>
  );
};
