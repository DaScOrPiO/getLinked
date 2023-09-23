/* eslint-disable react/no-unescaped-entities */
import bigIdea from "../../assets/images/the big idea 1.svg";
import Star from "../reusables/Star";
import arrow from "../../assets/images/arrow.svg";

export default function Section2() {
  return (
    <div
      className="section-2-items mt-12 w-full lg:h-full sm:h-auto py-12 
    flex flex-wrap lg:flex-row sm:flex-col items-center"
    >
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="box-1 flex justify-center items-center lg:w-2/4 sm:w-full lg:h-full sm:h-2/4 py-8"
      >
        <img src={bigIdea} alt="idea" loading="lazy" />
      </div>

      <div
        className="box-2 flex flex-col justify-center items-center lg:w-2/4 sm:w-full 
      lg:h-full sm:h-2/4 break-words"
      >
        <h1>
          Introduction to getlinked{" "}
          <span className="colored-text">techHackathon 1.0</span>
        </h1>
        <p>
          Our tech hackhathon is a melting pot of visionaries, and its purpose
          is as clear as day: to shape the future. Whether you're a coding
          genius, a design maverick, or a concept wizard. You'll have the chance
          to transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology. and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>

      <div className="arrow-position">
        <img src={arrow} alt="arrow" />
      </div>

      <Star top="160%" left="5%" color="#d434fe" type="tween" />
      <Star top="160%" left="90%" color="#903aff" type="spring" />
    </div>
  );
}
