import LandingPage from "../pages/landingPage";
import Contact from "../pages/contact";
import Register from "../pages/register";
import NoPage from "../src/components/reusables/NoPage";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/nav/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <header className="header px-12">
        <Navigation />
      </header>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        rtl={false}
        theme="dark"
      />
    </>
  );
}

export default App;
