import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7rdWkhoQDf06YSRmNO2FTXRWYZqtrjeg",
  authDomain: "code-kids-31999.firebaseapp.com",
  projectId: "code-kids-31999",
  storageBucket: "code-kids-31999.appspot.com",
  messagingSenderId: "709059018617",
  appId: "1:709059018617:web:7299a0ca3c502c507939a8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
