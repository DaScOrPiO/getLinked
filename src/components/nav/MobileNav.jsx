/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Button from "../reusables/Button";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav({ innerWidth, showNav, setShowMobileNav }) {
  const mobileNav = useRef();

  const navigate = useNavigate();
  const redirect = () => {
    navigate("/register");
  };

  return (
    <>
      <AnimatePresence>
        {innerWidth <= 767 && showNav && (
          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.8 }}
            className="navigations-mobile flex justify-around w-full z-20"
            ref={mobileNav}
          >
            <ul className="links-container flex">
              <li className="links">
                <NavLink
                  to="/timeline"
                  className={({ isActive }) => (!isActive ? "active" : "")}
                >
                  Timeline
                </NavLink>
              </li>

              <li className="links">
                <NavLink
                  to="/overview"
                  className={({ isActive }) => (!isActive ? "active" : "")}
                >
                  Overview
                </NavLink>
              </li>

              <li className="links">
                <NavLink
                  to="/faq"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  FaQs
                </NavLink>
              </li>

              <li className="links">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
            <Button text="Register" click={redirect} />
            <Outlet />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
