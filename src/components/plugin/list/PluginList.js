import React from "react";
import styles from "./PluginList.module.scss";
import PluginCard from "../card/PluginCard";

const PluginList = ({items, isLoading}) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className={styles.PluginList}>
      {items.map((item) => (
        <div key={item.id} className={styles.PluginItem}>
          <PluginCard item={item}/>
        </div>
      ))}
    </div>
  );
}

export default PluginList;
