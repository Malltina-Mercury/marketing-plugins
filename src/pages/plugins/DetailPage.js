import React from 'react'
import {useParams} from "react-router-dom";

import useFetchPlugin from "../../hocks/api/useFetchPlugin";
import PluginCard from "../../components/plugin/card/PluginCard";

const DetailPage = () => {
  let {id} = useParams();
  const {data, error, loaded} = useFetchPlugin(id);

  return (
    <div>
      {!loaded && 'Loading...'}
      {loaded && !error ? (<PluginCard item={data}/>) : error}
    </div>
  );
}

export default DetailPage;
