import React, { useState, useEffect } from 'react';
import { auth } from '../firebase.init'; 
import { updateProfile } from 'firebase/auth';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({ name: '', photoURL: '', email: '' });
  const [newName, setNewName] = useState('');
  const [newPhotoURL, setNewPhotoURL] = useState('');
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (auth.currentUser) {
      setUserInfo({
        name: auth.currentUser.displayName || '',
        photoURL: auth.currentUser.photoURL || '',
        email: auth.currentUser.email,
      });
    }
  }, []);

  const handleSaveChanges = async () => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: newName || userInfo.name,
        photoURL: newPhotoURL || userInfo.photoURL,
      });

      setUserInfo({
        name: newName || userInfo.name,
        photoURL: newPhotoURL || userInfo.photoURL,
        email: auth.currentUser.email,
      });

      setNewPhotoURL('');
      setNewName('');
      setError('');
    } catch (err) {
      setError('Failed to update profile.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-600 text-white p-6">
      <div className="bg-white text-black p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4">My Profile</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {uploading && <p className="text-center text-blue-500">Uploading...</p>}

        <div className="space-y-4">
          <div className="flex justify-center">
            <img
              src={userInfo.photoURL || 'https://www.gravatar.com/avatar/'}
              alt={userInfo.name}
              className="w-20 h-20 rounded-full"
            />
          </div>
          <p className="text-center text-lg">Name: {userInfo.name}</p>
          <p className="text-center text-lg">Email: {userInfo.email}</p>

          <div>
            <input
              type="text"
              placeholder="New Name"
              className="w-full p-2 border rounded mb-2"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input
              type="text"
              placeholder="New Photo URL"
              className="w-full p-2 border rounded mb-4"
              value={newPhotoURL}
              onChange={(e) => setNewPhotoURL(e.target.value)}
            />
            <button
              onClick={handleSaveChanges}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

