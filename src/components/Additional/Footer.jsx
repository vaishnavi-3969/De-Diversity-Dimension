import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../assets/darkLogo.gif';

export default function Footer() {
    const menuItems = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/' },
        { name: 'Features', link: '/' },
        { name: 'Contact', link: '/' },
    ];

    return (
        <footer className="bg-gray-800 py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img src={Logo} alt="Logo" className="h-8 w-8" />
                    <p className="text-gray-100">© 2023 De Diversity Dimension. All rights reserved.</p>
                </div>
                <div className="flex flex-col items-center mt-4 md:mt-0">
                    <div className="flex items-center space-x-4 mb-4">
                        <input type="email"
                            placeholder="Subscribe to our newsletter"
                            className="px-4 py-2 bg-gray-700 text-gray-300 focus:outline-none"
                        />
                        <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">Subscribe</button>
                    </div>
                    <div className="flex space-x-6">
                        <a href="/" className="text-gray-300 hover:text-gray-100 transition-all transform hover:rotate-90">
                            <FontAwesomeIcon icon={faFacebook} size='lg' />
                        </a>
                        <a href="/" className="text-gray-300 hover:text-gray-100 transition-all transform hover:rotate-90">
                            <FontAwesomeIcon icon={faTwitter} size='lg' />
                        </a>
                        <a href="/" className="text-gray-300 hover:text-gray-100 transition-all transform hover:rotate-90">
                            <FontAwesomeIcon icon={faInstagram} size='lg' />
                        </a>
                        <a href="/" className="text-gray-300 hover:text-gray-100 transition-all transform hover:rotate-90">
                            <FontAwesomeIcon icon={faLinkedin} size='lg' />
                        </a>
                    </div>
                </div>
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    {menuItems.map((menuItem, index) => (
                        <li key={index}>
                            <a href={menuItem.link} className="text-gray-300 hover:text-gray-100">
                                {menuItem.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
