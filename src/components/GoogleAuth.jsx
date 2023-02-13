import React from "react";
import { FcGoogle } from "react-icons/fc";
const GoogleAuth = ({ buttonText }) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 capitalize text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
    >
      <FcGoogle className="sm:text-2xl text-xl  bg-white rounded-full mr-2" />
      {buttonText}
    </button>
  );
};

export default GoogleAuth;
