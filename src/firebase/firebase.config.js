// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBj4hHJjHfAXUzipxyCbZ1kx-jcjHGbS0",
    authDomain: "user-email-password-auth-b8ead.firebaseapp.com",
    projectId: "user-email-password-auth-b8ead",
    storageBucket: "user-email-password-auth-b8ead.appspot.com",
    messagingSenderId: "419633231816",
    appId: "1:419633231816:web:757b2e18d34b36f892f2fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;