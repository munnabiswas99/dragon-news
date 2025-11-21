import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContecxt } from "../../provider/AuthProvider";

const Login = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const {login} = use(AuthContecxt);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
        .then(result => {
            // console.log(result.user)
            navigate(`${location.state? location.state : '/'}`)
        })
        .catch(error => {
            // console.log(error.message)
            setErrorMsg(error.message);
        })
    }
  return (
    <div className="flex items-center justify-center p-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center p-5">Login your account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" />
            {errorMsg && <p className="text-error py-2 font-bold">{errorMsg}</p>}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4" type="submit" >Login</button>
            <p className="font-semibold text-gray-600 text-center pt-2">Dont’t Have An Account ? <Link className="text-secondary" to='/auth/signup'>Register</Link></p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
