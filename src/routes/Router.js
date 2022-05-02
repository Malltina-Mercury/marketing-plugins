import React from 'react'
import {Route, Routes} from "react-router-dom";
import PluginsList from "../pages/plugins/PluginsList";
import Error404 from "../pages/Error404";
import PluginDetail from "../pages/plugins/PluginDetail";

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<PluginsList/>}/>
      <Route path="plugins/" element={<PluginsList/>}/>
      <Route path="plugins/:id/" element={<PluginDetail/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
  );
}

export default Router;
