import React, {useState} from "react";
import styles from "./PluginCard.module.scss";
import PluginStatus from "./PluginStatus";

const PluginCard = () => {
  const [enabled, setEnabled] = useState(false);

  const x = (c) => {
    setEnabled(prevState => c)
  }

  return (
    <div className={styles.PluginCard}>
      <div className={styles.Details}>
        <h3 className={styles.Title}>Plugin 1</h3>
        <p className={styles.Description}>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua</p>
      </div>
      <div className={styles.Status}>
        <PluginStatus status={false} onChanged={x}/>
      </div>
    </div>
  );
}

export default PluginCard;
