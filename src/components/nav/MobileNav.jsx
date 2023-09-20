/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
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
              <NavLink href="#">Timeline</NavLink>
            </li>

            <li className="links">
              <NavLink href="#">Overview</NavLink>
            </li>

            <li className="links">
              <NavLink href="#">FaQs</NavLink>
            </li>

            <li className="links">
              <NavLink href="#">Contacts</NavLink>
            </li>
          </ul>
          <Button text="Register" />
        </div>
      )}
    </>
  );
}
