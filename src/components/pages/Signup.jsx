import React from "react";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-10">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-2xl font-semibold text-center p-5">
            Register your account
          </h2>
          <div className="card-body">
            <fieldset className="fieldset">

              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />
              <label className="label">Photo Url</label>
              <input type="text" className="input" placeholder="Photo Url" />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Register</button>
              <p className="font-semibold text-gray-600 text-center pt-2">
                Already Have An Account ?{" "}
                <Link className="text-secondary" to="/auth/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
