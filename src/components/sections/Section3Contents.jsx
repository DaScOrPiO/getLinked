/* eslint-disable react/no-unescaped-entities */
import lady from "../../assets/images/ladyReading.svg";
import Star from "../reusables/Star";

export default function Section3() {
  return (
    <div className="section-3-items flex flex-wrap-reverse lg:flex-row sm:flex-col w-full sm:h-auto lg:h-full py-12">
      <div
        data-aos="fade-left"
        className="box-1 flex items-center justify-center flex-col break-words 
      lg:w-2/4 sm:w-full lg:h-full sm:h-2/4 lg:m-auto"
      >
        <h1>
          Rules and <span className="colored-text">Guidelines</span>{" "}
        </h1>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div
        data-aos="fade-right"
        className="box-2 flex items-center justify-center flex-col lg:w-2/4 
      sm:w-full lg:h-full sm:h-2/4"
      >
        <img src={lady} alt="reading" />
      </div>

      <Star top="260%" left="40%" color="#d434fe" type="tween" />
      <Star top="300%" left="60%" color="#ffffff" type="tween" />
    </div>
  );
}
