import Navigation from "../src/components/nav/Navigation";
import Section1 from "../src/components/sections/Section1Contents";
import Section2 from "../src/components/sections/Section2Contents";
import Section3 from "../src/components/sections/Section3Contents";
import Section4 from "../src/components/sections/section4Contents";
import Section5 from "../src/components/sections/section5Contents";

export default function LandingPage() {
  return (
    <main className="app-container">
      <header className="header px-12">
        <Navigation />
      </header>
      <div className="wrapper">
        <section className="mb-56">
          <Section1 />
        </section>

        <section className="mt-56">
          <Section2 />
        </section>
        <section className="">
          <Section3 />
        </section>
        <section className="">
          <Section4 />
        </section>
        <section className="">
          <Section5 />
        </section>
      </div>
    </main>
  );
}
