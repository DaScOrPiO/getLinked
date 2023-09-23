/* eslint-disable react/no-unescaped-entities */
import { useLayoutEffect, useState } from "react";
import man from "../src/assets/images/d-graphic-designer-showing-thumbs-up-png-1.svg";
import person1 from "../src/assets/images/person1.svg";
import person2 from "../src/assets/images/person2.svg";
import Button from "../src/components/reusables/Button";
import {
  baseUrl,
  get_categories,
  post_register,
} from "../src/endpoints/endpoints";
import axios from "axios";
import Success from "../src/components/reusables/Success";
import { notifyError } from "../src/components/reusables/notify";
import Star from "../src/components/reusables/Star";
import { motion } from "framer-motion";

export default function Register() {
  const [categoryData, setCategoryData] = useState(null);
  const [renderSuccess, setRenderSuccess] = useState(false);
  const [Input, setInput] = useState({
    teamName: "",
    phone: "",
    email: "",
    topic: "",
    category: "",
    size: "",
    confirm: false,
  });

  //fetch categories data
  const getCategories = async () => {
    try {
      const req = await axios.get(baseUrl + get_categories);
      //update category
      setCategoryData(req.data);
    } catch (err) {
      notifyError("Something went wrong, couldn't fetch categories ☹");
    }
  };

  //handle input state
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  };

  // register applicant
  const register = async (e) => {
    const url = baseUrl + post_register;
    e.preventDefault();
    const req_body = {
      email: Input.email,
      team_name: Input.teamName,
      phone_number: Input.phone,
      project_topic: Input.topic,
      group_size: Input.size,
      privacy_poclicy_accepted: true,
      category: Input.category,
    };
    try {
      if (
        Input.email !== "" &&
        Input.teamName !== "" &&
        Input.phone !== "" &&
        Input.topic !== "" &&
        Input.size !== "" &&
        Input.confirm !== false &&
        Input.category !== ""
      ) {
        const req = await axios.post(url, req_body);
        console.log(req);
        if (req.status === 201) {
          setRenderSuccess(true);
        }
      } else {
        notifyError("Invalid input(s)");
      }
    } catch (err) {
      notifyError("Something went wrong with request ☹");
    }
  };

  const closeSuccess = () => {
    setRenderSuccess(!renderSuccess);
  };

  useLayoutEffect(() => {
    getCategories();
  }, []);

  return (
    <div
      className="register flex sm:flex-col lg:flex-row px-12 
  w-full justify-center items-center flex-wrap"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
        className="image flex sm:flex-col lg:flex-row lg:w-2/4 sm:w-full 
    justify-center items-center"
      >
        <img src={man} alt="man" loading="lazy" />
      </motion.div>
      <div
        className="form-container mt-12 mb-12 flex flex-col lg:w-2/4 sm:w-full 
    justify-center items-center"
      >
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="box-1 flex flex-col px-12 w-full"
        >
          <h1 className="mb-6 colored-text">Register</h1>
          <small className="flex mb-3">
            Be part of this movement{" "}
            <span className="flex">
              <img src={person1} alt="person" className="mx-2" />
              <img src={person2} alt="person" className="mx-2" />
            </span>{" "}
          </small>
          <h1 className="mb-8">Create Your Account</h1>

          <form
            action=""
            className="form-inputs-container flex flex-col w-full"
          >
            <div className="inputs-container flex w-full">
              <div className="input-container sm:w-full lg:w-2/4 mb-8 flex flex-col flex-wrap">
                <label htmlFor="team-name" id="team-name">
                  Team's name
                </label>
                <input
                  type="text"
                  name="teamName"
                  id="team-name"
                  placeholder="Enter the name of your group"
                  className="input"
                  required
                  value={Input.teamName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container sm:w-full lg:w-2/4 mb-8 flex flex-col mx-5">
                <label htmlFor="phone-number" id="phone">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="input"
                  placeholder="Enter your phone number"
                  required
                  value={Input.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="inputs-container flex w-full">
              <div className="input-container sm:w-full lg:w-2/4 mb-8 flex flex-col flex-wrap">
                <label htmlFor="email" id="mail">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="mail"
                  className="input"
                  placeholder="Enter your email address"
                  value={Input.email}
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container sm:w-full lg:w-2/4 mb-8 flex flex-col flex-wrap">
                <label htmlFor="project-topic" id="topic">
                  Project Topic
                </label>
                <input
                  type="text"
                  name="topic"
                  id="topic"
                  className="input"
                  placeholder="What is your project topic"
                  required
                  onChange={handleInputChange}
                  value={Input.topic}
                />
              </div>
            </div>

            <div className="inputs-container special flex w-full flex-wrap">
              <div className="input-container sm:w-full lg:w-2/4 mb-8 flex flex-col flex-wrap">
                <label htmlFor="category" id="category">
                  category
                </label>
                <select
                  name="category"
                  id="category"
                  className="input"
                  required
                  onChange={handleInputChange}
                >
                  {categoryData?.map((el) => (
                    <option key={el.id} value={el.id}>
                      {el.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-container sm:w-full lg:w-2/4 mb-8 flex flex-col flex-wrap">
                <label htmlFor="group-size" id="size">
                  Size
                </label>
                <select
                  name="size"
                  id="size"
                  className="input"
                  required
                  onChange={handleInputChange}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100+">100+</option>
                </select>
              </div>
            </div>
            <small className="review">
              Please review your registration details before submitting
            </small>
            <div className="agree flex">
              <input
                type="checkbox"
                id="check"
                name="confirm"
                className="mx-2"
                checked={Input.confirm}
                onChange={handleInputChange}
              />
              <label htmlFor="confirm" id="check">
                I agreed with the event terms and conditions and privacy policy
              </label>
            </div>

            <div className="flex justify-center items-center mt-12 mb-12">
              <Button text="Register now" click={register} />
            </div>
          </form>
        </motion.div>
      </div>

      {renderSuccess && <Success func={closeSuccess} />}
      <Star top="15%" left="2%" color="#d434fe" type="spring" />
      <Star top="8%" left="90%" color="darkgray" type="tween" />
      <Star top="80%" left="50%" color="#903aff" type="spring" />
      <Star top="90%" left="2%" color="darkgray" type="tween" />
    </div>
  );
}
