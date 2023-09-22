import linkedIn from "../../assets/images/ri_linkedin-fill.svg";
import X from "../../assets/images/X.svg";
import facebook from "../../assets/images/facebook.svg";
import insagram from "../../assets/images/mdi_instagram.svg";
import { Link } from "react-router-dom";
import cell from "../../assets/images/cell.svg";
import location from "../../assets/images/location.svg";

export default function Footer() {
  return (
    <div className="footer-section w-full py-24 px-12">
      <div className="footer-content-wrapper flex lg:flex-row sm:flex-col flex-wrap w-full justify-start">
        <div className="box-1 flex lg:w-1/3 sm:w-full flex-col lg:px-8 mt-6">
          <div className="top w-full">
            <h1 className="colored-text">Getlinked</h1>
            <p className="mb-12">
              Getlinked tech Hackkathon is a technology innovation program
              established by a group of organization with the aim of show casing
              young and talented individuals in the field of technology.
            </p>
          </div>

          <div className="small-text flex justify-around">
            <p>Terms of use</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div className="box-2 flex lg:w-1/3 sm:w-full flex-col lg:px-8 mt-6">
          <h1 className="colored-text">Useful Links</h1>
          <ul>
            <li className="mt-4">Overview</li>
            <li className="mt-4">Timelne</li>
            <li className="mt-4">Register</li>
          </ul>

          <div className="flex px-4 justify-between mt-4 flex-wrap">
            <h1 className="colored-text">Follow us</h1>

            <Link to="https://instagram.com/">
              <img src={insagram} alt="instagram" />
            </Link>
            <Link to="x.com/oladunni_faith">
              <img src={X} alt="X(formerly twitter)" />
            </Link>
            <Link to="facebook.com">
              <img src={facebook} alt="facebook" />
            </Link>
            <Link to="https://linkedin.com/in/oladunni">
              <img src={linkedIn} alt="linkedIn" />
            </Link>
          </div>
        </div>
        <div className="box-3 flex lg:w-1/3 sm:w-full flex-col lg:px-8 flex-wrap">
          <h1 className="colored-text">Contact us</h1>
          <div className="contact-1 flex mt-4 px-8 justify-around">
            <img src={cell} alt="phone" />
            <p>+234 679 81819</p>
          </div>
          <div className="contact-2 flex px-8 justify-around mt-4">
            <img src={location} alt="location" />
            <p>27,Alara Street Yaba 100012 Lagos State</p>
          </div>
        </div>
      </div>
      <div>
        <p className="last-text flex justify-center items-center mt-4">
          All right reserved. <span className="text-black">&copy;</span> getlinked Ltd.
        </p>
      </div>
    </div>
  );
}
