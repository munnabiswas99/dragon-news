import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userimg from "../assets/user.png";
import { AuthContecxt } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = use(AuthContecxt);

  const handleLogout = () => {
    logout()
      .then(() => {
        alert("You are logged out!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-between items-center mb-10">
      <div>
        <p className="font-semibold">{user?.email}</p>
      </div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5 items-center">
        <p className="font-semibold text-accent">{user?.displayName}</p>
        <img
          className="w-11 h-11 rounded-full"
          src={`${user ? user.photoURL : userimg}`}
          alt="invalid image url"
        />
        {user ? (
          <button className="btn btn-primary px-10" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
