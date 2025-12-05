import React from "react";

const courses = [
  { title: "IELTS Speaking", description: "Improve your speaking skills with AI feedback." },
  { title: "IELTS Writing", description: "Practice writing tasks with personalized scoring." },
  { title: "IELTS Listening", description: "Sharpen your listening with real exam audios." },
  { title: "IELTS Reading", description: "Enhance reading comprehension and speed." },
];

export default function Courses() {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Our Courses</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-700">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
