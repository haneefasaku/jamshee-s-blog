// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jamshee-s-blog.firebaseapp.com",
  projectId: "jamshee-s-blog",
  storageBucket: "jamshee-s-blog.appspot.com",
  messagingSenderId: "761619254068",
  appId: "1:761619254068:web:d692923383d8ec2d59f361"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);