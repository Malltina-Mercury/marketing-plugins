import React from "react";
import styles from "./PluginList.module.scss";
import PluginCard from "../card/PluginCard";

const PluginList = ({items}) => {
  return (
    <div className={styles.PluginList}>
      {items?.map((item) => (
        <div key={item.id} className={styles.PluginItem}>
          <PluginCard item={item}/>
        </div>
      ))}
    </div>
  );
}

export default PluginList;
