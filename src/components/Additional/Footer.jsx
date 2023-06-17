import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-gray-300">© 2023 Your Company. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-gray-300 hover:text-gray-100">Home</a>
          </li>
          <li>
            <a href="/" className="text-gray-300 hover:text-gray-100">About</a>
          </li>
          <li>
            <a href="/" className="text-gray-300 hover:text-gray-100">Services</a>
          </li>
          <li>
            <a href="/" className="text-gray-300 hover:text-gray-100">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
