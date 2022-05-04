import React, {useState} from "react";
import styles from "./PluginCard.module.scss";
import PluginStatus from "./PluginStatus";
import {Link} from 'react-router-dom';

const PluginCard = ({item}) => {
  const [enabled, setEnabled] = useState(false);

  const x = (c) => {
    setEnabled(prevState => c)
  }

  return (
    <div className={styles.PluginCard}>
      <div className={styles.Details}>
        <h3 className={styles.Title}>
          <Link to={`/plugins/${item.id}/`}>{item.title}</Link>
        </h3>
        <p className={styles.Description}>{item.description}</p>
      </div>
      <div className={styles.Status}>
        <PluginStatus status={item.status} onChanged={x}/>
      </div>
    </div>
  );
}

export default PluginCard;
