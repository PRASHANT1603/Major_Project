import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Signup from "./components/signUp";

import { Routes, Route } from "react-router-dom";




import "./App.css";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
