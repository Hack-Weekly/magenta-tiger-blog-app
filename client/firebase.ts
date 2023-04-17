// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwsj1YVbnIlGQY6WUVy_anhHXEwsPiXrg",
  authDomain: "magenta-tiger-blog-app.firebaseapp.com",
  projectId: "magenta-tiger-blog-app",
  storageBucket: "magenta-tiger-blog-app.appspot.com",
  messagingSenderId: "935576418758",
  appId: "1:935576418758:web:a18261c98671621be29ac7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
