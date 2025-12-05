import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";   // fixed naming
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Contact from "./Pages/Contact";     // fixed spelling

import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="font-sans mt-16">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Testimonials />
                <Footer />
              </>
            }
          />

          {/* Courses */}
          <Route path="/courses" element={<Courses />} />

          {/* Signup */}
          <Route path="/signup" element={<SignUp />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* 404 Not Found */}
          <Route path="*" element={<h1 className="text-center mt-20">404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}
