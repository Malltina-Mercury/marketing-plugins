import Router from "../routes/Router";


function App() {
  return (
    <div className="container mx-auto px-4">
      <header>
        <h1 className="text-2xl font-bold text-left py-4">
          Marketing Plugins
        </h1>
      </header>

      <Router/>
    </div>
  );
}

export default App;
