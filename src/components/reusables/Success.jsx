/* eslint-disable react/prop-types */
import check from "../../assets/images/successfully-done-5108472-4288033 1.svg";
import happyman from "../../assets/images/successful-man-3025713-2526911 1.svg";
import Button from "./Button";

export default function Success({ func }) {
  return (
    <div className="successful">
      <div
        className="success-check-container flex flex-col w-full
        px-12 justify-center items-center"
      >
        <div className="flex">
          <div className="-mx-12">
            <img src={check} alt="done" />
          </div>

          <div className="-mx-12">
            <img src={happyman} alt="man" />
          </div>
        </div>
        <h1>Congratulations</h1>
        <h1 className="mt-2">You have Successfully Registered</h1>
        <small className="mt-2">
          Yes, it was easy and you did it! check your mail box for next step
        </small>

        <div className="w-full flex justify-center items-center mt-4">
          <Button text="Back" click={() => func()} />
        </div>
      </div>
    </div>
  );
}
