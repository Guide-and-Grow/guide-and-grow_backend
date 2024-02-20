import React, { useState } from "react";
import Contact from "./../../assets/contact-us.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-center mt-3">
          📞Contact Us
        </h2>
        <p className="font-xl text-center">
          {" "}
          Guide and Grow, we are committed to providing exceptional support to
          help you navigate through your projects and facilitate your growth.
          Our team is passionate about empowering you to reach your full
          potential and achieve your goals.
        </p>
        <div className="flex flex-wrap bg-slate-200 p-3 mt-5 rounded mb-10 shadow-md">
          {/* Image Section */}
          <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
            <div className="text-center">
              <img
                src={Contact}
                alt="views"
                width={270}
                height={270}
                className="mx-auto"
              />
              <div className="max-w-md mx-auto bg-white p-3 rounded-md shadow-md">
                <p className="text-gray-600 mb-3 text-start">
                  📩 guideandgrow@gmail.com
                </p>
                <p className="text-gray-600 mb-3 text-start">
                  📞 +91 92846 01701, +91 93737 00515
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
              <div className="mb-5">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 placeholder-gray-400 border text-gray-700  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="info@guideandgrow.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 placeholder-gray-400 border text-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base"
                />
              </div>
              <div className="mb-5">
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="+91 1234 5678 90"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 placeholder-gray-400 border text-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base"
                />
              </div>
              <div className="mb-5">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 placeholder-gray-400 border text-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-center mt-5">
          Guide & Grow Team Support
        </h2>

        <div className="py-2">
          <div className="container mx-auto p-3">
            <p className="mb-4">
              If you have questions related to project guidance or any other
              growth-related queries, please contact our support team:
            </p>

            <p className="text-gray-600 mb-3 bg-white p-2 rounded-md shadow-md">
              📩 contact@guideandgrow.com
            </p>
            <p className="mt-4">
              We appreciate your commitment to growth with Guide and Grow. Our
              mission is to provide exceptional support and ensure your journey
              is enriching and rewarding.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
