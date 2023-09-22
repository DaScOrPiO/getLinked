import X from "../src/assets/images/X.svg";
import linkedIn from "../src/assets/images/ri_linkedin-fill.svg";
import instagram from "../src/assets/images/mdi_instagram.svg";
import facebook from "../src/assets/images/facebook.svg";
import { Link } from "react-router-dom";
import Button from "../src/components/reusables/Button";
import { useState } from "react";
import { baseUrl, contact } from "../src/endpoints/endpoints";
import axios from "axios";

export default function Contact() {
  const [Input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const req_body = {
      email: Input.email,
      first_name: Input.name,
      message: Input.message,
    };

    try {
      if (Input.email !== "" && Input.message !== "" && Input.name !== "") {
        const url = baseUrl + contact;
        const req = await axios.post(url, req_body);
        console.log(req);
      } else {
        alert("Invalid input(s)");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="contact-container flex sm:flex-col lg:flex-row w-full flex-wrap px-12 py-6">
      <div className="message flex flex-col lg:w-2/4 sm:w-full py-8 justify-center items-start mt-12">
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
          <label htmlFor="name" id="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
            required
            className="input mt-6"
            value={Input.name}
            onChange={handleChange}
          />
          <label htmlFor="email" id="mail"></label>
          <input
            type="email"
            name="email"
            id="mail"
            placeholder="Mail"
            required
            className="input mt-6"
            value={Input.email}
            onChange={handleChange}
          />
          <label htmlFor="message" id="message"></label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="input mt-6"
            placeholder="message"
            required
            value={Input.message}
            onChange={handleChange}
          ></textarea>

          <div className="flex justify-center items-center w-full mt-6">
            <Button text="submit" click={sendMessage} />
          </div>
        </form>
      </div>
    </div>
  );
}
