import AuthContext from "@/context/AuthContext";
import { app } from "@/firebase/firebase.config";
import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const gogglesignin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logout = () => {
    return signOut(auth);
  };
  const updateProfileuser = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user",currentUser)
      setUser(currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        createUser,
        signinUser,
        gogglesignin,
        updateProfileuser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
