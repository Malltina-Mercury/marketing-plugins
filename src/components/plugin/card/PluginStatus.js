import React from "react";
import cn from "classnames";
import styles from './PluginStatus.module.scss';

const PluginStatus = ({})=>{
  return (
    <>
      <label className={styles.pluginStatus}>
        <input type="checkbox" className={styles.checkbox}/>
        <span className={styles.pluginStatus__slider}></span>
        <span className={styles.pluginStatus__title}>Allowed</span>
      </label>
    </>
  );
}

export default PluginStatus;
