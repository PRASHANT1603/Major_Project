import React from "react";
function Contact() {
  return ( 
   <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-2">
        Email: <span className="text-blue-600">support@ieltspro.com</span>
      </p>
      <p className="text-gray-700 mb-2">Phone: +91 98765 43210</p>
      <p className="text-gray-700 mb-2">Address: 123, Learning Street, Delhi, India</p>
      <form className="mt-6 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="border p-2 rounded"
          rows="4"
        ></textarea>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
   );
}

export default Contact;