import React from "react";
import { Link } from "react-router-dom";

export default function Form({onSubmit, formTypes, formData }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center w-full h-full"
    >
      {formTypes.includes("name") && (
        <input
          type="text"
          placeholder="Enter Your Name"
          className="w-2/3 h-10 pl-2 my-2 border-2 border-gray-300 rounded-md"
          value={formData.name}
          onChange={(e) => formData.setName(e.target.value)} // basic 
        />
      )}

      {formTypes.includes("email") && (
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-2/3 h-10 pl-2 my-2 border-2 border-gray-300 rounded-md"
          value={formData.email}
          onChange={(e) => formData.setEmail(e.target.value)}
        />
      )}
      {formTypes.includes("password") && (
        <input
          type="password"
          placeholder="Enter Your Password"
          className="w-2/3 h-10 pl-2 my-2 border-2 border-gray-300 rounded-md"
          value={formData.password}
          onChange={(e) => formData.setPassword(e.target.value)}
        />
      )}
      {formTypes.includes("otp") && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            className="w-2/3 h-10 pl-2 my-2 border-2 border-gray-300 rounded-md"
            value={formData.otp}
            onChange={(e) => formData.setOtp(e.target.value)}
          />
          <button className="w-2/3 h-10 my-2 text-white bg-blue-500 rounded-md">
            Submit
          </button>
        </>
      )}
      {formTypes.includes("resetPassword") && (
        <input
          type="password"
          placeholder="Enter New Password"
          className="w-2/3 h-10 pl-2 my-2 border-2 border-gray-300 rounded-md"
          value={formData.resetPassword}
          onChange={(e) => formData.setResetPassword(e.target.value)}
        />
      )}
      {formTypes.includes("resetPassword") && (
        <>
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-2/3 h-10 pl-2 my-2 border-2 border-gray-300 rounded-md"
            value={formData.confirmPassword}
            onChange={(e) => formData.setConfirmPassword(e.target.value)}
          />
          <button className="w-2/3 h-10 my-2 text-white bg-blue-500 rounded-md">
            Reset Password
          </button>
          <Link to={"/login"}>Login Here</Link>
        </>
      )}
      {formTypes.includes("submitButton") && (
        <>
          <button className="w-2/3 h-10 my-2 text-white bg-blue-500 rounded-md">
            Register
          </button>
          <h1 className="p-5 text-lg text-center">
            Already Registered ?{" "}
            <Link className="text-red-600" to={"/login"}>
              Login Here
            </Link>
          </h1>
        </>
      )}
      {formTypes.includes("loginButton") && (
        <>
          <h6 className="text-sm text-start">
            <Link to={"/reset"}>Forgot Password ? </Link>{" "}
          </h6>
          <button className="w-2/3 h-10 my-2 text-white bg-blue-500 rounded-md">
            Login
          </button>
          <h1 className="p-5 text-lg text-center">
            New User ?{" "}
            <Link className="text-red-600" to={"/register"}>
              Register Here
            </Link>
          </h1>
        </>
      )}

      {formTypes.includes("resetButton") && (
        <button className="w-2/3 h-10 my-2 text-white bg-blue-500 rounded-md">
          Reset
        </button>
      )}
    </form>
  );
}
