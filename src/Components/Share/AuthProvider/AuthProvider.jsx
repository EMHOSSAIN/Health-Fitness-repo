import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged} from 'firebase/auth'
import app from '../../../Firebase/Firebase.config';


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const[user,setUser] = useState()
    const [loading,setLoading]=useState(true)

    


    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password)
    }

    const googlesignup = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    useEffect( ()=>{
        const Unsubscribe = onAuthStateChanged(auth,currentUsers=>{
          setUser(currentUsers)
          setLoading(false)
        })
        return()=> Unsubscribe()
      } ,[])
   
    const authinfo={
        user,
        createUser,
        login,
        googlesignup

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