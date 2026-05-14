import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const authData = {
        user,
        setUser
    };
    return <AuthContext value={authData}>{children}</AuthContext>
};
        
export default AuthProvider;