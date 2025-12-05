import React from "react";

const Writing = () => {
  // Example data
  const completed = 7; // completed assignments
  const total = 10; // total assignments
  const progress = (completed / total) * 100;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full md:w-80 hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">✍️ Writing</h2>

      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-600 text-sm">Assignments</span>
        <span className="text-gray-800 font-semibold">
          {completed}/{total}
        </span>
      </div>

      {/* Music-style Progress Bar */}
      <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Small progress info */}
      <div className="text-right text-sm text-gray-500 mt-2">
        {progress.toFixed(0)}% Complete
      </div>
    </div>
  );
};

export default Writing;
