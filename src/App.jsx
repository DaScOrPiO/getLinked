import Navigation from "./components/nav/Navigation";

function App() {
  return (
    <div className="app-container">
      <header className="header px-12">
        <Navigation />
      </header>
      <div>
        <h1 className="colored-text">Hello World</h1>
      </div>
    </div>
  );
}

export default App;
