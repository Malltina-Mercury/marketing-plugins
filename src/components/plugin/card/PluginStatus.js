import React, {useState} from "react";
import {Switch} from '@headlessui/react'
import styles from "./PluginStatus.module.scss"

const PluginStatus = ({status}) => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className={enabled ? styles.Enable : styles.Disable}>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={styles.Switch}
      >
        <span className="sr-only">{enabled ? 'Allowed' : 'Blocked'}</span>
        <span
          aria-hidden="true"
          className={styles.Slider}
        />
      </Switch>
      <span className={styles.Title}>{enabled ? 'Allowed' : 'Blocked'}</span>
    </div>
  );
}

export default PluginStatus;
