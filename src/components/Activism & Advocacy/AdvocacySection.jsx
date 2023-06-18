import React from 'react';
import AdvocacyCard from './AdvocacyCard';
import Announcement from '../../assets/announcement.png';
import Maps from '../../assets/maps.png';

const AdvocacySection = () => {
  const advocacyData = [
    {
      title: 'Support LGBTQ+ Organizations',
      description: 'Learn about and contribute to organizations that advocate for LGBTQ+ rights and provide support to the community.',
      imageUrl: Announcement,
      link: '/support-lgbtq-organizations',
    },
    {
      title: 'Attend Pride Events',
      description: 'Participate in local pride events and parades to show support and celebrate diversity.',
      imageUrl: Maps,
      link: '/attend-pride-events',
    },
  ];

  return (
    <div className="flex bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 min-h-screen">
      <div className="bg-gray-800 text-white py-4 px-6 flex-shrink-0">
      </div>

      <div className="flex flex-col items-center justify-center p-8 w-full">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Advocacy and Activism</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {advocacyData.map((advocacy, index) => (
            <AdvocacyCard key={index} {...advocacy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvocacySection;
