import React, { createContext, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../../../Firebase/Firebase.config';


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const[user,setUser] = useState()
    const [loading,setLoading]=useState(false)


    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const login = (email,password)=>{
        return signInWithEmailAndPassword (auth, email, password)
    }
   
    const authinfo={
        user,
        createUser,
        login

    }
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;