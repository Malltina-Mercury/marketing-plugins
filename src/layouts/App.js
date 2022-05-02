import PluginList from "../components/plugin/list/PluginList";
import { useEffect, useState } from "react";
import CardsList from "../components/card/CardList";
import request from "../tools/request";
import { BrowserRouter as RouterProvider } from "react-router-dom";

function App() {
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
    <div className="App">
      <RouterProvider>
        <header className="App-header">
          <h1 className="text-6xl font-bold text-center">Marketing Plugins</h1>
        </header>
        <PluginList />
        <h1 style={{ textAlign: "center" }}>Marketing Plugins</h1>
        <CardsList items={items} isLoading={isLoading} />
      </RouterProvider>
    </div>
  );
}

export default App;
