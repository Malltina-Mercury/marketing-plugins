import React, {useEffect, useState} from 'react'
import request from "../../tools/request";
import PluginList from "../../components/plugin/list/PluginList";

const PluginsListPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    request("/Cards")
      .then((res) => {
        setItems(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <PluginList items={items} isLoading={isLoading}/>
  );
}

export default PluginsListPage;
