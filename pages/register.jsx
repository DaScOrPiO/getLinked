/* eslint-disable react/no-unescaped-entities */
import man from "../src/assets/images/d-graphic-designer-showing-thumbs-up-png-1.svg";
import person1 from "../src/assets/images/person1.svg";
import person2 from "../src/assets/images/person2.svg";
import Button from "../src/components/reusables/Button";

export default function Register() {
  return (
    <div
      className="register flex sm:flex-col lg:flex-row px-12 
  w-full justify-center items-center flex-wrap"
    >
      <div
        className="image flex sm:flex-col lg:flex-row lg:w-2/4 sm:w-full 
    justify-center items-center"
      >
        <img src={man} alt="man" />
      </div>
      <div
        className="form-container mt-12 mb-12 flex flex-col lg:w-2/4 sm:w-full 
    justify-center items-center"
      >
        <div className="box-1 flex flex-col px-12 w-full">
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
                  name=""
                  id="team-name"
                  placeholder="Enter the name of your group"
                  className="input"
                  required
                />
              </div>
              <div className="input-container sm:w-full lg:w-2/4 mb-8 flex flex-col mx-5">
                <label htmlFor="phone-number" id="phone">
                  Phone
                </label>
                <input
                  type="text"
                  name=""
                  id="phone"
                  className="input"
                  placeholder="Enter your phone number"
                  required
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
                  name=""
                  id="mail"
                  className="input"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="input-container sm:w-full lg:w-2/4 mb-8 flex flex-col flex-wrap">
                <label htmlFor="project-topic" id="topic">
                  Project Topic
                </label>
                <input
                  type="text"
                  name=""
                  id="topic"
                  className="input"
                  placeholder="What is your project topic"
                  required
                />
              </div>
            </div>

            <div className="inputs-container special flex w-full flex-wrap">
              <div className="input-container sm:w-full lg:w-2/4 mb-8 flex flex-col flex-wrap">
                <label htmlFor="category" id="category">
                  category
                </label>
                <select name="" id="category" className="input" required>
                  <option value="category1">Category1</option>
                  <option value="category1">Category1</option>
                </select>
              </div>
              <div className="input-container sm:w-full lg:w-2/4 mb-8 flex flex-col flex-wrap">
                <label htmlFor="group-size" id="size">
                  Size
                </label>
                <select name="" id="size" className="input" required>
                  <option value="size1">Size1</option>
                  <option value="size2">Size2</option>
                </select>
              </div>
            </div>
            <small className="review">
              Please review your registration details before submitting
            </small>
            <div className="agree flex">
              <input type="checkbox" id="check" className="mx-2" />
              <label htmlFor="confirm" id="check">
                I agreed with the event terms and conditions and privacy policy
              </label>
            </div>

            <div className="flex justify-center items-center mt-12 mb-12">
              <Button text="Register now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
