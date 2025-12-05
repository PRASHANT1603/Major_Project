import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Speaking from "./Course/Speaking";
import "./App.css";
import Writing from "./Course/Writing";
import Reading from "./Course/Reading";
import Listening from "./Course/Listening";
// import Signup from "./components/signUp";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="font-sans mt-16">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/Writing" element={<Writing />} />
          <Route path="/Reading" element={<Reading />} />
          <Route path="/Listening" element={<Listening />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </div>
    </>
  );
}
