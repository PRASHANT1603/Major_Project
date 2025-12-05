import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Slidebar";
import SpeakingCard from "../Cards/Speaking";
import Writing from "../Cards/Writing";
import Reading from "../Cards/Reading";
import Listening from "../Cards/Listing";

const Hero = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="ml-64 p-10 flex-1 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to IELTS Dashboard
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Track your learning, manage lessons, and monitor your progress easily.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Speaking Practice</h3>
            <p className="text-gray-500">
              Improve your fluency with AI-powered speaking tests.
            </p>
          </div> */}
{/* 
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Mock Tests</h3>
            <p className="text-gray-500">
              Take timed tests and get instant feedback with scores.
            </p>
          </div> */}

          <div className="flex flex-col gap-6 max-w-md mx-auto">
            <Link  to="Speaking"><SpeakingCard/></Link>
            <Link  to="Reading"> <Reading /></Link>
            <Link  to="Writing"> <Writing /></Link>
            <Link  to="Listening"><Listening /></Link>
           
           
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
