import {useEffect, useState} from "react";
import request from "../tools/request";
import Router from "../routes/Router";


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
      <header className="App-header">
        <h1 className="text-6xl font-bold text-center">Marketing Plugins</h1>
      </header>
      {/*<PluginList/>*/}
      {/*<CustomRoute items={items} isLoading={isLoading}/>*/}
      <Router/>
      <h1 style={{textAlign: "center"}}>Marketing Plugins</h1>
    </div>
  );
}

export default App;
