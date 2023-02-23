import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const onHandleChange = (event) => {
    setEmail(event.target.value);
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      alert("Pease enter your email for reset your password");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email)
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset password");
    }

 
  };

  return (
    <section>
      <h1 className="text-center text-3xl font-bold mt-10">Forgot Password</h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-7xl mx-auto">
        <div className="md:max-w-[67%] lg:max-w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
            alt="signin-image"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onHandleSubmit}>
            <input
              id="email"
              type="text"
              name="email"
              value={email}
              onChange={onHandleChange}
              placeholder="Email"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex sm:flex-nowrap sm:flex-row flex-col-reverse  flex-wrap justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have a account?
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p className="sm:mb-0 mb-6">
                <Link
                  to="/sign-in"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                >
                  Sign In instead
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Send Reset Password
            </button>
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
