// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6oXfsLS8FZYvyiTvqN0V0UbA2axsdKKs",
    authDomain: "travel-agency-c91c9.firebaseapp.com",
    projectId: "travel-agency-c91c9",
    storageBucket: "travel-agency-c91c9.appspot.com",
    messagingSenderId: "865531929246",
    appId: "1:865531929246:web:0935c88ffa3ea09107118f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;