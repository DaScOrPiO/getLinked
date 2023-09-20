/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import Button from "../reusables/Button";
import navSvg from "../../assets/images/Hamburger.svg";
import closeSvg from "../../assets/images/close.svg";
import RegularNav from "./RegularNav";
import MobileNav from "./MobileNav";

export default function Navigation() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [showobileNav, setShowMobileNav] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowMobileNav(!showobileNav);
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navigation-container flex py-10 justify-between items-center">
      <div className="brand-text w-1/4">
        get<span className="colored-text">linked</span>
      </div>

      <div className="hamburger z-30" onClick={toggleNav}>
        {!showobileNav ? (
          <img src={navSvg} alt="hamburger" />
        ) : (
          <img src={closeSvg} alt="close" />
        )}
      </div>
      <RegularNav
        innerWidth={viewportWidth}
        showNav={showNav}
        setShowNav={setShowNav}
      />
      <MobileNav
        innerWidth={viewportWidth}
        showNav={showobileNav}
        setShowMobileNav={setShowMobileNav}
      />
    </nav>
  );
}
