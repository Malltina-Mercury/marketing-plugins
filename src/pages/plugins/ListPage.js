import React from 'react'
import PluginList from "../../components/plugin/list/PluginList";
import useFetchAllPlugins from "../../hocks/api/useFetchAllPlugins";

const ListPage = () => {
  const {data, error, loaded} = useFetchAllPlugins()
  return (
    <>
      {!loaded && 'Loading...'}
      {loaded && !error ? (<PluginList items={data}/>) : error}
    </>
  );
}

export default ListPage;
