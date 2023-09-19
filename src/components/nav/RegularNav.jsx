/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import Button from "../reusables/Button";
import { useLayoutEffect, useRef } from "react";

export default function RegularNav({ innerWidth, showNav, setShowNav }) {
  const regularNav = useRef();

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

  return (
    <>
      {!showNav && (
        <div className="navigations flex justify-around w-3/4" ref={regularNav}>
          <ul className="links-container flex">
            <li className="links lg:mr-10 md:mr-5">
              <NavLink href="#">Timeline</NavLink>
            </li>

            <li className="links lg:mr-10 md:mr-5">
              <NavLink href="#">Overview</NavLink>
            </li>

            <li className="links lg:mr-10 md:mr-5">
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
