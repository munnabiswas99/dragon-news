import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.init";
export const AuthContecxt = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authData = {
    user,
    setUser,
    createUser
  };
  return <AuthContecxt value={authData}>{children}</AuthContecxt>;
};

export default AuthProvider;
