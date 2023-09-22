/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import Button from "../reusables/Button";
import { useLayoutEffect, useRef } from "react";

export default function RegularNav({ innerWidth, showNav, setShowNav }) {
  const regularNav = useRef();

  // Check viewport width for Nav display
  useLayoutEffect(() => {
    if (innerWidth <= 767) {
      setShowNav(true);
    } else if (innerWidth > 767 && innerWidth <= 1023) {
      setShowNav(false);
    } else {
      if (innerWidth >= 1024) {
        setShowNav(false);
      }
    }
  }, [innerWidth, showNav, setShowNav]);

  // Navigate to register page
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/register");
  };

  return (
    <>
      {!showNav && (
        <div className="navigations flex justify-around w-3/4" ref={regularNav}>
          <ul className="links-container flex">
            <li className="links lg:mr-10 md:mr-5">
              <NavLink to="/timeline" className={({ isActive }) => (isActive ? 'active-link' : '')}>Timeline</NavLink>
            </li>

            <li className="links lg:mr-10 md:mr-5">
              <NavLink to="/overview" className={({ isActive }) => (isActive ? 'active-link' : '')}>Overview</NavLink>
            </li>

            <li className="links lg:mr-10 md:mr-5">
              <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active-link' : '')}>FaQs</NavLink>
            </li>

            <li className="links">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
          <Button text="Register" click={redirect} />
          <Outlet />
        </div>
      )}
    </>
  );
}
