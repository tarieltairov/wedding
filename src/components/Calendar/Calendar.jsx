import styles from "./Calendar.module.scss";
import heart from "../../assets/images/svg/heart.svg";
import firstBg from "../../assets/images/png/IMG_6860.webp";
import secondBg from "../../assets/images/png/image.webp";
import thirdBg from "../../assets/images/png/Frame 2087328555.webp";
import { Line } from "../../ui/Line";
import { motion as Motion } from "framer-motion";

const daysOfWeek = [
  { day: 6, label: "Пн" },
  { day: 7, label: "Вт" },
  { day: 8, label: "Ср" },
  { day: 9, label: "Чт" },
  { day: 10, label: "Пт" },
  { day: 11, label: "Сб" },
  { day: 12, label: "Вс" },
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
        <Motion.h2
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={styles.title}
        >
          Өткөрүлүүчү күнү
        </Motion.h2>
        <Motion.h3
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={styles.month}
        >
          ОКТЯБРЬ
        </Motion.h3>

        <Motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={styles.week}
        >
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
        </Motion.div>

        <div className={styles.gallery}>
          {dateGallery.map((item, ind) => (
            <Motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className={styles.galleryItem}
              key={ind}
              style={{ background: `url(${item.url})` }}
            >
              <span>{item.num}</span>
            </Motion.div>
          ))}
        </div>

        <Motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={styles.desk}
        >
          Аруу тилек, асыл максат жолубузда, Баш кошуп, турмуш куруу оюбузда.
          Өмүргө бирге аттандык кол кармашып, Келиңиздер ак никелүү тоюбузга!
        </Motion.p>
      </div>
      <Line />
    </div>
  );
}
