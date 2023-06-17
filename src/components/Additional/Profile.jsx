import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import Confetti from "react-confetti";
import DarkLogo from '../../assets/darkLogo.gif';

const firebaseConfig = {
  apiKey: "AIzaSyB4eurB_mgOyTIs9_70wviE_RPji16NGcs",
  authDomain: "de-diversity-dimension.firebaseapp.com",
  projectId: "de-diversity-dimension",
  storageBucket: "de-diversity-dimension.appspot.com",
  messagingSenderId: "804377955572",
  appId: "1:804377955572:web:7d3298e4c8e5db94a862a1",
  measurementId: "G-0B7642ZPM0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [formData, setFormData] = useState({
    occupation: "",
    gender: "",
    hobbies: "",
    socialMedia: [],
  });
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (isAuthenticated) {
        try {
          const usersCollectionRef = collection(db, "profiles");
          const q = query(usersCollectionRef, where("email", "==", user.email));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const data = querySnapshot.docs[0].data();
            setFormData(data);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [isAuthenticated, user.email]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSocialMediaChange = (index, event) => {
    const { name, value } = event.target;
    setFormData((prevState) => {
      const updatedSocialMedia = [...prevState.socialMedia];
      updatedSocialMedia[index] = value;
      return {
        ...prevState,
        socialMedia: updatedSocialMedia,
      };
    });
  };

  const addSocialMediaField = () => {
    setFormData((prevState) => ({
      ...prevState,
      socialMedia: [...prevState.socialMedia, ""],
    }));
  };

  const removeSocialMediaField = (index) => {
    setFormData((prevState) => {
      const updatedSocialMedia = [...prevState.socialMedia];
      updatedSocialMedia.splice(index, 1);
      return {
        ...prevState,
        socialMedia: updatedSocialMedia,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userDocRef = doc(db, "profiles", user.email);

      if (isUpdated) {
        await updateDoc(userDocRef, formData);
        window.alert("Profile Updated Successfully!");
      } else {
        await setDoc(userDocRef, formData);
        window.alert("Profile Created Successfully");
      }
      setIsUpdated(true);
    } catch (error) {
      console.error("Error updating/creating user data:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500">
        <div className="p-8 bg-gray-800 shadow-md rounded-md max-w-3x1 text-white flex">
          <div>
            <img src={DarkLogo} alt="Logo" className="w-100 h-100" />
          </div>
          <div className="ml-4">


            <div className="flex items-center justify-center">
              <img
                className="w-50 h-20 rounded-full mr-4"
                src={user.picture}
                alt={user.name}
              />
              <h2 className="text-2xl font-semibold">{user.name}</h2>
            </div>
            <p className="mt-4 text-gray-100">{user.email}</p>
            <form onSubmit={handleSubmit} className="mt-4" >
              <div className="mb-4">
                <label
                  htmlFor="occupation"
                  className="block text-gray-100 font-bold"
                >
                  Occupation:
                </label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="mt-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="gender" className="block text-gray-100 font-bold">
                  Gender:
                </label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="hobbies" className="block text-gray-100 font-bold">
                  Hobbies:
                </label>
                <input
                  type="text"
                  id="hobbies"
                  name="hobbies"
                  value={formData.hobbies}
                  onChange={handleChange}
                  className="mt-1 px-4 py-2  text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="socialMedia"
                  className="block text-gray-100 font-bold"
                >
                  Social Media:
                </label>
                {formData.socialMedia.map((socialMediaLink, index) => (
                  <div key={index} className="flex mb-2">
                    <input
                      type="text"
                      id={`socialMedia-${index}`}
                      name={`socialMedia-${index}`}
                      value={socialMediaLink}
                      onChange={(event) => handleSocialMediaChange(index, event)}
                      className="mt-1 px-4 py-2  text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => removeSocialMediaField(index)}
                      className="ml-2 py-2 px-4 text-gray-700  bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addSocialMediaField}
                  className="py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                >
                  Add Social Media
                </button>
              </div>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Save
              </button>
            </form>
            {isUpdated && <Confetti />}
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
