import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";
export const AuthContecxt = createContext();

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user);
const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  }
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubAuthProvider);
  }

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo)
  }

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logout = () => {
    return signOut(auth);
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoading(false);
    });
    return () => {
        unsubscribe();
    }
  })

  const authData = {
    user,
    setUser,
    createUser,
    login,
    logout,
    loading,
    setLoading,
    updateUser,
    googleSignIn,
    githubSignIn,
    resetPassword
  };
  return <AuthContecxt value={authData}>{children}</AuthContecxt>;
};

export default AuthProvider;
