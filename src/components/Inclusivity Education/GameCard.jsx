import React from 'react';
import PropTypes from 'prop-types';

const GameCard = ({ game }) => {
  return (
    <div className="flex bg-gray-800 rounded-lg shadow-lg p-4">
      <div className="flex flex-col">
        <img className="w-full h-90 object-cover rounded-md mb-4" src={game.imageUrl} alt={game.title}/>
        <h3 className="text-xl font-bold mb-2 text-gray-100">{game.title}</h3>
        <p className="text-gray-700 mb-4 text-gray-200">{game.description}</p>
        <a href={game.link} className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Play Game
        </a>
      </div>
    </div>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameCard;
