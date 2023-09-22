import X from "../src/assets/images/X.svg";
import linkedIn from "../src/assets/images/ri_linkedin-fill.svg";
import instagram from "../src/assets/images/mdi_instagram.svg";
import facebook from "../src/assets/images/facebook.svg";
import { Link } from "react-router-dom";
import Button from "../src/components/reusables/Button";

export default function Contact() {
  return (
    <div className="contact-container flex sm:flex-col lg:flex-row w-full flex-wrap px-12 py-6">
      <div className="message flex flex-col lg:w-2/4 sm:w-full py-8 justify-start items-start mt-12">
        <h1 className="colored-text">Get in Touch</h1>
        <p className="mt-5">Contact Information</p>

        <p className="mt-6">27,Alara Street Yaba 100012 Lagos State</p>

        <p className="mt-6">Call Us : 07067981819</p>

        <p className="mt-6">we are open from Monday-Friday 08:00am - 05:00pm</p>

        <div className="contact-links flex flex-col w-full flex-wrap">
          <p className="colored-text">Share on:</p>
          <div className="flex justify-around">
            <Link to="#">
              <img src={instagram} alt="instagram" />
            </Link>

            <Link to="#">
              <img src={X} alt="x(formerlly twitter)" />
            </Link>

            <Link to="#">
              <img src={facebook} alt="facebook" />
            </Link>

            <Link to="#">
              <img src={linkedIn} alt="linkedin" />
            </Link>
          </div>
        </div>
      </div>
      <div className="form flex flex-col px-12 py-6 mt-12 lg:w-2/4 sm:w-full">
        <h1 className="colored-text">Questions or need assistance?</h1>
        <p className="colored-text">Let us know about it!</p>

        <form action="" className="form-inputs flex flex-col">
          <input
            type="text"
            name=""
            id="name"
            placeholder="First Name"
            required
            className="input mt-6"
          />
          <input
            type="email"
            name=""
            id="name"
            placeholder="Mail"
            required
            className="input mt-6"
          />
          <textarea name="" id="" cols="30" rows="10" className="input mt-6" placeholder="message" required></textarea>

          <div className="flex justify-center items-center w-full mt-6">
            <Button text="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
