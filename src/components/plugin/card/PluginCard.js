import React from "react";
import styles from "./PluginCard.module.scss";
import PluginStatus from "./PluginStatus";

const PluginCard = ({}) => {
  return (
    <div className={styles.PluginCard}>
      <div className={styles.Details}>
        <h3 className={styles.Title}>Plugin 1</h3>
        <p className={styles.Description}>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua</p>
      </div>
      <div className={styles.Status}>
        <PluginStatus status={false}/>
      </div>
    </div>
  );
}

export default PluginCard;
