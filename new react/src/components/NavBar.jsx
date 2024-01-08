
import React from "react";

const ECard = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden rounded-md">
      <div className="bg-blue-500 p-4 text-white">
        <h2 className="text-2xl font-semibold">Happy Birthday!</h2>
      </div>
      <div className="p-4">
        <p className="text-gray-700">
          Wishing you a fantastic day filled with joy and laughter. May all your
          dreams come true!
        </p>
      </div>
      <div className="p-4 flex justify-center space-x-4">
        <a
          href="#"
          className="text-blue-500 hover:text-blue-700 transition duration-300"
        >
          <i className="fab fa-facebook-square text-3xl"></i>
        </a>
        <a
          href="#"
          className="text-blue-400 hover:text-blue-600 transition duration-300"
        >
          <i className="fab fa-twitter-square text-3xl"></i>
        </a>
        <a
          href="#"
          className="text-red-500 hover:text-red-700 transition duration-300"
        >
          <i className="fab fa-instagram-square text-3xl"></i>
        </a>
        <a
          href="#"
          className="text-blue-700 hover:text-blue-900 transition duration-300"
        >
          <i className="fab fa-linkedin text-3xl"></i>
        </a>
      </div>
    </div>
  );
};

export default ECard;
