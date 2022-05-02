import { Routes, Route } from "react-router-dom";
import Card from "../components/card/Card";
import CardsList from "../components/card/CardList";
import Error404 from "../components/Pages/Error404";



const CustomRoute = ({items, isLoading}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CardsList items={items} isLoading={isLoading} />} />
        <Route path="/card/:id" element={<Card items={items} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default CustomRoute