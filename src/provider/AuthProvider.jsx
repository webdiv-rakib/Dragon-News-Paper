import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);
    // to create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // observer function 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser
    };
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;