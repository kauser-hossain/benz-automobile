import AuthContext from "@/context/AuthContext";
import { app } from "@/firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // Email/Password দিয়ে ইউজার তৈরি করা
  const createuser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Email/Password দিয়ে সাইন ইন
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google সাইন ইন
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    // Firebase এর Auth State লিসেনার
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
    
      

      if (currentUser) {
        try {
          const response = await fetch(
            "http://localhost:5000/api/createuserRouter",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name:currentUser.name ||"no name",
                email: currentUser.email,
              }),
            }
          );
          // console.log(response,"resposseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
          

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              `HTTP error! status: ${response.status}, message: ${
                errorData.message || "No message"
              }`
            );
          }

          const data = await response.json();
          localStorage.setItem("access-token", data.token);
          
         
        } catch (error) {
          console.error("Backend user save failed:", error);
        }
      }
    });
  

    // ক্লিনআপ: লিসেনার আনসাবস্ক্রাইব করা
    return () => unsubscribe();
  }, []);

  const authinfo = {
    user,
    setUser,
    loading,
    setLoading,
    createuser,
    signin,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
