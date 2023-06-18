import React from 'react';
import PropTypes from 'prop-types';

const AdvocacyCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="flex bg-gray-800 rounded-lg shadow-lg p-4">
      <div className="flex flex-col">
        <img className="w-full h-90 object-cover rounded-md mb-4" src={imageUrl} alt={title} />
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <a href={link} className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Learn More
        </a>
      </div>
    </div>
  );
};

AdvocacyCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default AdvocacyCard;
