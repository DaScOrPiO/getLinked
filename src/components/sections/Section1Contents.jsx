import Button from "../reusables/Button";
import man from "../../assets/images/man-wearing-smart-glasses-touching-virtual-screen.svg";
import world from "../../assets/images/tech-world.svg";
import chain from "../../assets/images/chain-9365116-7621444 (1).png";
import creative from "../../assets/images/Creative 1 (1).png";
import unnamed from "../../assets/images/1f4a5 (1).png";
import line from "../../assets/images/line.svg";
import Star from "../reusables/Star";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, LazyMotion, domAnimation, m } from "framer-motion";

export default function Section1() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the current time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Function to format a number with leading zero
  const formatWithLeadingZero = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  // Function to get the current hour in 12-hour format
  const getCurrentHourIn12HourFormat = () => {
    const hours = currentTime.getHours() % 12 || 12; // Convert 0 to 12 for 12-hour format
    return `${hours}`;
  };

  const navigate = useNavigate();
  const redirect = () => {
    navigate("/register");
  };

  return (
    <div className="section-1-items w-full py-12 mb-48">
      <div className="flex flex-col items-end">
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
            <Button text="Register" click={redirect} />
          </div>

          <div className="time">
            <h1>
              {getCurrentHourIn12HourFormat()}
              <span className="mr-2">H </span>
              {formatWithLeadingZero(currentTime.getMinutes())}
              <span>M</span>
              {formatWithLeadingZero(currentTime.getSeconds())}
              <span>s</span>{" "}
            </h1>
          </div>
        </div>

        <div className="box-2 lg:h-full sm:h-2/4 lg:w-2/4 sm:w-full">
          <LazyMotion features={domAnimation}>
            <m.div
              className="image-con-1"
              initial={{ x: 2 }}
              animate={{ x: 0 }}
              transition={{
                duration: 5,
                type: "spring",
                stiffness: 120,
                repeat: Infinity,
              }}
            >
              <img src={man} alt="man" loading="lazy" />
            </m.div>
          </LazyMotion>
          <motion.div
            className="image-con-2"
            initial={{ rotate: 0, opacity: 0.5 }}
            animate={{ rotate: 360, opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <img src={world} alt="digital world" loading="lazy" />
          </motion.div>
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

      <Star top="30%" left="6%" color="#fff" type="tween" />
      <Star top="38%" left="52%" color="darkgray" type="spring" />
      <Star top="100%" left="30%" color="darkgray" type="spring" />
    </div>
  );
}
