import styles from "./Calendar.module.scss";
import heart from "../../assets/images/svg/heart.svg";
import firstBg from "../../assets/images/png/IMG_6860.png";
import secondBg from "../../assets/images/png/image.png";
import thirdBg from "../../assets/images/png/IMG_5168.png";
import { Line } from "../../ui/Line";

const daysOfWeek = [
  { day: 6, label: "Mon" },
  { day: 7, label: "Tue" },
  { day: 8, label: "Wed" },
  { day: 9, label: "Thu" },
  { day: 10, label: "Fri" },
  { day: 11, label: "Sat" },
  { day: 12, label: "Sun" },
];

const dateGallery = [
  { url: firstBg, num: 12 },
  { url: secondBg, num: 10 },
  { url: thirdBg, num: 25 },
];

export function Calendar() {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <h2 className={styles.title}>SAVE THE DATE</h2>
        <h3 className={styles.month}>OCTOBER</h3>

        <div className={styles.week}>
          {daysOfWeek.map((i, ind) => (
            <div className={styles.item} key={ind}>
              <span className={styles.label}>{i.label}</span>
              <div className={styles.day}>
                {ind === daysOfWeek.length - 1 && (
                  <img src={heart} alt="heart" className={styles.heart} />
                )}
                {i.day}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.gallery}>
          {dateGallery.map((item, ind) => (
            <div
              className={styles.galleryItem}
              key={ind}
              style={{ background: `url(${item.url})` }}
            >
              <span>{item.num}</span>
            </div>
          ))}
        </div>

        <p className={styles.desk}>
          Аруу тилек, асыл максат жолубузда, Баш кошуп, турмуш куруу оюбузда.
          Өмүргө бирге аттандык кол кармашып, Келиңиздер ак никелүү тоюбузга!
        </p>
      </div>
      <Line />
    </div>
  );
}
