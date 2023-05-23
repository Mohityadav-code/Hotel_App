import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

export default function TopNav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log("auth: ", auth);
  const logout = () => {
    console.log("logout clicked");
    navigate('/login')

  window.localStorage.removeItem("auth");
    // also remove from redux store
    dispatch({
        type: "LOGOUT",
        payload: null,}
    );
  };

  return (
    <div className="flex justify-between bg-stone-600">
      <Link className="p-5 text-lg text-red-400 " to="/">
        Home
      </Link>
      {auth !== null && (
        <>
          <h1 className="p-5 text-lg text-red-500 ">Welcome {JSON.stringify(auth.user.name)} </h1>
          <button className="p-5 text-lg text-red-400 " onClick={logout}>
            Logout
          </button>
        </>
      )}
      {auth === null && (
        <>
          <Link className="p-5 text-lg text-red-400 " to="/login">
            Login
          </Link>
        </>
      )}
    </div>
  );
}
