import React from "react";
import { Link } from "react-router-dom";
import { Home, BookOpen, BarChart, Calendar, Activity } from "lucide-react"; // icons

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-blue-900 text-white flex flex-col fixed left-0 top-0 shadow-lg">
      <h2 className="text-2xl font-bold p-6 border-b border-blue-700 text-center">
        IELTS Pro
      </h2>
      <ul className="flex-1 mt-6 space-y-2 px-4 ">
        <li className="hover:bg-blue-700 rounded-lg p-3 cursor-pointer flex items-center gap-3">
          <Home size={20} /> <Link to="/">Dashboard</Link>
        </li>
        <li className="hover:bg-blue-700 rounded-lg p-3 cursor-pointer flex items-center gap-3">
          <BookOpen size={20} /> <Link to="/lessons">Lessons</Link>
        </li>
        <li className="hover:bg-blue-700 rounded-lg p-3 cursor-pointer flex items-center gap-3">
          <BarChart size={20} /> <Link to="/progress">Progress</Link>
        </li>
        <li className="hover:bg-blue-700 rounded-lg p-3 cursor-pointer flex items-center gap-3">
          <Calendar size={20} /> <Link to="/schedule">Schedule</Link>
        </li>
        <li className="hover:bg-blue-700 rounded-lg p-3 cursor-pointer flex items-center gap-3">
          <Activity size={20} /> <Link to="/activity">Activity</Link>
        </li>
      </ul>
      <button className="md:hidden text-2xl">☰</button>

      <div className="p-4 border-t border-blue-700 text-sm text-center">
        © 2025 IELTS Pro
      </div>
    </div>
  );
};

export default Sidebar;
