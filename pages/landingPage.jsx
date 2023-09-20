import Navigation from "../src/components/nav/Navigation";
import Section1 from "../src/components/sections/Section1Contents";
import Section2 from "../src/components/sections/Section2Contents";
import Section3 from "../src/components/sections/Section3Contents";

export default function LandingPage() {
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
