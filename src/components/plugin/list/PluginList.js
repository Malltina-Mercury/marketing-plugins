import React from "react";
import styles from "./PluginList.module.scss";
import PluginCard from "../card/PluginCard";

const PluginList = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading....</h1>
  ) : (
    <div className={styles.PluginList}>
          {items.map((item) => (
            <PluginCard key={item.id} item={item} />
          ))}
    </div>
  );
}

export default PluginList;
