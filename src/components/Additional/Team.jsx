import React from 'react';
import Avatar1 from '../../assets/avatar1.png';
import Avatar2 from '../../assets/avatar2.png';
import Avatar3 from '../../assets/avatar3.png';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Team() {
    const teamMembers = [
        {
            name: 'Vaishnavi Kale',
            position: 'Developer',
            avatar: Avatar1,
            github: 'https://github.com/vaishnavi-3969',
            linkedin: '',
        },
        {
            name: 'Kunal Sharma',
            position: 'Developer',
            avatar: Avatar2,
            github: 'https://github.com/kunal',
            linkedin: 'https://www.linkedin.com/in/vaishnavi-kale-111543204/',
        },
        {
            name: 'Shruti Tambe',
            position: 'Developer',
            avatar: Avatar3,
            github: 'https://github.com/alexjohnson',
            linkedin: 'https://www.linkedin.com/in/alexjohnson',
        },
    ];

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500">
            <div className="p-8 bg-gray-800 shadow-md rounded-md max-w-3x1">
                <div className="container mx-auto">
                    <div className="flex items-center text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500">
                        <h2 >Our Team</h2>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        {teamMembers.map((member, index) => (
                            <div className="bg-gray-800 shadow-md p-6 rounded-lg" key={index}>
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                                <p className="text-gray-400 mb-2">{member.position}</p>
                                <div className="flex justify-center space-x-4">
                                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="w-6 h-6 text-gray-300 hover:text-gray-100 transition-opacity" />
                                    </a>
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn className="w-6 h-6 text-gray-300 hover:text-gray-100 transition-opacity" />

                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
