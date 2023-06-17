import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="container mx-auto mt-8">
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
          <div className="flex items-center justify-center">
            <img
              className="w-20 h-20 rounded-full mr-4"
              src={user.picture}
              alt={user.name}
            />
            <h2 className="text-2xl font-semibold">{user.name}</h2>
          </div>
          <p className="mt-4 text-gray-600">{user.email}</p>
        </div>
      </div>
    )
  );
};

export default Profile;
