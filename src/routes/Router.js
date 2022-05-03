import React from 'react'
import {Route, Routes} from "react-router-dom";
import PluginsListPage from "../pages/plugins/PluginsListPage";
import Error404 from "../pages/Error404";
import PluginDetailPage from "../pages/plugins/PluginDetailPage";

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<PluginsListPage/>}/>
      <Route path="plugins/" element={<PluginsListPage/>}/>
      <Route path="plugins/:id/" element={<PluginDetailPage/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
  );
}

export default Router;
