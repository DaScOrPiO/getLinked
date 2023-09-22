import Button from "../reusables/Button";
import lock from "../../assets/images/lock.svg";
import standingMan from "../../assets/images/standingMan.svg";
import Star from "../reusables/Star";

export default function Section9() {
  return (
    <div className="section-9-items flex lg:flex-row sm:flex-col lg:flex-nowrap sm:flex-wrap w-full justify-center items-center py-12">
      <div className="box-1 flex lg:w-2/4 sm:w-full flex-col">
        <div className="text-wrapper flex flex-col">
          <h1 className="mb-2">
            Privacy Policy and <span className="colored-text">Terms</span>
          </h1>
          <small className="mb-2">Last updated on September 12, 2023</small>
          <p className="mb-2">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
        </div>

        <div className="texts flex flex-col lg:w-3/4 sm:w-full mt-12 py-6 px-6 justify-start items-start">
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>

          <p className="head-p colored-text mt-12">Licensing Policy</p>
          <h6 className="head-p">Here are terms of our Standard License:</h6>
          <ul className="list-con mb-6 px-12 mt-4">
            <li className="mt-2">
              The Standard License grants you a non-exclusive right to navigate
              and register for our event.
            </li>

            <li className="mt-2">
              You are licensed to use the item available at any free source
              sites, for your project developement.
            </li>
          </ul>

          <div className="flex items-center justify-center w-full">
            <Button text="Read more" />
          </div>
        </div>
      </div>
      <div className="box-2 flex flex-col justify-center items-center">
        <div className="image-1 flex items-end">
          <img src={lock} alt="lock" />
        </div>
        <div className="image-2 flex items-start -mt-48">
          <img src={standingMan} alt="standing-man" />
        </div>
      </div>

      <Star top="910%" left="40%" color="darkgray" />
      <Star top="930%" left="60%" color="#d434fe" />
      <Star top="890%" left="80%" color="#ffffff" />
      <Star top="980%" left="2%" color="#d434fe" />
      <Star top="960%" left="65%" color="#ffffff" />
      <Star top="990%" left="90%" color="darkgray" />
      <Star top="997%" left="50%" color="#903aff" />
    </div>
  );
}
