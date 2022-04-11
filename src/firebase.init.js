// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJ9WW5GfIOwFyjadr21ZAkwd1ji21GP-0",
    authDomain: "ema-john-with-router-mod-e675e.firebaseapp.com",
    projectId: "ema-john-with-router-mod-e675e",
    storageBucket: "ema-john-with-router-mod-e675e.appspot.com",
    messagingSenderId: "283803718752",
    appId: "1:283803718752:web:3d4d1e93556eaf9cf71f05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth