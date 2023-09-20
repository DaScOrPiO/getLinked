/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, Outlet } from "react-router-dom";
import Button from "../reusables/Button";
import { useRef } from "react";

export default function MobileNav({ innerWidth, showNav, setShowMobileNav }) {
  const mobileNav = useRef();

  return (
    <>
      {innerWidth <= 767 && showNav && (
        <div
          className="navigations-mobile flex justify-around w-full z-20"
          ref={mobileNav}
        >
          <ul className="links-container flex">
            <li className="links">
              <Link to="#">Timeline</Link>
            </li>

            <li className="links">
              <Link to="#">Overview</Link>
            </li>

            <li className="links">
              <Link to="#">FaQs</Link>
            </li>

            <li className="links">
              <Link to="/contact">Contacts</Link>
            </li>
          </ul>
          <Button text="Register" />
          <Outlet />
        </div>
      )}
    </>
  );
}
