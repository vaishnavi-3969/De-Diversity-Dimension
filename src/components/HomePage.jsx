import React from 'react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-md">
        <p className="text-lg">Welcome to</p>
        <div className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          The Diversity Dimension
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <FeatureCard
            title="Mental Health Resources"
            description="Access resources tailored to LGBTQ+ mental health."
            link="/mental-health"
            animationDelay="100"
          />
          <FeatureCard
            title="LGBTQ+ Inclusivity Education"
            description="Learn about LGBTQ+ history, collaboration, and challenges."
            link="/inclusivity-education"
            animationDelay="200"
          />
          <FeatureCard
            title="Blog"
            description=""
            link = "/blog"
            animationDelay="200"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, link, animationDelay }) {
  return (
    <div
      className={`bg-white rounded-md shadow-md p-6 transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gray-50 animate-fadeIn`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <Link
        to={link}
        className="inline-block mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md font-medium hover:bg-indigo-600 transition duration-300"
      >
        Explore
      </Link>
    </div>
  );
}
