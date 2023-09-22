import LandingPage from "../pages/landingPage";
import Contact from "../pages/contact";
import Register from "../pages/register";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/nav/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <header className="header px-12">
        <Navigation />
      </header>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
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
