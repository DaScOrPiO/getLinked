import thinking from "../../assets/images/thinking.svg";
import ellipsis from "../../assets/images/Ellipse 2.svg";
import Button from "../reusables/Button";
import Star from "../reusables/Star";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Section4() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const In = {
    y: [0, -20, 0],
  };

  const Out = {
    y: [0, 20, 0],
  };

  return (
    <motion.div
      ref={ref}
      initial={inView ? "In" : "Out"}
      animate={inView ? "In" : "Out"}
      variants={{
        In,
        Out,
      }}
      transition={{ duration: 0.9 }}
      className="section-4-items flex lg:flex-row sm:flex-col 
    flex-wrap w-full py-8 items-center justify-center"
    >
      <div
        className="box-1 flex flex-col justify-center items-center 
      lg:w-2/4 sm:w-full lg:h-full sm:h-2/4"
      >
        <img src={thinking} alt="thinking" loading="lazy" className="z-10" />
        <img
          src={ellipsis}
          alt="thinking"
          loading="lazy"
          className="ellipsis-position"
        />
      </div>
      <div
        data-aos="fade-up-left"
        className="box-2 flex flex-col justify-center items-start flex-wrap 
      lg:w-2/4 sm:w-full lg:h-full sm:h-2/4"
      >
        <h1>
          Judging Criteria <span className="colored-text">Key attributes</span>
        </h1>
        <div className="paragraph-container flex flex-col mb-2">
          <p>
            <span className="colored-text">Innovation and Creativity:</span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
        </div>
        <div className="paragraph-container flex flex-col mb-2">
          <p>
            <span className="colored-text">Functionality:</span>
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </p>
        </div>
        <div className="paragraph-container flex flex-col mb-2">
          <p>
            <span className="colored-text">Impact and Relevance:</span>
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
        </div>
        <div className="paragraph-container flex flex-col mb-2">
          <p>
            <span>Technical Complexity:</span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
        </div>
        <div className="paragraph-container flex flex-col mb-2">
          <p>
            <span className="colored-text">Adherence to Hackathon Rules:</span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
        </div>

        <div className="mt-6">
          <Button text="Read more" />
        </div>
      </div>

      <Star top="320%" left="20%" color="#d434fe" type="tween" />
      <Star top="360%" left="40%" color="#903aff" type="spring" />
      <Star top="400%" left="60%" color="#ffffff" type="tween" />
    </motion.div>
  );
}
