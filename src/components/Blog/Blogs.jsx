import React from 'react';
import { BlogList } from './BlogForm';
import { Link } from 'react-router-dom';

export default function Blogs() {
    return (
        <div>

            <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 min-h-screen">
                <div className="flex flex-col items-center justify-center p-8">
                    <h2 className="text-4xl font-bold text-white mb-2">Blog Posts</h2>
                    <div className='bg-gray-800 p-8 max-w-x1'>
                        <div className="flex justify-center mb-6">
                            <div className="grid grid-cols-1 gap-4">
                                <Link to='/blogform'>
                                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                        <span>Write a Blog</span>
                                    </button>
                                </Link>
                                <BlogList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
