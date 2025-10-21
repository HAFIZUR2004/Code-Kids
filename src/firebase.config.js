// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7rdWkhoQDf06YSRmNO2FTXRWYZqtrjeg",
  authDomain: "code-kids-31999.firebaseapp.com",
  projectId: "code-kids-31999",
  storageBucket: "code-kids-31999.firebasestorage.app",
  messagingSenderId: "709059018617",
  appId: "1:709059018617:web:7299a0ca3c502c507939a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);