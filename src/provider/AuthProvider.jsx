import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);
    // 2. to create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // 3. to signout
    const logOut = () => {
        return signOut(auth);
    }

    // 4. to singin
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // 1. observer function 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signInUser
    };
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;