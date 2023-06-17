import React from 'react';
import { FeatureCard } from './FeatureCard';
import DarkLogo from '../assets/darkLogo.gif';
import AboutUs from './Additional/AboutUs';
import Team from './Additional/Team';

export function HomePage() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500">
        <div className="p-8 bg-gray-800 shadow-md rounded-md max-w-3x1">
          <p className="text-lg text-white">Welcome to</p>
          <div className="flex items-center text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500">
          <span><img src={DarkLogo} width={90}/></span> The Diversity Dimension
          </div>

          <div className="grid grid-cols-4 gap-4 mt-8 overflow-auto max-h-96 max-w-6xl">
            <FeatureCard
              title="Mental Health Resources"
              description="Access resources tailored to LGBTQ+ mental health."
              link="/mental-health"
              animationDelay="100"
              darkMode
            />
            <FeatureCard
              title="LGBTQ+ Inclusivity Education"
              description="Learn about LGBTQ+ history, collaboration, and challenges."
              link="/inclusivity-education"
              animationDelay="200"
              darkMode
            />
            <FeatureCard
              title="Blog"
              description="Express yourself and read diverse perspectives within the LGBTQ+ community."
              link="/blog"
              animationDelay="300"
              darkMode
            />
            <FeatureCard
              title="Safe Spaces & Community"
              description="Connect with other LGBTQ+ individuals and allies."
              link="/safe-spaces-and-community"
              animationDelay="400"
              darkMode
            />
            <FeatureCard
              title="Employment Equality"
              description="Search and Post about LGBTQ+ friendly job opportunities"
              link="/employment-equality"
              animationDelay="500"
              darkMode
            />
            <FeatureCard
              title="Support Networks"
              description="Connect, Access Mentorship programs. Explore career growth resources and support network"
              link="/"
              animationDelay="600"
              darkMode
            />
            <FeatureCard
              title="LGBTQ+ Friendly Shopping"
              description="An online marketplace for LGBTQ+ individuals to sell and buy products catering to community interests and themes"
              link="/"
              animationDelay="700"
              darkMode
            />
            <FeatureCard
              title="Activism and Advocacy"
              description="Tools, resources and information to engage in LGBTQ+ activism and advocacy efforts"
              link="/activism-and-advocacy"
              animationDelay="800"
              darkMode
            />
            <FeatureCard
              title="Visibility and Pride Celebration"
              description="Raise awareness, celebrate pride, organize meetups, and provide legal information and resources"
              link="/visibility-and-pride-celebration"
              animationDelay="900"
              darkMode
            />
            <FeatureCard
              title="Health and Wellness"
              description="Easy access to healthcare professionals, directories of LGBTQ+ friendly clinics, therapists, and specialized health resources"
              link="/health-and-wellness"
              animationDelay="1000"
              darkMode
            />
            <FeatureCard
              title="Employment and Career Support"
              description="Provide Mentorship programs, professional resources, networking opportunities, and guidance for LGBTQ+ individuals' career growth"
              link="/career-page"
              animationDelay="1100"
              darkMode
            />
            <FeatureCard
              title="Community Empowerment and Entrepreneurship"
              description="Fosters connections, networking, event organization and resources for building and advancing LGBTQ+ owned businesses"
              link="/community-engagement-and-empowerent"
              animationDelay="1200"
              darkMode
            />
          </div>
        </div>
      </div>
      <div>
      <AboutUs/>
      <Team/>
      </div>
    </div>
  );
}

