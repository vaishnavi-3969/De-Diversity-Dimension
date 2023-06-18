import React from 'react';
import GameCard from './GameCard';
import Dinosaur from '../../assets/dinosaur.png';
import Cake from '../../assets/cake.png';

const LGBTQEducation = () => {
  const games = [
    {
      title: 'LGBTQ+ History Trivia',
      description: 'Test your knowledge of LGBTQ+ history with this trivia game!',
      imageUrl: Dinosaur,
      link: '/games/trivia',
    },
    {
      title: 'Pride Quiz',
      description: 'Find out how much you know about different aspects of LGBTQ+ pride!',
      imageUrl:Cake,
      link: '/games/quiz',
    },
  ];

  return (
    <div className=" bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 min-h-screen">
      <div className="flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">LGBTQ+ Inclusivity Education</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {games.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LGBTQEducation;
