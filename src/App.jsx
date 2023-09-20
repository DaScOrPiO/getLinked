import Navigation from "./components/nav/Navigation";
import Section1 from "./components/sections/Section1Contents";
import Section2 from "./components/sections/Section2Contents";
import Section3 from "./components/sections/Section3Contents";

function App() {
  return (
    <main className="app-container">
      <header className="header px-12">
        <Navigation />
      </header>
      <section className="px-12 mb-56">
        <Section1 />
      </section>

      <section className="px-12 mt-56">
        <Section2 />
      </section>
      <section className="px-12">
        <Section3 />
      </section>
    </main>
  );
}

export default App;
