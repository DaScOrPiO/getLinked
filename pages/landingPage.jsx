import Section1 from "../src/components/sections/Section1Contents";
import Section2 from "../src/components/sections/Section2Contents";
import Section3 from "../src/components/sections/Section3Contents";
import Section4 from "../src/components/sections/section4Contents";
import Section5 from "../src/components/sections/section5Contents";
import Section6 from "../src/components/sections/section6Contents";
import Section7 from "../src/components/sections/section7Contents";
import Section8 from "../src/components/sections/section8Contents";
import Section9 from "../src/components/sections/section9Contents";
import Footer from "../src/components/footer/Footer"

export default function LandingPage() {
  return (
    <main className="app-container">
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
        <section>
          <Section8 />
        </section>
        <section>
          <Section9 />
        </section>
        <footer>
        <Footer />
      </footer>
      </div>
    </main>
  );
}
