import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { getAuth } from "firebase/auth";
const auth = getAuth();
const ErrorPage = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut(auth)
      .then((res) => {})
      .catch((err) => {});
  };
  return (
    <div className="middle-container">
      <div className=" middle-content text-center">
        <h2>You didn't reach the page.</h2>
        <p>Do you want to back home?</p>
        <div className="flex justify-center">
          <svg
            onClick={handleLogOut}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>
        <Link to="/" className="p-2 bg-primary mt-2 inline-block font-medium">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
