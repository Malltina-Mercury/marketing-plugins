import React, {useCallback, useState} from "react";
import {Switch} from '@headlessui/react'
import styles from "./PluginStatus.module.scss"

const PluginStatus = ({status, onChanged}) => {
  const [enabled, setEnabled] = useState(status)

  const onChangeStatus = useCallback((checked) => {
    setEnabled(() => checked);
    onChanged(checked);
  }, []);

  return (
    <div className={enabled ? styles.Enable : styles.Disable}>
      <Switch
        checked={enabled}
        onChange={onChangeStatus}
        className={styles.Switch}
      >
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
