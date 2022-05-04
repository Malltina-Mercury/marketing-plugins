import React from "react";
import Router from "../routes/Router";
import {Link} from "react-router-dom";


function App() {
  return (
    <div className="container mx-auto px-4">
      <header>
        <h1 className="text-2xl font-bold text-left py-4">
          <Link to='/'>Marketing Plugins</Link>
        </h1>
      </header>

      <Router/>
    </div>
  );
}

export default App;
