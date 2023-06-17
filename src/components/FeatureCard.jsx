import React from 'react';
import { Link } from 'react-router-dom';

export function FeatureCard({ title, description, link, animationDelay, darkMode }) {
  return (
    <div
      className={`bg-gray-700 rounded-md shadow-md p-6 transform transition duration-500 hover:scale-105  hover:shadow-lg hover:bg-gray-600 animate-fadeIn`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
      <Link
        to={link}
        className={`inline-block mt-4 px-4 py-2 ${darkMode ? 'bg-indigo-700' : 'bg-indigo-500'} text-white rounded-md font-medium hover:bg-indigo-600 transition duration-300`}
      >
        Explore
      </Link>

    </div>

  );
}
