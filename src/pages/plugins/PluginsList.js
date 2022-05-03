import React, {useEffect, useState} from 'react'
import request from "../../tools/request";
import CardsList from "../../components/card/CardList";

const PluginsList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    request("/Cards")
      .then((res) => {
        setItems(res.data);
      })
      .finally(setLoading(false));
  }, []);

  return (
    <CardsList items={items} isLoading={isLoading}/>
  );
}

export default PluginsList;
