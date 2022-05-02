import React from "react";
import styles from "./PluginList.module.scss";
import PluginCard from "../card/PluginCard";

const PluginList = ({}) => {
  return (
    <div className={styles.PluginList}>
      <div className={styles.PluginItem}>
        <PluginCard/>
      </div>
      <div className={styles.PluginItem}>
        <PluginCard/>
      </div>
      <div className={styles.PluginItem}>
        <PluginCard/>
      </div>
      <div className={styles.PluginItem}>
        <PluginCard/>
      </div>
    </div>
  );
}

export default PluginList;
