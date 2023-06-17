import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaCog, FaSignOutAlt, FaUser, FaUserCircle, FaSignInAlt } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Additional/Profile';

const Sidebar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <div className="bg-gray-900 h-screen w-16 fixed left-0 top-0 flex flex-col justify-between items-center py-4">
      <div>
        <div className='hover:scale-125'>
          <Link to="/" className="text-white p-2">
            <FaHome size={20} />
          </Link>
        </div>
        <Link to="/users" className="text-white p-2">
          <div className='hover:scale-125'>
            <FaUsers size={20} />
          </div>
        </Link>
        <Link to="/settings" className="text-white p-2">
          <div className='hover:scale-125'>
            <FaCog size={20} />
          </div>
        </Link>
      </div>
      <div>
        {
          isAuthenticated ? (
            <div>
              <div className='grid col-1 items-center text-white'>
                <Link to="/Profile">
                  <button>
                    <FaUserCircle size={50} />
                  </button>
                </Link>
              </div>
              <br />
              <button className='text-gray-300' onClick={() => logout({ returnTo: window.location.origin })}><FaSignOutAlt size={30} /></button>
            </div>
          ) : (
            <button className='text-white' onClick={() => loginWithRedirect()}><FaUser size={30} /></button>
          )
        }
      </div>
    </div>
  );
};

export default Sidebar;
