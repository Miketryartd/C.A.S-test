// Import the functions you need from the SDKs you need
import { initializeApp } from "/firebase/app";
import { getAnalytics } from "/firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfp9nXPEMc46JjzDYma7xgSToRlK8Vdug",
  authDomain: "council-administration-system.firebaseapp.com",
  projectId: "council-administration-system",
  storageBucket: "council-administration-system.firebasestorage.app",
  messagingSenderId: "100914442690",
  appId: "1:100914442690:web:16a8d0c24f624d227e265b",
  measurementId: "G-DMBG8CH0GW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);