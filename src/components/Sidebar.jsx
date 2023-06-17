import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaCog, FaSignOutAlt, FaUser, FaUserCircle } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';

const Sidebar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <div className="bg-gray-900 h-screen w-16 fixed left-0 top-0 flex flex-col justify-between items-center py-4">
      <div>
        <Link to="/" className="text-white p-2">
          <FaHome size={20} />
        </Link>
        <Link to="/users" className="text-white p-2">
          <FaUsers size={20} />
        </Link>
        <Link to="/settings" className="text-white p-2">
          <FaCog size={20} />
        </Link>
      </div>
      <div>
     {
      isAuthenticated ? (
        <button className='text-white' onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
      ):(
        <button className='text-white' onClick={() => loginWithRedirect()}>Login</button>
      )
     }
      </div>
    </div>
  );
};

export default Sidebar;
