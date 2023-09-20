import Navigation from "./components/nav/Navigation";
import Section1 from "./components/sections/Section1Contents";

function App() {
  return (
    <main className="app-container">
      <header className="header px-12">
        <Navigation />
      </header>
      <section className="px-12">
        <Section1 />
      </section>
    </main>
  );
}

export default App;
