// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2YK6BUAIefhqatxE5fklCzxRFDyuHeDE",
  authDomain: "hotel-booking-a11.firebaseapp.com",
  projectId: "hotel-booking-a11",
  storageBucket: "hotel-booking-a11.firebasestorage.app",
  messagingSenderId: "196554679914",
  appId: "1:196554679914:web:7b815d5a871641b67b4c13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;