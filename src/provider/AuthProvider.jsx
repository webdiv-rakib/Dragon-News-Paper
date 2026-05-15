import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authData = {
        user,
        setUser,
        createUser
    };
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;