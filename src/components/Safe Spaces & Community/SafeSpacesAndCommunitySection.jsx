import React from 'react';
import CommunityCard from './CommunitySpaceCard';
import SafeSpaceCard from './SafeSpaceCard';
import Rainbow from '../../assets/rainbow.png';
import Feathers from '../../assets/feathers.png';
import HeartChain from '../../assets/heartChain.png';
import Heart from '../../assets/heart.png';

const SafeSpacesAndCommunitySection = () => {
  const safeSpacesData = [
    {
      title: 'LGBTQ+ Support Centers',
      description: 'Find LGBTQ+ support centers in your area where you can access resources, counseling, and community events.',
      imageUrl: Rainbow,
      link: '/lgbtq-support-centers',
    },
    {
      title: 'Online LGBTQ+ Communities',
      description: 'Join online communities and forums where you can connect with LGBTQ+ individuals from around the world.',
      imageUrl: Feathers,
      link: '/online-lgbtq-communities',
    },
  ];

  const communityData = [
    {
      title: 'LGBTQ+ Events and Meetups',
      description: 'Discover LGBTQ+ events and meetups in your area to socialize, network, and make new connections.',
      imageUrl: HeartChain,
      link: '/lgbtq-events-meetups',
    },
    {
      title: 'Ally Organizations and Groups',
      description: 'Connect with organizations and groups that support LGBTQ+ rights and allyship.',
      imageUrl: Heart,
      link: '/ally-organizations-groups',
    },
  ];

  return (
    <div className="flex bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 min-h-screen">
      <div className="bg-gray-800 text-white py-4 px-6 flex-shrink-0">        
      </div>

      <div className="flex flex-col items-center justify-center p-8 w-full">
        <h2 className="text-4xl font-bold text-white mb-6">Safe Spaces</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {safeSpacesData.map((safeSpace, index) => (
            <SafeSpaceCard key={index} {...safeSpace} />
          ))}
        </div>

        <h2 className="text-4xl font-bold text-white mt-12 mb-6">Community</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {communityData.map((community, index) => (
            <CommunityCard key={index} {...community} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafeSpacesAndCommunitySection;
