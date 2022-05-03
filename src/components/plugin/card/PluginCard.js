import React, {useState} from "react";
import styles from "./PluginCard.module.scss";
import PluginStatus from "./PluginStatus";

const PluginCard = (props) => {
  const [enabled, setEnabled] = useState(false);

  const x = (c) => {
    setEnabled(prevState => c)
  }

  return (
    <div className={styles.PluginCard}>
      <div className={styles.Details}>
        <h3 className={styles.Title}>{props.item.title}</h3>
        <p className={styles.Description}>{props.item.description}</p>
      </div>
      <div className={styles.Status}>
        <PluginStatus status={false} onChanged={x}/>
      </div>
    </div>
  );
}

export default PluginCard;
