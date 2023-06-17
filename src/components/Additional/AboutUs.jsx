import React from 'react'

export default function AboutUs() {
    const darkMode = true;
    const features = [
        {
            title: 'Our Mission',
            description: 'To provide a platform that promotes diversity, inclusivity, and empowerment for the LGBTQ+ community. We aim to create a safe space where individuals can access resources, connect with others, and find support to thrive in all aspects of life.',
            animationDelay: 100,
        }, {
            title: 'Our Vision',
            description: 'To foster a world where LGBTQ+ individuals are celebrated, respected, and provided with equal opportunities. We strive to empower the community by offering educational resources, promoting LGBTQ+ rights and visibility, and creating a strong network of support and advocacy.',
            animationDelay: 200,
        },
    ]
    const values = [
        {
            title: 'Inclusivity',
            description: " We embrace and celebrate the diversity of the LGBTQ+ community, ensuring that everyone's voice is heard and respected.",
            animationDelay: 300,
        }, {
            title: 'Empowerment',
            description: ' We empower individuals by providing access to resources, opportunities, and support networks that enable personal and professional growth.',
            animationDelay: 400,
        }, {
            title: 'Education',
            description: 'We believe in the power of education to promote understanding, empathy, and positive change. We strive to educate and raise awareness about LGBTQ+ issues and history.',
            animationDelay: 500,
        }, {
            title: 'Advocacy',
            description: 'We advocate for LGBTQ+ rights, equality, and social justice, supporting activism efforts and promoting positive change in society.',
            animationDelay: 600,
        }
    ]
    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 py-5">
                <div className="p-8 bg-gray-800 shadow-md rounded-md max-w-3x1">
                    <div className="flex items-center text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500">
                        About Us
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8 overflow-auto max-h-96 max-w-6xl">
                        {features.map((feature) => (
                            <div
                                className={`bg-gray-700 rounded-md shadow-md p-6 transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gray-600 animate-fadeIn`}
                                style={{ animationDelay: feature.animationDelay }}
                                key={feature.title}
                            >
                                <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {feature.title}
                                </h2>
                                <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
                            </div>
                        ))}

                    </div>
                    <br />
                    <div className="flex text-3xl text-white font-extrabold bg-clip-text ">
                        Our values
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8 max-h-96 max-w-6xl">
                        {values.map((feature) => (
                            <div
                                className={`bg-gray-700 rounded-md shadow-md p-6 transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gray-600 animate-fadeIn`}
                                style={{ animationDelay: feature.animationDelay }}
                                key={feature.title}
                            >
                                <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {feature.title}
                                </h2>
                                <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className="h-16 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500"></div>

        </div>
    );
}
