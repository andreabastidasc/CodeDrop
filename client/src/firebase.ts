// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-c1dJbsoF8mzV9slVaUVOBqXz4G5ux8s",
    authDomain: "codedrop-3aa17.firebaseapp.com",
    projectId: "codedrop-3aa17",
    storageBucket: "codedrop-3aa17.firebasestorage.app",
    messagingSenderId: "837690848857",
    appId: "1:837690848857:web:680b6d6b7a26a0487e6348",
    measurementId: "G-RJ2L15BZ68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
