import React from 'react';
import GuidedMeditation from '../../assets/medit.gif';
import Meditation from '../../assets/meditation.png';
import VirtualPet from '../../assets/cat.png';
import Journaling from '../../assets/journaling.png';

const MentalHealthSupport = () => {
  const handleResourceClick = (resource) => {
    console.log(`${resource} clicked`);
  };

  const resources = [
    {
      id: 1,
      title: 'Virtual Pet',
      description: 'Take care of a virtual pet to reduce stress and anxiety.',
      buttonText: 'Start Virtual Pet',
      imageUrl: VirtualPet,
    },
    {
      id: 2,
      title: 'Journaling',
      description: 'Express your thoughts and emotions through journaling for self-reflection and mental well-being.',
      buttonText: 'Start Journaling',
      imageUrl: Journaling,
    },
    {
      id: 3,
      title: 'Breathing Exercises',
      description: 'Learn and practice deep breathing exercises to promote relaxation and mindfulness.',
      buttonText: 'Start Breathing Exercises',
      imageUrl: Meditation,
    },
    {
      id: 4,
      title: 'Guided Meditation',
      description: 'Listen to guided meditation sessions to reduce stress and enhance emotional well-being.',
      buttonText: 'Start Guided Meditation',
      imageUrl: GuidedMeditation,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 min-h-screen">
      <div className="flex">
      <div className='px-8'>

      </div>
        <div className="flex flex-col items-center justify-center p-8">
          <h2 className="text-4xl font-bold text-white mb-6">Mental Health Resources</h2>

          <div className="resource-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource) => (
              <div key={resource.id} className="resource-card bg-gray-900 rounded-lg p-6 text-white w-[350px]">
                <img src={resource.imageUrl} alt={resource.title} className="w-full h-100 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="mb-4">{resource.description}</p>
                <button
                  onClick={() => handleResourceClick(resource.title)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  {resource.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthSupport;
