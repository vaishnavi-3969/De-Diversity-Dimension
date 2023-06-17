import firebase from 'firebase/app';
import 'firebase/database';

// Add your Firebase configuration here
const firebaseConfig = {
  // Your Firebase config goes here
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export the Firebase database instance
export const database = firebase.database();
