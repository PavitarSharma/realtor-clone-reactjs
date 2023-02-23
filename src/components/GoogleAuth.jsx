import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../firebase";
const GoogleAuth = ({ buttonText }) => {
  const navigate = useNavigate()
  const googleAuthHandler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      const user = res.user;


      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/")
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  };
  return (
    <button
      onClick={googleAuthHandler}
      type="button"
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 capitalize text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
    >
      <FcGoogle className="sm:text-2xl text-xl  bg-white rounded-full mr-2" />
      {buttonText}
    </button>
  );
};

export default GoogleAuth;
