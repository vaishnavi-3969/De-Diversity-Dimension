import React from 'react';
import PropTypes from 'prop-types';

const CommunityCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4 text-center flex flex-col items-center">
      <img className="w-[250px] h-25 object-cover rounded-md mb-4" src={imageUrl} alt={title} />
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-200 mb-4">{description}</p>
      <a href={link} className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Explore Community
      </a>
    </div>
  );
};

CommunityCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CommunityCard;
