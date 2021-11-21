import React from "react";
import useAuth from "./../../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <h2 className="text-secondary py-2 my-2">Please Login</h2>
      <button
        onClick={signInUsingGoogle}
        className="btn btn-warning my-2 py-2 text-white"
      >
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
