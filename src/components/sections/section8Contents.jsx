/* eslint-disable no-unused-vars */
import logo1 from "../../assets/images/Liberty company logo white colour.svg";
import logo2 from "../../assets/images/Liberty company logo white.svg";
import logo3 from "../../assets/images/wisper logo white.svg";
import logo4 from "../../assets/images/Winwise logo White colour 1.svg";
import line from "../../assets/images/Line 13.svg";
// import line2 from "../../assets/images/Line 19.svg"
import Star from "../reusables/Star";

export default function Section8() {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="section-8-items flex flex-col justify-center items-center py-8"
    >
      <div className="top-section mb-6 flex justify-center items-center flex-col">
        <h1>Partners and Sponsors</h1>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>

      <div className="box-1 flex flex-col  lg:w-3/4 sm:w-full justify-center items-center py-24">
        <div className="item-top flex px-6 justify-center items-center w-full mb-6">
          <div className="svg-container-1 w-1/3 flex justify-center items-center ">
            <img src={logo1} alt="company-logo" />
            {/* <img src={line} alt="line" className="line-1" /> */}
          </div>
          <div className="svg-container-1 w-1/3 flex justify-center items-center mx-4 ">
            <img src={logo2} alt="company-logo" />
            {/* <img src={line} alt="line" className="line-1 mx-12" /> */}
          </div>
          <div className="svg-container-1 w-1/3 flex justify-center items-center ">
            <img src={logo3} alt="company-logo" />
          </div>
        </div>
        <div className="item-bottom flex justify-center items-end px-6 w-full mt-4">
          <div className="svg-container-2 w-1/3 flex justify-center items-center ">
            <img src={logo4} alt="" />
            {/* <img src={line} alt="line" className="line-1 mx-12" /> */}
          </div>
          <div className="svg-container-2 w-1/3 flex justify-center items-center mx-4">
            <h1>
              Pay<span className="blue-text">box</span>
            </h1>
          </div>
          <div className="svg-container-2 w-1/3 flex justify-center items-center ">
            <h1>
              Vuzual <span className="text-red-600">Plus</span>
            </h1>
          </div>
        </div>
      </div>

      {/* <Star top="780%" left="5%" color="#903aff" />
      <Star top="800%" left="50%" color="#d434fe" />
      <Star top="850%" left="55%" color="#ffffff" /> */}
    </div>
  );
}
