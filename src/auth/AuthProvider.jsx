import React, { createContext, useEffect, useState } from "react";
import { app } from "./firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // sign in with google
  const singInWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}

  // register user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // existing login
  const userLogin = () => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios.post("http://localhost:9988/api/users", {
          email: currentUser.email,
        });
      }else{
        setLoading(false)
      }
    });
    return () =>{
        unsubscribe();
    }
  }, []);
//   logout
const logOut = () =>{
    return signOut(auth)
}
// send data
const authInfo = {
    user,
    loading, 
    singInWithGoogle, 
    createUser,
    logOut,
    userLogin
}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
  
};

export default AuthProvider;
