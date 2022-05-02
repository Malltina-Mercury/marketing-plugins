import { Routes, Route } from "react-router-dom";
import CardsList from "../components/card/CardList";
import Error404 from "../components/Pages/Error404";



const CustomRoute = ({items, isLoading}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CardsList items={items} isLoading={isLoading} />} />
      </Routes>
    </div>
  )
}

export default CustomRoute