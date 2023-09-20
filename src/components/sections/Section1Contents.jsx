import Button from "../reusables/Button";
import man from "../../assets/images/man-wearing-smart-glasses-touching-virtual-screen.svg";
import world from "../../assets/images/tech-world.svg";
import chain from "../../assets/images/chain-9365116-7621444 (1).png";
import creative from "../../assets/images/Creative 1 (1).png";
import unnamed from "../../assets/images/1f4a5 (1).png";
import line from "../../assets/images/line.svg";
import Star from "../reusables/Star";

export default function Section1() {
  return (
    <div className="section-1-items w-full py-12">
      <div className="flex flex-col items-end mb-24">
        <h1 className="text-left section-1-header">
          Igniting a Revolution in HR Innovation
        </h1>
        <img src={line} alt="line" />
      </div>
      <div className="flex w-full lg:flex-row sm:flex-col sm:flex-wrap relative">
        <div
          className="box-1 lg:w-2/4 lg:h-full sm:h-2/4 sm:w-full flex flex-col lg:justify-center 
        lg:items-start sm:justify-center sm:items-center"
        >
          <h1 className="section-1-header">
            Getlinked Tech Hackathon <span className="colored-text">1.0</span>
          </h1>
          <p className="mb-2">
            Participate in getlinked tech 2023 stand a chance to win a big price
          </p>
          <div className="lg:mb-24">
            <Button text="Register" />
          </div>

          <div className="time">
            <h1>
              00<span className="mr-2">H </span>00<span>M</span> 00
              <span>s</span>{" "}
            </h1>
          </div>
        </div>

        <div className="box-2 lg:h-full sm:h-2/4 lg:w-2/4 sm:w-full">
          <div className="image-con-1">
            <img src={man} alt="man" loading="lazy" />
          </div>
          <div className="image-con-2">
            <img src={world} alt="digital world" loading="lazy" />
          </div>
        </div>

        <div className="absolute creative-position">
          <img src={creative} alt="" />
        </div>
        <div className="absolute fire-position">
          <img src={unnamed} alt="" />
        </div>
        <div className="absolute chain-position">
          <img src={chain} alt="" />
        </div>
      </div>

      <Star top="30%" left="6%" color="#fff" />
      <Star top="38%" left="52%" color="darkgray" />
      <Star top="100%" left="30%" color="darkgray" />
    </div>
  );
}
