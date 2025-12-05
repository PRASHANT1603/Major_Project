import React,{ useState } from "react";

// import Dashboard from "";
import SignUp from "./Signup";


export default function Hero() {
  const [showDashboard, setDashboard] = useState(false);
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-28 bg-gradient-to-r from-blue-100 to-blue-50 ">
      <div className="max-w-lg text-center md:text-left m-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Ace Your IELTS with Confidence
        </h2>
        <p className="text-gray-600 mb-6">
          Join our expert-led courses and boost your band score with AI-driven
          tools.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition" onClick={() => setDashboard(true) }>
          Get Started
        </button>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition" onClick={() => setDashboard(false) }>
          Get Started
        </button>
        {/* <div>
          {showDashboard ? <Dashboard /> : <SignUp/>}
        </div> */}
      </div>
      <img
        // class="mix-blend-multiply"
        src="media\ielts-speaking-part-1.jpg"
        alt="Students preparing for IELTS"
        className="w-full md:w-1/2 mt-8 md:mt-0  mix-blend-multiply"
      />
    </section>
  );
}
