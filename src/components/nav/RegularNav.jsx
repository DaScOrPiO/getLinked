/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, Outlet } from "react-router-dom";
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
              <Link to="#">Timeline</Link>
            </li>

            <li className="links lg:mr-10 md:mr-5">
              <Link to="#">Overview</Link>
            </li>

            <li className="links lg:mr-10 md:mr-5">
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
