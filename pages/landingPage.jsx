import Navigation from "../src/components/nav/Navigation";
import Section1 from "../src/components/sections/Section1Contents";
import Section2 from "../src/components/sections/Section2Contents";
import Section3 from "../src/components/sections/Section3Contents";
import Section4 from "../src/components/sections/section4Contents";
import Section5 from "../src/components/sections/section5Contents";
import Section6 from "../src/components/sections/section6Contents";
import Section7 from "../src/components/sections/section7Contents";

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
        <section>
          <Section3 />
        </section>
        <section>
          <Section4 />
        </section>
        <section>
          <Section5 />
        </section>
        <section>
          <Section6 />
        </section>
        <section>
          <Section7 />
        </section>
      </div>
    </main>
  );
}
