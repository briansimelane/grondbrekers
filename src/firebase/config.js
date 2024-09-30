// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwm-xm9QdG84B1e94RCj6hsVl1tUkGuRw",
  authDomain: "grondbrekers.firebaseapp.com",
  projectId: "grondbrekers",
  storageBucket: "grondbrekers.appspot.com",
  messagingSenderId: "75039037559",
  appId: "1:75039037559:web:b68d074ee24587f057ce72"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp;