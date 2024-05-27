import { VscCode } from "react-icons/vsc";
import styles from "./Footer.module.scss";

const Footer = () => {
//   console.log(randomColors);
  return (
    <div className={styles.Footer}>
      <VscCode className={styles.icon} />
      <div className={styles.content}>
        <span style={{ color: "#fc6203" }}>Developed</span>
        and
        <span style={{ color: "#fc031c" }}>written</span>
        by
        <span style={{ color: "#24fc03" }}>Sahin</span>
        <span style={{ color: "#0362fc" }}> Alam</span>
      </div>
    </div>
  );
};

export default Footer;
