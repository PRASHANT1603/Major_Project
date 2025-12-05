import React, { useState } from "react";

const ListeningPractice = () => {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Sample audio file (replace with actual IELTS audio)
 const audioSrc = "media\\kill-your-laziness--learn-english-through-story--english-practice-story.mp3";

  const handleSubmit = () => {
    setSubmitted(true);
    // Here you can evaluate answer or save it
    console.log("User Answer:", answer);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">IELTS Listening Practice</h2>
      
      {/* Audio Player */}
      <audio controls className="w-full mb-4">
        <source src={audioSrc} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Question */}
      <p className="mb-2 font-medium">
        Question: What is the main topic discussed in the audio?
      </p>

      {/* User Answer Input */}
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Type your answer here..."
      />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Answer
      </button>

      {/* Feedback */}
      {submitted && (
        <p className="mt-4 text-green-600">
          Answer submitted! Your answer: "{answer}"
        </p>
      )}
    </div>
  );
};

export default ListeningPractice;
