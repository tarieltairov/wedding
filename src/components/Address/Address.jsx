import { Line } from "../../ui/Line";
import styles from "./Address.module.scss";

export function Address() {
  const onMapBtn = () => {
    const placeCoords = {
      lat: 42.87586,
      lng: 74.500521,
    };

    const mapCenter = {
      lat: 42.875671,
      lng: 74.500478,
      zoom: 16,
    };

    const url = `https://2gis.kg/bishkek/firm/70000001090743355/${placeCoords.lng},${placeCoords.lat}?m=${mapCenter.lng},${mapCenter.lat}/${mapCenter.zoom}`;
    window.open(url, "_blank");
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Дареги: </h2>
      <p className={styles.desk}>
        Бишкек шаары, Фрунзе көчөсү 133
        <br />
        Ресторан “AYAR”
        <br />
        12.10.2025 19:00
      </p>
      <button onClick={onMapBtn} className={styles.mapBtn}>
        Картадан көрүү
      </button>
      <Line />
    </div>
  );
}
