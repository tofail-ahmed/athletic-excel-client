import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);
      const googleProvider = new GoogleAuthProvider();

      const createUser = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
      }

      const signIn = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      }

      const googleSignIn = () => {
            setLoading(true)
            return signInWithPopup(auth, googleProvider)
      }


      const updateUserProfile = (name, photo) => {
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo
            })
      }


      const logOut = () => {
            setLoading(true)
            return signOut(auth)
      }

      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser)
                  setLoading(false)
            })
            return () => {
                  return unsubscribe
            }
      }, [])

console.log(user);
      const authInfo = {
            user,
            loading,
            createUser,
            signIn,
            logOut,
            updateUserProfile,
            googleSignIn,


      }
      return (
            <AuthContext.Provider value={authInfo} >
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;