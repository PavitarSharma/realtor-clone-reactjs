// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNV6F8JIlnQ8KuGrexKab8Oq2TZqxdKWE",
  authDomain: "realtor-clone-f9f07.firebaseapp.com",
  projectId: "realtor-clone-f9f07",
  storageBucket: "realtor-clone-f9f07.appspot.com",
  messagingSenderId: "870594415209",
  appId: "1:870594415209:web:3b6f43b9c478e59c6070f8",
  measurementId: "G-RF33L9XZ7C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export {auth, db}


// export const db = getFireStore()
