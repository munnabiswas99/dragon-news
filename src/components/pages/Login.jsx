import React from "react";
import { Link } from "react-router";
const Login = () => {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center p-5">Login your account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-gray-600 text-center pt-2">Dont’t Have An Account ? <Link className="text-secondary" to='/auth/signup'>Register</Link></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
