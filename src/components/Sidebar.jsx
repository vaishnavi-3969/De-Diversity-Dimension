import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaCog, FaSignOutAlt, FaUser, FaUserCircle, FaSignInAlt, FaBlog, FaBook, FaEquals, FaNotesMedical, FaFileMedicalAlt, FaShoppingBasket } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Additional/Profile';

const Sidebar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const iconColors = {
    home: '#FF5F6D',
    users: '#FFC371',
    blog: '#FFB7B2',
    book: '#FFD76E',
    equals: '#EAD2AC',
    notesMedical: '#9ED2F6',
    fileMedicalAlt: '#9ED2F6',
    shoppingBasket: '#CB99C9',
    cog: '#6B5B95',
  };

  const handleIconHover = (event, color) => {
    event.target.style.backgroundColor = color;
  };

  const handleIconLeave = (event) => {
    event.target.style.backgroundColor = 'transparent';
  };

  return (
    <div className="bg-gray-900 h-screen w-16 fixed left-0 top-0 flex flex-col justify-between items-center py-4">
      <div>
        <div className="hover:scale-125">
          <Link to="/" className="text-white p-2">
            <FaHome size={30} />
          </Link>
        </div>
        <hr />
        <div>
          <Link to="/safe-spaces-and-community" className="text-white p-2">
            <div
              className="hover:scale-125"
              onMouseEnter={(e) => handleIconHover(e, iconColors.users)}
              onMouseLeave={handleIconLeave}
            >
              <FaUsers size={30} />
            </div>
          </Link>

          <Link to="/blogList" className="text-white p-2">
            <div
              className="hover:scale-125"
              onMouseEnter={(e) => handleIconHover(e, iconColors.blog)}
              onMouseLeave={handleIconLeave}
            >
              <FaBlog size={30} />
            </div>
          </Link>

          <Link to="/inclusivity-education" className="text-white p-2">
            <div
              className="hover:scale-125"
              onMouseEnter={(e) => handleIconHover(e, iconColors.book)}
              onMouseLeave={handleIconLeave}
            >
              <FaBook size={30} />
            </div>
          </Link>

          <Link to="/activism-and-advocacy" className="text-white p-2">
            <div
              className="hover:scale-125"
              onMouseEnter={(e) => handleIconHover(e, iconColors.equals)}
              onMouseLeave={handleIconLeave}
            >
              <FaEquals size={30} />
            </div>
          </Link>

          <Link to="/health-and-wellness" className="text-white p-2">
            <div
              className="hover:scale-125"
              onMouseEnter={(e) => handleIconHover(e, iconColors.notesMedical)}
              onMouseLeave={handleIconLeave}
            >
              <FaNotesMedical size={30} />
            </div>
          </Link>

          <Link to="/mental-health" className="text-white p-2">
            <div
              className="hover:scale-125"
              onMouseEnter={(e) => handleIconHover(e, iconColors.fileMedicalAlt)}
              onMouseLeave={handleIconLeave}
            >
              <FaFileMedicalAlt size={30} />
            </div>
          </Link>

          <Link to="/shopping" className="text-white p-2">
            <div
              className="hover:scale-125"
              onMouseEnter={(e) => handleIconHover(e, iconColors.shoppingBasket)}
              onMouseLeave={handleIconLeave}
            >
              <FaShoppingBasket size={30} />
            </div>
          </Link>

        </div>
        <hr />
        <Link to="/settings" className="text-white p-2">
          <div
            className="hover:scale-125"
            onMouseEnter={(e) => handleIconHover(e, iconColors.cog)}
            onMouseLeave={handleIconLeave}
          >
            <FaCog size={30} />
          </div>
        </Link>
      </div>
      <div>
        {isAuthenticated ? (
          <div>
            <div className="grid col-1 items-center text-white">
              <Link to="/Profile">
                <button>
                  <FaUserCircle size={50} />
                </button>
              </Link>
            </div>
            <br />
            <button
              className="text-gray-300"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              <FaSignOutAlt size={30} />
            </button>
          </div>
        ) : (
          <button
            className="text-white"
            onClick={() => loginWithRedirect()}
          >
            <FaUser size={30} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
