import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBvqQRfels56xpHWgmJG0UTA0F-UQ9VTWE',
  authDomain: 'freelance-task-ae04f.firebaseapp.com',
  projectId: 'freelance-task-ae04f',
  storageBucket: 'freelance-task-ae04f.appspot.com',
  messagingSenderId: '548962383502',
  appId: '1:548962383502:web:2a25583b07347d0edebbdf',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

