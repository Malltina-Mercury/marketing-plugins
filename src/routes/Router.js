import React from 'react'
import {Route, Routes} from "react-router-dom";
import ListPage from "../pages/plugins/ListPage";
import Error404 from "../pages/Error404";
import DetailPage from "../pages/plugins/DetailPage";

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<ListPage/>}/>
      <Route path="plugins/" element={<ListPage/>}/>
      <Route path="plugins/:id/" element={<DetailPage/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
  );
}

export default Router;
