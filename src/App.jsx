import LandingPage from "./pages/landingPage";
import Contact from "./pages/contact";
import Register from "./pages/register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
