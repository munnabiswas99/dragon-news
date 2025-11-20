import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.init";
export const AuthContecxt = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
    });
    return () => {
        unsubscribe();
    }
  })

  const authData = {
    user,
    setUser,
    createUser
  };
  return <AuthContecxt value={authData}>{children}</AuthContecxt>;
};

export default AuthProvider;
